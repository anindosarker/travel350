import { gql } from "@apollo/client";

export const INSERT_PLACE = gql`
  mutation MyMutation($name: String, $description: String, $city_id: ID) {
    insertPlaces(city_id: $city_id, description: $description, name: $name) {
      city_id
      created_at
      description
      id
      name
    }
  }
`;

export const INSERT_POST = gql`
  mutation MyMutation(
    $description: String
    $end_date: Date
    $place_id: ID
    $start_date: Date
    $title: String
    $user_id: ID
  ) {
    insertPost(
      description: $description
      place_id: $place_id
      title: $title
      user_id: $user_id
      end_date: $end_date
      start_date: $start_date
    ) {
      created_at
      description
      end_date
      id
      place_id
      start_date
      title
      user_id
      places {
        city {
          name
        }
        name
      }
    }
  }
`;
