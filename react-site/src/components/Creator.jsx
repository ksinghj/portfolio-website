import React, { Component } from "react";
import { Link } from "react-router-dom";
// import DesignerTiles from "./components/DesignerTiles";

class Creator extends Component {
  render() {
    return (
      <div class="main-flex-item creator">
        <p class="main-flex-header">Creator</p>
        <Link to="/CreatorTiles">
          <button class="landing-button green">
            See projects<i class="fas fa-angle-right"></i>
          </button>
        </Link>
      </div>
    );
  }
}

export default Creator;
