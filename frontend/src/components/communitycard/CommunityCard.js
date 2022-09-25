import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "./img.jpg";

const CommunityCard = () => {
  const [join, setjoin] = useState(false);
  const navigate = useNavigate();
  const sendtosingleforum = () => {
    navigate("/home/touristplaces/communitylist/singleforum");
  };

  const handlejoin = () => {
    setjoin(!join);
  };
  return (
    <div className="w-full rounded-md shadow-md hover:shadow-xl">
      <img src={img} alt="img" className="h-[200px] w-full rounded-md" />
      <div>
        <div>
          <div className="mt-3">
            <button className="bg-green-300 px-2 py-1 mx-2 rounded-md">
              Nature
            </button>
            <button className="bg-blue-300 px-2 py-1 mx-2 rounded-md">
              Guide
            </button>
          </div>
          <div className="flex justify-between space-y-3">
            <h2 className="font-bold text-[20px] ml-3 mt-3">
              Travelers of Sundarbans
            </h2>
            {join && (
              <button
                className="bg-purple-600 px-2 rounded-md text-white mr-5 px-2 py-1"
                onClick={handlejoin}
              >
                Joined
              </button>
            )}
            {!join && (
              <button
                className="bg-purple-600 px-2 rounded-md text-white mr-5 px-2 py-1"
                onClick={handlejoin}
              >
                + Join
              </button>
            )}
          </div>
          <div className="ml-4 flex justify-between w-11/12">
            <h2 className="text-[14px]">1602 Members</h2>
            <h2 className="text-[14px]">4 Moderators</h2>
          </div>
          <button
            className="bg-blue-600 px-2 py-1 rounded-md text-white"
            onClick={sendtosingleforum}
          >
            View This Community
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
