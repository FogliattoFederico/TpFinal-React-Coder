import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjoNlQGaMf-D4TcQkOJMIMy8gxf6k5Yo8",
  authDomain: "react-coder-62c35.firebaseapp.com",
  projectId: "react-coder-62c35",
  storageBucket: "react-coder-62c35.appspot.com",
  messagingSenderId: "592155500643",
  appId: "1:592155500643:web:1953bfc2019439117c9856",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
