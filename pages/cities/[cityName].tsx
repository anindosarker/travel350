import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import { GET_CITY_BY_NAME } from "../../graphql/queries";

function CityPage() {
  const router = useRouter();

  const { data, loading, error } = useQuery(GET_CITY_BY_NAME, {
    variables: {
      id: router.query.cityName,
    },
  });
  return (
    <div>
      <div>Welcome to {data?.getCityByCityName.name} City Page</div>
    </div>
  );
}

export default CityPage;
