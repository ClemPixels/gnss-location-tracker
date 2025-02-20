import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAp4doIRnE_Xx5XBa4EIdl-A1XS1mO0swM",
  authDomain: "gnss-location-tracker.firebaseapp.com",
  projectId: "gnss-location-tracker",
  storageBucket: "gnss-location-tracker.firebasestorage.app",
  messagingSenderId: "1041502721370",
  appId: "1:1041502721370:web:1aeb1728bc1cf2b5740f63",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
