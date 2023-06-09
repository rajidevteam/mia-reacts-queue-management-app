const dotenv = require('dotenv');
dotenv.config();

// Import the functions you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth'

// Config object
const firebaseConfig = {
  apiKey: process.env.QUEUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.QUEUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.QUEUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.QUEUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.QUEUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.QUEUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.QUEUE_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth()
setPersistence(auth, browserLocalPersistence);

export { db, auth }