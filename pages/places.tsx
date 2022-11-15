import { useQuery } from "@apollo/client";
import { GET_PLACES_LIST } from "../graphql/queries";



function places() {
  const { loading, error, data } = useQuery(GET_PLACES_LIST);

  const cities: City[] = data?.getPlacesList;

  if (loading) return <p>Loading ...</p>;

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    <div>
      {cities?.map((city) => (
        <div className="flex items-center ">
          <div key={city.id} className="bg-white  text-9xl">
            {city.name}
          </div>
        </div>
      ))}

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default places;
