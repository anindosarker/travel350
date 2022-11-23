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
  UserCircleIcon,
  VideoCameraIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import logo from "../public/logo_black.png";
import Link from "next/link";

function Header() {
  const { data: session } = useSession();
  return (
    <div className=" sticky top-0 z-50 flex bg-white px-4 py-2 shadow-md items-center justify-between text-gray-600">
      <a
        href="http://localhost:3000/"
        className="relative h-10 w-20 flex-shrink-0 cursor-pointer"
      >
        <Image objectFit="contain" src={logo} layout="fill" />
      </a>

      <div className="flex items-center ">
        <div className="uppercase  ">
          <ul className=" flex space-x-6 mx-6 ">
            <li>
              <Link href="/" className=" m-2 hidden lg:inline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/forum" className=" m-2 hidden lg:inline">
                Forum
              </Link>
            </li>
            <li>
              <Link
                href="/travelplanner"
                className=" m-2 hidden lg:inline"
              >
                Travel Planner
              </Link>
            </li>
            <li>
              <Link href="/places" className=" m-2 hidden lg:inline">
                Places
              </Link>
            </li>
            <li>
              <Link href="/profile" className=" m-2 hidden lg:inline">
                Profile
              </Link>
            </li>
          </ul>
        </div>

        <div className="mx-2">
          {/* sign in sign out */}
          {session ? (
            <Link href="/profile">
              <div className="hidden lg:flex items-center cursor-pointer space-x-2 border border-gray-400 p-2 rounded-md hover:bg-gray-200">
                <p className="truncate font-semibold">{session?.user?.name}</p>
                <XCircleIcon
                  className="h-5 flex-shrink-0 hover:text-red-500"
                  onClick={() => signOut()}
                />
              </div>
            </Link>
          ) : (
            <div
              onClick={() => signIn()}
              className="hidden lg:flex items-center cursor-pointer space-x-2 border rounded-full p-2"
            >
              <div className="relative h-5 w-5 flex-shrink-0">
                <UserCircleIcon />
              </div>

              <p className="text-gray-400">Sign In</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
