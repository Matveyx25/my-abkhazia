import React from "react";

export const AccountLinkList = () => {
  return (
    <ul className="main__banner-link-list">
      <li className="main__banner-link-list-item">
        <img
          className="main__banner-link-image"
          src="../images/apartment_building_construction_home_hotel_icon 1.svg"
          alt=""
        />
        <p className="main__banner-link-text">Отели</p>
      </li>
      <li className="main__banner-link-list-item">
        <img
          className="main__banner-link-image"
          src="../images/bxs_home.svg"
          alt=""
        />
        <p className="main__banner-link-text">Частное жилье</p>
      </li>
      <li className="main__banner-link-list-item">
        <img
          className="main__banner-link-image"
          src="../images/header-tours.svg"
          alt=""
        />
        <p className="main__banner-link-text">Эскурсии и впечатления</p>
      </li>
      <li className="main__banner-link-list-item">
        <img
          className="main__banner-link-image"
          src="../images/header-transfer.svg"
          alt=""
        />
        <p className="main__banner-link-text">Трансфер</p>
      </li>
      <li className="main__banner-link-list-item">
        <img
          className="main__banner-link-image"
          src="../images/header-rent.svg"
          alt=""
        />
        <p className="main__banner-link-text">Аренда авто</p>
      </li>
      <li className="main__banner-link-list-item">
        <img
          className="main__banner-link-image"
          src="../images/header-kitchen.svg"
          alt=""
        />
        <p className="main__banner-link-text">Кухня Абхазии</p>
      </li>
    </ul>
  );
};
