// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import * as firebase from "firebase/app"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZIriOz3t20Ga7qbfCk0uokNUFPeW9mhU",
  authDomain: "hotstarclone-bf4f5.firebaseapp.com",
  projectId: "hotstarclone-bf4f5",
  storageBucket: "hotstarclone-bf4f5.appspot.com",
  messagingSenderId: "480002469279",
  appId: "1:480002469279:web:6f97f24f713bc21775a1aa",
  measurementId: "G-74CPZZKNYX"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage();

export {auth,provider,storage} ;
export default db;