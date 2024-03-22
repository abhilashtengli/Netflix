import React, { useRef, useState } from "react";
import Header from "./Header";
import { bg_url } from "../Utils/Constants";
import { checkDataIsValid } from "../Utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the Form
    const message = checkDataIsValid(
      email.current.value,
      password.current.value
    );
    // console.log(message);
    setErrorMessage(message);

    if (!isSignInForm) {
      //sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="" alt="bg-img" src={bg_url} />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black bg-opacity-85 rounded-md absolute mt-32 mx-auto right-0 left-0 px-16 py-10 flex flex-col w-[28rem] h-3/4"
      >
        <h1 className="text-white font-bold text-3xl my-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="my-3 bg-blue-300 bg-opacity-30 text-white font-semibold border justify-center rounded-md py-3 px-2"
            type="text"
            placeholder="Enter Name"
          />
        )}
        <input
          className="my-3 bg-blue-300 bg-opacity-30 text-white font-semibold border justify-center rounded-md py-3 px-2"
          type="email"
          ref={email}
          placeholder="Enter Email address"
        />

        <input
          className="my-3 justify-center bg-blue-300 bg-opacity-30 border text-white font-semibold rounded-md py-3 px-2"
          type="password"
          ref={password}
          placeholder="Enter Password"
        />
        <p className="text-red-600 font-semibold pl-1 pt-2">{errorMessage}</p>
        <button
          className="px-3 py-2 mt-6 text-white font-semibold rounded-md bg-red-700"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex justify-center mt-4">
          <a className="text-white" href="/">
            Forgot password?
          </a>
        </div>
        <div className="mt-4 flex">
          {/* <h1 className="text-gray-400 font-semibold">New to Netflix?</h1> */}
          <p
            className="text-white font-semibold ml-2 cursor-pointer"
            onClick={toggleForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up now"
              : "Already registered? Sign In now"}
          </p>
        </div>
        <div className="w-3/4">
          <p className="text-gray-400 text-xs mt-4 ml-2">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
