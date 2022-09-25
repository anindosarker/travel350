import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
const AddNewCommunity = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("choose category");
  const [tags, setTags] = useState([{ tag: "" }]);

  const toggleopen = () => {
    setOpen(!open);
  };

  const handleClick = (a) => {
    setType(a);
  };

  const handleaddtag = () => {
    setTags([...tags, { tag: "" }]);
  };

  const handleremovetag = (index) => {
    const list = [...tags];
    list.splice(index, 1);
    setTags(list);
  };

  const handletagchange = (e, index) => {
    const { name, value } = e.target;
    const taglist = [...tags];
    taglist[index][name] = value;
    setTags(taglist);
  };
  return (
    <div className="bg-[url('img.jpg')]">
      <Navbar />
      <h2 className="text-[18px] text-white mt-[80px] text-center pb-8">
        Create new community forum here:
      </h2>
      <div className="bg-gray-600 w-full flex justify-center">
        <div className=" mt-6 bg-white w-11/12 rounded-md flex flex-col">
          <div className="w-full flex justify-between">
            <div className="w-6/12">
              <h2 className="ml-6 mt-6 text-[22px]">Enter community name:</h2>
              <input
                type="text"
                className="w-full ml-6 mt-3 border-2 border-gray-400 rounded-md p-1 "
              />
            </div>

            <div className="mt-12 ml-[800px] absolute">
              <h2>Set community category: </h2>
              <button
                className="mt-5 bg-blue-600 px-3 py-1 rounded-md text-white w-[180px]"
                onClick={toggleopen}
              >
                {type}
              </button>
              {open && (
                <>
                  <div
                    className=" flex w-full bg-slate-300 hover:bg-slate-500"
                    onClick={() => handleClick("travel spot")}
                  >
                    <a href="#">Travel spot</a>
                  </div>
                  <div
                    className=" flex w-full bg-slate-300 hover:bg-slate-500"
                    onClick={() => handleClick("tourist blogs")}
                  >
                    <a href="#">tourist blogs</a>
                  </div>
                  <div
                    className="flex w-full bg-slate-300 hover:bg-slate-500"
                    onClick={() => handleClick("travel advice")}
                  >
                    <a href="#">travel advice</a>
                  </div>

                  <div
                    className="flex w-full bg-slate-300 hover:bg-slate-500"
                    onClick={() => handleClick("others")}
                  >
                    <a href="#">Others</a>
                  </div>
                </>
              )}
            </div>
          </div>
          <h2 className="ml-6 mt-6 text-[22px]">
            Enter community place name (optional):
          </h2>
          <input
            type="text"
            className="w-6/12 ml-6 mt-3 border-2 border-gray-400 rounded-md p-1 "
          />
          <h2 className="ml-6 mt-6 text-[22px]">Enter creator username:</h2>
          <input
            type="text"
            className="w-6/12 ml-6 mt-3 border-2 border-gray-400 rounded-md p-1 "
          />
          <h2 className="ml-6 mt-6 text-[22px]">
            Travel community forum posts types:
          </h2>
          <div className="flex ml-6 mt-6">
            <input type="checkbox" />
            <h2 className="text-[18px] ml-3">Hotel</h2>
          </div>
          <div className="flex ml-6 mt-6">
            <input type="checkbox" />
            <h2 className="text-[18px] ml-3">Art and culture</h2>
          </div>
          <div className="flex ml-6 mt-6">
            <input type="checkbox" />
            <h2 className="text-[18px] ml-3">Nature</h2>
          </div>
          <div className="flex ml-6 mt-6">
            <input type="checkbox" />
            <h2 className="text-[18px] ml-3">Festival</h2>
          </div>
          <div className="flex ml-6 mt-6">
            <input type="checkbox" />
            <h2 className="text-[18px] ml-3">Travel vehicles guide</h2>
          </div>
          <div className="ml-6 mt-6">
            <h2 className="text-[18px]">Add moderator names:</h2>
            {tags.map((singleTag, index) => (
              <div key={index} className="flex flex-col mt-5">
                <div className="flex">
                  <input
                    type="text"
                    name="tag"
                    id="tag"
                    className="border-2 border-gray-500 rounded-md px-1"
                    value={singleTag.tag}
                    onChange={(e) => handletagchange(e, index)}
                  />
                  {tags.length > 1 && (
                    <button
                      className="ml-4 bg-red-600 text-white px-2 py-1 rounded-md"
                      onClick={handleremovetag}
                    >
                      remove
                    </button>
                  )}
                </div>
                {tags.length - 1 === index && (
                  <button
                    className="mt-3 ml-3 bg-blue-600 text-white px-2 py-1 rounded-md w-[100px]"
                    onClick={handleaddtag}
                  >
                    Add
                  </button>
                )}
              </div>
            ))}
            <h2>Moderator team</h2>
            {tags.map((singleTag, index) => (
              <ul className="mt-5 bg-blue-300 w-[150px]" key={index}>
                {<li>{singleTag.tag}</li>}
              </ul>
            ))}
          </div>
          <h2 className="ml-6 mt-6 text-[22px]">Enter Community summary:</h2>
          <textarea
            type="text"
            className="w-6/12 ml-6 mt-3 border-2 border-gray-400 rounded-md p-1 h-[150px]"
          />

          <h2 className="ml-6 mt-3 text-[22px]">Enter place images:</h2>
          <input type="file" className="ml-6 mt-2" />
          <button className="mt-3 ml-[400px] bg-blue-600 rounded-md p-1 w-2/12 mb-5">
            Create Community
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewCommunity;
