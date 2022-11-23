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
import { GET_VOTE_BY_POST_ID, GET_VOTE_BY_USER_ID } from "../graphql/queries";
import { ADD_VOTE } from "../graphql/mutations";

type Props = {
  post: Post;
};

function Post({ post }: Props) {
  const [vote, setVote] = useState<boolean>();

  const { data, loading, error } = useQuery(GET_VOTE_BY_POST_ID, {
    variables: {
      id: post?.id,
    },
  });
  console.log(error);
  console.log("Vote query by id", data);

  const [addVote] = useMutation(ADD_VOTE, {
    refetchQueries: [GET_VOTE_BY_POST_ID, "getVoteUsingVote_post_id_fkey"],
  });

  const upVote = async (isUpvote: boolean) => {
   
    if (vote && isUpvote) {
      return;
    }
    if (vote === false && !isUpvote) return;

    console.log("voting...", isUpvote);

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
    const vote = votes?.find(
      (vote) => vote.user_id == 1
    )?.upvote;

    setVote(vote);
    console.log("Vote", vote);
    
  }, [data]);

  const displayVotes = (data: any) => {
    const votes: Vote[] = data?.getVotesByPostId;
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
    <Link href={`/post/${post?.id}`}>
      <div className="flex flex-row justify-center w-full py-4">
        <div className="focus:outline-none lg:w-1/2 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded-lg border-gray-200 border-2">
          {/* Header */}
          <div className="flex items-center justify-between space-x-2">
            <div className="flex justify-end space-x-4 items-center">
              <Avatar seed={post?.usertable?.name} />
              <span className="font-bold text-black hover:text-blue-400">
                <Link href={`/places/${post?.places?.name}`}>
                  <p>Place : {post?.places?.name}</p>
                </Link>{" "}
                <Link href={`/cities/${post?.places?.city?.name}`}>
                  <p>City : {post?.places?.city?.name}</p>
                </Link>
              </span>
            </div>
            <div className="flex flex-col text-right">
              <p className="text-xs text-gray-400">
                ⛔️ Posted by u/{post?.usertable?.name}{" "}
                <ReactTimeago date={post?.created_at} />
              </p>
              <Link href={`PostEdit/${post?.id}`}>
                <div className="mt-4 flex justify-end">
                  <PencilSquareIcon className="w-5 cursor-pointer" />
                  <button className="hover:bg-gray-200 p-1 rounded-lg ">
                    Edit
                  </button>
                </div>
              </Link>
            </div>
          </div>
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
