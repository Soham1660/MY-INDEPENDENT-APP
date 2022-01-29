import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAnpv7rA7Cbd7uEwZ5RC2kK-NtTdS_kDtw",
    authDomain: "grocery-my-own-project.firebaseapp.com",
    databaseURL: "https://grocery-my-own-project-default-rtdb.firebaseio.com",
    projectId: "grocery-my-own-project",
    storageBucket: "grocery-my-own-project.appspot.com",
    messagingSenderId: "962601087275",
    appId: "1:962601087275:web:ef2398342c2babe0cdd56e",
    measurementId: "G-K21QYFVB09"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase.firestore();