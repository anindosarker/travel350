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

      <div className="flex items-center mx-7 xl:min-w-[300px]">
        <ul className="space-x-4">
          <Link href="/" className=" m-2 hidden flex-1 lg:inline">
            Home
          </Link>

          <Link href="/forum" className=" m-2 hidden flex-1 lg:inline">
            Forum
          </Link>

          <Link href="/travelplanner" className=" m-2 hidden flex-1 lg:inline">
            Travel Planner
          </Link>
        </ul>

        <div className="mx-2">
          {/* sign in sign out */}
          {session ? (
            <div
              onClick={() => signOut()}
              className="hidden lg:flex items-center cursor-pointer space-x-2 border border-r-gray-700 p-2"
            >
              <div className="relative h-5 w-5 flex-shrink-0">
                <div className="relative h-5 w-5 flex-shrink-0">
                  <UserCircleIcon />
                </div>
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
