import React from "react";
import Header from "./Header";
import AuthForm from "./AuthForm";
import { BCG_URL } from "../assets/Img_URL";

const Login = () => {
  return (
    <div className="h-screen w-full">
      <Header />
      <div className="relative h-full w-full">
        <img
          className="object-cover"
          src={BCG_URL}
          alt="bcg-img"
        />
      </div>
      <AuthForm/>
    </div>
  );
};

export default Login;
