import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import { GET_CITY_BY_CITY_ID } from "../../graphql/queries";

function CityPage() {
  const router = useRouter();

  const { data, loading, error } = useQuery(GET_CITY_BY_CITY_ID, {
    variables: {
      id: router.query.cityID,
    },
  });
  return (
    <div>
      <div>{data?.getCity.name}</div>
    </div>
  );
}

export default CityPage;
