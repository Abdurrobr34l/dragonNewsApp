import React from 'react';
import logo from "../assets/logo.png"
import { Link } from 'react-router';

const Header = () => {
  return (
    <header className='flex flex-col items-center gap-4 pt-12 pb-6'>
      {/* LOGO */}
      <div>
        <Link to={"/"}>
        <img src={logo} alt="It is website logo" className='w-[335px] md:w-auto'/></Link>
      </div>

      {/* SLOGAN */}
      <p>Journalism Without Fear or Favour</p>
    </header>
  );
};

export default Header;