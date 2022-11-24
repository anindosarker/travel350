import { useQuery } from "@apollo/client";
import {
  GET_CITY_BY_NAME,
  GET_PLACES_BY_NAME,
  GET_POST_LIST,
} from "../graphql/queries";
import Post from "./Post";
type Props = {
  placeName?: string;
};

function Feed({ placeName }: Props) {
  const { loading, error, data } = !placeName
    ? useQuery(GET_POST_LIST)
    : useQuery(GET_PLACES_BY_NAME, { variables: { name: placeName } });

  if (loading)
    return (
      <p className="text-center text-4xl m-6 mt-20 uppercase tracking-widest">
        Loading ...
      </p>
    );

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  const posts: Post[] = !placeName
    ? data?.getPostList
    : data?.getPlacesByPlaceName?.post;

  return (
    <div>
      {placeName ? (
        <div className="text-center text-3xl m-6 mt-20 uppercase tracking-widest">
          Feed for {placeName}
        </div>
      ) : (
        <div className="text-center text-4xl m-6 mt-20 uppercase tracking-widest">
          Feed
        </div>
      )}
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
