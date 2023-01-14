import { useQuery } from "@apollo/client";
import Link from "next/link";
import { GET_CITY_LIST, GET_PLACES_LIST } from "../graphql/queries";
import Searchbox from "./Searchbox";

function City() {
  const { loading, error, data } = useQuery(GET_CITY_LIST);

  const cities: City[] = data?.getCityList;

  if (loading) return <p>Loading ...</p>;

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center mt-24 mr-28">
        <Searchbox />
      </div>
      <div className="max-w-[1240px] mx-auto">
        <p className="text-center text-4xl m-6 mt-20 uppercase tracking-widest">
          browse by cities
        </p>
        <div className="grid md:grid-cols-6 grid-cols-2 gap-4">
          {cities?.map((city) => (
            <div className="w-full">
                <Link
                  href={`/cities/${city?.name}`}
                  className="max-w-[680px] mx-auto px-2 py-2  cursor-pointer "
                >
                  <div
                    key={city.id}
                    className="bg-gray-50 text-center  text-lg p-4 rounded-lg m-4 shadow-xl hover:bg-white ease-in duration-100 border-gray-500 border-b md:text-xl  "
                  >
                    {city.name}
                  </div>
                </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default City;
