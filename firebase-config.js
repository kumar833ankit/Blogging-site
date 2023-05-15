// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDT12TTJIzMAmrenVVkFE82CveuQH3EA8",
  authDomain: "blogproject-99c7c.firebaseapp.com", 
  projectId: "blogproject-99c7c",
  storageBucket: "blogproject-99c7c.appspot.com",
  messagingSenderId: "744039831916",
  appId: "1:744039831916:web:de4e5eb7634d84497dbb49",
  measurementId: "G-L1HV4JF05H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
