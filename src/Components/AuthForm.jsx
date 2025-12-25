import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const AuthForm = () => {
  const [Form, setForm] = useState(true)
  const handleToggle = ()=>{
    setForm(!Form)
  }
  return (
    <div className={`absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-black/80 z-10 text-white rounded px-20 py-15 flex flex-col  w-150 ${Form ? 'h-200':'h-180'}`}>
      <h2 className="text-5xl font-bold">{Form ? "SignIn" : "SignUp"}</h2>
      <form className="flex flex-col items-center w-full gap-2">
        {!Form && (
          <input
            className="p-4 text-xl  mt-12 w-full h-14 bg-gray-800/50 outline-none border rounded"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className={`p-4 text-xl  ${
            !Form ? "mt-2" : "mt-12"
          } w-full h-14 bg-gray-800/50 outline-none border rounded`}
          type="text"
          placeholder="Email"
        />
        <input
          className="p-4 text-xl mt-2
           w-full h-14 bg-gray-800/50 outline-none border rounded"
          type="password"
          placeholder="Passsword"
        />
        <button className="p-4 cursor-pointer text-xl mt-8 w-full h-14 bg-red-700 outline-none font-bold rounded">
          {Form ? "SignIn" : "SignUp"}
        </button>
        {Form && <h3 className="text-xl font-medium mt-2 mb-2">OR</h3>}
        {Form && <button className="p-4 text-xl cursor-pointer w-full h-14 bg-gray-500/50 outline-none rounded font-bold">
          Use a Sign-In Code
        </button>}
        {Form&&<Link className="underline text-2xl  mb-2 mt-2">Forgot Password?</Link>}
        <div className="flex gap-3 text-2xl items-center w-full">
          <input className="h-10 cursor-pointer w-6" type="checkbox" />
          <span>Remember me</span>
        </div>
        <div className="w-full mt-2 mb-6 text-xl font-medium">
          <span className="text-gray-500">
            {Form ? "NewToNetflix?" : "NetflixMember?"}
            <Link className="hover:underline text-white" onClick={handleToggle}>
              {Form ? "SignUpNow" : "SignInNow"}
            </Link>
          </span>
        </div>
        <p className="text-gray-500 text-lg leading-5 ">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </form>
    </div>
  );
}

export default AuthForm