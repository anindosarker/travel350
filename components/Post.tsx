import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";
import React from "react";
import Avatar from "./Avatar";

type Props = {
  post: Post;
};




function Post({post}: Props) {
  return (
    <div>
      {/* <div>Post Title</div> */}


      <div>Post Title</div>
      
      
      
      {/* <div>location</div> */}
      <div>location</div>
      
      
      
      {/* <div>Posted by</div> */}
      <div>Posted by</div>
      
      
      {/* <div>Start Date</div> */}
      <div>Start Date</div>




      {/* <div>End Date</div> */}
      <div>End Date</div>



      {/* <div>Details</div> */}
      <div>Details</div>





    </div>
  );
}

export default Post;
