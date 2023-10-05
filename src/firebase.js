import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChqYK4me1ARMLzmMxNqCpenKegcYceMOw", //need to save in environment varaible
  authDomain: "portfolio-blogs-e54ce.firebaseapp.com",
  projectId: "portfolio-blogs-e54ce",
  storageBucket: "portfolio-blogs-e54ce.appspot.com",
  messagingSenderId: "317761862729",
  appId: "1:317761862729:web:2091d3df68618a66705398",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const blogsCollection = collection(db, "blogs");

export const auth = getAuth();
