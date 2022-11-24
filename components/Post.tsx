import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/solid";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { NewtonsCradle } from "@uiball/loaders";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ReactTimeago from "react-timeago";
import Avatar from "./Avatar";
import { useMutation, useQuery } from "@apollo/client";
import { GET_VOTE_BY_POST_ID } from "../graphql/queries";
import { ADD_VOTE } from "../graphql/mutations";

import { SubmitHandler, useForm } from "react-hook-form";
import { INSERT_COMMENT } from "../graphql/mutations";
import { GET_POST_BY_POST_ID } from "../graphql/queries";
import Router from "next/router";
import { compact } from "@apollo/client/utilities";
import CommentBox from "./CommentBox";

type Props = {
  post: Post;
};
type FormData = {
  comment: string;
};

function Post({ post }: Props) {
    //votes
  const [vote, setVote] = useState<boolean>();
 
  const { data, loading, error } = useQuery(GET_VOTE_BY_POST_ID, {
    variables: {
      id: post?.id,
    },
  });

  const [addVote] = useMutation(ADD_VOTE, {
    refetchQueries: [GET_VOTE_BY_POST_ID, "getVoteUsingVote_post_id_fkey"],
  });

  const upVote = async (isUpvote: boolean) => {
    if (vote && isUpvote) {
      return;
    }
    if (vote === false && !isUpvote) return;

  

    await addVote({
      variables: {
        post_id: post.id,
        user_id: 1,
        upvote: isUpvote,
      },
    });
  };

  useEffect(() => {
    const votes: Vote[] = data?.getVoteUsingVote_post_id_fkey;

    //latest vote as we sorted
    const vote = votes?.find((vote) => vote.user_id == 1)?.upvote;

    setVote(vote);
  }, [data]);

  const displayVotes = (data: any) => {
    const votes: Vote[] = data?.getVoteUsingVote_post_id_fkey;
    const displayNumber = votes?.reduce(
      (total, vote) => (vote.upvote ? (total += 1) : (total -= 1)),
      0
    );


    if (displayNumber === 0) {
      return votes[0]?.upvote ? 1 : -1;
    }

    return displayNumber;
  };



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
              onClick={() => upVote(true)}
              className={`voteButtons hover:text-red-400 h-5 ${
                vote && "text-red-400"
              }`}
            />

            <p className="text-xs font-bold text-black">{displayVotes(data)}</p>

            <ArrowDownIcon
              onClick={() => upVote(false)}
              className={`voteButtons hover:text-blue-400 h-5 ${
                vote === true && "text-blue-400"
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
