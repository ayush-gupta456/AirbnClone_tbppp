import React from 'react';

const SignupForm = ({ setShowSignupForm }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-8 bg-white rounded-lg shadow-xl w-96">
        <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">Sign Up</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="username">
              Username (Optional)
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              type="text"
              id="username"
              placeholder="your_username"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              type="email"
              id="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              type="password"
              id="password"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              type="submit"
            >
              Sign Up
            </button>
            <button
              className="px-4 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100 focus:outline-none"
              type="button"
              onClick={() => setShowSignupForm(false)}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
