import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { AllLeagues } from "./components/AllLeagues/AllLeagues.jsx";
import { Banner } from "./components/Banner/Banner.jsx";
import { Body } from "./components/Body/Body.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Body>
        <Switch>
          <Route exact path="/">
            <Banner />
            <AllLeagues />
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
  );
}

export default App;
