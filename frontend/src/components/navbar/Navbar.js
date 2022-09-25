import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handlePlaces = () => {
    navigate("/home/touristplaces");
  };
  const handlehome = () => {
    navigate("/home");
  };
  const handlenewpost = () => {
    navigate("/home/addnewpost");
  };
  const handlenewspot = () => {
    navigate("/home/addnewspot");
  };

  const handleforumpost = () => {
    navigate("/home/addnewcommunity");
  };

  const handletravelforum = () => {
    navigate("/home/travelforum");
  };

  const handletravelplanner = () => {
    navigate("/home/travelplanner");
  };

  const handleprofile = () => {
    navigate("/home/userprofile");
  };
  return (
    <div className="flex justify-between py-5 ml-9">
      <div>
        <h2 className="font-bold text-4xl text-white">travel+</h2>
      </div>
      <div className="flex space-x-8 mr-9">
        <button className="font-bold text-white" onClick={handlehome}>
          Home
        </button>
        <button className="text-white" onClick={handlenewpost}>
          Add new post
        </button>
        <button className="text-white" onClick={handleforumpost}>
          Add new community
        </button>
        <button className="text-white" onClick={handlenewspot}>
          Add new spot
        </button>
        <button className="text-white" onClick={handlePlaces}>
          Travel Spots
        </button>
        <button className="text-white" onClick={handletravelforum}>
          Forum
        </button>
        <button className="text-white" onClick={handletravelplanner}>
          Travel Planner
        </button>
        <h2
          className="text-sm mt-2 text-white cursor-pointer"
          onClick={handleprofile}
        >
          My account
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
