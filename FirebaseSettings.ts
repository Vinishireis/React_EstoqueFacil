import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcMIBQdBXhbMkygBmxvAEL59DmV5q-N0Y",
  authDomain: "estoquefacil-76bda.firebaseapp.com",
  projectId: "estoquefacil-76bda",
  storageBucket: "estoquefacil-76bda.appspot.com",
  messagingSenderId: "279889473907",
  appId: "1:279889473907:web:5c8d34ddbf331c42b75506",
  measurementId: "G-GJY4LGG2JZ"
};


export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);