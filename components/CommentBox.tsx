import { useMutation } from '@apollo/client';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import ReactTimeago from 'react-timeago';
import { INSERT_COMMENT } from '../graphql/mutations';
import { GET_POST_BY_POST_ID } from '../graphql/queries';
import Avatar from './Avatar';


type Props = {
  post: Post;
};

type FormData = {
  comment: string;
};


function CommentBox({ post }: Props) {
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

    const comments: Comment[] = post?.comment;
    console.log("Comments", comments);
  return (
    <div>
      {" "}
      <div className="mt-4  ">
        <p className="text-xs">
          Comment as <span className="text-red-500">{session?.user?.name}</span>
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full items-center space-y-2"
        >
          <textarea
            {...register("comment")}
            disabled={!session}
            className="w-full h-24 rounded-lg border border-gray-200  p-2 my-2 pl-4 outline-none disabled:bg-gray-50"
            placeholder={session ? "Write your comment" : "Sign in to comment"}
          />
          <button
            type="submit"
            className="w-1/2  font-semibold bg-blue-400 text-white p-2 rounded-3xl "
          >
            Comment
          </button>
        </form>
      </div>
      <div className="mt-7 ">
        <hr />
        {comments?.map((singleComment: any) => {
          return (
            <div key={singleComment.id}>
              <hr className=" border-1" />
              <div className="flex items-center py-3">
                <div className="mr-2 flex flex-col items-center justify-center">
                  <Avatar seed={"" + post.user_id} />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm font-semibold">
                        {singleComment?.usertable?.name}
                      </p>
                    </div>
                    <div>
                      <ReactTimeago
                        date={singleComment.created_at}
                        className="text-[15px] text-gray-500"
                      />
                    </div>
                  </div>
                  <div>{singleComment.text}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CommentBox