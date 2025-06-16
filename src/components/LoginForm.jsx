import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const LoginForm = ({ setShowLoginForm }) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }
    setError('');
    // Using email as a placeholder for user data, as per instructions
    login({ email });
    setShowLoginForm(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-8 bg-white rounded-lg shadow-xl w-96">
        <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="mb-3 text-sm text-center text-red-500">{error}</p>}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email-login"> {/* Changed htmlFor to avoid conflict */}
              Email Address
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              type="email"
              id="email-login" // Changed id
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="password-login"> {/* Changed htmlFor */}
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              type="password"
              id="password-login" // Changed id
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              type="submit"
            >
              Login
            </button>
            <button
              className="px-4 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100 focus:outline-none"
              type="button"
              onClick={() => setShowLoginForm(false)}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
