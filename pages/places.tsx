import { useQuery } from "@apollo/client";
import City from "../components/City";
import Place from "../components/Place";
import { GET_CITY_LIST, GET_PLACES_LIST } from "../graphql/queries";



function places() {

  return (
    <div>
      <City/>
      <Place/>
    </div>
  );
}

export default places;
