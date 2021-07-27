import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { AllLeagues } from "./components/AllLeagues/AllLeagues.jsx";
import { Banner } from "./components/Banner/Banner.jsx";
import { Body } from "./components/Body/Body.jsx";
function App() {
  return (
    <Body>
      <Banner />
      <AllLeagues />
    </Body>
  );
}

export default App;
