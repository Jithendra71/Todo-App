// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app'
// import { getFirestore } from 'firebase/firestore/lite'
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb1lRY4t0WQNmhoo1mg7RotC03I5oyQGg",
  authDomain: "todo-app-a111d.firebaseapp.com",
  projectId: "todo-app-a111d",
  storageBucket: "todo-app-a111d.appspot.com",
  messagingSenderId: "44281913142",
  appId: "1:44281913142:web:dbaa12bd6963893f299d97",
  measurementId: "G-W2QH7GGSPN"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default db