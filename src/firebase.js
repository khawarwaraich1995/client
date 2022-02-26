import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBDYy6ALdTS3PAapIlyVHNdj0mYNQkFM8o",
  authDomain: "mern-ecommerce-325de.firebaseapp.com",
  projectId: "mern-ecommerce-325de",
  storageBucket: "mern-ecommerce-325de.appspot.com",
  messagingSenderId: "602264937945",
  appId: "1:602264937945:web:e7314758323aeb5a9465c8",
  measurementId: "G-6KQYZ5Q2K9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();