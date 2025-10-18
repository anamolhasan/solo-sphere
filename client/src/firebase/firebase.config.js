// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAuSVctyww_vhkrODANCslzT-gfj5VV7o",
  authDomain: "solo-shop-ea692.firebaseapp.com",
  projectId: "solo-shop-ea692",
  storageBucket: "solo-shop-ea692.firebasestorage.app",
  messagingSenderId: "130785574925",
  appId: "1:130785574925:web:db35f5a2d310a288645544"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);