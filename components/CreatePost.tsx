import React from "react";

const CreatePost = () => {
  return (
    <div className="m-3/4">
      <div className="container mx-auto">
        <div className="flex flex-col gap-3 items center">
          <h1 className="text-indigo-600 font-bold">Create Post</h1>
          <h1>Share your travel exprience</h1>
          <p>Share your details about travel place and travel exprience</p>
        </div>
      </div>
      <form className="flex flex-col p-8 gap-5 items-center">
        <div className="flex mx-4 px-8">
            <h1 className="m-4 text-indigo-400 text-md font-bold">Start date</h1>
        <input
          type="date"
          placeholder="Date"
          className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded"
        />
        <h1 className="m-4 text-indigo-400 text-md font-bold">End date</h1>
         <input
          type="date"
          placeholder="Date"
          className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded"
        />
        </div>
        <textarea
          id=""
          cols={30}
          rows={10}
          placeholder="Additional info"
          className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded"
        ></textarea>
        <textarea
          id=""
          cols={30}
          rows={10}
          placeholder="Tell about your exprience"
          className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded"
        ></textarea>
        <div className="flex p-2 w-full justify-center gap-5">
          <input
            type="image"
            placeholder="Upload your images"
            className="mx-2 w-1/10 md:w-1/2 h-1/10 ring-1 ring-indigo-300 rounded"
          />
          <input
            type="image"
            placeholder="Upload your images"
            className="mx-2 w-1/10 md:w-1/2  h-1/10 ring-1 ring-indigo-300 rounded"
          />
          <input
            type="image"
            placeholder="Upload your images"
            className="mx-2 w-1/10 md:w-1/2  h-1/10 ring-1 ring-indigo-300 rounded"
          />
          <input
            type="image"
            placeholder="Upload your images"
            className="mx-2 w-1/10 md:w-1/2  h-1/10 ring-1 ring-indigo-300 rounded"
          />
        </div>
        <button className="w-1/4 px-3 py-2 bg-indigo-700 font medium text-white rounded shadow-md cursor-pointer ">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
