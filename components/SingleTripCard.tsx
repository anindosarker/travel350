import React from "react";

const SingleTripCard = () => {
  return (
    <div className="w-[500px] h-[350px] bg-gray-200 rounded-md">
      <div>
        <div>
          <img
            className="w-full h-[200px] rounded-md"
            src="https://billfish.org/wp-content/uploads/2019/08/placeholder-image.jpg"
            alt=""
          />
        </div>
        <div className="mt-3 flex justify-center">
          <div className="w-10/12 space-y-3">
            <div className="w-full flex justify-between">
              <h1>Summer Trip</h1>
              <h2>by Debasish123</h2>
            </div>
            <div className="flex justify-between">
              <h1>3 days</h1>
              <h2>Starts from 10 nov,2022</h2>
            </div>
            <h1>3 activities</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTripCard;
