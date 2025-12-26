import React from "react";
import Header from "./Header";
import AuthForm from "./AuthForm";
import { BCG_URL } from "../assets/Img_URL";

const Login = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <img
        className="object-cover absolute inset-0 w-full h-full z-0"
        src={BCG_URL}
        alt="bcg-img"
      />
      <div className="absolute inset-0 bg-black/60 z-5"></div>
      <Header />
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
        <AuthForm />
      </div>
    </div>
  );
};

export default Login;
