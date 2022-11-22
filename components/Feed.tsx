import { useQuery } from "@apollo/client";
import {
  GET_CITY_BY_NAME,
  GET_PLACES_BY_NAME,
  GET_POST_LIST,
} from "../graphql/queries";
import Post from "./Post";
type Props = {
  placeName?: string;
  cityName?: string;
};

function Feed({ placeName, cityName }: Props) {
  const { loading, error, data } =
    !placeName && !cityName
      ? useQuery(GET_POST_LIST)
      : placeName
      ? useQuery(GET_PLACES_BY_NAME, { variables: { name: placeName } })
      : useQuery(GET_CITY_BY_NAME, { variables: { name: cityName } });

  if (loading) return <p>Loading ...</p>;

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  const posts: Post[] =
    !placeName && !cityName
      ? data?.getPostList
      : placeName
      ? data?.getPlacesByPlaceName?.post
      : data?.getCityByCityName?.places?.post;

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
