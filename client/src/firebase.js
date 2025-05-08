// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics'; // ✅ moved to top

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVKPe56Wj97jUmzC_HwB6H5rgGVGOXcXY",
  authDomain: "portfolio-admin-dashboar-e5836.firebaseapp.com",
  projectId: "portfolio-admin-dashboar-e5836",
  storageBucket: "portfolio-admin-dashboar-e5836.appspot.com",
  messagingSenderId: "779168602398",
  appId: "1:779168602398:web:4d8358540da9539762510f",
  measurementId: "G-4H524167JY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: Initialize analytics only if needed
// const analytics = getAnalytics(app);

const db = getFirestore(app);
export { db };
