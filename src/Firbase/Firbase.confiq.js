// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJBIBl-nPg3TFH0qbWkcyuXHa4Bh06kag",
  authDomain: "chatlink-c4c95.firebaseapp.com",
  projectId: "chatlink-c4c95",
  storageBucket: "chatlink-c4c95.appspot.com",
  messagingSenderId: "285565090284",
  appId: "1:285565090284:web:ccaf74c1416ec1912428c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app)

export default Auth