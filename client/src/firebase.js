// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-5314b.firebaseapp.com",
  projectId: "mern-auth-5314b",
  storageBucket: "mern-auth-5314b.appspot.com",
  messagingSenderId: "365394604889",
  appId: "1:365394604889:web:c5a907fbb6301c66f0d248"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);