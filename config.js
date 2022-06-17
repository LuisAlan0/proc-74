import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAKrafo67xKxCLX9RZrxWbDOjSipysnMJ4",
  authDomain: "mi-biblioteca-ca44a.firebaseapp.com",
  projectId: "mi-biblioteca-ca44a",
  storageBucket: "mi-biblioteca-ca44a.appspot.com",
  messagingSenderId: "405362658010",
  appId: "1:405362658010:web:25beba967c3512e33c73e3"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
