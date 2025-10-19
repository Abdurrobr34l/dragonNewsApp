// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDMAorRBL8dp8dHZGohqJPLU9SsNaX4UY",
  authDomain: "dragon-news-auth-c17d6.firebaseapp.com",
  projectId: "dragon-news-auth-c17d6",
  storageBucket: "dragon-news-auth-c17d6.firebasestorage.app",
  messagingSenderId: "169164501391",
  appId: "1:169164501391:web:610ed4af60dc4823569bfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;