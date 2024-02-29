// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFPMZ7Fl21to-qA-y1u-y7cBT-sOKDr5Q",
  authDomain: "hbwwb-d82fc.firebaseapp.com",
  databaseURL: "https://hbwwb-d82fc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hbwwb-d82fc",
  storageBucket: "hbwwb-d82fc.appspot.com",
  messagingSenderId: "294771855400",
  appId: "1:294771855400:web:66f58f1e7df017c963a51d",
  measurementId: "G-G63G58Q9N9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// firestore 객체 생성
const db = getFirestore(app);
// firestore export
export {db}