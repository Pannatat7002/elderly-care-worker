// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_N1Z4xFAsXvR88Zp36VQ-HkNbZ9bctVs",
  authDomain: "njy-follow-app-6580f.firebaseapp.com",
  databaseURL: "https://njy-follow-app-6580f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "njy-follow-app-6580f",
  storageBucket: "njy-follow-app-6580f.appspot.com",
  messagingSenderId: "87185600793",
  appId: "1:87185600793:web:db2e6ac8311920bfa75588",
  measurementId: "G-H2HTNKLYXH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const config = firebaseConfig
export const auth = getAuth();
const analytics = getAnalytics(app);
