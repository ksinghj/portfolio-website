import React, { Component } from "react";
import { Link } from "react-router-dom";
// import DesignerTiles from "./components/DesignerTiles";

class MainFlex extends Component {
  render() {
    return (
      <div class="main-flex">
        <div class="main-flex-item designer">
          <p class="main-flex-header">Designer</p>
          <Link to="/DesignerTiles">
            <button class="landing-button blue">
              See projects<i class="fas fa-angle-right"></i>
            </button>
          </Link>
        </div>
        <div class="main-flex-item developer">
          <p class="main-flex-header">Developer</p>
          <Link to="/DesignerTiles">
            <button class="landing-button red">
              See projects<i class="fas fa-angle-right"></i>
            </button>
          </Link>
        </div>
        <div class="main-flex-item creator">
          <p class="main-flex-header">Creator</p>
          <Link to="/DesignerTiles">
            <button class="landing-button green">
              See projects<i class="fas fa-angle-right"></i>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default MainFlex;
