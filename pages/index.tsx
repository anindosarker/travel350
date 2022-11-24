import type { NextPage } from "next";
import Head from "next/head";
import homebg from "../public/homeBackground.jpg";
import Image from "next/image";
import Searchbox from "../components/Searchbox";
import ForumPost from "../components/ForumPost";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "../components/Account";

const Home: NextPage = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className="">
      {!session ? (
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
            <Head>
              <title>Travel+</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
              <Image
                objectFit="cover"
                className="z-0"
                src={homebg}
                layout="fill"
              />
              <Searchbox />
            </div>
          </div>
          <div className="text-3xl text-center font-bold pb-8">
            Top posts on forum
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
