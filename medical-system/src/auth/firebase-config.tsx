import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
//   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBKHKqvIcA_8e7JKZiIoXXQZ8nA778d_Lc",
  authDomain: "medical-system-f7f71.firebaseapp.com",
  projectId: "medical-system-f7f71",
  storageBucket: "medical-system-f7f71.appspot.com",
  messagingSenderId: "1061555950449",
  appId: "1:1061555950449:web:f91551c6f55cc96624dcd0",
  measurementId: "G-57FXCPTKHN",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
