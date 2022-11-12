import { gql } from "@apollo/client";


export const GET_ALL_POST = gql`
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
        }
      }
      comment {
        created_at
        id
        post_id
        text
        user {
          username
        }
      }
      user {
        username
      }
      vote {
        upvote
        post_id
        id
        created_at
        user {
          username
        }
      }
    }
  }
`;
