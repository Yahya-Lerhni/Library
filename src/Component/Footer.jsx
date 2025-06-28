import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Images } from "../Constant";

const Footer = () => {
  return (
    <footer className="bg-white/60 backdrop-blur-md border-t border-gray-200 text-[#003244] py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & Socials */}
        <div className="flex flex-col items-center space-y-4 text-center md:text-left">
          <img className='w-48 mx-auto md:mx-0' src={Images.logo} alt="Logo" />
          <div className="flex justify-center items-center md:justify-start gap-4 text-[#00a2e6]">
            <a href="#" className="hover:text-[#0077aa] transition"><FaFacebookF size={18} /></a>
            <a href="#" className="hover:text-[#0077aa] transition"><FaInstagram size={18} /></a>
            <a href="#" className="hover:text-[#0077aa] transition"><FaLinkedinIn size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#00a2e6] font-serif">Quick Links</h3>
          <ul className="space-y-3 text-sm font-bold">
            <li><a href="#" className="hover:text-[#0077aa] transition">Home</a></li>
            <li><a href="#" className="hover:text-[#0077aa] transition">Sign Up</a></li>
            <li><a href="#" className="hover:text-[#0077aa] transition">Log In</a></li>
            <li><a href="#" className="hover:text-[#0077aa] transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#00a2e6] font-serif">Contact</h3>
          <p className="text-sm font-bold mb-2">📍 Casablanca, Morocco</p>
          <p className="text-sm font-bold mb-2">📞 +212 600 000 000</p>
          <p className="text-sm font-bold">✉️ contact@AlMaarifa.ma</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#00a2e6] font-serif">Newsletter</h3>
          <p className="text-sm font-bold mb-4">Subscribe for updates & offers!</p>
          <form className="flex w-full max-w-xs">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 w-full rounded-l-lg text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#00a2e6] hover:bg-[#0077aa] text-white px-4 py-2 rounded-r-lg transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} <span className="font-semibold text-[#00a2e6]">Al Maarifa</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
