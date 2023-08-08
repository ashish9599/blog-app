import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBQr6COCR7qlCIcOhDRXT3fF_r4p1i6A_A",
  authDomain: "blog-b1aae.firebaseapp.com",
  projectId: "blog-b1aae",
  storageBucket: "blog-b1aae.appspot.com",
  messagingSenderId: "954302673741",
  appId: "1:954302673741:web:de0ef27ddcc23d07d0fd04"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const firestore=firebase.firestore()