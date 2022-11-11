import React from "react";
import TravelSearchCard from "../components/TravelSearchCard";

const travelsearch = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-center">
        <div className="w-11/12 bg-gray-400 h-[400px]">
          <TravelSearchCard />
        </div>
      </div>
    </div>
  );
};

export default travelsearch;
