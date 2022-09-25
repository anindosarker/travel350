import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const SingleSpot = (props) => {
  return (
    <div className="w-full flex flex-col mt-6">
      <div className="mx-auto w-11/12">
        <h2>{props.user}</h2>
        <div className="flex justify-between">
          <h2>{props.time}</h2>
          <div className="flex ">
            <FontAwesomeIcon icon={faComment} className="text-slate-400 ml-5" />
            <h2>{props.comments}</h2>
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="text-slate-400 ml-5"
            />
            <h2>{props.likes}</h2>
          </div>
        </div>
        <h2 className="text-2xl font-bold mt-4">{props.title}</h2>
        <div className="space-x-4">
          <button className="bg-blue-600 px-2 rounded-lg">{props.tag1}</button>
          <button className="bg-purple-600 px-2 rounded-lg">
            {props.tag2}
          </button>
          <button className="bg-green-600 px-2 rounded-lg">{props.tag3}</button>
        </div>
        <img
          src={props.img}
          alt="img"
          className="mt-6 w-full h-[400px] rounded-md"
        />
        <h2 className="mt-5 w-11/12 mx-auto text-[14px] opacity-[0.65] leading-6">
          {props.summary}
        </h2>
        <div className="mt-10 w-11/12 h-[400px] ml-6 space-y-3 flex flex-col">
          <h2 className="text-[20px]">Comments</h2>
          <div>
            <textarea className="w-11/12 border-2 rounded-md h-[100px]" />
            <button className="bg-red-400 w-2/12 py-2 rounded-lg ml-auto">
              Comment
            </button>
          </div>
          <div className="mt-7 w-8/12 space-y-4">
            <div className="border-2 border-gray-300 rounded-md">
              <h2 className="ml-5 mt-4">{props.comment1}</h2>
              <h2 className="mt-6 text-[14px]">{props.commentuser1name}</h2>
              <h2 className="text-[12px]">{props.commentuser1time}</h2>
            </div>
            <div className="border-2 border-gray-300 rounded-md">
              <h2 className="ml-5 mt-4">{props.comment2}</h2>
              <h2 className="mt-6 text-[14px]">{props.commentuser2name}</h2>
              <h2 className="text-[12px]">{props.commentuser2time}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSpot;
