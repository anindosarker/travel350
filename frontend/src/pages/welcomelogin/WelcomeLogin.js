import React from "react";
import Navbar from "../../components/navbar/Navbar";

const WelcomeLogin = () => {
  return (
    <div className="bg-[url('img.jpg')] min-h-screen">
      <Navbar />
      <div className="mt-[180px] ml-[70px]">
        <h2 className="text-3xl text-white">Welcome back,</h2>
        <h2 className="text-4xl font-bold text-white">Michelle!</h2>
      </div>
    </div>
  );
};

export default WelcomeLogin;
