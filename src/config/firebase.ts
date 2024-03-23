// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2-UbaOviJpVHpE7JKRtz_j-mTejBZIK4",
  authDomain: "baseline-mobile.firebaseapp.com",
  projectId: "baseline-mobile",
  storageBucket: "baseline-mobile.appspot.com",
  messagingSenderId: "1084317329407",
  appId: "1:1084317329407:web:e7a580f00a41ad708ca9ca",
  measurementId: "G-VRS4PR83EY"
};

// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);
export const firebase_auth = getAuth(firebase_app);
export const firebase_firestore = getFirestore(firebase_app);

const analytics = getAnalytics(firebase_app);