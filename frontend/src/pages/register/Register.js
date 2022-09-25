import React from "react";
import { useNavigate } from "react-router-dom";
import img from "./img.jpg";

const Register = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const sendtowelcome = () => {
    navigate("/WelcomeLogin");
  };
  return (
    <div className="flex">
      <div className="h-screen w-5/12 bg-blue-400 flex flex-col">
        <h2 className="mt-8 ml-10 text-4xl opacity-[0.45]">travel+</h2>
        <h2 className="mt-12 ml-10 font-bold opacity-[0.80] text-2xl text-white">
          Get reliable and accurate travel
          <br />
          information all on one site.
        </h2>
        <img
          src={img}
          className="rounded-md mt-[22px] ml-12 w-8/12 h-[300px]"
          alt="img"
        />
      </div>
      <div className="mt-16 ml-[120px] flex flex-col space-y-3">
        <h2 className="font-bold text-2xl">Sign up to travel+</h2>
        <button className=" px-[48px] p-[6px] border-2 border-[#E0E0E0] rounded-md">
          Sign up with google
        </button>
        <hr className=" w-[260px] h-0.5 bg-[#E0E0E0]" />
        <h2 className="font-bold text-lg">Email</h2>
        <input
          type="email"
          className="w-full border-2 bg-[#E0E0E0] rounded-md"
        />
        <h2 className="font-bold text-lg">Username</h2>
        <input
          type="text"
          className="w-full border-2 bg-[#E0E0E0] rounded-md"
        />
        <h2 className="font-bold text-lg">Password</h2>
        <input
          type="password"
          className="w-full border-2 bg-[#E0E0E0] rounded-md"
        />
        <button
          className="w-full bg-purple-800 text-white rounded-md py-1"
          onClick={sendtowelcome}
        >
          Sign up
        </button>
        <h2>
          Not registered? Go to
          <button
            className="bg-blue-600 text-white px-2 rounded-md"
            onClick={handleLogin}
          >
            Login
          </button>
          page
        </h2>
      </div>
    </div>
  );
};

export default Register;
