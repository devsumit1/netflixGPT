// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUz6JXYVQb0AzLz9lvQWonNu1v2VUdxp4",
  authDomain: "netflixgpt-afb61.firebaseapp.com",
  projectId: "netflixgpt-afb61",
  storageBucket: "netflixgpt-afb61.appspot.com",
  messagingSenderId: "951569570080",
  appId: "1:951569570080:web:e2d7997786d68271dd9f45",
  measurementId: "G-MBFGZV3YMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);