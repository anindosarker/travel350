import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faThumbsUp,
  faComments,
  faSquarePen,
} from "@fortawesome/free-solid-svg-icons";
import ForumCard from "../../components/forumcard/ForumCard";
import { useNavigate } from "react-router-dom";

const Travelforum = () => {
  const navigate = useNavigate();
  const sendtoaddpost = () => {
    navigate("/home/addnewpost");
  };
  return (
    <div className="bg-[url('img.jpg')]">
      <Navbar />
      <div className=" flex justify-center">
        <div className="flex-col">
          <h2 className="text-white mt-12 text-[18px] text-center">
            You can search for specific forum communities <br />
            or posts here:
          </h2>
          <div className="flex">
            <input
              type="text"
              className="w-10/12 border-2 border-gray-400 px-1 rounded-md"
            />
            <button className="ml-2 text-white bg-purple-600 px-2 py-1 rounded-md">
              Search
            </button>
          </div>
          <h2 className="mt-[100px] text-white text-[18px]">
            Kushtia, Meherpur travel communities and posts:
          </h2>
        </div>
      </div>
      <div className="bg-slate-200 w-full flex justify-between">
        <div className="ml-4 mt-6 rounded-md bg-white w-4/12 flex justify-center">
          <div className="flex-col space-y-4">
            <button
              className="mt-5 bg-blue-600 w-[220px] rounded-md py-1 text-white font-bold"
              onClick={sendtoaddpost}
            >
              + New forum Post
            </button>
            <h2 className="bg-gray-200 rounded-md px-1 w-8/12">
              <FontAwesomeIcon
                icon={faComments}
                className="opacity-[0.55] px-2"
              />
              All travel+ posts
            </h2>
            <h2 className="bg-gray-200 rounded-md px-1 w-8/12">
              <FontAwesomeIcon
                icon={faSquarePen}
                className="opacity-[0.55] px-2"
              />
              My Posts
            </h2>
            <h2 className="font-bold text-[20px]">
              General travel communities
            </h2>
            <div className="flex">
              <input type="checkbox" />
              <h2 className="ml-2 ">Art and Culture</h2>
            </div>
            <div className="flex">
              <input type="checkbox" />
              <h2 className="ml-2 ">Food</h2>
            </div>
            <div className="flex">
              <input type="checkbox" />
              <h2 className="ml-2 ">Local</h2>
            </div>
            <div className="flex">
              <input type="checkbox" />
              <h2 className="ml-2 ">Nature</h2>
            </div>
            <div className="flex">
              <input type="checkbox" />
              <h2 className="ml-2 ">Festival</h2>
            </div>
            <div className="flex">
              <input type="checkbox" />
              <h2 className="ml-2 ">Hotel</h2>
            </div>
            <div className="flex">
              <input type="checkbox" />
              <h2 className="ml-2 ">Travel vehicle guide</h2>
            </div>
            <h2>Specific spot communities</h2>
            <input
              type="text"
              className="border-2 border-gray-400 rounded-md px-1"
            />
            <button className="bg-blue-600 ml-2 px-2 py-1 rounded-md text-white">
              Search
            </button>
          </div>
        </div>
        <div className="w-7/12 bg-white mr-5 mt-6 rounded-md space-y-5">
          <ForumCard />
          <ForumCard />
        </div>
      </div>
    </div>
  );
};

export default Travelforum;
