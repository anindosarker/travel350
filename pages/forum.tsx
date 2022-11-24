import React from "react";
import Feed from "../components/Feed";
import PostBox from "../components/PostBox";

function forum() {
  return (
    <div>
      <PostBox />
      <div className="space-y-2 mt-10">
        <Feed/>
      </div>
    </div>
  );
}

export default forum;
