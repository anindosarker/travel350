import React, { useState } from "react";
import homebg from "../public/homeBackground.jpg";
import Image from "next/image";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import { useQuery } from "@apollo/client";
import { GET_CITY_LIST, GET_PLACES_LIST } from "../graphql/queries";
import { useForm } from "react-hook-form";

type FormData = {
  place: string;
};

const Searchbox = () => {
  const { data: placeData } = useQuery(GET_PLACES_LIST);
  const places: Places[] = placeData?.getPlacesList;

  const [search, setSearch] = useState("");

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmitHandler = handleSubmit(async (formData) => {
    console.log(formData);
    //write the function toredirect to the place page
  });
  return (
    <div className="scale-110 m-auto ">
      <form onSubmit={onSubmitHandler} className="w-full max-w-sm">
        <div className="relative flex-row items-center text-black ">
          <MagnifyingGlassCircleIcon className="w-7 absolute ml-1 pointer-events-none " />
          <input
            type="text"
            {...register("place", { required: true })}
            placeholder="Search for a place"
            autoComplete="on"
            aria-aria-label="Search"
            className="pr-3 pl-9 py-2 font-normal placeholder-gray-900 placeholder-opacity-100  focus-within:placeholder-gray-600 text-black rounded-3xl ring-2 ring-white focus:ring-gray-500 focus:ring-2 min-w-[500px] focus-within:bg-white bg-gray-50"
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* Search for cities autocomplete */}

          <div className="w-full ease-in duration-75 ">
            {search && (
              <div className=" bg-blue-50 p-2  rounded-md ease-in duration-75 ml-2 absolute  shadow-lg shadow-gray-500  ">
                {places
                  ?.filter((item) => {
                    return search === ""
                      ? item
                      : item.name.toLowerCase().includes(search.toLowerCase());
                  })
                  ?.map((place) => (
                    <p
                      className="text-gray-500 cursor-pointer hover:underline hover:text-black"
                      key={place.id}
                      onClick={() => {
                        setValue("place", `${place.name}`);
                        setSearch("");
                      }}
                    >
                      {place.name}
                    </p>
                  ))}
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Searchbox;
