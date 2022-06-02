import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({active}) => {
  return (
    <div className="housing-catalog__link-list-wrapper" >
      <ul className="housing-catalog__link-list">
        <li className="housing-catalog__link-item">
          <Link className= {active=='housing-catalog' ? "link-item__link  link-item__link--active" : "link-item__link"} to="/housing-catalog">
            <img
              className="link-item__link-image"
              src="../images/header-residence.svg"
              alt=""
            />
            <p className="link-item__link-text">Проживание</p>
          </Link>
        </li>
        <li className="housing-catalog__link-item">
          <Link className= {active=='tours' ? "link-item__link  link-item__link--active" : "link-item__link"} to="/tours">
            <img
              className="link-item__link-image"
              src="../images/header-tours.svg"
              alt=""
            />
            <p className="link-item__link-text">Эскурсии и впечатления</p>
          </Link>
        </li>
        <li className="housing-catalog__link-item">
          <Link className= {active=='transfer' ? "link-item__link  link-item__link--active" : "link-item__link"} to="/transfer">
            <img
              className="link-item__link-image"
              src="../images/header-transfer.svg"
              alt=""
            />
            <p className="link-item__link-text">Трансфер</p>
          </Link>
        </li>
        <li className="housing-catalog__link-item">
          <Link className= {active=='car-rent' ? "link-item__link  link-item__link--active" : "link-item__link"} to="/car-rent">
            <img
              className="link-item__link-image"
              src="../images/header-rent.svg"
              alt=""
            />
            <p className="link-item__link-text">Аренда авто</p>
          </Link>
        </li>
        <li className="housing-catalog__link-item">
          <Link className= {active=='cooking' ? "link-item__link  link-item__link--active" : "link-item__link"} to="/cooking">
            <img
              className="link-item__link-image"
              src="../images/header-kitchen.svg"
              alt=""
            />
            <p className="link-item__link-text">Кухня Абхазии</p>
          </Link>
        </li>
        <li className="housing-catalog__link-item">
          <Link
            className= {active=='cities' ? "link-item__link  link-item__link--active" : "link-item__link"}
            to="/cities"
          >
            <img
              className="link-item__link-image"
              src="../images/header-label.svg"
              alt=""
            />
            <p className="link-item__link-text">Города Абхазии</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
