import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyBVjgpp7_Wl7bZYJDLF1MMQPa2Elg6MJE0',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'project-c19ca.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'project-c19ca',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'project-c19ca.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '206537940834',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:206537940834:web:7a730a53b802cceed5d63b',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
