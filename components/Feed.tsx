import { gql, useQuery } from "@apollo/client";

const GET_POSTS = gql`
  query MyQuery {
    getPostList {
      created_at
      id
      user_id
      user {
        username
        created_at
        email
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
    }
  }
`;

function Feed() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading ...</p>;

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default Feed;
