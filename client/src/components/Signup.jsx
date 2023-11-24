import React, { useState } from 'react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState(''); // State for user type

  const handleSignup = async () => {
    // Your signup logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">
              Username<span className="text-red-500"> *</span>:
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Email <span className="text-red-500">*</span>:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              User Type <span className="text-red-500">*</span>:
            </label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            >
              <option value=""></option>
              <option value="farmer">Farmer</option>
              <option value="buyer">Buyer</option>
            </select>
          </div>

          <button
            type="button"
            onClick={handleSignup}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-900 transition duration-300 w-full "
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
