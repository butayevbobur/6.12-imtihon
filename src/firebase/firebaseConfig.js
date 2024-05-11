// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUDXvdg4lNJtiwheAfE95iyicoQOtjfY4",
  authDomain: "mymarket-ef4a6.firebaseapp.com",
  projectId: "mymarket-ef4a6",
  storageBucket: "mymarket-ef4a6.appspot.com",
  messagingSenderId: "908627597211",
  appId: "1:908627597211:web:5193d0625f408cad78333e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
