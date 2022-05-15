import React from "react";
import JokeCard from "../../components/joke-card";
import "./index.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      <JokeCard.JokeCard />
    </div>
  );
};

export default HomePage;
