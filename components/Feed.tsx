import { gql, useQuery } from "@apollo/client";

const GET_QUERY = gql`
  query MyQuery {
    getPostList {
      created_at
      description
      end
      id
      image
      place_id
      start
      user_id
      places {
        name
        city {
          name
          created_at
          description
          id
        }
        city_id
        created_at
        description
        id
      }
      user {
        username
        created_at
        email
        first_Name
        id
        last_Name
        password
        phone_num
      }
      vote {
        upvote
        post_id
        id
        created_at
        user_id
      }
      comment {
        created_at
        id
        post_id
        text
        user_id
      }
      title
    }
  }
`;

function Feed() {
  const { loading, error, data } = useQuery(GET_QUERY);

  console.log(data);
  

  if (loading) return <p>Loading ...</p>;

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default Feed;
