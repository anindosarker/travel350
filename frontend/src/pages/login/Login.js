import React from "react";
import { useNavigate } from "react-router-dom";
import img from "./img.jpg";

const Login = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  };

  const sendtohome = () => {
    navigate("/welcomelogin");
  };
  return (
    <div className="flex">
      <div className="h-screen w-5/12 bg-[#C7A5EA] flex flex-col">
        <h2 className="mt-8 ml-10 text-4xl opacity-[0.45]">travel+</h2>
        <h2 className="mt-12 ml-10 font-bold opacity-[0.60] text-2xl">
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
      <div className="mt-16 ml-[120px] flex flex-col space-y-5">
        <h2 className="font-bold text-2xl">Sign in to travel+</h2>
        <button className=" px-[48px] p-[6px] border-2 border-[#E0E0E0] rounded-md">
          Sign in with google
        </button>
        <hr className=" w-[260px] h-0.5 bg-[#E0E0E0]" />
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
        <a href="/forget-password" className="text-purple-800 underline">
          Forgot password?
        </a>
        <button
          className="w-full bg-purple-800 text-white rounded-md py-1"
          onClick={sendtohome}
        >
          Sign in
        </button>
        <h2>
          Not registered? Go to
          <button
            className="bg-blue-600 text-white px-2 rounded-md"
            onClick={handleRegister}
          >
            Register
          </button>
          page
        </h2>
      </div>
    </div>
  );
};

export default Login;
