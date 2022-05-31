// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD04TMhtOHKGVZGiz0Ep8ILGPF84-3A3PQ",
  authDomain: "react-movie-app-1c3bf.firebaseapp.com",
  projectId: "react-movie-app-1c3bf",
  storageBucket: "react-movie-app-1c3bf.appspot.com",
  messagingSenderId: "800219125223",
  appId: "1:800219125223:web:8e664e4771972ec5a99942",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//! Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
console.log(auth);
export const userStateChecker = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(false);
    }
  });
};
