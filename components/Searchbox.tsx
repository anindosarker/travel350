import React from "react";
import homebg from "../public/homeBackground.png";
import Image from "next/image";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
const Searchbox = () => {
  return (
    <div className="scale-150">
      <form action="" className="w-full max-w-sm">
        <div className="relative flex items-center text-gray-300 focus-within:text-gray-500 ">
          <MagnifyingGlassCircleIcon className="w-7 absolute ml-1 pointer-events-none" />
          <input
            type="text"
            name="search"
            placeholder="Search"
            autoComplete="off"
            aria-aria-label="Search"
            className="pr-3 pl-9 py-2 font-normal placeholder-gray-300 focus-within:placeholder-gray-500 text-black rounded-3xl ring-2 ring-gray-400 focus:ring-gray-500 focus:ring-2 min-w-[500px] bg-transparent focus-within:bg-gray-50 "
          />
        </div>
      </form>
    </div>
  );
};

export default Searchbox;
