import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Body } from "./components/Body/Body.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { SingleLeague } from "./components/SingleLeague/SingleLeague.jsx";
import { Home } from "./components/Home/Home.jsx";
import { createContext, useState } from "react";

export const SportLeagueContext = createContext();

function App() {
  const [allLeagues, setAllLeagues] = useState([]);

  return (
    <SportLeagueContext.Provider
      value={{ allLeagues: allLeagues, setAllLeagues: setAllLeagues }}
    >
      <Router>
        <Body>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/league/:leagueId">
              <SingleLeague />
            </Route>
            <Route path="*">
              <h5 className="alert alert-danger p-5 m-5 text-center">
                404 Errors... <br />
                <Link to="/" className="btn btn-outline-dark btn-sm mt-4">
                  Back to home
                </Link>
              </h5>
            </Route>
          </Switch>
          <Footer />
        </Body>
      </Router>
    </SportLeagueContext.Provider>
  );
}

export default App;
