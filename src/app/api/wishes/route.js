import { db } from "@/config/firebase.config";
import WedEnv from "@/config/wedenv.config";
import { utcTime } from "@/utils/date.util";
// import { apiLimiter } from "@/utils/rate-limiter.util";
import { addDoc, collection, onSnapshot, Timestamp } from "firebase/firestore";

export async function POST(req) {
  // const ip = req.headers.get("x-forwarded-for") || req.ip;
  // const { success } = await apiLimiter.limit(ip);

  // if (!success) {
  //   return new Response("Too Many Requests", { status: 429 });
  // }

  const { sender, message } = await req.json();
  const docRef = await addDoc(collection(db, WedEnv.WISHES_COLLECTION_NAME), {
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
        const wishesCollection = collection(db, WedEnv.WISHES_COLLECTION_NAME);
        const unsubscribe = onSnapshot(wishesCollection, snapshot => {
          snapshot.docChanges().forEach(change => {
            if (change.type === "added") {
              const data = {
                id: change.doc.id,
                ...change.doc.data
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
