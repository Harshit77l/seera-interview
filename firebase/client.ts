import { initializeApp , getApp , getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0OnxbNv5uPbIZnWVbVRb_h-pNm4WFYug",
  authDomain: "seera-5a44b.firebaseapp.com",
  projectId: "seera-5a44b",
  storageBucket: "seera-5a44b.firebasestorage.app",
  messagingSenderId: "71560236361",
  appId: "1:71560236361:web:734bfd6f4cf39844bede98",
  measurementId: "G-B9FN4F2X22"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);