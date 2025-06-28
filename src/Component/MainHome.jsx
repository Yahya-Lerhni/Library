import React from "react";
import { GoHome } from "react-icons/go";
import { BiCategory } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLiveHelp } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import images from "../constant/images";
import MyData from "../Constant/Data";
import { useNavigate } from "react-router-dom";
import { Images } from "../Constant";
MyData;
images;
const MainHome = () => {
  const Book = MyData;
  const Navigate = useNavigate();

  return (
    <div className="flex  min-h-screen">
      {/* Sidebar */}
      <aside className="  w-[41%] p-6   border-r border-white/20 text-white flex flex-col gap-5 shadow-md">
        <h1 className="text-2xl font-bold text-[#00a2e6] font-serif hover:text-[#66c9f0] transition text-center mb-4">
          The Book
        </h1>

        <h2 className="text-[#00a2e6] font-serif text-lg font-semibold">
          Menu
        </h2>

        <div className="flex flex-col gap-10 mt-2">
          <div className="flex items-center gap-3 hover:translate-x-1 transition">
            <GoHome className="text-[#00a2e6] size-[1.5rem] hover:text-[#66c9f0]" />
            <a
              href="#"
              className="text-[#00a2e6] font-serif hover:text-[#66c9f0] font-medium"
            >
              Discover
            </a>
          </div>

          <div className="flex items-center gap-3 hover:translate-x-1 transition">
            <BiCategory className="text-[#00a2e6] size-[1.5rem] hover:text-[#66c9f0]" />
            <a
              href="#"
              className="text-[#00a2e6] font-serif hover:text-[#66c9f0] font-medium"
            >
              Category
            </a>
          </div>

          <div className="flex items-center gap-3 hover:translate-x-1 transition">
            <HiOutlineDocumentDownload className="text-[#00a2e6] size-[1.5rem] hover:text-[#66c9f0]" />
            <a
              href="#"
              className="text-[#00a2e6] font-serif hover:text-[#66c9f0] font-medium"
            >
              Download
            </a>
          </div>

          <div className="flex items-center gap-3 hover:translate-x-1 transition">
            <MdFavoriteBorder className="text-[#00a2e6] size-[1.5rem] hover:text-[#66c9f0]" />
            <a
              href="#"
              className="text-[#00a2e6] font-serif hover:text-[#66c9f0] font-medium"
            >
              Favory
            </a>
          </div>

          <div className="flex items-center gap-3 hover:translate-x-1 transition">
            <IoSettingsOutline className="text-[#00a2e6] size-[1.5rem] hover:text-[#66c9f0]" />
            <a
              href="#"
              className="text-[#00a2e6] font-serif hover:text-[#66c9f0] font-medium"
            >
              Setting
            </a>
          </div>

          <div className="flex items-center gap-3 hover:translate-x-1 transition">
            <MdOutlineLiveHelp className="text-[#00a2e6] size-[1.5rem] hover:text-[#66c9f0]" />
            <a
              href="#"
              className="text-[#00a2e6] font-serif hover:text-[#66c9f0] font-medium"
            >
              Help
            </a>
          </div>

          <div className="flex items-center gap-3 hover:translate-x-1 transition">
            <IoIosLogOut className="text-[#00a2e6] size-[1.5rem] hover:text-[#66c9f0]" />
            <a
              href="#"
              className="text-[#00a2e6] font-serif hover:text-[#66c9f0] font-medium"
            >
              Log Out
            </a>
          </div>
        </div>
      </aside>

      {/* Main content area */}
      <div className=" flex flex-wrap   justify-center items-center gap-[5vh] px-5 py-5 ">
        {Book.map((e) => (
          <div
            key={e.id}
            className="  shadow-md rounded-xl overflow-hidden transition-transform hover:scale-105 duration-300 cursor-pointer flex flex-col items-center w-[15rem] h-[25rem] bg-[#00a2e6]"
            onClick={() => Navigate(`/details/${e.id}`)}
          >
            <div className="w-full h-full relative hhhh">
              <img
                src={Images[e.image]}
                className="  w-full h-full object-cover"
              />
              <button id="btnhome" className="absolute inset-0 m-auto w-max h-max cursor-pointer transition bg-[#048dbf] text-white px-4 py-2 rounded-md">
                More Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainHome;
