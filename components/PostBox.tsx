import { LinkIcon, PhotoIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import React, { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import client from "../apollo-client";
import { toast } from "react-hot-toast";
import CreatePost from "./CreatePost";
import { ChangeEvent } from "react";
import { Database } from "../utils/database.types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

type Props = {
  subreddit?: string;
};

type Profiles = Database["public"]["Tables"]["profiles"]["Row"];

function PostBox({ subreddit }: Props) {
  //image
  const supabase = useSupabaseClient<Database>();
  const [avatar_url, setAvatarUrl] = useState<Profiles["avatar_url"]>(null);

  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    let file;

    if (e.target.files) {
      file = e.target.files[0];
    }

    const { data, error } = await supabase.storage
      .from("images")
      .upload("public/" + file?.name, file as File);

    if (data) {
      console.log("Path", data.path);
      setAvatarUrl(
        "https://krgxdqkqhuqqerpwxuje.supabase.co/storage/v1/object/public/images/" +
          data.path
      );
    } else if (error) {
      console.log(error);
    }
  };

  //image end


  const { data: session } = useSession();
  const [placeslist, setplaceslist] = useState([{ place: "" }]);

  const [imageBoxOpen, setImageBoxOpen] = useState<boolean>(false);
  const [isShown, setIsShown] = useState(false);

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async (formData) => {
    console.log(formData);
    const notification = toast.loading("Creating new post...");
  });

  return (
    <div className="flex flex-row justify-center w-full mt-5">
      <form className="focus:outline-none lg:w-1/2 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded-lg border-gray-200 border-2 ">
        <div>Share Trip Expereinces</div>

        <div className="flex items-center space-x-3">
          <input
            {...register("postTitle", { required: true })}
            type="text"
            disabled={!session}
            className="rounded-md flex-1 bg-gray-50 p-2 pl-5 outline-none"
            placeholder={
              session
                ? subreddit
                  ? `Create a post in r/${subreddit}`
                  : `Share your trip experience`
                : `Sign in you fool`
            }
          />

          <PhotoIcon
            onClick={() => setImageBoxOpen(!imageBoxOpen)}
            className={`h-6 text-gray-300 cursor-pointer ${
              imageBoxOpen && `text-blue-300`
            }`}
          />
        </div>
        <div className="flex flex-col py-2">
          {/* Date */}

          <div className="flex items-center px-2">
            <p className=" min-w-[90px]">Start Date</p>
            <input
              type="date"
              {...register("postBody")}
              className="m-2 bg-blue-50 p-2 outline-none"
              placeholder="Text (optional)"
            />

            <p className=" min-w-[90px]">End Date</p>
            <input
              type="date"
              {...register("postBody")}
              className="m-2 bg-blue-50 p-2 outline-none"
              placeholder="Text (optional)"
            />
          </div>

          {/* Location*/}
          {!subreddit && (
            <div className="flex items-center px-2">
              <p className=" min-w-[90px]">Location</p>
              <input
                type="text"
                {...register("location", { required: true })}
                className="flex-1 m-2 bg-blue-50 p-2 outline-none"
                placeholder="i.e. React"
              />
            </div>
          )}
          {/* Body */}
          <div className="flex items-center px-2">
            <p className=" min-w-[90px]">Details</p>
            <input
              type="text"
              {...register("postBody")}
              className="flex-1 m-2 bg-blue-50 p-2 outline-none"
              placeholder="Text (optional) box lomba hobe"
            />
          </div>

          {/* imagebox */}
          {imageBoxOpen && (
            <div className="flex items-center px-2">
              <p className=" min-w-[90px]">Image URL:</p>
              <input
                type="text"
                {...register("postImage")}
                className="flex-1 m-2 bg-blue-50 p-2 outline-none"
                placeholder="optional"
              />

              {/* tapos */}
              <div>
                <img src={avatar_url} />

                <label htmlFor="file_input">Image File</label>
                <input
                  id="file_input"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    handleUpload(e);
                  }}
                />
              </div>
            </div>
          )}

          {/* Errors */}
          {Object.keys(errors).length > 0 && (
            <div className="space-y-2 p-2 text-red-500">
              {errors.postTitle?.type === "required" && (
                <p>- A post title is required</p>
              )}

              {errors.subreddit?.type === "required" && (
                <p>-Subreddit is required</p>
              )}
            </div>
          )}
        </div>
        <div>
          <button
            onClick={onSubmit}
            type="submit"
            className="w-full rounded-full bg-blue-400 p-2 text-white"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostBox;
