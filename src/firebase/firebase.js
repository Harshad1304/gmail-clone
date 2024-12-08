// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth , GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmpCIRP5Z5OzCJBG4oqfii-nTCS-sDryM",
  authDomain: "clone-83657.firebaseapp.com",
  projectId: "clone-83657",
  storageBucket: "clone-83657.firebasestorage.app",
  messagingSenderId: "362213523897",
  appId: "1:362213523897:web:f5e40e63a37b9b3c6c7668"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const auth = getAuth(app)

const provider = new GoogleAuthProvider();

export {db, auth, provider};