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
  GET_POST_LIST,
} from "../graphql/queries";
import { INSERT_PLACE, INSERT_POST } from "../graphql/mutations";

type Props = {
  subreddit?: string;
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

function PostBox({ subreddit }: Props) {
  const { data: session } = useSession();

  const { loading, data: cityData, error } = useQuery(GET_CITY_LIST);

  const cities: City[] = cityData?.getCityList;

  const [addPlace] = useMutation(INSERT_PLACE);
  const [addPost] = useMutation(INSERT_POST, {
    refetchQueries: [GET_POST_LIST, "getPostList"],
  });

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

    try {
      const {
        data: { getPlacesByPlaceName: placeNameData },
      } = await client.query({
        query: GET_PLACES_BY_NAME,
        variables: {
          name: formData.place,
        },
      });

      const placeExists = placeNameData.length > 0;
      console.log("place exists", placeExists);
      console.log(placeNameData);

      const {
        data: { getCityByCityName: cityNameData },
      } = await client.query({
        query: GET_CITY_BY_NAME,
        variables: {
          name: formData.city,
        },
      });

      console.log(formData.city);

      const cityExists = cityNameData.length > 0;
      console.log("city exists", cityExists);
      console.log(cityNameData);

      if (!placeExists) {
        //create new place
        console.log("Creating new place -> ");

        const {
          data: { insertPlaces: newPlace },
        } = await addPlace({
          variables: {
            name: formData.place,
            description: formData.description,
            city_id: cityNameData.id,
          },
        });

        console.log("Creating new post with new place", formData);

        const image = formData.postImage || "";

        const {
          data: { insertPost: newPost },
        } = await addPost({
          variables: {
            description: formData.description,
            place_id: newPlace.id,
            title: formData.postTitle,
            user_id: 1,
            end_date: formData.endDate,
            start_date: formData.startDate,
          },
        });

        console.log("New post added", newPost);
      } else {
        //use existing
        console.log("Using existing");
        console.log(placeNameData);

        const image = formData.postImage || "";

        const {
          data: { insertPost: newPost },
        } = await addPost({
          variables: {
            description: formData.description,
            place_id: placeNameData[0].id,
            title: formData.postTitle,
            user_id: 1,
            end_date: formData.endDate,
            start_date: formData.startDate,
          },
        });

        console.log("New post added with old place", newPost);
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
      console.log(error);
      toast.error("GG! Something went wrong!", {
        id: notification,
      });
    }
  });

  const { data: placeData } = useQuery(GET_PLACES_LIST);
  const places: Places[] = placeData?.getPlacesList;

  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-row justify-center w-full mt-5">
      <form
        onSubmit={onSubmit}
        className="focus:outline-none lg:w-1/2  lg:mb-0 mb-7 bg-white p-6 shadow rounded-lg border-gray-200 border-2 "
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
                  <option key={city.id} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Body */}
          <div className="flex items-center px-2">
            <p className=" min-w-[90px]">Details</p>
            <textarea
              
              {...register("description")}
              className="flex-1 m-2 w-full bg-blue-50 rounded-lg p-2 outline-none h-44 text-start"
              placeholder="Text (optional) box lomba hobe"
            ></textarea>
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
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostBox;
