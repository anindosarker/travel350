import { useQuery } from "@apollo/client";
import { GET_PLACES_BY_NAME, GET_POST_LIST } from "../graphql/queries";
import Post from "./Post";
type Props = {
  placeName?: string;
};

function Feed({ placeName }: Props) {
  const { loading, error, data } = !placeName
    ? useQuery(GET_POST_LIST)
    : useQuery(GET_PLACES_BY_NAME, { variables: { name: placeName } });

  if (loading) return <p>Loading ...</p>;

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;



  const posts: Post[] = !placeName
    ? data?.getPostList
    : data?.getPlacesByPlaceName?.post;


    
   console.log(posts);
   

  return (
    <div>
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}


      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Feed;
