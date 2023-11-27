import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory for navigation
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = ({setUser}) => {
  const [walletAddress, setWalletAddress] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  

  const handleLogin = async () => {
    try {

      if (!walletAddress || !password) {
        toast.error('Please enter both wallet address and password');
        return;
      }

      const response = await fetch('http://localhost:5001/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ walletAddress, password }),
      });

      const data = await response.json();
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));

      if (data !== null) {
        toast.success('Login successful');

        if (data[3] === '1') {
          navigate("/farmer-dashboard");
        } else{
          navigate('/buyer-dashboard');
        }
      } else {
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
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full h-10"
          >
            Login
          </button>
        </form>
        <p className='mt-4'>Dont have an Account? <Link className="text-blue-500" to='/signup'>signup</Link></p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginPage;
