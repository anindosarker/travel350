import { useQuery } from "@apollo/client";
import { GET_POST_LIST } from "../graphql/queries";
import Post from "./Post";

type Props = {
  placeName?: string;
};



function Feed({placeName}: Props) {
  const { loading, error, data } = useQuery(GET_POST_LIST);

  if (loading) return <p>Loading ...</p>;

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  const posts: Post[] = data.getPostList;
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
