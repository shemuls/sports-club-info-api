import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Banner } from "../Banner/Banner.jsx";
import heroImage from "../../assets/images/football.jpg";
import classes from "./SingleLeague.module.css";

export const SingleLeague = () => {
  const { leagueId } = useParams();
  const [singleLeague, setSingleLeague] = useState({});

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSingleLeague(data.leagues[0]));
  }, [leagueId]);

  console.log(singleLeague);

  return (
    <div>
      <Banner bg={heroImage}>
        <div className="col">
          <h2 className="mb-4 display-4 text-light">
            {singleLeague.strLeague}
          </h2>
          <h6 className="text-light">
            <strong>Sport Type </strong> {singleLeague.strSport}
          </h6>
          <h6 className="text-light">
            This league for <strong> {singleLeague.strGender}</strong>
          </h6>
          <h6 className="text-light">
            <strong>Country </strong> {singleLeague.strCountry}
          </h6>
        </div>
      </Banner>
      <section>
        <div className="container">
          <div className={"row rounded " + classes.descArea}>
            <div className="col-md-4">
              <img
                className="img-thumbnail shadow p-5"
                src={singleLeague.strBadge}
                alt={singleLeague.strBadge}
              />
            </div>
            <div className="col-md-8">
              <p>{singleLeague.strDescriptionEN}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center">
        <Link to="/">Back to home</Link>
      </section>
    </div>
  );
};
