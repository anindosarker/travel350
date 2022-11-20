import { gql } from "@apollo/client";

export const INSERT_PLACE = gql`
  mutation MyMutation ($name: String, $description: String, $city_id: ID){
    insertPlaces(city_id: $city_id, description: $description, name: $name) {
      city_id
      created_at
      description
      id
      name
    }
  }
`;