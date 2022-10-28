import React from "react";
import homebg from "../public/homeBackground.jpg";
import Image from "next/image";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
const Searchbox = () => {
  return (
    <div className="scale-110">
      <form action="" className="w-full max-w-sm" >
        <div className="relative flex items-center text-white focus-within:text-white opacity-100 ">
          <MagnifyingGlassCircleIcon className="w-7 absolute ml-1 pointer-events-none " />
          <input
            type="text"
            name="search"
            placeholder="Search"
            autoComplete="off"
            aria-aria-label="Search"
            className="pr-3 pl-9 py-2 font-normal placeholder-gray-900 placeholder-opacity-100 text-opacity-100  focus-within:placeholder-gray-600 text-black rounded-3xl ring-2 ring-white focus:ring-gray-500 focus:ring-2 min-w-[500px] bg-white opacity-40 focus-within:bg-gray-50
            focus-within:opacity-60 "
          />
        </div>
      </form>
    </div>
  );
};

export default Searchbox;
