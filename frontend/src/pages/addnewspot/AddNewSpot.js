import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
const AddNewSpot = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("choose category");
  const [tags, setTags] = useState([{ tag: "" }]);
  const [forums, setforums] = useState([{ forum: "" }]);

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
    const taglist = [...tags];
    taglist.splice(index, 1);
    setTags(taglist);
  };

  const handletagchange = (e, index) => {
    const { name, value } = e.target;
    const taglist = [...tags];
    taglist[index][name] = value;
    setTags(taglist);
  };

  const handleaddforum = () => {
    setforums([...forums, { forum: "" }]);
  };

  const handleremoveforum = (index) => {
    const forumlist = [...forums];
    forumlist.splice(index, 1);
    setforums(forumlist);
  };

  const handleforumchange = (e, index) => {
    const { name, value } = e.target;
    const forumlist = [...forums];
    forumlist[index][name] = value;
    setforums(forumlist);
  };
  return (
    <div className="bg-[url('img.jpg')]">
      <Navbar />
      <h2 className="text-[18px] text-white mt-[80px] text-center pb-8">
        Create new spot here:
      </h2>
      <div className="bg-gray-600 w-full flex justify-center">
        <div className=" mt-6 bg-white w-11/12 rounded-md flex flex-col">
          <div className="w-full flex justify-between">
            <div className="w-6/12">
              <h2 className="ml-6 mt-6 text-[22px]">Enter place name:</h2>
              <input
                type="text"
                className="w-full ml-6 mt-3 border-2 border-gray-400 rounded-md p-1 "
              />
            </div>

            <div className="mt-12 ml-[800px] absolute">
              <h2>Add Spot category: </h2>
              <button
                className="mt-5 bg-blue-600 px-3 py-1 rounded-md text-white w-[150px]"
                onClick={toggleopen}
              >
                {type}
              </button>
              {open && (
                <>
                  <div
                    className=" flex w-full bg-slate-300 hover:bg-slate-500"
                    onClick={() => handleClick("Forest")}
                  >
                    <a href="#">Forest</a>
                  </div>
                  <div
                    className=" flex w-full bg-slate-300 hover:bg-slate-500"
                    onClick={() => handleClick("Nature")}
                  >
                    <a href="#">Nature</a>
                  </div>
                  <div
                    className="flex w-full bg-slate-300 hover:bg-slate-500"
                    onClick={() => handleClick("Hill")}
                  >
                    <a href="#">Hill</a>
                  </div>
                  <div
                    className="flex w-full bg-slate-300 hover:bg-slate-500"
                    onClick={() => handleClick("Beach")}
                  >
                    <a href="#">Beach</a>
                  </div>
                  <div
                    className="flex w-full bg-slate-300 hover:bg-slate-500"
                    onClick={() => handleClick("City")}
                  >
                    <a href="#">City</a>
                  </div>
                  <div
                    className="flex w-full bg-slate-300 hover:bg-slate-500"
                    onClick={() => handleClick("Others")}
                  >
                    <a href="#">Others</a>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="w-6/12">
            <h2 className="ml-6 mt-6 text-[22px]">Enter Spot Title:</h2>
            <input
              type="text"
              className="w-full ml-6 mt-3 border-2 border-gray-400 rounded-md p-1 "
            />
          </div>
          <div className="w-6/12">
            <h2 className="ml-6 mt-6 text-[22px]">Enter Address:</h2>
            <input
              type="text"
              className="w-full ml-6 mt-3 border-2 border-gray-400 rounded-md p-1 "
            />
          </div>
          <h2 className="ml-6 mt-6 text-[22px]">Enter creator username:</h2>
          <input
            type="text"
            className="w-6/12 ml-6 mt-3 border-2 border-gray-400 rounded-md p-1 "
          />
          <div className="ml-6 mt-6">
            <h2 className="text-[22px]">Add new tag:</h2>
            {tags.map((singleTag, index) => (
              <>
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
              </>
            ))}
            <h2>Created tags</h2>
            {tags.map((singleTag, index) => (
              <ul className="mt-5 bg-blue-300 w-[150px]" key={index}>
                {<li>{singleTag.tag}</li>}
              </ul>
            ))}
          </div>

          <h2 className="ml-6 mt-6 text-[22px]">Enter Spot summary:</h2>
          <textarea
            type="text"
            className="w-6/12 ml-6 mt-3 shadow-md hover:shadow-xl bg-slate-100 rounded-md p-1 h-[150px]"
          />
          <h2 className="ml-6 mt-3 text-[22px]">Enter Spot images:</h2>
          <input type="file" className="ml-6 mt-2" />
          <button className="mt-3 ml-[400px] bg-blue-600 rounded-md p-1 w-2/12 mb-5 text-white">
            Create Place
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewSpot;
