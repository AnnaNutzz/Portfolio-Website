import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAAYKN-Hv3feEOFKbt_UmzB-5oKwSZdGGM",
    authDomain: "portfolio-6f331.firebaseapp.com",
    projectId: "portfolio-6f331",
    storageBucket: "portfolio-6f331.firebasestorage.app",
    messagingSenderId: "1052990881930",
    appId: "1:1052990881930:web:6d6430d9bcb3b07ed0ad73"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
