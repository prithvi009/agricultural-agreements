import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      toast.error('Please enter both username and password');
      return;
    }
    // Implement your login logic here
    // For the sake of the example, let's assume a simple check
    if (username === 'user' && password === 'password') {
      // Successful login
      toast.success('Login successful');
    } else {
      // Incorrect credentials
      toast.error('Incorrect username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center overflow-y-hidden">
      <div className="max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
