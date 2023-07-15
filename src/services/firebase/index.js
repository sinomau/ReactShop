// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT8KqQZkVV_o4ZuCXj5XxPxWeALg6xKSs",
  authDomain: "backend3dplain.firebaseapp.com",
  projectId: "backend3dplain",
  storageBucket: "backend3dplain.appspot.com",
  messagingSenderId: "243682408783",
  appId: "1:243682408783:web:06ae737fb93a0da0f4ad3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)