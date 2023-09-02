// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsf9OqU0_AEUw7mbejP87jm_EG5WYsfNA",
  authDomain: "netflixgpt-84b80.firebaseapp.com",
  projectId: "netflixgpt-84b80",
  storageBucket: "netflixgpt-84b80.appspot.com",
  messagingSenderId: "381709766102",
  appId: "1:381709766102:web:b19cc22582155cb98ba877",
  measurementId: "G-DY51PQ2GZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
