import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Banner } from "../Banner/Banner.jsx";
import football from "../../assets/images/football.jpg";
import Basketball from "../../assets/images/Basketball.jpg";
import Fighting from "../../assets/images/Fighting.jpg";
import Volleyball from "../../assets/images/Volleyball.jpg";
import tableTennis from "../../assets/images/Table Tennis.jpg";
import Golf from "../../assets/images/Golf.jpg";
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
  let bg = singleLeague.strFanart1;
  if (singleLeague.strSport === "Soccer") {
    bg = football;
  } else if (singleLeague.strSport === "Basketball") {
    bg = Basketball;
  } else if (singleLeague.strSport === "Fighting") {
    bg = singleLeague.strFanart1;
  } else if (singleLeague.strSport === "Volleyball") {
    bg = Volleyball;
  } else if (singleLeague.strSport === "Table Tennis") {
    bg = tableTennis;
  } else if (singleLeague.strSport === "Golf") {
    bg = Golf;
  } else {
    bg = singleLeague.strFanart1;
  }

  return (
    <div>
      <Banner bg={bg}>
        <div className="col">
          <img
            className={classes.imgHeight}
            src={singleLeague.strTrophy}
            alt={singleLeague.strTrophy}
          />
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
            <strong>Country: </strong> {singleLeague.strCountry}
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
