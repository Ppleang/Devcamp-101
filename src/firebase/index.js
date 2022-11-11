// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0_Pf9i4PHz0T21WWBMiip5fVUvVtDgWs",
  authDomain: "hellonewworld-cb620.firebaseapp.com",
  projectId: "hellonewworld-cb620",
  storageBucket: "hellonewworld-cb620.appspot.com",
  messagingSenderId: "53602168246",
  appId: "1:53602168246:web:8333ca2eeca2a967b1e517"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

