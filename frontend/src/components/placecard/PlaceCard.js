import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const PlaceCard = (props) => {
  const navigate = useNavigate();
  const [placetitle, setPlaceTitle] = useState("");
  useEffect(() => {
    setPlaceTitle(props.title);
  });
  const handlesinglespot = () => {
    navigate("/home/touristplaces/singlespots", { state: { placetitle } });
  };
  const handlecommunitylist = () => {
    navigate("/home/touristplaces/communitylist");
  };
  return (
    <div className="mt-5 w-12/12 shadow-md hover:shadow-xl p-2 rounded-md  flex flex-col">
      <img
        src={props.img}
        alt="img"
        className="h-[300px] w-full object-cover"
      />
      <div className="ml-5 mt-2">
        <div className="flex space-x-4">
          <button className="bg-blue-600 px-2 rounded-lg">{props.tag1}</button>
          <button className="bg-purple-600 px-2 rounded-lg">
            {props.tag2}
          </button>
          <button className="bg-green-600 px-2 rounded-lg">{props.tag3}</button>
        </div>
        <h2 className="font-bold text-xl">{props.title}</h2>
        <h2 className="font-lighter text-[12px] text-gray-600">
          {props.summary}
        </h2>
        <div className="flex justify-between">
          <h2>{props.user}</h2>
          <div className="flex mr-5">
            <FontAwesomeIcon icon={faComment} className="text-slate-400" />
            <h2>{props.comments}</h2>
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="text-slate-400 ml-5"
            />
            <h2>{props.likes}</h2>
          </div>
        </div>
        <h2 className="text-[12px] ml-3 ">{props.time}</h2>
        <div className="flex justify-between">
          <div
            className="rounded-md bg-green-300 w-fit p-2 cursor-pointer"
            onClick={handlecommunitylist}
          >
            {props.communities}
          </div>
          <h2
            className="rounded-md bg-blue-300 w-fit p-2 cursor-pointer"
            onClick={handlesinglespot}
          >
            learn about this place
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
