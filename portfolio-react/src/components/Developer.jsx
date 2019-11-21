import React, { Component } from "react";
import { Link } from "react-router-dom";
// import DesignerTiles from "./components/DesignerTiles";

class Developer extends Component {
  render() {
    return (
      <div class="main-flex-item developer">
        <p class="main-flex-header">Developer</p>
        <Link to="/DeveloperTiles">
          <button class="landing-button red">
            See projects<i class="fas fa-angle-right"></i>
          </button>
        </Link>
      </div>
    );
  }
}

export default Developer;
