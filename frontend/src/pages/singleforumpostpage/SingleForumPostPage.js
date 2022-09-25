import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import img1 from "./img1.jpg";
const SingleForumPostPage = () => {
  const navigate = useNavigate();
  const sendtoeditpost = () => {
    navigate(
      "/home/touristplaces/communitylist/singleforum/singleforumpostpage/editpost"
    );
  };
  return (
    <div>
      <div className="bg-[url(img.jpg)]">
        <Navbar />
        <h2 className="text-center text-white text-[24px] mt-12">
          Checking post in Travelers of Sundarbans:
        </h2>
        <h2 className="text-white text-[20px] text-center mt-5">
          Search for a specific post in Travelers of Sundarbans:
        </h2>
        <div className="flex justify-center mt-4 pb-6">
          <input type="text" className="shadow-md rounded-md w-[400px]" />
          <button className="bg-blue-600 px-2 py-1 rounded-md ml-3 text-white">
            Search
          </button>
        </div>
      </div>
      <div className="w-full bg-slate-200 flex justify-center">
        <div className="w-11/12  bg-white mt-5 flex-col">
          <div className="flex justify-center">
            <img src={img1} alt="img" className="w-full h-[500px]" />
          </div>
          <div className=" ml-6 mt-5 space-x-3">
            <button className="bg-blue-600 px-2 py-1 rounded-md text-white">
              Nature
            </button>
            <button className="bg-orange-600 px-2 py-1 rounded-md text-white">
              Travel
            </button>
          </div>
          <div className="flex justify-between">
            <h2 className="font-bold text-[24px] mt-5 ml-6">
              Just arrived to Cox's Bazar
            </h2>
            <h2 className="mt-6 text-[14px] mr-5">
              Published on:November 14th, 2018
            </h2>
          </div>
          <div className="space-x-3 flex justify-end">
            <button
              className="bg-purple-600 px-2 py-1 rounded-md text-white ml-6"
              onClick={sendtoeditpost}
            >
              Edit
            </button>
            <button className="bg-red-600 px-2 py-1 rounded-md text-white ">
              Delete
            </button>
          </div>
          <div className="flex space-x-3 ml-3">
            <h2>Comments: 6</h2>
            <h2>Likes: 24</h2>
          </div>
          <div className="w-11/12 flex justify-center">
            <h2 className="text-center mt-4">
              I think the name Cox's Bazar is strange in a cool and exotic way.
              It was a place I'd not heard of before considering going to
              Bangladesh on this trip, but a place that has been entangled in a
              humanitarian crisis of historic proportions since August of last
              year. It derives its name from Captain Hiram Cox, an officer of
              the British East India Company. To commemorate his role in refugee
              rehabilitation work in the late 1700's, a market was established
              and named Cox's Bazar after him a colonial name that is still
              retained. It is a popular tourist destinations for Bangladeshis.
              It is a major fishing port, tourism center and a district
              headquarters in southeastern Bangladesh that shares a border with
              Myanmar to the south. Its beach on the Bay of Bengal is the
              longest unbroken beach in the world - sandy with a gentle slope.
              It is now also operational center to the 150 or so humanitarian
              agencies engaged in the refugee crisis relief efforts.
            </h2>
          </div>
          <div>
            <h2 className="font-bold text-[20px] mt-5 ml-6">View Comments:</h2>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-10/12 bg border-t-2 shadow-md space-y-4">
              <div className="flex-col w-full bg-slate-200 p-3">
                <div>
                  <h2>This post is very good.</h2>
                </div>
                <div className="mt-3 flex justify-between w-10/12">
                  <div className="space-x-3">
                    <button className="bg-blue-600 px-2 py-1 rounded-md text-white">
                      Like
                    </button>
                    <button className="bg-purple-600 px-2 py-1 rounded-md text-white">
                      Comment
                    </button>
                  </div>
                  <div className="flex space-x-2 text-[14px] mt-4">
                    <h2>likes: 6</h2>
                    <h2>Comments: 3</h2>
                  </div>
                </div>
                <div>
                  <button className="bg-red-600 px-2 py-1 rounded-md text-white">
                    View comments
                  </button>
                </div>
              </div>
              <div className="flex-col w-full bg-slate-200 p-3">
                <div>
                  <h2>Seafoods in Cox's Bazar is amazing.</h2>
                </div>
                <div className="mt-3 flex justify-between w-10/12">
                  <div className="space-x-3">
                    <button className="bg-blue-600 px-2 py-1 rounded-md text-white">
                      Like
                    </button>
                    <button className="bg-purple-600 px-2 py-1 rounded-md text-white">
                      Comment
                    </button>
                  </div>
                  <div className="flex space-x-2 text-[14px] mt-4">
                    <h2>likes: 14</h2>
                    <h2>Comments: 0</h2>
                  </div>
                </div>
                <div>
                  <button className="bg-red-600 px-2 py-1 rounded-md text-white">
                    View comments
                  </button>
                </div>
              </div>
              <div className="w-full flex-col">
                <h2>Write a comment:</h2>
                <div className="flex justify-start">
                  <textarea className="w-10/12 h-[120px] mt-3 border-2 shadow-lg ml-3" />
                </div>
                <div className="space-x-3 flex">
                  <button className="bg-purple-600 px-2 py-1 rounded-md text-white ml-4 mt-3">
                    Done
                  </button>
                  <button className="bg-red-600 px-2 py-1 rounded-md text-white ml-4 mt-3">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleForumPostPage;
