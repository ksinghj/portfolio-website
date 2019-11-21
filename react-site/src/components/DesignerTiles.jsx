import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/tiles.css";
// img
import questation from "../img/tiles/designer/Questation.png";
import KARTAR from '../img/tiles/designer/"KARTAR".png';
import flatspace from "../img/tiles/designer/flatspace.png";

class DesignerTiles extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="tile-nav">
          <Link to="/">
            <button className="landing-button blue">
              <i className="fas fa-angle-left"></i>Back to start
            </button>
          </Link>
          <Link to="/DeveloperTiles">
            <button className="landing-button red">
              Developer<i className="fas fa-angle-right"></i>
            </button>
          </Link>
        </div>

        <div className="page-name">
          <h1>Designer</h1>
          <p className="recent">Recent work examples</p>
        </div>

        <div className="designer-tiles tiles">
          <div className="tile tile-1">
            <img src={questation} alt="Maths question generator app" />
            <p className="name">Questation</p>
            <p className="desc">
              Coming soon... An app built for maths teachers, currently in
              development.
            </p>
            <button className="landing-button red">
              <Link to="/CreatorTiles">Learn more here</Link>
            </button>
          </div>

          <div className="tile tile-2">
            <img src={KARTAR} alt="Old portfolio design" />
            <p className="name">Legacy portfolio design</p>
            <p className="desc">
              Previous design iteration of this website, before I opted to build
              it using React.js
            </p>
          </div>

          <div className="tile tile-3">
            <img src={flatspace} alt="flat space frame" />
            <p className="name">Flat space frame</p>
            <p className="desc">Flat space sketch file</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DesignerTiles;
