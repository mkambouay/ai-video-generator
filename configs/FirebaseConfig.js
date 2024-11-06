// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: "ai-video-generator-9d56e.firebaseapp.com",
	projectId: "ai-video-generator-9d56e",
	storageBucket: "ai-video-generator-9d56e.firebasestorage.app",
	messagingSenderId: "752647184469",
	appId: "1:752647184469:web:9df244cb2c3a283803b4dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
