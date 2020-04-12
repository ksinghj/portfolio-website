import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/tiles.css";
import Tile from "./Tile";
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
          <Tile
            tileClass="tile-1"
            imgSrc={ksj}
            alt={"KSJ"}
            name="KSJ Online"
            desc="My freelance business website; Cost effective solutions to create
              and expand business online. I have been freelancing for a year
              now, building websites for local businesses and Individuals across
              the country."
            btnClass="red"
            href="https://ksj.services/"
          />

          <Tile
            tileClass="tile-2"
            imgSrc={smartpuntr}
            alt={"SmartPuntr, an online betting platform"}
            name="SmartPuntr"
            desc="An online betting platform, used to track your betting history
              over time."
            btnClass="blue"
            href="https://smartpuntr.com/"
          />

          <Tile
            tileClass="tile-3"
            imgSrc={mjcs}
            alt={"A property services company website"}
            name="MJ-CS Ltd"
            desc="A property services company website"
            btnClass="red"
            href="https://mjcs.ltd/"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default DeveloperTiles;
