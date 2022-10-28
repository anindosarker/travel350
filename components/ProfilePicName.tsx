import React from "react";
import LikeComment from "./LikeComment";

const ProfilePicName = () => {
  return (
    <div>
      {" "}
      <div className="flex items-center border-b border-gray-200 pb-6">
        <div className="w-12 h-12 bg-gray-300 rounded-full flex flex-shrink-0">

        </div>
        <div className="flex items-start justify-between w-full">
          <div className="pl-3 w-full">
            <p className="focus:outline-none text-sm leading-normal pt-2 text-gray-500">
              Anindo Magi
            </p>
          </div>
          <LikeComment />
        </div>
      </div>
    </div>
  );
};

export default ProfilePicName;
