import React from "react";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/solid";

function Checklist() {
  return (
    <div className="h-1/2 w-2/3 my-4 mx-20 border-gray-200 rounded">
      <div className="flex justify-between">
        <div className="flex mb-2">
          <span>
            <Bars3Icon className="h-6 w-6" />
          </span>
          <h1 className="ml-2">Travel Checklist</h1>
        </div>
        <div>
          <span>
            <ChevronDownIcon className="h-4 w-4" />
          </span>
        </div>
        <hr />
      </div>
      <div className="mt-5 grid grid-cols-3">
        <div>
          <h1>Progress Bar</h1>
          <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
            <div className="w-full h-full bg-gray-200 absolute "></div>
            <div className="h-full bg-green-500 absolute  style={{width:10%}"></div>
          </div>
          <h1>5 out of 9 completed</h1>
        </div>
        <div className="mr-20">
          <h1 className="font-bold tracking-wider mb-2">Upcoming</h1>
          <div className="ml-10 overflow-auto">
            <ul>
              <div className="flex mr-4 mb-2">
                <input
                  type="checkbox"
                  id="A3-yes"
                  name="A3-confirmation"
                  value="yes"
                  className="cursor-pointer mr-1"
                />
                <li>item 1</li>
              </div>
              <div className="flex mr-4 mb-2">
                <input
                  type="checkbox"
                  id="A3-yes"
                  name="A3-confirmation"
                  value="yes"
                  className="cursor-pointer mr-1"
                />
                <li>item 2</li>
              </div>
              <div className="flex mr-4 mb-2">
                <input
                  type="checkbox"
                  id="A3-yes"
                  name="A3-confirmation"
                  value="yes"
                  className="cursor-pointer mr-1"
                />
                <li>item 3</li>
              </div>
              <div className="flex mr-4 mb-2">
                <input
                  type="checkbox"
                  id="A3-yes"
                  name="A3-confirmation"
                  value="yes"
                  className="cursor-pointer mr-1"
                />
                <li>item 4</li>
              </div>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="font-bold tracking-wider mb-2">Completed</h1>
          <div className="ml-10 overflow-auto">
            <ul>
              <div className="flex mr-4 mb-2">
                <input
                  type="checkbox"
                  id="A3-yes"
                  name="A3-confirmation"
                  value="yes"
                  className="cursor-pointer mr-1"
                />
                <li>item 1</li>
              </div>
              <div className="flex mr-4 mb-2">
                <input
                  type="checkbox"
                  id="A3-yes"
                  name="A3-confirmation"
                  value="yes"
                  className="cursor-pointer mr-1"
                />
                <li>item 2</li>
              </div>
              <div className="flex mr-4 mb-2">
                <input
                  type="checkbox"
                  id="A3-yes"
                  name="A3-confirmation"
                  value="yes"
                  className="cursor-pointer mr-1"
                />
                <li>item 3</li>
              </div>
              <div className="flex mr-4 mb-2">
                <input
                  type="checkbox"
                  id="A3-yes"
                  name="A3-confirmation"
                  value="yes"
                  className="cursor-pointer mr-2"
                />
                <li>item 4</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checklist;
