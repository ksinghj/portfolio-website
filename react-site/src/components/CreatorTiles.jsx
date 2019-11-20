import React, { Component } from "react";
import { Link } from "react-router-dom";

class CreatorTiles extends Component {
  render() {
    return (
      <div className="creator-tiles">
        <Link to="/">Back to start</Link>
        <div className="tile">Project</div>
        <div className="tile">Project</div>
        <div className="tile">Project</div>
        <div className="tile">Project</div>
      </div>
    );
  }
}

export default CreatorTiles;
