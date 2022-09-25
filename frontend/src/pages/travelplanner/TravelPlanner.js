import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";

const TravelPlanner = () => {
  const [checklistopen, setchecklistOpen] = useState(false);
  const [boardingopen, setboardingopen] = useState(false);
  const [addboardingbox, setboardingbox] = useState(false);
  const [itineraryopen, setitineraryopen] = useState(false);
  const [addtaskstatus, setaddtaskstatus] = useState(false);

  const handleaddtaskstatus = () => {
    setaddtaskstatus(!addtaskstatus);
  };
  const handlechecklist = () => {
    setchecklistOpen(!checklistopen);
  };

  const handleboarding = () => {
    setboardingopen(!boardingopen);
  };
  return (
    <div className="bg-[url('img.jpg')]">
      <Navbar />
      <div className="flex justify-center mt-[100px] pb-[60px]">
        <div className="text-white text-[22px]">
          <h2>Travel Planner</h2>
          <h2>Put together a trip wishlist to create a detailed itinerary.</h2>
        </div>
      </div>
      <div className="w-full bg-slate-300 flex justify-center">
        <div className="flex-col w-9/12 space-y-8">
          <div className="mt-5">
            <label>Enter your travel planner package name:</label>
            <input type="text" className="w-7/12 shadow-md hover:shadow-xl" />
            <button className="ml-2 px-2 py-1 rounded-md bg-blue-600 text-white">
              Done
            </button>
          </div>
          <div className="w-full mt-6 bg-white rounded-md">
            <div
              className="w-full border-1 hover:shadow-md rounded-md mb-2"
              onClick={handlechecklist}
            >
              Travel Checklist
            </div>
            {checklistopen && (
              <div className="flex justify-between ">
                <div className="w-4/12 bg-slate-100 shadow-sm hover:shadow-lg m-2 rounded-md">
                  <h2>5 of 9 tasks completed</h2>
                  <button
                    className="w-full text-white rounded-sm bg-blue-600 mt-[80px]"
                    onClick={handleaddtaskstatus}
                  >
                    Add task
                  </button>
                  {addtaskstatus && (
                    <div className="mt-3 flex-col">
                      <div className="flex justify-between">
                        <h2>Enter Task:</h2>
                        <input
                          placeholder="Enter task here"
                          type="text"
                          className="border-2"
                        />
                      </div>

                      <div className="flex justify-between">
                        <h2>Enter Date: </h2>
                        <input type="date" />
                      </div>
                      <div className="flex justify-center">
                        <button className="w-6/12 bg-blue-600 rounded-md text-white">
                          Done
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-4/12 bg-slate-100 shadow-sm hover:shadow-lg m-2 rounded-md">
                  <h2>Upcoming tasks</h2>
                  <div className="flex">
                    <input type="checkbox" />
                    <h2 className="ml-2">bring winter clothes</h2>
                    <h2 className="text-gray-500 text-[14px] mt-1">
                      30/1/2020
                    </h2>
                  </div>
                  <div className="flex">
                    <input type="checkbox" />
                    <h2 className="ml-2">bring adapters</h2>
                    <h2 className="text-gray-500 text-[14px] mt-1">
                      25/1/2020
                    </h2>
                  </div>
                  <div className="flex">
                    <input type="checkbox" />
                    <h2 className="ml-2">bring passport</h2>
                    <h2 className="text-gray-500 text-[14px] mt-1">
                      30/1/2020
                    </h2>
                  </div>
                </div>
                <div className="w-4/12 bg-slate-100 border-1 shadow-sm hover:shadow-lg m-2 rounded-md space-y-2">
                  <h2>Completed</h2>
                  <h2>Applied for visa</h2>
                  <h2>print boarding pass</h2>
                  <h2>exchange money</h2>
                  <h2>emergency docs</h2>
                </div>
              </div>
            )}
          </div>
          <div className="w-full  mt-6 bg-white rounded-md flex flex-col pb-6">
            <div className="flex justify-center" onClick={handleboarding}>
              <h2 className="font-bold text-gray-600 ">Boarding pass</h2>
            </div>
            {boardingopen && (
              <div className="flex justify-center">
                <div className="w-8/12 mt-10 flex-col border-2 border-slate-600 p-2 rounded-md shadow-md">
                  <div className="flex justify-center mt-2">
                    <h2>Boarding Pass 1</h2>
                  </div>
                  <div className="w-full flex justify-between mt-6">
                    <div className="w-9/12 border-2 flex flex-col justify-center rounded-md">
                      <div className="w-11/12 flex justify-between mx-auto">
                        <h2>From</h2>
                        <h2>Travel Time</h2>
                        <h2>To</h2>
                      </div>
                      <div className="w-11/12 flex justify-between mx-auto">
                        <h2>BANGLADESH</h2>
                        <h2>1.5 hrs</h2>
                        <h2>INDIA</h2>
                      </div>
                      <div className="w-11/12 flex justify-between text-[12px] mx-auto mt-0">
                        <h2>Mon, Feb 1</h2>
                        <h2>Tue, Feb 2</h2>
                      </div>
                      <div className="w-11/12 flex justify-between mx-auto font-bold">
                        <h2>11:45 AM</h2>
                        <h2>01:15 PM</h2>
                      </div>
                      <div className="w-11/12 flex justify-between mx-auto text-[12px]">
                        <h2>Departure Time</h2>
                        <h2>Arrival Time</h2>
                      </div>
                    </div>
                    <div className="w-[125px] border-2 shadow-md flex-col rounded-md">
                      <h2 className="ml-3 mt-2">LH 797</h2>
                      <h2 className="ml-3 text-[12px]">Flight No.</h2>
                      <h2 className="mt-3 ml-3 font-bold">T3</h2>
                      <h2 className="ml-3 text-[12px]">Departure Terminal</h2>
                      <h2 className="text-green-600 text-[14px] mt-4 ml-3">
                        on schedule
                      </h2>
                    </div>
                  </div>
                  <div className="w-full flex justify-around">
                    <button className="bg-blue-600 px-2 py-1 rounded-md text-white mt-2">
                      Edit
                    </button>
                    <button className="bg-orange-600 px-2 py-1 rounded-md text-white mt-2">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )}
            <div className="flex justify-center">
              <button className="mt-2 bg-blue-600 px-2 py-1 rounded-md w-[200px] text-white">
                Add Boarding Pass
              </button>
            </div>
          </div>
          <div className="w-full pb-6 mt-6 bg-white rounded-md flex justify-center">
            <div className="w-11/12 flex-col">
              <div className="flex justify-center">
                <h2>Planned Route</h2>
              </div>
              <div className="w-full shadow-md flex justify-between mt-3">
                <div className="w-3/12  flex-col">
                  <div className="w-full hover:bg-slate-300">
                    <h2 className="text-[14px]">MON, FEB 1</h2>
                  </div>
                  <div className="w-full hover:bg-slate-300">
                    <h2 className="text-[14px]">TUE, FEB 2</h2>
                  </div>
                  <div className="w-full hover:bg-slate-300">
                    <h2 className="text-[14px]">WED, FEB 3</h2>
                  </div>
                  <div className="w-full hover:bg-slate-300">
                    <h2 className="text-[14px]">THU, FEB 4</h2>
                  </div>
                  <div className="mt-8 flex justify-center pb-6">
                    <button className="w-8/12 bg-slate-400 px-2 rounded-md">
                      Edit Trip dates
                    </button>
                  </div>
                </div>
                <div className="w-9/12 shadow-md flex-col">
                  <div className="ml-6">
                    <div className="px-2 hover:shadow-lg max-w-fit">
                      <h2>Monday, February 1st, 2021</h2>
                      <h2 className="text-[12px] text-slate-400 font-bold cursor-pointer">
                        Add subheading
                      </h2>
                    </div>
                    <div className="w-9/12 flex justify-between text-[14px]">
                      <h2>From</h2>
                      <h2>Travel Time</h2>
                      <h2>To</h2>
                    </div>
                    <div className="w-9/12 flex justify-between text-[14px] bg-slate-200">
                      <h2>Mumbai Airport</h2>
                      <h2>4 hr 2 min drive</h2>
                      <h2>ITC Maratha Mumbai</h2>
                    </div>
                    <div className="w-11/12 mt-3">
                      <div className="w-full flex justify-between">
                        <div className="flex space-x-2">
                          <h2>From</h2>
                          <input className="border-2 rounded-md" />
                        </div>
                        <div className="flex space-x-2">
                          <h2>To</h2>
                          <input className="border-2 rounded-md" />
                        </div>
                      </div>
                      <div className="flex space-x-2 mt-3">
                        <h2>Travel Time</h2>
                        <input className="border-2 rounded-md" />
                      </div>
                      <button className="bg-blue-600 px-2 py-1 rounded-md text-white mb-6">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-6 bg-white rounded-md flex-col">
            <div className="flex justify-center">
              <h2 className="mt-3">Other Notes</h2>
            </div>
            <div className="w-full  mt-3 flex justify-center mb-10">
              <div className="w-11/12 flex justify-between">
                <div className="w-3/12 shadow-md border-t-2 hover:shadow-xl">
                  <div className="w-full hover:bg-slate-200 cursor-pointer">
                    <h2>Visa docs</h2>
                  </div>
                  <div className="w-full hover:bg-slate-200 cursor-pointer">
                    <h2>Transportation</h2>
                  </div>
                </div>
                <div className="w-9/12 border-t-2 shadow-md hover:shadow-xl flex-col">
                  <h2 className="ml-6 mt-3">Visa docs</h2>
                  <textarea className="mt-2 ml-6 w-10/12 border-t-2 shadow-md hover:shadow-xl h-[160px]" />
                  <button className="text-white bg-blue-600 px-2 py-1 rounded-md ml-4">
                    Done
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

export default TravelPlanner;
