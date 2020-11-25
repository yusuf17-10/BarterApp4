import firebase from "firebase";
require("@firebase/firestore");
var firebaseConfig = {
    apiKey: "AIzaSyBQNzTm58SoPCXBqWgi70ODCzyxZZxvpvw",
    authDomain: "barterapp-e176f.firebaseapp.com",
    databaseURL: "https://barterapp-e176f.firebaseio.com",
    projectId: "barterapp-e176f",
    storageBucket: "barterapp-e176f.appspot.com",
    messagingSenderId: "760523657243",
    appId: "1:760523657243:web:ad2bebd11033b62f64a8be"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore();