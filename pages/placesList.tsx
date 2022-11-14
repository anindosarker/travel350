import React from "react";
import PlaceCard from "../components/PlaceCard";
import { gql, useQuery } from "@apollo/client";

const GET_QUERY = gql`
  query MyQuery {
    getPlacesList {
      created_at
      description
      name
      id
    }
  }
`;

function placesList() {
  const { loading, error, data } = useQuery(GET_QUERY);
  console.log(data?.getPlacesList[0]);
  return (
    <div className="bg-white w-screen">
      <h1 className="text-center mt-5 text-[22px] font-bold mb-5">
        Here are all the places in this site:
      </h1>
      <div className="flex justify-center">
        <div className="w-11/12 h-[800px space-y-3 flex justify-center">
          <div>
            {data?.getPlacesList.map((b) => (
              <PlaceCard place={b} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default placesList;
