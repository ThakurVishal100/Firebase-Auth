import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTUqvmlCfLMtwfYs3J-NFcBdRzxjuFJlQ",
  authDomain: "app-895ab.firebaseapp.com",
  projectId: "app-895ab",
  storageBucket: "app-895ab.firebasestorage.app",
  messagingSenderId: "905755137947",
  appId: "1:905755137947:web:8074ce02d01b61a5ff733e",
  measurementId: "G-MDVGC3BQCP",
  databaseUrl: "https://app-895ab-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
