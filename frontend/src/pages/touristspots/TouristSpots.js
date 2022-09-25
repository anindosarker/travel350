import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import PlaceCard from "../../components/placecard/PlaceCard";

const TouristSpots = () => {
  const navigate = useNavigate();
  const sendtoaddplace = () => {
    navigate("/home/addnewspot");
  };
  const sendtoaddcommunity = () => {
    navigate("/home/addnewcommunity");
  };
  return (
    <div className="bg-[url(img.jpg)]">
      <Navbar />
      <div className="flex flex-col pb-10">
        <h2 className="text-center text-lg mt-10 text-white">
          You can search for specific <br />
          tourist locations posts here:
        </h2>
        <div className="flex justify-center mt-8">
          <input type="text" className="px-1 w-[280px] rounded-md" />
          <button className="ml-5 bg-purple-500 p-1 rounded-md text-white">
            search
          </button>
        </div>
        <h2 className="text-center text-lg mt-10 text-white">
          Here are your search results:
        </h2>
      </div>
      <div className="flex justify-between bg-slate-300 ">
        <div className="w-4/12 h-screen bg-white mt-5 ml-6 rounded-md flex flex-col ">
          <div className="ml-10">
            <h2 className="mt-5 text-lg ">Add new spot:</h2>
            <button
              className="mt-5 w-8/12 bg-blue-600 mx-auto py-3 text-md text-white rounded-lg"
              onClick={sendtoaddplace}
            >
              + New spot
            </button>
          </div>
          <div className="ml-10 mt-6">
            <h2 className="mt-5 text-lg ">Create new Community:</h2>
            <button
              onClick={sendtoaddcommunity}
              className="mt-5 w-8/12 bg-purple-600 mx-auto py-3 text-md text-white rounded-lg"
            >
              + New Community
            </button>
          </div>
          <div className="ml-10 mt-3">
            <label className="font-bold p-4 text-[22px]">Place Tags:</label>
            <label className="flex">
              <input type="checkbox" className="" value="beach areas" />
              <h2 className="ml-2">Beach areas</h2>
            </label>
          </div>
          <div className="ml-10 mt-3">
            <label className="flex">
              <input type="checkbox" className="" value="beach areas" />
              <h2 className="ml-2">Natural areas</h2>
            </label>
          </div>
          <div className="ml-10 mt-3">
            <label className="flex">
              <input type="checkbox" className="" value="beach areas" />
              <h2 className="ml-2">Cultural areas</h2>
            </label>
          </div>
          <div className="ml-10 mt-3">
            <label className="flex">
              <input type="checkbox" className="" value="beach areas" />
              <h2 className="ml-2">Hill areas</h2>
            </label>
          </div>
          <div className="ml-10 mt-3">
            <label className="flex">
              <input type="checkbox" className="" value="beach areas" />
              <h2 className="ml-2">forest areas</h2>
            </label>
          </div>
          <div className="ml-10 mt-3">
            <label className="flex">
              <input type="checkbox" className="" value="beach areas" />
              <h2 className="ml-2">festival areas</h2>
            </label>
          </div>
          <button className="w-10/12 bg-blue-600 py-2 rounded-md mx-auto mt-5">
            Search
          </button>
        </div>

        <div className="w-7/12 bg-white mt-5 mr-10 rounded-md flex justify-center">
          <div className="w-11/12 ">
            <PlaceCard
              tag1="forest"
              tag2="natural"
              tag3="spot"
              img="https://blog.flyticket.com.bd/wp-content/uploads/2020/05/image001.jpg"
              title="Sundarbans forest"
              summary="Sundarbans is the largest Mangrove Forest situated between two countries. 
              It is the kingdom of Royal Bengal tiger and you will find various kinds of species of birds
              , animals and plants and I think you should visit the tranquilizing beauty of Sundarbans
               once in your life.
              "
              user="Taposh singha"
              comments="26"
              likes="3"
              time="5 days ago"
              communities="3 communities"
            />
            <h2 className="mt-5 font-bold text-[24px]">Similar spots: </h2>
            <PlaceCard
              tag1="mountain"
              tag2="forest"
              tag3="spot"
              img="https://blog.flyticket.com.bd/wp-content/uploads/2020/05/image007.jpg"
              title="Rangamati"
              summary="The District of Chittagong Hill Tracks area in Rangamati, 
              a place full of natural amusement and here, here, you can find a man-made 
              lake surrounded by Hill called Kaptai Lake where you can take a ride by boat
               all over the day, a Buddhist Monastery here named Rajban Bihara, a high-quality
                handicrafts market made by the tribal of Rangamati.
              "
              user="Anindo Sarkar"
              comments="32"
              likes="10"
              time="3 days ago"
              communities="4 communities"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristSpots;
