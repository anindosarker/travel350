import Image from "next/image";
import React from "react";
import {
  BeakerIcon,
  ChevronDownIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import homebg from "../public/homeBackground.jpg";
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
import logo from "../public/logo_black.png";
import Link from "next/link";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { supabase } from "@supabase/auth-ui-react/dist/esm/common/theming";
import Account from "./Account";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";

function Header() {
  const session = useSession();
  const supabase = useSupabaseClient();
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
          <Link href="/places" className=" m-2 hidden flex-1 lg:inline">
            Places
          </Link>

          <Link href="/profile" className=" m-2 hidden flex-1 lg:inline">
            Profile
          </Link>
        </ul>

        <div className="mx-2">
          {/* sign in sign out */}
          {session ? (
            <Auth
              providers={["google"]}
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              theme="dark"
            />
          ) : (
            <>
              <Account session={session} />
              <div className="flex min-h-screen flex-col items-center justify-center py-2">
               
            
              </div>
              <div className="text-3xl text-center font-bold pb-8">
                Top posts on forum
              </div>
              <div className="">
              
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
