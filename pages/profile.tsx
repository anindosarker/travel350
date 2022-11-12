import React from "react";
import Post from "../components/Post";
import ProfileInfo from "../components/ProfileInfo";

function profile() {
  return (
   <div className="flex flex-row">
    <div>
        <p>Name</p>
        <p>Email</p>
    </div>
    <Post/>
   </div>
  );
}

export default profile;
