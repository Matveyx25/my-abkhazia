import React from "react";

export const AccountLinkList = ({ pageType, clickHandler }) => {
  return (
    <ul className="main__banner-link-list">
      <li className="main__banner-link-list-item" onClick={() => clickHandler('Отели')}>
        <img
          className="main__banner-link-image"
          src="/images/apartment_building_construction_home_hotel_icon 1.svg"
          alt=""
        />
        <p
          className={
            pageType == "Отели"
              ? "main__banner-link-text" + " active"
              : "main__banner-link-text"
          }
        >
          Отели
        </p>
      </li>
      <li className="main__banner-link-list-item" onClick={() => clickHandler('Частное жилье')}>
        <img
          className="main__banner-link-image"
          src="/images/bxs_home.svg"
          alt=""
        />
        <p
          className={
            pageType == "Частное жилье"
              ? "main__banner-link-text" + " active"
              : "main__banner-link-text"
          }
        >
          Частное жилье
        </p>
      </li>
      <li className="main__banner-link-list-item" onClick={() => clickHandler('Эскурсии и впечатления')}>
        <img
          className="main__banner-link-image"
          src="/images/header-tours.svg"
          alt=""
        />
        <p
          className={
            pageType == "Эскурсии и впечатления"
              ? "main__banner-link-text" + " active"
              : "main__banner-link-text"
          }
        >
          Эскурсии и впечатления
        </p>
      </li>
      <li className="main__banner-link-list-item" onClick={() => clickHandler('Трансфер')}>
        <img
          className="main__banner-link-image"
          src="/images/header-transfer.svg"
          alt=""
        />
        <p
          className={
            pageType == "Трансфер"
              ? "main__banner-link-text" + " active"
              : "main__banner-link-text"
          }
        >
          Трансфер
        </p>
      </li>
      <li className="main__banner-link-list-item" onClick={() => clickHandler('Аренда авто')}>
        <img
          className="main__banner-link-image"
          src="/images/header-rent.svg"
          alt=""
        />
        <p
          className={
            pageType == "Аренда авто"
              ? "main__banner-link-text" + " active"
              : "main__banner-link-text"
          }
        >
          Аренда авто
        </p>
      </li>
      <li className="main__banner-link-list-item" onClick={() => clickHandler('Кухня Абхазии')}>
        <img
          className="main__banner-link-image"
          src="/images/header-kitchen.svg"
          alt=""
        />
        <p
          className={
            pageType == "Кухня Абхазии"
              ? "main__banner-link-text" + " active"
              : "main__banner-link-text"
          }
        >
          Кухня Абхазии
        </p>
      </li>
    </ul>
  );
};
