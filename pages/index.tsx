import type { NextPage } from "next";
import Head from "next/head";
import homebg from "../public/homeBackground.png";
import Image from "next/image";
import Searchbox from "../components/Searchbox";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      
      <div>
      <Image objectFit="cover" src={homebg} layout="fill"  />
      </div>
      <Searchbox/>
    </div>
  );
};

export default Home;
