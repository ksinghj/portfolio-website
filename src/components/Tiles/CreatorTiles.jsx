import React from "react";
import { Link } from "react-router-dom";
import useWindowDimensions from "../../useWindowDimensions";
import "../../styles/tiles.css";
// img
import questation from "../../img/tiles/creator/sr_demo.mov";
// import questation1 from "../../img/tiles/creator/questation1.png";
// import questation2 from "../../img/tiles/creator/questation2.png";
// import questation3 from "../../img/tiles/creator/questation3.png";

const videoWidth = width => {
  if (width < 450) {
    return "300px";
  }
  return "450px";
};

const CreatorTiles = () => {
  const { width } = useWindowDimensions();

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
          <video width={videoWidth(width)} controls autoplay>
            <source src={questation} type="video/mp4" />
          </video>
          <p className="name">Questation</p>
          <p className="desc">Papers, please.</p>
          <br />
          <p className="desc">
            An app built for maths teachers, automating homework creation.
          </p>
          <p className="desc">
            Questation - The right way to create homework. Questation is the
            perfect resource for maths teachers; structure your questions, I'll
            do the rest.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreatorTiles;
