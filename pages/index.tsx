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
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
        />
      ) : (
        <>
          <Account session={session} />
        </>
      )}
    </div>
  );
};

export default Home;
