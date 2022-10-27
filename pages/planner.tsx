import Image from "next/image";
import React from "react";

const travelPlanner = () => {
  return (
    <div className="w-full h-300 bg-[#b76868] flex justify-between">
      <div>
        <h2 className="p-4 text-[#e3dcdc] m-10">Travel Planner</h2>
        <p className="p-2 text-[#e3dcdc]">Put together a create whishlist</p>
      </div>
      <div className="relative h-20 w-20 flex flex-shrink-0 cursor-pointer">
        <Image
          src="/../public/assets/travel_planner_header_img.png"
          alt=""
          objectFit="contain"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default travelPlanner;
