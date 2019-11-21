import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/tiles.css";
// img
import ksj from "../img/tiles/developer/ksj.png";
import smartpuntr from "../img/tiles/developer/smartpuntr.png";
import mjcs from "../img/tiles/developer/mjcs.png";

class DeveloperTiles extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="tile-nav">
          <Link to="/">
            <button className="landing-button blue">
              <i className="fas fa-angle-left"></i>Back to start
            </button>
          </Link>
          <Link to="/CreatorTiles">
            <button className="landing-button green">
              Creator<i className="fas fa-angle-right"></i>
            </button>
          </Link>
        </div>

        <div className="page-name">
          <h1>Developer</h1>
          <p className="recent">Recent work examples</p>
        </div>

        <div className="developer-tiles tiles">
          <div className="tile tile-1">
            <img src={ksj} alt="My freelance website" />
            <p className="name">KSJ Online</p>
            <p className="desc">My freelance business website.</p>
            <button className="landing-button red">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ksj.services/"
              >
                Go to site
              </a>
            </button>
          </div>

          <div className="tile tile-2">
            <img
              src={smartpuntr}
              alt="SmartPuntr, an online betting platform"
            />
            <p className="name">SmartPuntr</p>
            <p className="desc">
              An online betting platform, used to track your betting history
              over time.
            </p>
            <button className="landing-button blue">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://smartpuntr.com/"
              >
                Go to site
              </a>
            </button>
          </div>

          <div className="tile tile-3">
            <img src={mjcs} alt="A property services company website" />
            <p className="name">MJ-CS Ltd</p>
            <p className="desc">A property services company website.</p>
            <button className="landing-button red">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://mjcs.ltd/"
              >
                Go to site
              </a>
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DeveloperTiles;
