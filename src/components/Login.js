import React, { useState } from 'react';
import { login, loginwithgoogle } from '../utils/apiService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [googleLoginResponse, setGoogleLoginResponse] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      setGoogleLoginResponse(response.data);;
      localStorage.setItem('auth', response.token);
      localStorage.setItem('loggedUser', JSON.stringify(response.user));
      navigate('/quiz'); 
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleGoogleLogin = async () => {
    try {
      const response = await loginwithgoogle();
      console.log(response);
      localStorage.setItem('auth', response.token);
      localStorage.setItem('loggedUser', JSON.stringify(response.user));
      navigate('/quiz'); 
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateAccount = () => {
    navigate('/register');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
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
            onClick={handleLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Login
          </button>
          <button
            onClick={handleCreateAccount}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Create a new account
          </button>
        </div>
        <button
          onClick={handleGoogleLogin}
          className="bg-red-500 text-white px-4 py-2 rounded w-full mt-4"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;