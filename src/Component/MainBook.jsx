import React from "react";
import { useParams } from "react-router-dom";
import Mydata from "../Constant/Data";
import { Images } from "../Constant";
import { RiShoppingCart2Line } from "react-icons/ri";

Images;
Mydata;

const MainBook = () => {
  const { Id } = useParams();
  const BookData = Mydata;
  const SelectedBook = BookData.find((h) => h.id === Number(Id));

  return (
    <div className="flex justify-center items-center px-[10rem] py-10 w-full gap-[5rem]">
      <div className="w-[23%]">
        <img
          src={Images[SelectedBook.image]}
          className="w-full h-[20rem] object-cover rounded"
        />
      </div>
      <div className="flex flex-col items-center gap-[2rem]">
        <div className="">
          <h1 className="text-3xl font-bold  text-[#00a2e6]">
            Title : <span className="text-[black]">{SelectedBook.name}</span>
          </h1>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h2 className="font-bold text-xl text-[#00a2e6]">
            Author : <span className="text-[black]">{SelectedBook.author}</span>
          </h2>
          <h2></h2>
          <h2 className="text-[#00a2e6]  text-xl font-bold ">
            Description :{" "}
            <span className="text-[black]">{SelectedBook.description}</span>
          </h2>
          <h2 className="text-[#00a2e6] text-xl font-bold">
            Type : <span className="text-[black]">{SelectedBook.type}</span>
          </h2>
          <h2 className="text-[#00a2e6] text-xl font-bold">
            Price : <span className="text-[black]">{SelectedBook.price}</span>
          </h2>
        </div>
        <button className=" flex justify-center items-center gap-1.5 w-[20rem] h-[3rem] rounded-2xl hover:scale-105 cursor-pointer bg-[#00a2e6] text-2xl font-bold text-[black]">
          Buy Now <RiShoppingCart2Line />
        </button>
      </div>
    </div>
  );
};

export default MainBook;
