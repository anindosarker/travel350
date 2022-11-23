import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/solid";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { NewtonsCradle } from "@uiball/loaders";
import Link from "next/link";
import React, { useEffect } from "react";
import ReactTimeago from "react-timeago";
import Avatar from "./Avatar";
import { useSession } from "next-auth/react";

import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { INSERT_COMMENT } from "../graphql/mutations";
import { GET_POST_BY_POST_ID } from "../graphql/queries";
import toast from "react-hot-toast";
import Router from "next/router";
import { compact } from "@apollo/client/utilities";
import CommentBox from "./CommentBox";

type Props = {
  post: Post;
};
type FormData = {
  comment: string;
};
const vote = true;

function Post({ post }: Props) {

  

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center w-full py-4">
        <div className="focus:outline-none  lg:w-1/2  lg:mb-0 mb-7 bg-white p-6 rounded-lg border-gray-200 border-2">
          {/* Header */}
          <Link href={`/post/${post?.id}`}>
            <div className="flex items-center justify-between space-x-2">
              <div className="flex justify-end space-x-4 items-center">
                <Avatar seed={post?.usertable?.name} />
                <span className="font-bold text-black ">
                  <Link href={`/places/${post?.places?.name}`}>
                    <p className="hover:text-blue-400 cursor-pointer">Place : {post?.places?.name}</p>
                  </Link>{" "}
                  <Link href={`/cities/${post?.places?.city?.name}`}>
                    <p className="hover:text-blue-400 cursor-pointer">City : {post?.places?.city?.name}</p>
                  </Link>
                </span>
              </div>

              <div className="flex flex-col text-right">
                <p className="text-sm text-gray-500">
                   Posted by u/{post?.usertable?.name}{" "}
                  <ReactTimeago date={post?.created_at} />
                </p>
                <Link href={`PostEdit/${post?.id}`}>
                  <div className="mt-4 flex justify-end" >
                    <PencilSquareIcon className="w-5 cursor-pointer" />
                    <button className="hover:bg-gray-200 p-1 rounded-lg ">
                      Edit
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </Link>
          <hr className="py-2 mt-2" />
          {/* Body */}
          <div className="py-4">
            <h2 className="text-xl font-semibold">{post?.title}</h2>
            <p className="mt-2 text-sm font-light">
              From {post?.start_date} to {post?.end_date}
            </p>
            <p className="mt-2 text-sm font-light">{post?.description}</p>
          </div>

          {/* Image */}
          {/* <img src={post.image} alt="" className="w-full" /> */}

          {/* Footer */}
          <div className="flex justify-start items-center space-x-4 text-gray-400">
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
              <p className="cursor-pointer">{post?.comment?.length} Comments</p>
            </div>
          </div>
          
          <CommentBox post={post} />
 
        </div>
        
        
       
      </div>
    </div>
  );
}

export default Post;
