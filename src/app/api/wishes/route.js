import { firestore } from "@/config/firebase.config";
import WedEnv from "@/config/wedenv.config";
import { utcTime } from "@/utils/date.util";
import limitter from "@/utils/rate-limiter.util";
import { addDoc, collection, getDocs, Timestamp } from "firebase/firestore";
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

export async function GET() {
  const querySnapshot = await getDocs(collection(db, process.env.WISHES_COLLECTION_NAME));
  const wishes = await querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return Response.json(wishes);
}
