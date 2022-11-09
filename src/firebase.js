import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgypJmJkycxeryGWBawzakxfJXcwd3tjI",
  authDomain: "cheemstagram.firebaseapp.com",
  projectId: "cheemstagram",
  storageBucket: "cheemstagram.appspot.com",
  messagingSenderId: "427895683510",
  appId: "1:427895683510:web:ad1d4418a7e960ead66917",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
