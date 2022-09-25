import React from "react";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const SingleForumPost = (props) => {
  const navigate = useNavigate();
  const sendtocheckpost = () => {
    navigate(
      "/home/touristplaces/communitylist/singleforum/singleforumpostpage"
    );
  };
  const imgprop = props.img;
  return (
    <div className="w-full shadow-md " onClick={sendtocheckpost}>
      <div>
        <img
          src={(imgprop == "img1" && img1) || (imgprop == "img2" && img2)}
          alt="img"
          className="w-full h-[200px] rounded-md"
        />
        <div className="flex justify-center">
          <div className="w-11/12">
            <div className="flex space-x-3 mt-4">
              <button className="bg-blue-300 px-2 py-1 rounded-md">
                {props.tag1}
              </button>
              <button className="bg-green-300 px-2 py-1 rounded-md">
                {props.tag2}
              </button>
            </div>
            <div className="flex justify-between w-full">
              <h2 className="font-bold text-[20px]">{props.title}</h2>
              <h2 className="text-[14px]">Published on: {props.publishdate}</h2>
            </div>
            <h2 className="text-[14px] text-slate-400">{props.summary}</h2>
            <div className="flex justify-between">
              <h2>{props.author}</h2>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleForumPost;
