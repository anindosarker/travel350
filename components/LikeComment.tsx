import React from "react";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";

const LikeComment = () => {
  return (
    <div className="flex text-gray-600 ">
      <div className="px-1 flex items-center">
        <HandThumbUpIcon className="w-4" />
        <p className="p-1 text-sm">69</p>
      </div>
      <div className="px-1 flex items-center ">
        <ChatBubbleOvalLeftIcon className="w-4 " />
        <p className="p-1 text-sm">420</p>
      </div>
    </div>
  );
};

export default LikeComment;
