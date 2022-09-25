import React from "react";
import { useNavigate } from "react-router-dom";

const Loginnavbar = () => {
  const navigate = useNavigate();
  const handlesignin = () => {
    navigate("/login");
  };
  const handlesignup = () => {
    navigate("/register");
  };
  const handletravelforum = () => {
    navigate("/home/travelforum");
  };
  return (
    <div className="flex justify-between ml-16">
      <div className="flex">
        <h2 className="mt-5 font-bold text-2xl text-white">travel+</h2>
        <div className="relative mt-6 ml-24">
          <button className="mr-4 no-underline text-white cursor-pointer font-bold">
            Home
          </button>
          <button
            className="mr-4 no-underline text-white cursor-pointer"
            onClick={handletravelforum}
          >
            Travel Forum
          </button>
        </div>
      </div>
      <div className="mt-5 mr-16 space-x-12">
        <button
          className="bg-slate-400 px-[25px] py-[6px] rounded-[20px]"
          onClick={handlesignin}
        >
          Sign in
        </button>
        <button
          className="bg-slate-400 px-[25px] py-[6px] rounded-[20px]"
          onClick={handlesignup}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Loginnavbar;
