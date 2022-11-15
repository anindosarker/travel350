import React from "react";
import Hashtags from "./Hashtags";
import LikeComment from "./LikeComment";
import ProfilePicName from "./ProfilePicName";

const ForumPost = () => {
  return (
    <div className="flex flex-row justify-center w-full">
      <div className="focus:outline-none lg:w-1/2 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded-lg border-gray-200 border-2">
        <ProfilePicName />

        <div className="px-2">
          <p className="pt-3 focus:outline-none text-xl font-medium leading-5 text-gray-800">
            Post Title
          </p>
          <p className="focus:outline-none text-sm leading-5 py-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            repudiandae quisquam velit cumque? Distinctio corporis animi
            voluptatem error at dolore nemo. Aspernatur omnis nostrum quod vitae
            nemo tempora quasi quidem?
          </p>
          <div className="flex justify-center">
            <Hashtags />
            <Hashtags />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumPost;
