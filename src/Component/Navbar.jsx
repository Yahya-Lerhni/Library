import React from "react";
import { Images } from "../Constant";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
Link;
Images;

const Navbar = () => {
  return (
    <nav className="backdrop-blur-sm bg-white/60 shadow-md border-b border-gray-200 px-8 py-4 flex justify-between items-center sticky top-0 z-50">
  {/* Logo */}
  <img className="w-32 hover:scale-105 transition-transform duration-300" src={Images.logo} alt="Logo" />

  {/* Links */}
  <div className="hidden md:flex items-center gap-10 font-semibold text-[1.05rem]">
    <Link className="text-[#00a2e6] font-serif hover:text-[#0077aa] transition duration-200" to="/">Home</Link>
    <Link className="text-[#00a2e6] font-serif hover:text-[#0077aa] transition duration-200" to="/signup">Sign Up</Link>
    <Link className="text-[#00a2e6] font-serif hover:text-[#0077aa] transition duration-200" to="/Login">Log In</Link>
    <Link className="text-[#00a2e6] font-serif hover:text-[#0077aa] transition duration-200" to="/contact">Contact Us</Link>
  </div>

  {/* Search + Profile */}
  <div className="flex items-center gap-4">
    <CiSearch className="size-7 text-[#00a2e6] hover:text-[#0077aa] cursor-pointer transition duration-200" />
    <div className="w-9 h-9 rounded-full bg-[#00a2e6] flex items-center justify-center hover:ring-2 hover:ring-[#0077aa] transition duration-200">
      <img src={Images.profile} alt="Profile" className="w-7 h-7 rounded-full" />
    </div>
  </div>
</nav>

  );
};

export default Navbar;
