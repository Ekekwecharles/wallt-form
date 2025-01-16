import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyuHO1Z8zrYkKGZgHVrWMVqTULYpaFYws",
  authDomain: "form-47916.firebaseapp.com",
  projectId: "form-47916",
  storageBucket: "form-47916.firebasestorage.app",
  messagingSenderId: "731343018258",
  appId: "1:731343018258:web:99a5bdeb2537c8309cfbcb",
  measurementId: "G-HJNS09X0E7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firestore = getFirestore(app);
