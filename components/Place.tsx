import { useQuery } from "@apollo/client";
import { GET_CITY_LIST, GET_PLACES_LIST } from "../graphql/queries";

function Place() {
  const { loading, error, data } = useQuery(GET_PLACES_LIST);

  const cities: City[] = data?.getPlacesList;

  if (loading) return <p>Loading places...</p>;

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    <div className="max-w-[1240px] mx-auto">
      <p className="text-center text-4xl m-6 mt-20 uppercase tracking-widest">
        browse by tourist spots
      </p>
      <div className="grid md:grid-cols-6 grid-cols-2 gap-4">
        {cities?.map((city) => (
          <div className="w-full">
            <div className="max-w-[680px] mx-auto px-2 py-2   ">
              <div
                key={city.id}
                className="bg-gray-50 text-center  text-lg p-4 rounded-lg m-4 shadow-xl hover:bg-white ease-in duration-100 border-gray-500 border-b md:text-xl  "
              >
                {city.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Place;
