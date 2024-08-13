import React, { useRef, useState } from "react";
import {validateForm} from "../Utils/validateForm";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../Utils/firebase";
import Head from "./Head";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const setPasswordRef = useRef(null);
  const [signUp, setSignUp] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    setPassword: ""
  });
  const [authError, setAuthError] = useState("");

  const toggleSignInSignUp = (e) => {
    e.preventDefault();
    setSignUp(!signUp);
    setErrors({
      email: "",
      password: "",
      setPassword: "",
    });
    setAuthError("");
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const setPassword = setPasswordRef.current.value;
    const validateSignUpErrors = validateForm(email, password, setPassword);
    setErrors(validateSignUpErrors);
    if (Object.values(validateSignUpErrors).every((error) => error === "")) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setAuthError(errorCode + '-' + errorMessage);
        });
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const validateSignInErrors = validateForm(email, password);
    setErrors(validateSignInErrors);
    if (Object.values(validateSignInErrors).every((error) => error === "")) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setAuthError(errorCode + '-' + errorMessage);
        });
    }
  };

  return (
    <>
      <Head />
      <div className="absolute w-full h-full">
        <img
          src="https://wallpapercave.com/wp/wp4131800.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <form className=" w-10/12 md:w-4/12 absolute p-12 bg-black my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85">
        <h1 className="font-bold text-3xl py-4">
          {signUp ? "Sign Up" : "Sign In"}
        </h1>
        <input
          type="text"
          placeholder="Email"
          ref={emailRef}
          className="p-3 my-3 w-full bg-gray-800"
        />
        {errors.email && (
          <p className="text-red-600 text-lg">❌{errors.email}</p>
        )}
        <input
          type="password"
          ref={passwordRef}
          placeholder="Password"
          className="p-3 my-3 w-full bg-gray-800"
        />
        {errors.password && (
          <p className="text-red-600 text-lg">❌{errors.password}</p>
        )}
        {signUp && (
          <>
            <input
              type="password"
              ref={setPasswordRef}
              placeholder="Confirm Password"
              className="p-3 my-3 w-full bg-gray-800"
            />
            {errors.setPassword && (
              <p className="text-red-600">❌{errors.setPassword}</p>
            )}
          </>
        )}

        <button
          className="p-3 my-5 bg-red-600 w-full rounded-md"
          onClick={signUp ? handleSignUp : handleSignIn}
        >
          {signUp ? "Sign Up" : "Sign In"}
        </button>

        {authError && <p className="text-red-600">{authError}</p>}

        <p className="pt-4">
          {signUp ? (
            <>
              Already have an account?.. 
              <a href="" onClick={toggleSignInSignUp} className="font-bold text-lg underline">
                Sign In
              </a>
            </>
          ) : (
            <>
              New user?..
              <a href="" onClick={toggleSignInSignUp} className="font-bold text-lg underline">
                Sign Up
              </a>
            </>
          )}
        </p>
      </form>
    </>
  );
};

export default Login;