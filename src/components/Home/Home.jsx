import React from "react";
import { AllLeagues } from "../AllLeagues/AllLeagues.jsx";
import { Banner } from "../Banner/Banner.jsx";
import heroImage from "../../assets/images/bg.jpg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Banner bg={heroImage}>
        <div className="col">
          <h2 className="mb-4 display-4 text-light">Welcome to Sports Club</h2>
          <Link
            to={{ hash: "#league-item" }}
            className="btn btn-primary btn-lg"
          >
            View More
          </Link>
        </div>
      </Banner>
      <AllLeagues />
    </>
  );
};
