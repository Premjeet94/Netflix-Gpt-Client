// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA3f6W9nADbkyvSmBN8NezAhUkxN_gMVg",
  authDomain: "netflix-gpt-c71cb.firebaseapp.com",
  projectId: "netflix-gpt-c71cb",
  storageBucket: "netflix-gpt-c71cb.firebasestorage.app",
  messagingSenderId: "1091176400192",
  appId: "1:1091176400192:web:7e62fbbf56c5760e7826a5",
  measurementId: "G-MJMJJYSHKZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth();
