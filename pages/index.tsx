import type { NextPage } from "next";
import Head from "next/head";
import homebg from "../public/homeBackground.jpg";
import Image from "next/image";
import Searchbox from "../components/Searchbox";
import Test from "../components/Test";

const Home: NextPage = () => {
  return (
    <div className="">
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>Travel+</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div>
          <Image objectFit="cover" className="z-0" src={homebg} layout="fill" />
          <Searchbox />
        </div>
      </div>
      <div className="text-3xl text-center font-bold pb-8">
        Top posts on forum
      </div>
      <div className="">
        <Test/>
      </div>
    </div>
  );
};

export default Home;
