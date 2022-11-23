import { gql, useQuery } from "@apollo/client";

const GET_QUERY = gql`
  query MyQuery {
    getUsertable(id: "1") {
      created_at
      email
      id
      name
      password
      post {
        id
        description
        end_date
        created_at
        place_id
        start_date
        title
        user_id
      }
    }
  }
`;

function ComponentName() {
  const { loading, error, data } = useQuery(GET_QUERY);

  if (loading) return <p>Loading ...</p>;

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default ComponentName;
