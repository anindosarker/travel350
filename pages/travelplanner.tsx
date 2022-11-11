import React from "react";
import CreatePost from "../components/CreatePost";
import Image from "next/image";

const forum = () => {
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
        <div className="absolute top-0 right-0  h-3/4 w-2/4 cursor-pointer flex">
          <Image
            src="/../public/Online world-pana 1.png"
            alt=""
            objectFit="contain"
            layout="fill"
          />
        </div>
      </div>
      <CreatePost />
    </div>
  );
};

export default forum;
