import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showSignInButton, setShowSignInButton] = useState(true);

  const handleSignUpClick = () => {
    setShowSignInButton(false);
  };

  return (
    <nav className="bg-green-500 p-4 fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold transition-transform transform hover:scale-110 tracking-normal">
          AgriMitra
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

          {showSignInButton && (
            <li>
            <Link
              to="/signup"
              className="text-white hover:text-gray-300 transition-transform transform hover:scale-110"
              onClick={handleSignUpClick}
            >
              Sign Up
            </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
