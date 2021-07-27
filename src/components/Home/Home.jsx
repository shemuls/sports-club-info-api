import React from "react";
import { AllLeagues } from "../AllLeagues/AllLeagues.jsx";
import { Banner } from "../Banner/Banner.jsx";
import heroImage from "../../assets/images/bg.jpg";

export const Home = () => {
  return (
    <>
      <Banner bg={heroImage}>
        <div className="col">
          <h2 className="mb-4 display-4 text-light">Welcome to Sports Club</h2>
          <button className="btn btn-primary btn-lg">View More</button>
        </div>
      </Banner>
      <AllLeagues />
    </>
  );
};
