import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLVf8hjj0RgTSL-k_ah-CBzTEiKPJvAps",
  authDomain: "motoko-d8d4d.firebaseapp.com",
  projectId: "motoko-d8d4d",
  storageBucket: "motoko-d8d4d.appspot.com",
  messagingSenderId: "546654410377",
  appId: "1:546654410377:web:567a1e3c1b898dea27d858"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;