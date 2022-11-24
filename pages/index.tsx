import type { NextPage } from "next";
import Head from "next/head";
import homebg from "../public/homeBackground.jpg";
import Image from "next/image";
import Searchbox from "../components/Searchbox";
import ForumPost from "../components/ForumPost";
import Feed from "../components/Feed";

const Home: NextPage = () => {
  return (
    <div className="bg-[url('../public/homeBackground.jpg')]  bg-contain  bg-no-repeat ">
      <div className="flex  flex-col items-center justify-center py-2 bg-gradient-to-b from-transparent to-white">
        <Head>
          <title>Travel+</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="my-64 mb-68 ">
          
          <Searchbox />
        </div>
      </div>
      {/* <div className="bg-white opacity-70  h-20">
      
      </div> */}
      
      <div className="bg-white  p-8 ">
        
        <Feed/>
      </div>
     
    </div>
  );
};

export default Home;
