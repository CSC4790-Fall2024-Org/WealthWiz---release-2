// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_6Df3KRDyI-jRaPRfJhubQrmAuDVCbo4",
  authDomain: "wealthwiz-f7950.firebaseapp.com",
  projectId: "wealthwiz-f7950",
  storageBucket: "wealthwiz-f7950.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
