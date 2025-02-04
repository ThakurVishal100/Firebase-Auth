import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import {app}  from "../../Firebase";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((value) => {
        console.log(value);
        toast.success("User Created Successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error Creating User");
      });
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
  }

  return (
    <div className="signup-page">
      <h1>SignUp</h1>
      <label>Email</label>
      <input
        type="email"
        required
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password</label>
      <input
        type="password"
        required
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <br/>

      <button onClick={signInWithGoogle}>Sign In with Google</button>

      <button onClick={createUser}>SignUp</button>
    </div>
  );
};

export default SignUp;
