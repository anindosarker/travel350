import { gql } from "@apollo/client";

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
  query MyQuery {
    getCityList {
      created_at
      description
      id
      name
    }
  }
`;

export const GET_PLACES_BY_NAME = gql`
  query MyQuery($name: String!) {
    getPlacesByPlaceName(name: $name) {
      name
      id
      city_id
      city {
        name
      }
    }
  }
`;

export const GET_CITY_BY_NAME = gql`
  query MyQuery($name: String!) {
    getCityByCityName(name: $name) {
      created_at
      description
      id
      name
    }
  }
`;


export const GET_POST_BY_POST_ID = gql`
  query MyQuery($id: ID!) {
    getPost(id: $id) {
      created_at
      description
      end_date
      id
      place_id
      start_date
      title
      user_id
      places {
        name
        city {
          name
        }
      }
    }
  }
`;
