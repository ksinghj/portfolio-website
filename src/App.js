import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles/App.css";
import "./styles/styles.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainCard from "./components/MainCard";
// Tiles
import DesignerTiles from "./components/DesignerTiles";
import DeveloperTiles from "./components/DeveloperTiles";
import CreatorTiles from "./components/CreatorTiles";

function App() {
  return (
    <div className="App container">
      <Router>
        <Navbar></Navbar>
        <div className="main-flex">
          <Route
            exact
            path="/"
            render={props => <MainCard area="Designer" buttonColour="blue" />}
          />
          <Route
            exact
            path="/"
            render={props => <MainCard area="Developer" buttonColour="red" />}
          />
          <Route
            exact
            path="/"
            render={props => <MainCard area="Creator" buttonColour="green" />}
          />
        </div>
        <Route path="/DesignerTiles" component={DesignerTiles} />
        <Route path="/DeveloperTiles" component={DeveloperTiles} />
        <Route path="/CreatorTiles" component={CreatorTiles} />
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

// TODO: When button is clicked scroll to top of page (or header)
