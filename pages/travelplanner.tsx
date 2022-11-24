import React from "react";
import CreatePost from "../components/CreatePost";
import Image from "next/image";
import PostBox from "../components/PostBox";

const travelplanner = () => {
  return (
    <div>
      <div className="relative w-full h-[220px] bg-slate-400 flex ">
        <div className="w-3/4">
          <div className=" mx-24 flex flex-col my-10">
            <h2 className=" py-2 text-white text-3xl font-bold tracking-wider">
              Travel Planner
            </h2>
            <p className="py-2 text-[#e3dcdc]">
              Put together a trip whishlist to create a detailed iteranary
            </p>
          </div>
        </div>
       
      </div>
      <PostBox />
    </div>
  );
};

export default travelplanner;
