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

type Props = {
  post: Post;
};
type FormData = {
  comment: string;
};
const vote = true;

function Post({ post }: Props) {
  // if (!post) {
  //   return (
  //     <div className="flex w-full items-center justify-center p-10 text-xl">
  //       <NewtonsCradle size={50} />
  //     </div>
  //   );
  // }
  const { data: session } = useSession();
  const [addComment] = useMutation(INSERT_COMMENT, {
    refetchQueries: [GET_POST_BY_POST_ID, "getPost"],
  });

  useEffect(() => {
    console.log(post);
  }, [post]);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    //post comment here

    console.log(data);
    console.log(post);

    const notification = toast.loading("Posting your comment...");
    await addComment({
      variables: {
        post_id: post.id,

        user_id: 1,
        text: data.comment,
      },
    });
    setValue("comment", "");
    toast.success("Comment posted", {
      id: notification,
    });
    console.log(data);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full py-4">
        <div className="focus:outline-none  lg:w-1/2  lg:mb-0 mb-7 bg-white p-6 rounded-lg border-gray-200 border-2">
          {/* Header */}
          <Link href={`/post/${post?.id}`}>
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
              <p className=""> Comments</p>
            </div>
          </div>
        </div>
        <div className="-mt-1 rounded-b-lg border-t-0 border-2 border-gray-200 bg-white p-6  w-1/2  ">
          <p className="text-xs">
            Comment as{" "}
            <span className="text-red-500">{session?.user?.name}</span>
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full items-center space-y-2"
          >
            <textarea
              {...register("comment")}
              disabled={!session}
              className="w-full h-24 rounded-lg border border-gray-200  p-2 my-2 pl-4 outline-none disabled:bg-gray-50"
              placeholder={
                session ? "Write your comment" : "Sign in to comment"
              }
            />
            <button
              type="submit"
              className="w-1/2  font-semibold bg-blue-400 text-white p-2 rounded-3xl "
            >
              Comment
            </button>
          </form>
        </div>
        <div className="bg-white -my-5 rounded-b-md border-t-0 border-2 border-gray-200 py-5 px-10 w-1/2  ">
          <hr className="py-2" />
          {post?.comment.map((singleComment: any) => {
            return (
              <div key={singleComment.id}>
                <hr />
                <div className="flex items-center py-2">
                  <div className="mr-2 flex flex-col items-center justify-center">
                    <Avatar seed={"" + post.user_id} />
                  </div>
                  <div className="flex flex-col">
                    <div>
                      <p className="text-[10px]">{session?.user?.name}</p>
                    </div>
                    <div>{singleComment.text}</div>
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Post;
