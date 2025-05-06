import { db } from "@/config/firebase.config";
import WedEnv from "@/config/wedenv.config";
import { utcTime } from "@/utils/date.util";
import basicRateLimiter from "@/utils/rate-limiter.util";
import { addDoc, collection, onSnapshot } from "firebase/firestore";

export async function POST(req, res) {
  await basicRateLimiter(res);
  const { sender, message } = await req.json();
  const docRef = await addDoc(collection(db, WedEnv.WISHES_COLLECTION_NAME), { sender, message, atUtc: utcTime() });
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
          const wishes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          controller.enqueue(`data: ${JSON.stringify(wishes)}\n\n`);
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
