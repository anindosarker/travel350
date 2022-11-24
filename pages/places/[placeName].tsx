import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import Feed from "../../components/Feed";
import { GET_PLACES_BY_NAME } from "../../graphql/queries";

function PlacesPage() {
  const {
    query: { placeName },
  } = useRouter();

  const { data, error, loading } = useQuery(GET_PLACES_BY_NAME);
  return (
    <div>
      <div className="text-center text-4xl m-6 mt-20 uppercase tracking-widest">
        Welcome to {placeName} Spot Page
      </div>
      <Feed placeName={placeName as string} />
      <pre>{JSON.stringify(data, null, 2)}</pre>{" "}
    </div>
  );
}

export default PlacesPage;
