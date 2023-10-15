import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: `${process.env.REACT_APP_API_KEY}`,
//   authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
//   projectId: `${process.env.REACT_APP_PROJECT_ID}`,
//   storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
//   messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
//   appId: `${process.env.REACT_APP_APP_ID}`,
// };

const firebaseConfig = {
  apiKey: "AIzaSyChqYK4me1ARMLzmMxNqCpenKegcYceMOw",
  authDomain: "portfolio-blogs-e54ce.firebaseapp.com",
  projectId: "portfolio-blogs-e54ce",
  storageBucket: "portfolio-blogs-e54ce.appspot.com",
  messagingSenderId: "317761862729",
  appId: "1:317761862729:web:2091d3df68618a66705398",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const blogsCollection = collection(db, "blogs");
export const projectsCollection = collection(db, "projects");

export const auth = getAuth();
