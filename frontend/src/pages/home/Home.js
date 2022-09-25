import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("choose search type");

  const toggleopen = () => {
    setOpen(!open);
  };

  const handleClick = (a) => {
    setType(a);
  };
  const sendusertopage = () => {
    navigate(type.replace(/\s/g, ""));
  };
  return (
    <div className="w-100vh h-screen bg-[url('img.jpg')]">
      <Navbar />
      <div>
        <div>
          <h2 className="text-white text-center mt-[100px] text-2xl">
            Search for travel advice, current trends <br /> or, plan your next
            travel here:
          </h2>
        </div>
        <div className="mt-6 flex justify-center">
          <div className="relative ml-0">
            <button
              className="bg-purple-600 p-1 rounded-md text-white w-[147px]"
              onClick={toggleopen}
            >
              {type}
            </button>
            {open && (
              <>
                <div
                  className="flex w-full bg-white hover:bg-slate-300"
                  onClick={() => handleClick("travel forum")}
                >
                  <a href="#">travel forum</a>
                </div>
                <div
                  className="flex w-full bg-white hover:bg-slate-300"
                  onClick={() => handleClick("tourist places")}
                >
                  <a href="#">tourist places</a>
                </div>
                <div
                  className="flex w-full bg-white hover:bg-slate-300"
                  onClick={() => handleClick("travel planner")}
                >
                  <a href="#">travel planner</a>
                </div>
              </>
            )}
          </div>
          <div className="flex h-[30px]">
            <input
              type="text"
              className="w-[400px] rounded-md ml-2 p-2"
              placeholder="  write text here"
            />
            <button
              className="ml-4 p-1 bg-purple-200 rounded-md"
              onClick={sendusertopage}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
