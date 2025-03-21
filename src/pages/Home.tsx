import React from "react";
import OurFruits from "../components/OurFruits";
import OurVeggies from "../components/OurVeggies";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <OurFruits />
      <OurVeggies />
    </div>
  );
};

export default Home;
