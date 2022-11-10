import { useState } from "react";
import SingleTripCard from "../components/SingleTripCard";

export default function Profile() {
  const [fnametoggle, setfnametoggle] = useState(false);
  const [lnametoggle, setlnametoggle] = useState(false);

  const handlefnametoggle = () => {
    setfnametoggle(!fnametoggle);
  };

  const handlelnametoggle = () => {
    setlnametoggle(!lnametoggle);
  };
  return (
    <div className="bg-white">
      <h1 className="ml-[120px] mt-[40px] absolute font-bold text-[20px]">
        My profile:
      </h1>
      <div className="flex justify-center w-full">
        <div className=" w-11/12 bg-white rounded-md mt-5 flex justify-center py-8">
          <div className="mt-5 flex justify-between w-11/12 rounded-md shadow-md border-2 ">
            <div className="w-3/12 h-full">
              <div className="px-2 mt-2 space-y-3">
                <img
                  className="w-9/12 h-[200px]"
                  src="https://www.pngkit.com/png/detail/799-7998601_profile-placeholder-person-icon.png"
                  alt=""
                />
                <div className="w-10/12 flex items-center space-x-3">
                  <h1>Debasish123</h1>
                  <button className="bt-style bg-blue-600 text-white">
                    Edit
                  </button>
                </div>
                <div className="w-10/12 flex justify-between ">
                  <button className="bt-style bg-blue-600 text-white">
                    Edit Image
                  </button>
                  <button className="bt-style bg-purple-600 text-white">
                    Create Trip Plan
                  </button>
                </div>
                <h2>Account created at 29 Nov,2017</h2>
              </div>
            </div>
            <div className="w-9/12 h-full  shadow-md flex justify-center">
              <div className="w-full">
                <div className="flex justify-between space-y-2 w-10/12">
                  <div className="mt-3 ml-3 space-y-2">
                    <h1 className="text-[18px]">First Name:</h1>
                    <div className="flex justify-between w-full">
                      {fnametoggle && (
                        <h1 className="text-[22px] px-2 rounded-md bg-gray-200">
                          Debasish Mohan
                        </h1>
                      )}
                      {!fnametoggle && (
                        <input
                          value="Debasish Mohan"
                          className="text-[22px] bg-gray-200 outline-none px-3"
                        />
                      )}
                      {fnametoggle && (
                        <button
                          onClick={handlefnametoggle}
                          className="ml-3 px-3 bt-style text-white bg-blue-600"
                        >
                          Edit
                        </button>
                      )}
                      {!fnametoggle && (
                        <button
                          onClick={handlefnametoggle}
                          className="ml-3 px-3 bt-style text-white bg-green-600"
                        >
                          Done
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="mt-3 ml-3 space-y-2">
                    <h1 className="text-[18px]">Last Name:</h1>
                    <div className="flex justify-between w-full">
                      <h1 className="text-[22px] px-2 bg-gray-200 rounded-md">
                        Singha
                      </h1>
                      <button className="ml-3 bt-style px-3 text-white bg-blue-600">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-10/12 flex justify-between space-y-2 mt-3">
                  <div className="ml-3 mt-3">
                    <h1 className="text-[18px]">E-mail:</h1>
                    <div className="flex space-x-3">
                      <h1 className="text-[22px] bg-gray-200 px-3 rounded-md">
                        debasishsingha.1516@gmail.com
                      </h1>
                      <button className="bt-style bg-blue-600 text-white">
                        Edit
                      </button>
                    </div>
                  </div>
                  <div className="ml-3 mt-3">
                    <h1 className="text-[18px]">Password:</h1>
                    <div className="flex space-x-3">
                      <h1 className="text-[22px] bg-gray-200 px-3 rounded-md">
                        Password
                      </h1>
                      <button className="bt-style bg-blue-600 text-white">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
                <div className="ml-3 mt-3">
                  <h1 className="text-[18px]">phone:</h1>
                  <div className="flex space-x-3">
                    <h1 className="text-[22px]">+8801*********</h1>
                    <button className="bt-style bg-blue-600 text-white">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="w-11/12 bg-white mt-5 rounded-md">
          <h1 className="font-bold text-[26px]">My Trip Plans:</h1>
          <div className="mt-5 space-x-4 flex py-4">
            <SingleTripCard />
            <SingleTripCard />
            <SingleTripCard />
            <SingleTripCard />
          </div>
        </div>
      </div>
    </div>
  );
}
