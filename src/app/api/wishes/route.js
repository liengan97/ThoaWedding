import { firestore } from "@/config/firebase.config";
import WedEnv from "@/config/wedenv.config";
import { utcTime } from "@/utils/date.util";
import limitter from "@/utils/rate-limiter.util";
import { addDoc, collection, onSnapshot, Timestamp } from "firebase/firestore";
import { headers } from "next/headers";

export async function POST(req) {
  const reqHeaders = headers();
  const ip = reqHeaders.get('x-forwarded-for');

  const reqCount = limitter.get(ip) || 0;

  if (reqCount >= 3) {
    return Response.json({ error: "Rate limit exceeded" }, { status: 429 });
  }

  limitter.set(ip, reqCount + 1);

  const { sender, message } = await req.json();
  await addDoc(collection(firestore, WedEnv.REQUEST_LOGS_COLLECTION_NAME), {
    wish: { sender, message },
    metadata: {
      ip,
      origin: reqHeaders.get(['origin']),
      referer: reqHeaders.get(['referer']),
      cookie: reqHeaders.get(['cookie']),
      userAgent: reqHeaders.get(['user-agent']),
    },
    ts: Timestamp.now()
  });
  const docRef = await addDoc(collection(firestore, WedEnv.WISHES_COLLECTION_NAME), {
    sender,
    message,
    atUtc: utcTime(),
    ts: Timestamp.now()
  });

  return Response.json({ id: docRef.id });
}

export async function GET(req) {
  const headers = new Headers({
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
  });

  return new Response(
    new ReadableStream({
      start(controller) {
        const wishesCollection = collection(firestore, WedEnv.WISHES_COLLECTION_NAME);
        const unsubscribe = onSnapshot(wishesCollection, snapshot => {
          snapshot.docChanges().forEach(change => {
            if (change.type === "added") {
              const data = {
                id: change.doc.id,
                ...change.doc.data()
              }
              controller.enqueue(`data: ${JSON.stringify(data)}\n\n`);
            }
          });
        });

        req.signal.addEventListener("abort", () => {
          unsubscribe();
          controller.close();
        });

        return () => unsubscribe();
      },
    }),
    { headers }
  );
}
