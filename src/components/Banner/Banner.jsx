import React from "react";
import "./Banner.css"

const Banner = ({ title, image }) => {
  return (
    <section className="just-banner">
      <img className="just-banner__image" src={image} alt="banner" />
      <h2 className="banner__title ">{title}</h2>
    </section>
  );
};

export default Banner;
