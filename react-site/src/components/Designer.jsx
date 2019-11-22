import React, { Component } from "react";
import { Link } from "react-router-dom";
// import DesignerTiles from "./components/DesignerTiles";

class Designer extends Component {
  render() {
    return (
      <div class="main-flex-item designer">
        <p class="main-flex-header">Designer</p>
        <Link to="/DesignerTiles">
          <button class="landing-button blue">
            See projects<i class="fas fa-angle-right"></i>
          </button>
        </Link>
      </div>
    );
  }
}

export default Designer;
