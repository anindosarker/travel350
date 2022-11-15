import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";
import React from "react";
import Avatar from "./Avatar";

type Props = {
  post: Post;
};




function Post({post}: Props) {
  return (
    <div className="m-5">
      {/* <div>Post Title</div> */}

      <div>
        <p>Post Title: {post.title}</p>
      </div>

      {/* <div>location</div> */}
      <div>
        <p>Place : {post.places.name}</p>
        <p>City : {post.places.city.name}</p>
      </div>
      {/* <div>Posted by</div> */}
      <div>Posted by: {post.usertable.name} </div>

      {/* <div>Start Date</div> */}
      <div>Start Date: {post.start_date} </div>

      {/* <div>End Date</div> */}
      <div>End Date: {post.start_date} </div>

      {/* <div>Details</div> */}
      <div>Details: {post.description}</div>
      
    </div>
  );
}

export default Post;
