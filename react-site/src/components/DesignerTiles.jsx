import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/tiles.css";

class DesignerTiles extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="tile-nav">
          <Link to="/">Back to start</Link>
          <Link to="/DeveloperTiles">
            <button class="landing-button red">
              Developer<i class="fas fa-angle-right"></i>
            </button>
          </Link>
        </div>

        <div className="designer-tiles tiles">
          <div className="tile">Project</div>
          <div className="tile">Project</div>
          <div className="tile">Project</div>
          <div className="tile">Project</div>
          <div className="tile">Project</div>
          <div className="tile">Project</div>
          <div className="tile">Project</div>
          <div className="tile">Project</div>
          <div className="tile">Project</div>
        </div>
      </React.Fragment>
    );
  }
}

export default DesignerTiles;
