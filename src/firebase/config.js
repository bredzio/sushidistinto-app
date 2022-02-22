// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_SKQJtroYUnB-hriiE8omIRwE8SkeDEk",
  authDomain: "sushi-distinto.firebaseapp.com",
  projectId: "sushi-distinto",
  storageBucket: "sushi-distinto.appspot.com",
  messagingSenderId: "153209857854",
  appId: "1:153209857854:web:5a6bf871b8df3529492e6f",
  measurementId: "G-B65QXEKXD0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)