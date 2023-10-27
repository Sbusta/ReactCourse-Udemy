// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtLmbCkWOlwEa6sJFUH4PBWb_SnqUfbcA",
  authDomain: "react-curso-92aff.firebaseapp.com",
  projectId: "react-curso-92aff",
  storageBucket: "react-curso-92aff.appspot.com",
  messagingSenderId: "187359404589",
  appId: "1:187359404589:web:0299f51ef62def24dacea4"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);