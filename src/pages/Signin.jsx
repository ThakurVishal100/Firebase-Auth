import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";


const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        console.log(value);
        toast.success("Signin Successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error Signin");
      });
  };

  return (
    <div className="signin-page">
      <h1>Signin</h1>
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
      <button onClick={SignIn}> Signin</button>
    </div>
  );
};

export default Signin;
