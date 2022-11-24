import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import { GET_CITY_BY_NAME } from "../../graphql/queries";
import Feed from "../../components/Feed";

function CityPage() {
  const {
    query: { cityName },
  } = useRouter();

  const { data, loading, error } = useQuery(GET_CITY_BY_NAME, {
    variables: {
      name: cityName,
    },
  });

  const places: Places[] = data?.getCityByCityName?.places;
  



  if (loading) return <p>Loading ...</p>;

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    <div>
      <div>Welcome to {cityName} City Page</div>
      {places?.map((place) => (
      <Feed key={place.id} placeName={place.name as string}/>
      ))}
    </div>
  );
}

export default CityPage;
