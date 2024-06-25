// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-afdc2.firebaseapp.com",
  projectId: "mern-estate-afdc2",
  storageBucket: "mern-estate-afdc2.appspot.com",
  messagingSenderId: "74085494982",
  appId: "1:74085494982:web:8aceb2153cf86c2707e7c7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);