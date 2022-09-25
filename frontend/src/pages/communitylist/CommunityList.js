import React from "react";
import Navbar from "../../components/navbar/Navbar";
import CommunityCard from "../../components/communitycard/CommunityCard";
import { useNavigate } from "react-router-dom";
const CommunityList = () => {
  const navigate = useNavigate();
  const sendtoaddcommunity = () => {
    navigate("/home/addnewcommunity");
  };
  return (
    <div className="bg-[url(img.jpg)]">
      <Navbar />
      <div className="mt-10 w-full space-y-3">
        <h2 className="text-white text-center">
          You can search for specific communities here:
        </h2>
        <div className="flex justify-center">
          <input
            type="text"
            className="rounded-md px-1"
            placeholder="Enter place here"
          />
          <input
            type="text"
            className="rounded-md px-1 ml-3"
            placeholder="Enter forum name here"
          />
          <button className="ml-2 rounded-md bg-purple-600 p-1 text-white">
            Search
          </button>
        </div>
        <h2 className="text-white font-bold text-center text-[22px]">
          Here are the communities in Sundarbans
        </h2>
      </div>
      <div className="w-full bg-slate-100 flex justify-center">
        <div className="mt-5 rounded-md w-11/12 bg-white flex justify-between">
          <div className="shadow-md w-4/12 flex-col">
            <div className="text-center space-y-4">
              <h2 className="font-bold text-[22px]">Add New Community</h2>
              <button
                className="w-8/12 bg-blue-500 p-2 rounded-lg text-white"
                onClick={sendtoaddcommunity}
              >
                + New Community
              </button>
            </div>
            <div className="ml-5 mt-4 space-y-3">
              <label className="flex">
                <input type="checkbox" className="" value="natural" />
                <h2 className="ml-2">Natural</h2>
              </label>
              <label className="flex">
                <input type="checkbox" className="" value="travel" />
                <h2 className="ml-2">Travel</h2>
              </label>
              <label className="flex">
                <input type="checkbox" className="" value="guide" />
                <h2 className="ml-2">Guide</h2>
              </label>
              <label className="flex">
                <input type="checkbox" className="" value="blog" />
                <h2 className="ml-2">Blog</h2>
              </label>
              <label className="flex">
                <input type="checkbox" className="" value="others" />
                <h2 className="ml-2">Others</h2>
              </label>
            </div>
          </div>
          <div className="shadow-md w-7/12 space-y-3">
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityList;
