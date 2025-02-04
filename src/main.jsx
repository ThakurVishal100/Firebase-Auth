import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import { FirebaseProvider } from "./contexts/Firebase.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirebaseProvider>
      <App />
      <ToastContainer />
    </FirebaseProvider>
  </StrictMode>
);
