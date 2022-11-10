import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

const Login = ({ isAuth }) => {
  const SignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("isAuth", true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <button onClick={SignInWithGoogle}>signin</button>;
};

export default Login;
