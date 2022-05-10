import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-firebase-redux-a1895.firebaseapp.com",
  projectId: "react-firebase-redux-a1895",
  storageBucket: "react-firebase-redux-a1895.appspot.com",
  messagingSenderId: "67657233370",
  appId: "1:67657233370:web:84d3ea2e1dff4a1e8fc6e3"
});

export const auth = app.auth();
export const db = getFirestore();
export default app;
