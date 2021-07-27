import { log } from "loglevel";
import React from "react";
import itemBg from "../../assets/images/itemBg.jpg";
import { blur, leagueItem } from "./League.module.css";
export const League = ({ singleLeague, viewLeagueHandle }) => {
  const { idLeague, strLeague, strSport } = singleLeague;
  return (
    <div className="col-md-3 mb-3">
      <div
        style={{ backgroundImage: `url(${itemBg})` }}
        className={leagueItem + " card text-light shadow-lg"}
      >
        <div className={blur + " card-body"}>
          <div className="text-center">
            <h5 className="card-title">{strLeague}</h5>
            <p>
              <strong>Sports: </strong> {strSport}
            </p>
            <button
              onClick={() => viewLeagueHandle(idLeague)}
              className="btn btn-outline-light btn-sm"
            >
              view details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
