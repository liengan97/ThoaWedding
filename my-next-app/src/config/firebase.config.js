import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyApuFhmZYREtSixKhcsvPzyrZqJeAEJcpM",
    authDomain: "tn-wedding-1f2c1.firebaseapp.com",
    projectId: "tn-wedding-1f2c1",
    storageBucket: "tn-wedding-1f2c1.firebasestorage.app",
    messagingSenderId: "245672559534",
    appId: "1:245672559534:web:3f3fb15148428468e97e3f",
    measurementId: "G-QM620LCEZV"
};


const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
