// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA1rR06_aTNlnyPTn8PpTa_RwVXtLepRnc",
  authDomain: "chat-36271.firebaseapp.com",
  projectId: "chat-36271",
  storageBucket: "chat-36271.appspot.com",
  messagingSenderId: "508195426573",
  appId: "1:508195426573:web:7934a6d922afee19fee044",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
