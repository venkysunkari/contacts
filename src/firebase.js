import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBipSW91TyCktTMclg9FC6T4B9MXl8iINk",
    authDomain: "contact-6b7e4.firebaseapp.com",
    projectId: "contact-6b7e4",
    storageBucket: "contact-6b7e4.appspot.com",
    messagingSenderId: "693566697335",
    appId: "1:693566697335:web:7aca21d9a5d0ec39a03b72",
    measurementId: "G-CE2K7PHV4V"
  };
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
