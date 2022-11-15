import { useQuery } from "@apollo/client";
import { GET_POST_LIST } from "../graphql/queries";
import Post from "./Post";


function Feed() {
  const { loading, error, data } = useQuery(GET_POST_LIST);

  if (loading) return <p>Loading ...</p>;

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return(<div>
    <Post/>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div> 
    );

}

export default Feed;
