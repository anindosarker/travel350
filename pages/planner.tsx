import Image from "next/image";
import React from "react";
import Checklist from "../components/Checklist";

const travelPlanner = () => {
  return (
    <div className="bg-gray-200">
      <div className="relative w-full h-[220px] bg-[#846075] flex ">
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
            src="/../public/assets/travel_planner_header_img.png"
            alt=""
            objectFit="contain"
            layout="fill"
          />
        </div>
      </div>

      {/* cards section  */}
      <div>
        <div className="bg-gray-300 mr-12 ml-20">
          <Checklist />
        </div>
      </div>
    </div>
  );
};

export default travelPlanner;
