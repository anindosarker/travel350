import React from "react";

const PlaceCard = ({ place }) => {
  return (
    <div className="w-[600px] pb-3 shadow-md rounded-md flex justify-center mb-5 bg-gray-300">
      <div className="w-11/12 bg-gray-300">
        <h1>Name of the place: {place.name}</h1>
        <h1>Description:</h1>
        <h1>{place.description}</h1>
        <h1>created at: {place.created_at}</h1>
      </div>
    </div>
  );
};

export default PlaceCard;
