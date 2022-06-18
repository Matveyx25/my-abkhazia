import React, { useState } from "react";
import "./CardEdit.css";
import { Link } from "react-router-dom";

export const CardOrdersSmall = ({
  image,
  title,
  hotelType,
  hotelLocation,
  price,
  link,
}) => {

  return (
    <li className="housing-catalog__searching-results-item order-sm">
      <div className="housing-catalog__searching-results-image">
        <img
          className="searching-results-image__image"
          src={image || "../images/without-photo.png"}
          alt={title}
        />
      </div>
      <div className="searching-results__item">
        
        <h5 className="searching-results__item-order-title">{title}</h5>
        <p className="searching-results__type-hotel">{hotelType}</p>
        {hotelLocation && (
          <p className="searching-results__location-hotel">
            <img src="/images/location.svg" alt="" />
            {hotelLocation}
          </p>
        )}
        <div className="searching-results__footer">
          <p className="searching-results__price-order">{price}</p>
          <a href={link}>Подробнее</a>
        </div>
      </div>
    </li>
  );
};
