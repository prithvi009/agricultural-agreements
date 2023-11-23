// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold transition-transform transform hover:scale-110">
          AgreementSite
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300 transition-transform transform hover:scale-150">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-white hover:text-gray-300 transition-transform transform hover:scale-150">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className="text-white hover:text-gray-300 transition-transform transform hover:scale-110">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
