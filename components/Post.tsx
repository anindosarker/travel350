import { ArrowDownIcon, ArrowUpIcon, ChatBubbleOvalLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import ReactTimeago from "react-timeago";
import Avatar from "./Avatar";

type Props = {
  post: Post;
};
const vote = true;



function Post({post}: Props) {
  return (

      <Link href={`/post/`}>
      <div className="flex flex-row justify-center w-full py-4">
        <div className="focus:outline-none lg:w-1/2 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded-lg border-gray-200 border-2">
          {/* Header */}
          <div className="flex items-center justify-between space-x-2">
            <div className="flex justify-end space-x-4 items-center">
              <Avatar seed="abc" />
              <Link href={`/subreddit/`}>
                <span className="font-bold text-black hover:text-blue-400">
                   <p>Place : {post.places.name}</p>
        <p>City : {post?.places?.city?.name}</p>
                </span>
              </Link>{" "}
            </div>
            <p className="text-xs text-gray-400">
             ⛔️ Posted by u/{post.usertable.name} <ReactTimeago date={post.created_at}/>
            </p>
          </div>
          <hr className="py-2 mt-2"/>
          {/* Body */}
          <div className="py-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm font-light">From {post.start_date} to {post.end_date}</p>
            <p className="mt-2 text-sm font-light">{post.description}</p>
          </div>

          {/* Image */}
          {/* <img src={post.image} alt="" className="w-full" /> */}

          {/* Footer */}
          <div className="flex justify-start items-center space-x-4 text-gray-400" >
            {/* Votes */}
            <ArrowUpIcon
              className={`voteButtons hover:text-red-400 h-5 ${
                vote && "text-red-400"
              }`}
            />
            <p className="text-xs font-bold text-black">0</p>
            <ArrowDownIcon
              className={`voteButtons hover:text-blue-400 h-5 ${
                vote === false && "text-blue-400"
              }`}
            />
            <div className="flex items-center justify-evenly space-x-4">
              <ChatBubbleOvalLeftIcon className="h-5" />
              <p className="">12 Comments</p>
            </div>
          </div>
        </div>
      </div>
    </Link>






  );
}

export default Post;
