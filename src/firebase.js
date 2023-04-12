import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDF5IOMMVdtjt3HSgxGzpf6RGGOLL6jafI",
  authDomain: "react-portfolio-f3c7c.firebaseapp.com",
  projectId: "react-portfolio-f3c7c",
  storageBucket: "react-portfolio-f3c7c.appspot.com",
  messagingSenderId: "627680321474",
  appId: "1:627680321474:web:6bed8f9983356998f6c05b",
  measurementId: "G-PJVSTGJ922"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore();
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);

