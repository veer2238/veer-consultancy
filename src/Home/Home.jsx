import React from "react";
import "./Cards/Card.scss";
import "./Home.scss";
import Service from "../Service/Service";
import Banner from "../Banner/Banner";
import CardsContainer from "./Cards/CardsContainer";
import Learning from "../Learning/Learning";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <CardsContainer />
      <Learning />
      <Service />
    </div>
  );
};

export default Home;
