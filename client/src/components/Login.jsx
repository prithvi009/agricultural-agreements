import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory for navigation
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Create a history object for navigation

  const handleLogin = async () => {
    try {
      if (!walletAddress || !password) {
        toast.error('Please enter both wallet address and password');
        return;
      }

      // Make a POST request to your backend login endpoint
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ walletAddress, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Successful login
        toast.success('Login successful');

        // Check the user type and redirect accordingly
        if (data.userType === 'farmer') {
          navigate("/farmer-dashboard");
        } else if (data.userType === 'buyer') {
          navigate('/buyer-dashboard');
        }

        // You can perform additional actions here if needed
      } else {
        // Incorrect credentials or other error
        toast.error(data.error || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('An unexpected error occurred');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center overflow-y-hidden">
      <div className="max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Wallet Address:</label>
            <input
              type="text"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="button"
            onClick={handleLogin}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-900 transition duration-300 w-full"
          >
            Login
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginPage;
