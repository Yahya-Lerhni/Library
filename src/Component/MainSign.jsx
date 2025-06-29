import React from "react";
import Images from "../Constant/images";
const MainSign = () => {
  return (
    <>
      <div className="bg-gray-100 font-sans">
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-4xl w-full md:flex">
            <div className="md:w-1/3 bg-[#00a1e670] text-white p-8 flex flex-col items-center">
              <h2 className="text-3xl font-bold mb-4">Welcome!</h2>
              <p className="mb-6">
                Join Our Library community to explore thousands of books, get
                personalized recommendations, and connect with fellow readers.
              </p>
              <img
                className="w-48 mx-auto md:mx-0"
                src={Images.logo}
                alt="Logo"
              />
            </div>

            <div className="md:w-2/3 p-8">
              <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                Create Your Account
              </h1>
              <form action="#" method="POST" className="space-y-5">
                <div>
                  <label for="name" className="block text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label for="email" className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label for="password" className="block text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="••••••••"
                  />
                </div>
                <div>
                  <label
                    for="confirm-password"
                    className="block text-gray-700 mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirm-password"
                    name="confirmPassword"
                    type="password"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="••••••••"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label for="terms" className="ml-2 text-gray-700">
                    I agree to the{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#00a2e6] text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Sign Up
                </button>
              </form>
              <p className="mt-4 text-sm text-gray-600">
                Already have an account?
                <a href="/login" className="text-blue-600 hover:underline">
                  Log in here
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSign;
