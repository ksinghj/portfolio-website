import React from "react";

class Tile extends React.Component {
  // some Tiles don't need buttons
  renderButton = ({ href, btnClass } = this.props) => {
    if ((href, btnClass)) {
      return (
        <a target="_blank" rel="noopener noreferrer" href={href}>
          <button className={`landing-button ${btnClass}`}>Go to site </button>
        </a>
      );
    }
    return null;
  };
  render() {
    const { tileClass, imgSrc, imgAlt, name, desc } = this.props;
    return (
      <div className={`tile ${tileClass}`}>
        <img src={imgSrc} alt={imgAlt} />
        <p className="name">{name}</p>
        <p className="desc">{desc}</p>
        {this.renderButton()}
      </div>
    );
  }
}

export default Tile;
