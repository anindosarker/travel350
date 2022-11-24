import React from "react";
import homebg from "../public/homeBackground.jpg";
import Image from "next/image";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

type FormData = {
  searchbox: string;
};



const Searchbox = () => {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const [search, setSearch] = useState("");

  return (
    <div className="scale-110 m-auto ">
      <form onSubmit={onSubmit} className="w-full max-w-sm" >
        <div className="relative flex items-center text-black ">
          <MagnifyingGlassCircleIcon className="w-7 absolute ml-1 pointer-events-none " />
          <input
            type="search"
            {...register("searchbox")}
           
            placeholder="Search"
            autoComplete="on"
            aria-aria-label="Search"
            className="pr-3 pl-9 py-2 font-normal placeholder-gray-900 placeholder-opacity-100  focus-within:placeholder-gray-600 text-black rounded-3xl ring-2 ring-white focus:ring-gray-500 focus:ring-2 min-w-[500px] focus-within:bg-white bg-gray-50"
          />
        </div>
      </form>
    </div>
  );
};

export default Searchbox;
