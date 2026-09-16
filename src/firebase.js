import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Reads credentials from .env file or uses fallback
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDemoKeyForStylishShoesStore12345",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "stylish-shoes-store.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "stylish-shoes-store",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "stylish-shoes-store.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "849201948576",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:849201948576:web:abcd1234efgh5678"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore Database
export const db = getFirestore(app);

// Initialize Firebase Auth
export const auth = getAuth(app);

// Check if real Firebase keys are configured
export const isFirebaseConfigured = () => {
  const key = import.meta.env.VITE_FIREBASE_API_KEY || '';
  return key && !key.includes('DemoKey') && key.length > 20;
};

export default app;
