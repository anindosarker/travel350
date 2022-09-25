import React from "react";
import Loginnavbar from "../../components/loginnavbar/Loginnavbar";

const Welcome = () => {
  return (
    <div className="bg-[url('img.jpg')] h-screen">
      <Loginnavbar />
      <div className="mt-16 ml-16 ">
        <h2 className="text-[29px] font-montserrat font-bold text-white">
          Access live travel updates,
          <br />
          discussion forum,
          <br />
          currency converter,
          <br />
          and <h2 className="text-blue-400">more...</h2> all on Travel+.
        </h2>
        <button className="ml-5 px-[25px] py-[8px] mt-4 bg-blue-400 text-white rounded-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Welcome;
