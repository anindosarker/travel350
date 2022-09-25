import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import img from "./img.jpg";
const ForumCard = () => {
  return (
    <div className="flex justify-center ">
      <div className="mt-6 w-11/12 flex-col space-y-3 border-2 border-gray-400 rounded-md">
        <img src={img} className="w-full h-[220px] rounded-md" alt="img" />
        <div className="flex justify-between">
          <div className="flex">
            <h2 className="text-[16px]">Taposh Singha</h2>
            <h2 className="text-[12px] opacity-70 mt-1 ml-3">7 days ago</h2>
          </div>
          <div className="flex mr-5">
            <FontAwesomeIcon icon={faComment} className="text-slate-400" />
            <h2>20</h2>
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="text-slate-400 ml-5"
            />
            <h2>12</h2>
          </div>
        </div>
        <h2 className=" ml-2 text-[20px] font-bold">
          Great place to visit:- Kushtia , Meherpur Zilla
        </h2>
        <h2 className="opacity-[0.55]">Meherpur travel group</h2>
        <h2 className="opacity-[0.55] text-[14px]">
          Mujibnagar Memorial Monument and Complex is located at Mujibnagar,
          Meherpur which is an amazing place to visit. There are other
          attractive destinations like Aamjhupi Neel Kuthi,Ananya Park etc.
        </h2>
        <div className="flex space-x-3">
          <button className="bg-blue-600 px-2 py-1 text-white rounded-md">
            Cultural
          </button>
          <button className="bg-green-600 px-2 py-1 text-white rounded-md">
            Nature
          </button>
          <button className="bg-orange-600 px-2 py-1 text-white rounded-md">
            Spot
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForumCard;
