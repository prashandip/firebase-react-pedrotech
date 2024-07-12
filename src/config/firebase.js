import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAb4NgAGtFSLCjaAUwjAkBi4qH5Ksxtjyc",
  authDomain: "fir-react-pedrotech-1a56a.firebaseapp.com",
  projectId: "fir-react-pedrotech-1a56a",
  storageBucket: "fir-react-pedrotech-1a56a.appspot.com",
  messagingSenderId: "1017121328613",
  appId: "1:1017121328613:web:c498466fd798bdb372730c",
  measurementId: "G-1L9HWDM19N",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
