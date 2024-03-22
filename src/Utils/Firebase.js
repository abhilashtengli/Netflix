// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtGj0tQHMtzdJVxxV6Wlyhfoyb-FyPlYA",
  authDomain: "netflix-b6c35.firebaseapp.com",
  projectId: "netflix-b6c35",
  storageBucket: "netflix-b6c35.appspot.com",
  messagingSenderId: "364195900613",
  appId: "1:364195900613:web:0dde79b3aefec3059b54ac",
  measurementId: "G-D4X6S623LG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
