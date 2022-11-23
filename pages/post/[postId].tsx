import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import Post from "../../components/Post";
import { GET_POST_BY_POST_ID } from "../../graphql/queries";

function PostPage() {
  const router = useRouter();

  const { data , loading, error} = useQuery(GET_POST_BY_POST_ID, {
    variables: {
      id: router.query.postId,
    },
  });

  
  const post: Post = data?.getPost;
  return (
    <div>
      <Post post={post} />
    </div>
  );
}

export default PostPage;
