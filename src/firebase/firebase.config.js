// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAx8t9NJGfrtYTjeM_1dLcwt1l0seIhYIA",
  authDomain: "real-estate-f8edc.firebaseapp.com",
  projectId: "real-estate-f8edc",
  storageBucket: "real-estate-f8edc.appspot.com",
  messagingSenderId: "819934682466",
  appId: "1:819934682466:web:eb4d86df554f8a2afe203b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;