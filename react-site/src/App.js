import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles/App.css";
import "./styles/styles.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Main flex items
import Designer from "./components/Designer";
import Developer from "./components/Developer";
import Creator from "./components/Creator";
// Tiles
import DesignerTiles from "./components/DesignerTiles";
import DeveloperTiles from "./components/DeveloperTiles";
import CreatorTiles from "./components/CreatorTiles";

function App() {
  return (
    <Router>
      <div className="App container">
        <Navbar></Navbar>
        <div className="main-flex">
          <Route exact path="/" component={Designer} />
          <Route exact path="/" component={Developer} />
          <Route exact path="/" component={Creator} />
        </div>
        <Route path="/DesignerTiles" component={DesignerTiles} />
        <Route path="/DeveloperTiles" component={DeveloperTiles} />
        <Route path="/CreatorTiles" component={CreatorTiles} />
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
