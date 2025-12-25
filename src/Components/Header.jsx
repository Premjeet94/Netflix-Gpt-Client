import React from 'react'
import { LOGO_URL } from '../assets/Img_URL';

const Header = () => {
  return (
    <div className=" absolute transform -translate-x-1/2 -translate-y-1/2 bg-linear-to-b from-black top-1/2 left-1/2 z-1 flex justify-center items-center px-8 py-6 h-screen  w-full">
      <img className="" src={LOGO_URL} alt="logo" />
    </div>
  );
}

export default Header
// bg-linear-to-b from-black