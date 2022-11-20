import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import EditpostBox from "../../components/EditpostBox";
import Post from "../../components/Post";
import { GET_POST_BY_POST_ID } from "../../graphql/queries";

function EditPost() {
  const router = useRouter();

  const { data , loading, error} = useQuery(GET_POST_BY_POST_ID, {
    variables: {
      id: router.query.editpost,
    },
  });

  
  const post: Post = data?.getPost;
  console.log(post);
  
  return (
    <div>
      <EditpostBox post={post} />
    </div>
  );
}

export default EditPost;
