// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsfoRsweXTjfGLb8P2eW-_rpU3RGuNldo",
  authDomain: "medium-clone-replit-36659.firebaseapp.com",
  projectId: "medium-clone-replit-36659",
  storageBucket: "medium-clone-replit-36659.appspot.com",
  messagingSenderId: "883360021520",
  appId: "1:883360021520:web:4c92962392a99d544c1e95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db } 