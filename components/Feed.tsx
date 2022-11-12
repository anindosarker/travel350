import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ALL_POST } from '../graphql/queries'

function Feed() {

  const { data, error} = useQuery(GET_ALL_POST);

  const posts: Post[] = data?.getPostList;

  console.log("post", posts,"data", data,"error", error);
  

  
  return (
    <div>Feed</div>
  )
}

export default Feed