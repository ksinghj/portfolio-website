import React from "react";

class Tile extends React.Component {
  render() {
    const {
      tileClass,
      imgSrc,
      imgAlt,
      name,
      desc,
      href,
      btnClass
    } = this.props;
    return (
      <div className={`tile ${tileClass}`}>
        <img src={imgSrc} alt={imgAlt} />
        <p className="name">{name}</p>
        <p className="desc">{desc}</p>
        <a target="_blank" rel="noopener noreferrer" href={href}>
          <button className={`landing-button ${btnClass}`}>Go to site </button>
        </a>
      </div>
    );
  }
}

export default Tile;
