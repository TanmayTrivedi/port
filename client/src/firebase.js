// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVKPe56Wj97jUmzC_HwB6H5rgGVGOXcXY",
  authDomain: "portfolio-admin-dashboar-e5836.firebaseapp.com",
  projectId: "portfolio-admin-dashboar-e5836",
  storageBucket: "portfolio-admin-dashboar-e5836.firebasestorage.app",
  messagingSenderId: "779168602398",
  appId: "1:779168602398:web:4d8358540da9539762510f",
  measurementId: "G-4H524167JY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);