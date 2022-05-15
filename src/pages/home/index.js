import React from "react";
import JokeCard from "../../components/joke-card";
import "./index.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="cards-wrapper">
        <JokeCard.JokeCard />
        <JokeCard.JokeCard />
        <JokeCard.JokeCard />
        <JokeCard.JokeCard />
        <JokeCard.JokeCard />
        <JokeCard.JokeCard />
        <JokeCard.JokeCard />
        <JokeCard.JokeCard />
      </section>
    </div>
  );
};

export default HomePage;
