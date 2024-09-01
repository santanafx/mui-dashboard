import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaw7tRGZlZmHg3UdoNjwC8Ea8ZtnLvIv8",
  authDomain: "mui-dashboard-server.firebaseapp.com",
  projectId: "mui-dashboard-server",
  storageBucket: "mui-dashboard-server.appspot.com",
  messagingSenderId: "421075492230",
  appId: "1:421075492230:web:a06de23d41f222948ae007",
  measurementId: "G-4ZYLH9ECXR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);