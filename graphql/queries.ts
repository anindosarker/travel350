import { gql, useQuery } from "@apollo/client";

export const GET_POST_LIST = gql`
  query MyQuery {
    getPostList {
      created_at
      description
      id
      end_date
      place_id
      start_date
      title
      user_id
      usertable {
        name
      }
      places {
        name
        city {
          name
        }
      }
    }
  }
`;
