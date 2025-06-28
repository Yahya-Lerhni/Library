import React from 'react';

const MainLogin = () => {
    return (
        <>
            <div className="bg-gray-100 font-sans">
              <div className="min-h-screen flex items-center justify-center p-6">
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-md w-full">
      
      <div className="px-8 py-6 text-center bg-[#00a2e6]">
        <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
        <p className="text-blue-200 mt-1">Log in to your library account</p>
      </div>

      <div className="p-8">
        <form action="#" method="POST" className="space-y-5">
          <div>
            <label for="email" className="block text-gray-700 mb-2">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label for="password" className="block text-gray-700 mb-2">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              className="h-4 w-4 text-[#00a2e6] focus:ring-blue-500 border-gray-300 rounded"
            />
            <label for="remember" className="ml-2 text-gray-700">Remember me</label>
          </div>
          <button
            type="submit"
            className="w-full bg-[#00a2e6] text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600 text-center">
          Don’t have an account?
          <a href="/signup" className="text-[#00a2e6] hover:underline">Sign up here</a>.
        </p>
        <p className="mt-2 text-sm text-gray-600 text-center">
          <a href="/forgot-password" className="text-[#00a2e6] hover:underline">Forgot password?</a>
        </p>
      </div>

    </div>
  </div>
            </div>
        </>
    );
};

export default MainLogin;