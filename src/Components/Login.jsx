import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Header />

      <div className="relative">
        <img className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f86b16bf-4c16-411c-8357-22d79beed09c/web/IN-en-20251222-TRIFECTA-perspective_d4acb127-f63f-4a98-ad0b-4317b0b3e500_small.jpg"
          alt="bcg-img"
        />
      </div>

      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-black/80 text-white px-20 py-10 flex flex-col mt-25 w-150 h-220">
        <h2 className="text-5xl font-bold">Sign In</h2>
        <form className="flex flex-col items-center w-full gap-2">
          <input
            className="p-4 text-xl  mt-12 w-full h-15 bg-gray-800/50 outline-none border rounded"
            type="text"
            placeholder="Email"
          />
          <input
            className="p-4 text-xl  mt-4 w-full h-15 bg-gray-800/50 outline-none border rounded"
            type="password"
            placeholder="Passsword"
          />
          <button className="p-4 text-xl mt-6 w-full h-15 bg-red-700 outline-none font-bold rounded">
            Sign In
          </button>
          <h3 className="text-xl font-medium mt-2 mb-2">OR</h3>
          <button className="p-4 text-xl  w-full h-15 bg-gray-500/50 outline-none rounded font-bold">
           Use a Sign-In Code
          </button>
          <Link className="underline text-2xl  mb-2 mt-2">Forgot Password?</Link>
          <div className="flex gap-3 text-2xl items-center w-full">
            <input className="h-10 w-6" type="checkbox" />
            <span>Remember me</span>
          </div>
          <div className="w-full mt-2 mb-6 text-xl font-medium">
            <span className="text-gray-500">
              New to Netflix?
              <Link className="hover:underline text-white">Sign up now.</Link>
            </span>
          </div>
          <p className="text-gray-500 text-lg leading-5 ">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
