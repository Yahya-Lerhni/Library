import React from "react";
import { FiPhone } from "react-icons/fi";
import { Images } from "../Constant";
Images;
const Maincontact = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col  items-center  font-sans">
        <div className="max-w-3xl flex flex-col  items-center gap-5 p-6">
          <div className="  flex items-center justify-center space-x-2">
            <FiPhone className="size-[2rem] text-[#00a2e6]" />
            <h1 className="text-4xl font-bold text-[#00a2e6]">Contact Us</h1>
          </div>
          <p className="text-gray-600 text-center mb-6">
            Have questions about our library or a specific book? Send us a
            message!
          </p>

          <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
            <div className="md:flex">
              <div className=" bg-[#00a1e680] text-white p-10 flex flex-col items-center">
                <img
                  className="w-50 mx-auto md:mx-0"
                  src={Images.logo}
                  alt="Logo"
                />
                <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-[#00a2e6] font-serif">
                    Contact
                  </h3>
                  <p className="text-sm font-bold mb-2">
                    📍 Casablanca, Morocco
                  </p>
                  <p className="text-sm font-bold mb-2">📞 +212 600 000 000</p>
                  <p className="text-sm w-[15rem] font-bold">
                    ✉️ contact@AlMaarifa.ma
                  </p>
                </div>
              </div>

              <div className="md:w-2/3 p-6">
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
                      placeholder="Your full name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00a2e6]"
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
                      placeholder="you@example.com"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00a2e6]"
                    />
                  </div>
                  <div>
                    <label for="subject" className="block text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Message subject"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00a2e6]"
                    />
                  </div>
                  <div>
                    <label for="message" className="block text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      placeholder="Type your message here..."
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00a2e6]"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#00a2e6] text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maincontact;
