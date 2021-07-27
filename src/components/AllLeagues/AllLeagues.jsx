import React from "react";
import { useState, useEffect } from "react";
import { shuffle } from "../../utilities/CustomFunction.js";
import LinearProgress from "@material-ui/core/LinearProgress";
import { League } from "../League/League.jsx";

export const AllLeagues = () => {
  const [allLeagues, setAllLeagues] = useState([]);
  useEffect(() => {
    const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        shuffle(data.leagues);
        const totalLeagues = data.leagues;
        const leagues12 = totalLeagues.slice(0, 12);
        setAllLeagues(leagues12);
      });
  }, []);

  return (
    <div className="container">
      <div className="row mt-5">
        {allLeagues.length ? (
          allLeagues.map((singleLeague) => (
            <League singleLeague={singleLeague} />
          ))
        ) : (
          <LinearProgress />
        )}
      </div>
    </div>
  );
};
