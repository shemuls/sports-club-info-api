import React from "react";
import { useContext, useEffect } from "react";
import { shuffle } from "../../utilities/CustomFunction.js";
import LinearProgress from "@material-ui/core/LinearProgress";
import { League } from "../League/League.jsx";
import { useHistory } from "react-router-dom";
import { SportLeagueContext } from "../../App.js";

export const AllLeagues = () => {
  // const [allLeagues, setAllLeagues] = useState([]);
  const { allLeagues, setAllLeagues } = useContext(SportLeagueContext);

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

  const getHistory = useHistory();
  const viewLeagueHandle = (leagueId) => {
    getHistory.push("/league/" + leagueId);
    console.log(leagueId);
  };

  return (
    <div className="container">
      <div id="league-item" className="row mt-5">
        {allLeagues.length ? (
          allLeagues.map((singleLeague) => (
            <League
              key={singleLeague.idLeague}
              singleLeague={singleLeague}
              viewLeagueHandle={viewLeagueHandle}
            />
          ))
        ) : (
          <LinearProgress />
        )}
      </div>
    </div>
  );
};
