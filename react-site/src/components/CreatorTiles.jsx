import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/tiles.css";
// img
import questation from "../img/tiles/designer/Questation.png";

class CreatorTiles extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="creator-tiles">
          <div className="tile-nav">
            <Link to="/">
              <button className="landing-button blue">
                <i className="fas fa-angle-left"></i>Back to start
              </button>
            </Link>
            <Link to="/DesignerTiles">
              <button class="landing-button blue">
                Designer<i class="fas fa-angle-right"></i>
              </button>
            </Link>
          </div>
        </div>

        <div className="page-name">
          <h1>Creator</h1>
          <p className="recent">Recent work examples</p>
        </div>

        <div className="designer-tiles tiles">
          <div className="tile tile-1">
            <img src={questation} alt="My maths app" />
            <p className="name">Questation</p>
            <p className="desc">
              Coming soon... An app built for maths teachers, currently in
              development.
            </p>
            <button className="landing-button red">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://google.com/"
              >
                See more here
              </a>
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CreatorTiles;
