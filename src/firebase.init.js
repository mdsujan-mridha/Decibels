// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM_8ubPWYZVE01bJSpvxVfZMiqBSfEgL0",
  authDomain: "decibels-9e3b1.firebaseapp.com",
  projectId: "decibels-9e3b1",
  storageBucket: "decibels-9e3b1.appspot.com",
  messagingSenderId: "961234011346",
  appId: "1:961234011346:web:451ffd59f62eb52891d90b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;