import { PhotoIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import client from "../apollo-client";
import { toast } from "react-hot-toast";
import {
  GET_CITY_BY_NAME,
  GET_CITY_LIST,
  GET_PLACES_BY_NAME,
  GET_PLACES_LIST,
  GET_POST_BY_POST_ID,
  GET_POST_LIST,
} from "../graphql/queries";
import { INSERT_PLACE, UPDATE_POST } from "../graphql/mutations";

type Props = {
  post: Post;
};

type FormData = {
  postTitle: string;
  startDate: string;
  endDate: string;
  place: string;
  city: string;
  description: string;
  postImage: string;
};

function EditPostBox({ post }: Props) {
  const { data: session } = useSession();

  const { loading, data: cityData, error } = useQuery(GET_CITY_LIST);

  const cities: City[] = cityData?.getCityList;

  const [addPlace] = useMutation(INSERT_PLACE);
  const [updatePost] = useMutation(UPDATE_POST, {
    refetchQueries: () => [
      {
        query: GET_POST_BY_POST_ID,
        variables: {
          id: post.id,
        },
      },
    ],
  });

  const [imageBoxOpen, setImageBoxOpen] = useState<boolean>(false);

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  // Onsubmit edit post handler
  const onSubmit = handleSubmit(async (formData) => {
    const notification = toast.loading("Creating new post...");

    try {
      const {
        data: { getPlacesByPlaceName: placeNameData },
      } = await client.query({
        query: GET_PLACES_BY_NAME,
        variables: {
          name: formData.place,
        },
      });

      let placeExists = true;
      if (placeNameData === null) {
        placeExists = false;
      }

      if (!placeExists) {
        //create new place

        const {
          data: { insertPlaces: newPlace },
        } = await addPlace({
          variables: {
            name: formData.place,
            description: formData.description,
            city_id: formData.city,
          },
        });

     
        const image = formData.postImage || "";

        const {
          data: { updatePost: newUpdatedPost },
        } = await updatePost({
          variables: {
            title: formData.postTitle,
            place_id: newPlace.id,
            start_date: formData.startDate,
            end_date: formData.endDate,
            description: formData.description,
            id: post.id,
            user_id: 1,
          },
        });

      } else {
        //use existing

        const image = formData.postImage || "";

        const {
          data: { updatePost: newUpdatedPost },
        } = await updatePost({
          variables: {
            title: formData.postTitle,
            place_id: placeNameData.id,
            start_date: formData.startDate,
            end_date: formData.endDate,
            description: formData.description,
            id: post.id,
            user_id: 1,
          },
        });

      }

      setValue("city", "");
      setValue("place", "");
      setValue("description", "");
      setValue("startDate", "");
      setValue("endDate", "");
      setValue("postTitle", "");
      setValue("postImage", "");

      toast.success("New Post created!", {
        id: notification,
      });
    } catch (error) {
      toast.error("GG! Something went wrong!", {
        id: notification,
      });
    }
  });

  return (
    <div className="flex flex-row justify-center w-full mt-5">
      <form
        onSubmit={onSubmit}
        className="focus:outline-none lg:w-1/2 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded-lg border-gray-200 border-2 "
      >
        <div>Share Trip Expereinces</div>

        <div className="flex items-center space-x-3">
          <input
            {...register("postTitle", { required: true })}
            type="text"
            disabled={!session}
            className="rounded-md flex-1 bg-gray-50 p-2 pl-5 outline-none"
            placeholder="Add Title"
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

          <div className="flex items-center justify-between px-2">
            <p className=" min-w-[90px]">Start Date</p>
            <input
              type="date"
              {...register("startDate")}
              className="m-2 bg-blue-50 p-2 outline-none"
              placeholder="Text (optional)"
            />

            <p className=" min-w-[90px]">End Date</p>
            <input
              type="date"
              {...register("endDate")}
              className="m-2 bg-blue-50 p-2 outline-none"
              placeholder="Text (optional)"
            />
          </div>

          {/* Location*/}

          <div className="flex items-center justify-between px-2">
            <div className="flex items-center">
              <p className=" min-w-[90px]">Place</p>
              <input
                type="search"
                {...register("place", { required: true })}
                className="flex-1 m-2 bg-blue-50 p-2 outline-none"
                placeholder="i.e. React"
              />
            </div>

            <div className="flex items-center">
              <p className=" min-w-[90px]">City</p>
              <select
                {...register("city")}
                className="flex-1 m-2 bg-blue-50 p-2 outline-none"
              >
                {cities?.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Body */}
          <div className="flex items-center px-2">
            <p className=" min-w-[90px]">Details</p>
            <input
              type="text"
              {...register("description")}
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
            </div>
          )}

          {/* Errors */}
          {Object.keys(errors).length > 0 && (
            <div className="space-y-2 p-2 text-red-500">
              {errors.postTitle?.type === "required" && (
                <p>- A post title is required</p>
              )}

              {errors.place?.type === "required" && (
                <p>At least add the spot name...</p>
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
            Update Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditPostBox;
