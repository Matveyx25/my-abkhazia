import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

/* Передается адрес картинки, stars - количество звезд - Number, reviews - количество отзывов - Number, additions - массив с текстовыми значениями,
все остальное - string, pigeonDroppings - это надпись поверх картинки, необязательна, есть три варианта - day, dayMonth, hour */

const Card = ({
  image,
  title,
  stars,
  reviews,
  subTitle1,
  subTitle2,
  additions,
  price,
  choiseText,
  pigeonDroppings,
  link
}) => {
  return (
    <li className="housing-catalog__searching-results-item">
      <div className="housing-catalog__searching-results-image">
        <img
          className="searching-results-image__image"
          src={image}
          alt={title}
          width="255"
          height="231"
        />
        {pigeonDroppings == "hour" ? (
          <p className="transfer-automobile__hour-message">
            Час ожидания включен
          </p>
        ) : (
          ""
        )}
        {pigeonDroppings == "dayMonth" ? (
          <p className="searching-results__sup-text">На сутки / на месяц</p>
        ) : (
          ""
        )}
        {pigeonDroppings == "day" ? (
          <p className="searching-results__sup-text">На сутки</p>
        ) : (
          ""
        )}
      </div>
      <div className="searching-results__item">
        <h5 className="searching-results__item-title">{title}</h5>
        <div className="searching-results__reviews">
          <ul className="searching-results__reviews-stars">
            <li
              className={
                stars > 0
                  ? "searching-results__reviews-star"
                  : "searching-results__reviews-star searching-results__reviews-star--non-active"
              }
            ></li>
            <li
              className={
                stars > 1
                  ? "searching-results__reviews-star"
                  : "searching-results__reviews-star searching-results__reviews-star--non-active"
              }
            ></li>
            <li
              className={
                stars > 2
                  ? "searching-results__reviews-star"
                  : "searching-results__reviews-star searching-results__reviews-star--non-active"
              }
            ></li>
            <li
              className={
                stars > 3
                  ? "searching-results__reviews-star"
                  : "searching-results__reviews-star searching-results__reviews-star--non-active"
              }
            ></li>
            <li
              className={
                stars > 4
                  ? "searching-results__reviews-star"
                  : "searching-results__reviews-star searching-results__reviews-star--non-active"
              }
            ></li>
          </ul>
          <p className="searching-results__reviews-number">{reviews} отзывов</p>
        </div>
        <div className="searching-results__sub-title">
          <p className="searching-results__sub-title-room">{subTitle1}</p>
          <div className="searching-results__sub-title-decoration"></div>
          <p className="searching-results__sub-title-town">{subTitle2}</p>
        </div>
        <ul className="searching-results__additions">
          {additions.map((el) => (
            <li className="searching-results__addition">{el}</li>
          ))}
        </ul>
        <p className="searching-results__price">{price}</p>
        <Link className="searching-results__more-link" to={link ? link : './'}>
          {choiseText}
        </Link>
      </div>
    </li>
  );
};

export default Card;
