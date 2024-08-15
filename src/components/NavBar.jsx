/* eslint-disable no-unused-vars */
import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-gray-900 p-4">
      <ul className="flex justify-around">
        <li><a href="/" className="text-white">Home</a></li>
        <li><a href="/about" className="text-white">About</a></li>
        <li><a href="/contact" className="text-white">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
