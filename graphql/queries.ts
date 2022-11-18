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

export const GET_PLACES_LIST = gql`
  query MyQuery {
    getPlacesList {
      city {
        name
      }
      city_id
      created_at
      description
      id
      name
    }
  }
`;



export const GET_CITY_LIST = gql`
  query MyQuery   {
    getCityList {
      created_at
      description
      id
      name
    }
  }
`;
