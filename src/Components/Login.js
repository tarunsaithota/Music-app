import React, { useRef, useState, useEffect } from "react";
import {validateForm} from "../Utils/validateForm";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously  } from "firebase/auth";
import { auth } from "../Utils/firebase";
import Head from "./Head";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
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

  const handleGuestLogin = (e) => {
    e.preventDefault();
    signInAnonymously(auth)
      .then(() => {
        navigate('/browse');
      })
      .catch((error) => {
        console.error("Guest login failed:", error.message);
        navigate('/errorPage');
      });
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
      <div className=" w-10/12 md:w-4/12 absolute p-10 md:p-12 bg-black mt-28 md:my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85">
        <h1 className="font-bold text-2xl md:text-3xl py-4">
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
          className="p-3 mt-5 bg-red-600 w-full rounded-md"
          onClick={signUp ? handleSignUp : handleSignIn}
        >
          {signUp ? "Sign Up" : "Sign In"}
        </button>

        {authError && <p className="text-red-600">{authError}</p>}

        <p className="pt-4">
          {signUp ? (
            <>
              Already have an account?.. 
              <a href="" onClick={toggleSignInSignUp} className="font-semibold md:font-bold text-lg underline text-blue-300">
                Sign In
              </a>
            </>
          ) : (
            <>
              <button onClick={handleGuestLogin} className="p-3 py-2 mb-4 bg-blue-300 w-full rounded-md">Guest login</button>
              New user?..
              <a href="" onClick={toggleSignInSignUp} className="font-semibold md:font-bold text-lg underline text-blue-300">
                Sign Up
              </a>
            </>
          )}
        </p>
      </div>
    </>
  );
};

export default React.memo(Login);