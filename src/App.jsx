import "./App.css";
import { useEffect, useState } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import SignUp from "./pages/SignUp";
import Signin from "./pages/Signin";
import { app } from "../Firebase";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser(user);
      } else {
        console.log("no user");
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <div className="App">
        <SignUp />
        <Signin />
      </div>
    );
  }

  // const createUser = () => {
  //   createUserWithEmailAndPassword(auth, "thakur123@gmail.com", "abc123#")
  //     .then((value) => console.log(value))
  //     .catch((error) => console.log(error));
  // };

  // const putData = () => {
  //   set(ref(db, "users/thakur"), {
  //     id: 1,
  //     name: "Vishal Thakur",
  //     age: 20,
  //   });
  // };

  // const firebase = userFirebase();
  // console.log(firebase);

  return (
    <div className="App">
      <h1>Hello {user.email}</h1>
      <button onClick={() => auth.signOut()}>Logout</button>

      {/* <button onClick={createUser}>Create User</button> */}
    </div>
  );
}

export default App;
