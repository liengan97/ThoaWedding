import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import WedEnv from "./wedenv.config";

const firebaseConfig = {
  apiKey: WedEnv.FIREBASE_API_KEY,
  authDomain: WedEnv.FIREBASE_AUTH_DOMAIN,
  projectId: WedEnv.FIREBASE_PROJECT_ID,
  storageBucket: WedEnv.FIREBASE_STORAGE_BICKET,
  messagingSenderId: WedEnv.FIREBASE_MESSAGING_SENDR_ID,
  appId: WedEnv.FIREBASE_APP_ID,
  measurementId: WedEnv.FIREBASE_MEASUREMENT_ID
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
