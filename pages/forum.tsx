import React from "react";
import ForumPost from "../components/ForumPost";
import Post from "../components/Post";
import PostBox from "../components/PostBox";

function forum() {
  return (
    <div>
      <PostBox />
      <div className="space-y-2 mt-10">
        <ForumPost />
        <Post />
      </div>
    </div>
  );
}

export default forum;
