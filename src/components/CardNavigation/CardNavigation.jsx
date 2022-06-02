import React from "react";
import { Link } from "react-router-dom";

const CardNavigation = ({ secondText, secondLink, thirdText }) => {
  return (
    <section className="housing-catalog__page-way">
      <Link to="/" className="page-way__first">
        Главная
      </Link>
      <div className="page-way__decoration"></div>
      <Link
        to={secondLink}
        className="page-way__second page-way__second--hover"
      >
        {secondText}
      </Link>
      <div className="page-way__decoration"></div>
      <p className="page-way__second">{thirdText}</p>
    </section>
  );
};

export default CardNavigation;
