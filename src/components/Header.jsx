/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="bg-black p-4">
      <img src={logo} alt="Hulu Logo" className="w-24" />
    </header>
  );
};

export default Header;
