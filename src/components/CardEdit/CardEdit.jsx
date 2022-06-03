import React from "react";
import "./CardEdit.css";
import { Link } from "react-router-dom";

const CardEdit = ({
  image,
  title,
  stars,
  reviews,
  subTitle1,
  subTitle2,
  additions,
  price,
  choiseText,
  status,
  link
}) => {
  return (
    <li className="housing-catalog__searching-results-item for-edit">
      <div className="housing-catalog__searching-results-image">
        <img
          className="searching-results-image__image"
          src={image || '../images/without-photo.png'}
          alt={title}
        />
        {status == "active" ? (
          <p className="searching-results__sup-text">Активное</p>
        ) : (
          ""
        )}
        {status == "inactive" ? (
          <p className="searching-results__sup-text">Неактивное</p>
        ) : (
          ""
        )}
        {status == "draft" ? (
          <p className="searching-results__sup-text">Черновик</p>
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
        {status != 'draft' ? 
        <ul className="searching-results__additions">
          {additions.map((el) => (
            <li className="searching-results__addition">{el}</li>
          ))}
        </ul>: 
        <ul className="searching-results__additions">
          <li className="searching-results__addition-draft">Чтобы активировать объявление, перейдите в режим редактирования</li>
          <li className="searching-results__addition">Не показывается в поиске, не проверено</li>
        </ul>
        }
        <p className="searching-results__price">{price}</p>
        <div className="searching-results__btn-wrapper">
          <div className="account-page__row">
            <Link className="searching-results__calendar-btn" to={link!==undefined ? link : './'}>
              Календарь
            </Link>
            <Link className="searching-results__edit-btn" to={link!==undefined ? link : './'}>
            Редактировать
            </Link>
          </div>
          <Link className="searching-results__more-link" to={link!==undefined ? link : './'}>
            {choiseText}
          </Link>
        </div>
      </div>
    </li>
  );
};

export default CardEdit;
