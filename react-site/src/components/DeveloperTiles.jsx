import React, { Component } from "react";
import { Link } from "react-router-dom";

class DeveloperTiles extends Component {
  render() {
    return (
      <div className="developer-tiles">
        <Link to="/">Back to start</Link>
        <Link to="/CreatorTiles">
          <button class="landing-button green">
            Creator<i class="fas fa-angle-right"></i>
          </button>
        </Link>

        <div className="tile">Project</div>
        <div className="tile">Project</div>
        <div className="tile">Project</div>
        <div className="tile">Project</div>
      </div>
    );
  }
}

export default DeveloperTiles;
