import React, { useState } from 'react';
import { loginwithgoogle, signup } from '../utils/apiService';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

  const handleRegister = async () => {
    try {
      const response = await signup(email, password);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  async function handleGoogleLogin() {
    try {
      const response = await loginwithgoogle();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        <input
          type="email"
          placeholder="Email"
          className="mb-4 p-2 border border-gray-300 rounded w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 p-2 border border-gray-300 rounded w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex justify-between">
          <button
            onClick={handleRegister}
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          >
            Register
          </button>
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white px-4 py-2 ml-2 rounded w-full"
          >
            Login
          </button>
        </div>
        <button
          onClick={handleGoogleLogin}
          className="bg-red-500 text-white px-4 py-2 rounded w-full mt-4"
        >
          Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default Register;