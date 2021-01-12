import firebase from "firebase";
require("@firebase/firestore");
var firebaseConfig = {
  apiKey: "AIzaSyDK6hVZxBOadR6HSfKcb7N8yGeak-hk_yA",
  authDomain: "barterapp2.firebaseapp.com",
  projectId: "barterapp2",
  storageBucket: "barterapp2.appspot.com",
  messagingSenderId: "984422961997",
  appId: "1:984422961997:web:70167218d816eee8895d04"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();