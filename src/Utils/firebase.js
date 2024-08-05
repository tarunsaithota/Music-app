// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "music-app-5b96b.firebaseapp.com",
  projectId: "music-app-5b96b",
  storageBucket: "music-app-5b96b.appspot.com",
  messagingSenderId: "149882341158",
  appId: "1:149882341158:web:d7af6fcebedb16a0eae3e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth();