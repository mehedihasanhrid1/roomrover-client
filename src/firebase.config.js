// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNLZyy96ZjE8-gc6_WMTOPslcsi9KdKkU",
  authDomain: "room-rover.firebaseapp.com",
  projectId: "room-rover",
  storageBucket: "room-rover.appspot.com",
  messagingSenderId: "486489530720",
  appId: "1:486489530720:web:d38fb6e48049193ddf7e05",
  measurementId: "G-XD25GNB5PQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);