import { db } from "@/config/firebase.config";
import { collection, onSnapshot } from "firebase/firestore";

export async function GET(req) {
  const headers = new Headers({
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
  });

  return new Response(
    new ReadableStream({
      start(controller) {
        const wishesCollection = collection(db, "wishes");

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
