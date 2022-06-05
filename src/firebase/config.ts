import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyA0q5br1DRlfDnYuKLrksfrfXoMccgQW7g",
    authDomain: "admin-template-55137.firebaseapp.com",
    projectId: "admin-template-55137",
    storageBucket: "admin-template-55137.appspot.com",
    messagingSenderId: "467125377808",
    appId: "1:467125377808:web:415fa884e74cefa3c82395",
    measurementId: "G-NBH2Y9NMHS",
  });
}

export default firebase;
