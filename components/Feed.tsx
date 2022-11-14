import { gql, useQuery } from "@apollo/client";

const GET_QUERY = gql`
  query MyQuery {
    getPostList {
      created_at
      description
      end_date
    }
  }
`;

function Feed() {
  const { loading, error, data } = useQuery(GET_QUERY);

  if (loading) return <p>Loading ...</p>;

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default Feed;
