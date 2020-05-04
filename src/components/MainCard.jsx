import React from "react";
import { Link } from "react-router-dom";
// import DesignerTiles from "./components/DesignerTiles";

class MainCard extends React.Component {
  renderButton = () => {
    const className = `landing-button ${this.props.buttonColour}`;
    return (
      <button className={className}>
        See projects<i className="fas fa-angle-right"></i>
      </button>
    );
  };

  render() {
    const { area } = this.props;
    const Linkto = `/${area}Tiles`;
    return (
      <div class="main-flex-item developer">
        <p class="main-flex-header">{area}</p>
        <Link to={Linkto}>{this.renderButton()}</Link>
      </div>
    );
  }
}

export default MainCard;

// TODO: add props as area e.g Developer, add buttonColour
