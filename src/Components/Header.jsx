import React from 'react'
import { LOGO_URL } from '../assets/Img_URL';

const Header = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
      <img
        className="w-[90%] sm:w-[70%] md:w-[60%]"
        src={LOGO_URL}
        alt="logo"
      />
    </div>
  );
}

export default Header
// bg-linear-to-b from-black