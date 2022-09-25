import React from "react";
import Navbar from "../../components/navbar/Navbar";
import SingleSpot from "../singlespot/SingleSpot";

const SingleSpots = () => {
  return (
    <div className="bg-[url('img.jpg')]">
      <Navbar />
      <div className="bg-slate-500 w-full flex justify-center">
        <div className="mt-10 w-11/12 bg-white rounded-md">
          <SingleSpot
            user="Taposh Singha"
            time="4 days ago"
            comments="26"
            likes="3"
            title="Sundarbans forest"
            tag1="nature"
            tag2="forest"
            tag3="spot"
            img="https://blog.flyticket.com.bd/wp-content/uploads/2020/05/image001.jpg"
            summary="The Sundarbans Reserve Forest (SRF), located in the south-west of
            Bangladesh between the river Baleswar in the East and the Harinbanga
            in the West, adjoining to the Bay of Bengal, is the largest contiguous
            mangrove forest in the world. Lying between latitude 21° 27′ 30″ and
            22° 30′ 00″ North and longitude 89° 02′ 00″ and 90° 00′ 00″ East and
            with a total area of 10,000 km2, 60% of the property lies in
            Bangladesh and the rest in India. The land area, including exposed
            sandbars, occupies 414,259 ha (70%) with water bodies covering 187,413
            ha (30%). The three wildlife sanctuaries in the south cover an area of
            139,700 ha and are considered core breeding areas for a number of
            endangered species. Situated in a unique bioclimatic zone within a
            typical geographical situation in the coastal region of the Bay of
            Bengal, it is a landmark of ancient heritage of mythological and
            historical events. Bestowed with magnificent scenic beauty and natural
            resources, it is internationally recognized for its high biodiversity
            of mangrove flora and fauna both on land and water. The immense tidal
            mangrove forests of Bangladeshs’ Sundarbans Forest Reserve, is in
            reality a mosaic of islands of different shapes and sizes, perennially
            washed by brackish water shrilling in and around the endless and
            mind-boggling labyrinths of water channels. The site supports
            exceptional biodiversity in its terrestrial, aquatic and marine
            habitats; ranging from micro to macro flora and fauna. The Sundarbans
            is of universal importance for globally endangered species including
            the Royal Bengal Tiger, Ganges and Irawadi dolphins, estuarine
            crocodiles and the critically endangered endemic river terrapin
            (Batagur baska). It is the only mangrove habitat in the world for
            Panthera tigris tigris species."
            comment1="This is a great summary of sundarban"
            commentuser1name="Farhan Mahtab Mahi"
            commentuser1time="4 days ago"
            comment2="good post"
            commentuser2name="Anindo Sarkar"
            commentuser2time="4 days ago"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleSpots;
