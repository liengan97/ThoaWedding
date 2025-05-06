import { db } from "@/config/firebase.config";
import { addDoc, collection } from "firebase/firestore";

export async function POST(req) {
  const { sender, message } = await req.json();
  const docRef = await addDoc(collection(db, "wishes"), { sender, message, atUtc: new Date().toISOString() });
  return Response.json({ id: docRef.id });
}
