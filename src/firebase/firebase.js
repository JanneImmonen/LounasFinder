// src/firebase/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

// Export the GoogleAuthProvider for use in your sign-in component
export const googleProvider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyB8q28n81eu1GREoNoMBXpasFiPj_0ELyg",
  authDomain: "lounasfinder.firebaseapp.com",
  databaseURL: "https://lounasfinder-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lounasfinder",
  storageBucket: "lounasfinder.appspot.com",
  messagingSenderId: "1042450201255",
  appId: "1:1042450201255:web:624ec1a93c8bd91282f982",
  measurementId: "G-N9YG758LKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
