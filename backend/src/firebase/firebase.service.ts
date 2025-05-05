import { Injectable } from "@nestjs/common";
import { db } from "./firebase.config";
import { collection, query, orderBy, onSnapshot, addDoc } from "firebase/firestore";

@Injectable()
export class FirebaseService {
  listenForMessages(callback: (messages: any[]) => void) {
    const messagesRef = collection(db, "wishes");
    const q = query(messagesRef, orderBy("createdAt"));

    onSnapshot(q, (snapshot) => {
      const messages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      messages.forEach((msg: any) => {
        msg.createdAt = new Date(msg.createdAt.seconds * 1000).toISOString();
      });
      callback(messages);
    });
  }

  async sendMessage(sender: string, message: string) {
    await addDoc(collection(db, "wishes"), { sender, message, createdAt: new Date() });
    return { success: true };
  }
}
