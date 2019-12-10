import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/tiles.css";
// img
import questation from "../img/tiles/creator/questation.png";
import questation2 from "../img/tiles/creator/questation2.png";
import questation3 from "../img/tiles/creator/questation3.png";
import bookNotes from "../img/tiles/creator/bookNotes-1.png";

function Tile(props) {
  return (
    <div className={`tile ${props.tileClass}`}>
      <img src={props.imgSrc} alt={props.imgAlt} />
      <p className="name">{props.name}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
}

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
          <p className="recent">What I'm currently working on</p>
        </div>

        <div className="designer-tiles tiles">
          <div className="tile tile-1">
            <img src={questation} alt="Questation - papers, please." />
            <p className="name">Questation</p>
            <p className="desc">Papers, please.</p>
            <br />
            <p className="desc">
              An app built for maths teachers, currently in development.
            </p>
            <p className="desc">
              More details to be released soon, but in short, Questation is a
              question generator that aims to simplify the process of creating
              and recording homework for students.{" "}
            </p>
            <p className="desc"> More screenshots*:</p>
            <img className="more" src={questation2} alt="My maths app" />
            <img className="more" src={questation3} alt="My maths app" />
            <p className="desc">*Design subject to change.</p>
          </div>

          <Tile
            tileClass="tile-2"
            imgSrc={bookNotes}
            alt={"Book Notes"}
            name="Book Notes (Blog)"
            desc="A website where I upload my notes on books I've read. This site was made with WordPress."
          />
        </div>
      </React.Fragment>
    );
  }
}

export default CreatorTiles;
