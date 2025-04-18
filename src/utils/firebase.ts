// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvq3708SIL72csqHVmYD9qVjQ_13rL8_Q",
  authDomain: "coach-platform-c8573.firebaseapp.com",
  projectId: "coach-platform-c8573",
  storageBucket: "coach-platform-c8573.firebasestorage.app",
  messagingSenderId: "885700106044",
  appId: "1:885700106044:web:9b2c7368eba5dec78af039"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);