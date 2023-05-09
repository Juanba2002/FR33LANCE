// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO9mKps7OoY3mQE-mgx_hrE0tB1c0o5QM",
  authDomain: "fr33lance-2c84c.firebaseapp.com",
  projectId: "fr33lance-2c84c",
  storageBucket: "fr33lance-2c84c.appspot.com",
  messagingSenderId: "1094585188355",
  appId: "1:1094585188355:web:d991235505e1c341face36",
  measurementId: "G-C1DERP8092"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)