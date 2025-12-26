import React, { useState } from "react";
import { Link } from "react-router-dom";
import { checkValidData } from "../Utils/validate";

const AuthForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSignIn && !name.trim()) {
      setError("Name is required");
      return;
    }
    const validationError = checkValidData(email, password);
    setError(validationError || "");
  };
  const handleToggle = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="w-full max-w-md bg-black/80 text-white rounded-lg p-6 sm:p-10">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">
        {isSignIn ? "SignIn" : "SignUp"}
      </h2>
      <form className="flex flex-col gap-4">
        {!isSignIn && (
          <input
            className="p-3 bg-gray-800 rounded outline-none"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="p-3 bg-gray-800 rounded outline-none"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="Email"
        />
        <input
          className="p-3 bg-gray-800 rounded outline-none"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Passsword"
        />

        {error !== null && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="bg-red-700 hover:bg-red-800 transition rounded p-3 font-bold"
          onSubmit={handleSubmit}
        >
          {isSignIn ? "SignIn" : "SignUp"}
        </button>
        <div>
          {isSignIn && <h3 className="text-center text-gray-400">OR</h3>}
        </div>
        {isSignIn && (
          <button
            type="button"
            className="bg-gray-700 hover:bg-gray-600 transition rounded p-3"
            onSubmit={handleSubmit}
          >
            Use a Sign-In Code
          </button>
        )}
        {isSignIn && (
          <Link className="text-sm underline text-center">
            Forgot Password?
          </Link>
        )}
        <div className="flex gap-3 text-2xl items-center w-full">
          <input className="h-10 cursor-pointer w-6" type="checkbox" />
          <span>Remember me</span>
        </div>
        <div className="text-sm text-gray-400">
          <span className="text-gray-500">
            {isSignIn ? "NewToNetflix?" : "NetflixMember?"}
            <Link className="hover:underline text-white" onClick={handleToggle}>
              {isSignIn ? "SignUpNow" : "SignInNow"}
            </Link>
          </span>
        </div>
        <p className="text-gray-500 text-lg leading-5 ">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
