import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB_6Df3KRDyI-jRaPRfJhubQrmAuDVCbo4",
  authDomain: "wealthwiz-f7950.firebaseapp.com",
  projectId: "wealthwiz-f7950",
  storageBucket: "wealthwiz-f7950.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);

//const auth = getAuth(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});


const db = getFirestore(app);
const database = getDatabase(app);

export { auth, db, database };