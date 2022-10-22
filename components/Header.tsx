import Image from "next/image";
import React from "react";
import {
  BeakerIcon,
  ChevronDownIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import {
  Bars4Icon,
  BellIcon,
  ChatBubbleLeftIcon,
  GlobeAltIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerWaveIcon,
  StarIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();
  return (
    <div className=" sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm items-center">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image
          objectFit="contain"
          src={
            "https://www.designyourway.net/blog/wp-content/uploads/2021/01/reddit-fonts.jpeg"
          }
          layout="fill"
        />
      </div>

      <div className="flex items-center mx-7 xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className=" ml-2 hidden flex-1 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      {/* Search Box */}
      <form className="flex flex-1 items-center space-x-2 rounded-lg border border-gray-300 bg-gray-100 px-3 py-1">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        <input
          type="text"
          placeholder="Search Fake reddit"
          className="flex-1 bg-transparent outline-none"
        />
        <button type="submit" hidden />
      </form>

      <div className=" text-gray-500 space-x-2 items-center hidden lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeAltIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatBubbleLeftIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerWaveIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <Bars4Icon className="icon" />
      </div>

      {/* sign in sign out */}
      {session ? (
        <div
          onClick={() => signOut()}
          className="hidden lg:flex items-center cursor-pointer space-x-2 border border-r-gray-100 p-2"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              objectFit="contain"
              src={"https://cdn-icons-png.flaticon.com/512/1241/1241005.png"}
              layout="fill"
            />
          </div>
          <div>
            <p className="truncate">{session?.user?.name}</p>
            <p className="text-gray-400">1 karma</p>
          </div>
          <ChevronDownIcon className="h-5 flex-shrink-0" />
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="hidden lg:flex items-center cursor-pointer space-x-2 border border-r-gray-100 p-2"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              objectFit="contain"
              src={"https://cdn-icons-png.flaticon.com/512/1241/1241005.png"}
              layout="fill"
            />
          </div>

          <p className="text-gray-400">Sign In</p>
        </div>
      )}
    </div>
  );
}

export default Header;
