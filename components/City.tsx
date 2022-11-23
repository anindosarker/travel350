import { useQuery } from "@apollo/client";
import Link from "next/link";
import { GET_CITY_LIST, GET_PLACES_LIST } from "../graphql/queries";

function City() {
  const { loading, error, data } = useQuery(GET_CITY_LIST);

  const cities: City[] = data?.getCityList;

  if (loading) return <p>Loading ...</p>;

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    <div className="max-w-[1240px] mx-auto">
      <p className="text-center text-4xl m-6 mt-20 uppercase tracking-widest">
        browse by cities
      </p>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {cities?.map((city) => (
          <div className="w-full">
            <div className="max-w-[680px] mx-auto px-2 py-2   ">
              <Link href="../pages/cities/[cityposts].tsx">
              <div
                key={city.id}
                className="bg-gray-50 text-center  text-xl p-8 rounded-lg m-4 shadow-xl hover:bg-white ease-in duration-100 border-gray-500 border-b md:text-3xl  "
              >
                {city.name}
              </div>
              </Link>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default City;
