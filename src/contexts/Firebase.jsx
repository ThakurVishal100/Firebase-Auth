import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useContext } from "react";

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

export const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

const FirebaseContext = createContext({});

export const userFirebase=()=> useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
  const signUpUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const createUser = (key, data) => {
    set(ref(database, key), data);
  };

  return (
    <FirebaseContext.Provider
      value={{
        firebaseAuth,
        database,
        createUser,
        signUpUserWithEmailAndPassword,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
