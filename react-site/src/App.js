import React from "react";
import "./styles/App.css";
import "./styles/styles.scss";
import Navbar from "./components/Navbar";
import MainFlex from "./components/MainFlex";
import Footer from "./components/Footer";
import DesignerTiles from "./components/DesignerTiles";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App container">
        <Navbar></Navbar>
        <Route exact path="/" component={MainFlex} />
        <Route path="/DesignerTiles" component={DesignerTiles} />
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
