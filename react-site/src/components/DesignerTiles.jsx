import React, { Component } from "react";
import { Link } from "react-router-dom";

class DesignerTiles extends Component {
  render() {
    return (
      <div className="designer-tiles">
        <Link to="/">Back to start</Link>
        <div className="tile">Project</div>
        <div className="tile">Project</div>
        <div className="tile">Project</div>
        <div className="tile">Project</div>
      </div>
    );
  }
}

export default DesignerTiles;
