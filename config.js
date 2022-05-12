// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcyTq4dkGo9bwh_fMc-FZvnaI5nCAZ4eY",
  authDomain: "pagina-web-38ea7.firebaseapp.com",
  projectId: "pagina-web-38ea7",
  storageBucket: "pagina-web-38ea7.appspot.com",
  messagingSenderId: "608673882636",
  appId: "1:608673882636:web:ba697b21e0ad2f1ec18429",
  measurementId: "G-2LBNHY0GMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
var storage = firebase.storage();

export default db;