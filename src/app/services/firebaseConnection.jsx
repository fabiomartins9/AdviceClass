import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD-X5xUcfYr66Ex15yEHtaTdsbpKjqUSq4",
    authDomain: "advice-class.firebaseapp.com",
    projectId: "advice-class",
    storageBucket: "advice-class.appspot.com",
    messagingSenderId: "1090594139995",
    appId: "1:1090594139995:web:bb6bdc4ddea0eca557f47e",
    measurementId: "G-7PR3RWRWTD"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  

  export default firebase