import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import SingleForumPost from "../../components/singleforumpost/SingleForumPost";

const Singleforum = () => {
  const navigate = useNavigate();
  const [filtertype, setfiltertype] = useState("Choose filter type");
  const [togglefiltertype, settogglefiltertype] = useState(false);
  const [filtertime, setfiltertime] = useState("Choose filter time");
  const [togglefiltertime, settogglefiltertime] = useState(false);
  const [joinstatus, setjoinstatus] = useState(false);

  const handlejoinstatus = () => {
    setjoinstatus(!joinstatus);
  };
  const handlefiltertype = (a) => {
    setfiltertype(a);
  };

  const sendtocreatepost = () => {
    navigate("/home/addnewpost");
  };
  const handlefiltertimetoggle = () => {
    settogglefiltertime(!togglefiltertime);
  };
  const handlefiltertypetoggle = () => {
    settogglefiltertype(!togglefiltertype);
  };
  const handlefiltertime = (a) => {
    setfiltertime(a);
  };
  return (
    <div>
      <div className="bg-[url(img.jpg)]">
        <Navbar />
        <div className="ml-10 mt-8 flex-col w-full">
          <h2 className="text-white text-[26px]">Travelers of Sundarbans</h2>
          <h2 className="text-slate-300">
            This forum is contains discussions about travelling guide to
            <br />
            Sundarbans concerning food, hotel, car rent or general advice etc.
          </h2>
          {joinstatus && (
            <button
              className="bg-purple-600 px-2 py-1 rounded-md"
              onClick={handlejoinstatus}
            >
              Joined
            </button>
          )}
          {!joinstatus && (
            <button
              className="bg-purple-600 px-2 py-1 rounded-md"
              onClick={handlejoinstatus}
            >
              + Join
            </button>
          )}
          {joinstatus && (
            <button
              className="ml-6 px-2 py-1 bg-blue-600 text-white rounded-md"
              onClick={sendtocreatepost}
            >
              Create a post here
            </button>
          )}
          <div className="w-3/12 flex justify-between mt-10">
            <h2 className="text-blue-300">1602 followers</h2>
            <h2 className="text-green-300">3 moderators</h2>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 w-full flex justify-center">
        <div className="w-11/12 bg-white mt-8 flex justify-between">
          <div className="w-3/12 shadow-lg">
            <div className="mt-2 ml-4 flex-col">
              <h2>Filter:</h2>
              <button
                className="bg-blue-300 px-2 py-1 rounded-md w-[150px]"
                onClick={handlefiltertypetoggle}
              >
                {filtertype}
              </button>
              {togglefiltertype && (
                <div className="block">
                  <div
                    className="flex w-[150px] bg-white hover:bg-slate-300"
                    onClick={() => handlefiltertype("Most liked")}
                  >
                    <a href="#">Most liked</a>
                  </div>
                  <div
                    className="flex w-[150px] bg-white hover:bg-slate-300"
                    onClick={() => handlefiltertype("Most viewed")}
                  >
                    <a href="#">Most viewed</a>
                  </div>
                  <div
                    className="flex w-[150px] bg-white hover:bg-slate-300"
                    onClick={() => handlefiltertype("Most comments")}
                  >
                    <a href="#">Most comments</a>
                  </div>
                  <div
                    className="flex w-[150px] bg-white hover:bg-slate-300"
                    onClick={() => handlefiltertype("Most recent")}
                  >
                    <a href="#">Most recent</a>
                  </div>
                </div>
              )}
              <button
                className="bg-blue-300 px-2 py-1 rounded-md w-[150px] mt-6"
                onClick={handlefiltertimetoggle}
              >
                {filtertime}
              </button>
              {togglefiltertime && (
                <div className="block">
                  <div
                    className="flex w-[150px] bg-white hover:bg-slate-300"
                    onClick={() => handlefiltertime("Today")}
                  >
                    <a href="#">Today</a>
                  </div>
                  <div
                    className="flex w-[150px] bg-white hover:bg-slate-300"
                    onClick={() => handlefiltertime("This week")}
                  >
                    <a href="#">This Week</a>
                  </div>
                  <div
                    className="flex w-[150px] bg-white hover:bg-slate-300"
                    onClick={() => handlefiltertime("This month")}
                  >
                    <a href="#">This Month</a>
                  </div>
                  <div
                    className="flex w-[150px] bg-white hover:bg-slate-300"
                    onClick={() => handlefiltertime("This Year")}
                  >
                    <a href="#">This Year</a>
                  </div>
                  <div
                    className="flex w-[150px] bg-white hover:bg-slate-300"
                    onClick={() => handlefiltertime("All Time")}
                  >
                    <a href="#">All Time</a>
                  </div>
                </div>
              )}
              <div className="mt-4 space-y-2">
                <h2>Tags:</h2>
                <label className="flex">
                  <input type="checkbox" className="" value="natural" />
                  <h2 className="ml-2">Nature</h2>
                </label>
                <label className="flex">
                  <input type="checkbox" className="" value="natural" />
                  <h2 className="ml-2">Guide</h2>
                </label>
                <label className="flex">
                  <input type="checkbox" className="" value="natural" />
                  <h2 className="ml-2">Travel</h2>
                </label>
                <label className="flex">
                  <input type="checkbox" className="" value="natural" />
                  <h2 className="ml-2">Food</h2>
                </label>
              </div>
            </div>
          </div>
          <div className="w-9/12 shadow-lg flex justify-between">
            <div className="shadow-md w-9/12 flex justify-center space-y-3">
              <div className="w-11/12 space-y-3">
                <SingleForumPost
                  title="Just arrived to Cox's Bazar"
                  publishdate="November 14th 2018"
                  summary="I think the name Cox's Bazar is strange in a cool 
                  and exotic way. It was a place I'd not heard of before considering 
                  going to Bangladesh on this trip, but a place that has been entangled 
                  in a humanitarian crisis of historic proportions since August of last
                   year.
                  "
                  author="P. Lloyd Hildebrand"
                  comments="6"
                  img="img1"
                  likes="24"
                  tag1="Nature"
                  tag2="Travel"
                />
                <SingleForumPost
                  title="Eating at Cox's Bazar"
                  publishdate="July 9, 2022"
                  summary="Want to try fresh crabs? Downtown Cox's Bazar should be the go-to location.
                  virtually every place here has a crab dish. Try the spicy crab item as it is more 
                  authentic to the Bengali taste. In this dish, whole crabs are covered in spice mixes
                  and are either slow-cooked or grilled to perfection.
                  "
                  author="Shahriar RABAB"
                  comments="3"
                  likes="55"
                  img="img2"
                  tag1="food"
                  tag2="Guide"
                />
              </div>
            </div>
            <div className="shadow-md w-3/12 flex justify-center">
              <div className="w-11/12 mt-4">
                Moderators:
                <h2 className="text-purple-700">Anjuman Bhaduri</h2>
                <h2 className="text-purple-700">Deepak Rakib</h2>
                <h2 className="text-purple-700">Bhumika Sharma</h2>
                <h2 className="mt-6">Followers:</h2>
                <h2 className="text-red-700">Rachana Shaikh</h2>
                <h2 className="text-red-700">Karim Ali</h2>
                <h2 className="text-red-700">Hasan Tabassum</h2>
                <h2 className="text-red-700">Masnoon Sheikh</h2>
                <button className=" bg-purple-800 mt-4 px-2 py-1 rounded-md text-white">
                  View all followers
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleforum;
