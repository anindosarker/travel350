import { useQuery } from "@apollo/client";
import City from "../components/City";
import { GET_CITY_LIST, GET_PLACES_LIST } from "../graphql/queries";



function places() {

  return (
    <div>
      <City/>
    </div>
  );
}

export default places;
