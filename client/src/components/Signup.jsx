import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Web3 from 'web3';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [wallet, setWallet] = useState('');
  const [password, setPassword] = useState('');

  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      if(window.ethereum){
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 =new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setWallet(accounts[0])
        console.log('User accounts:', accounts);
      }
      if (!username || !email || !userType) {
        toast.error('Please fill in all required fields');
        return;
      }

      // Make a POST request to your backend signup endpoint
      const response = await fetch('http://localhost:5001/auth/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          walletAddress: wallet, // Assuming you have a function to generate a unique wallet address
          name: username,
          email,
          userType:1,
          password  // Assuming you have a function to generate a random password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('User created successfully');
        navigate('/login'); // Redirect to login page after successful signup
      } else {
        toast.error(data.error || 'Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      toast.error('An unexpected error occurred');
    }
  };

  const generateUniqueWalletAddress = () => {
    // Implement your logic to generate a unique wallet address
    // This could involve interacting with your backend or generating a unique identifier
    return '0xUniqueWalletAddress'; // Replace with your actual logic
  };

  const generateRandomPassword = () => {
    // Implement your logic to generate a random password
    // This could involve using a library or generating a secure random string
    return 'RandomPassword123'; // Replace with your actual logic
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
          <div>
            <label className="block text-sm font-medium">
              Password<span className="text-red-500">*</span>:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="button"
            onClick={handleSignup}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-900 transition duration-300 w-full"
          >
            Sign Up
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;
