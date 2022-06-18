import React, { useState } from "react";
import "./CardEdit.css";
import { Link } from "react-router-dom";
import { Modal } from "../Modal/Modal";
import { Rating } from "@mui/material";

export const CardOrders = ({
  image,
  title,
  orderNumber,
  date,
  hotelType,
  hotelLocation,
  dateIn,
  dateOut,
  pricePaid,
  priceFor,
  priceBack,
  status,
  link,
  guests,
  type,
  options,
  meetLocation,
  locationFrom,
  locationTo
}) => {
  const [modal, setModal] = useState(false)
  
  const [ratingOwner, setRatingOwner] = useState(0)
  const [ratingComfort, setRatingComfort] = useState(0)
  const [ratingClean, setRatingClean] = useState(0)
  const [ratingLocation, setRatingLocation] = useState(0)

  const [desc, setDesc] = useState("")

  return (
    <li className="housing-catalog__searching-results-item order">
      <Modal visible={modal} onClose={() => setModal(false)}>
        <div className="ballance-page__modal-content">
          <h1 className="ballance-page__title">Оставить отзыв об отеле</h1>
            <table>
              <tr>
                <td>
                  Хозяин/персонал
                </td>
                <td>
                  <div>
                  <Rating
                    name="simple-controlled"
                    value={ratingOwner}
                    onChange={(event, newValue) => {
                      setRatingOwner(newValue);
                    }}
                  />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  Комфорт
                </td>
                <td>
                  <div>
                  <Rating
                    name="simple-controlled"
                    value={ratingComfort}
                    onChange={(event, newValue) => {
                      setRatingComfort(newValue);
                    }}
                  />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  Чистота
                </td>
                <td>
                  <div>
                  <Rating
                    name="simple-controlled"
                    value={ratingClean}
                    onChange={(event, newValue) => {
                      setRatingClean(newValue);
                    }}
                  />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  Местоположение
                </td>
                <td>
                  <div>
                  <Rating
                    name="simple-controlled"
                    value={ratingLocation}
                    onChange={(event, newValue) => {
                      setRatingLocation(newValue);
                    }}
                  />
                  </div>
                </td>
              </tr>
            </table>
            <div className="account-page__input-block">
              <textarea
                placeholder="Введите текст отзыва"
                type="text"
                value={desc}
                onChange={(event) => setDesc(event.target.value)}
                required></textarea>
          </div>
          <button
            className="account-page__btn-100"
            onClick={() => {
              setModal(false);
            }}
          >
            Отправить
          </button>
        </div>
      </Modal>
      <div className="housing-catalog__searching-results-image">
        <img
          className="searching-results-image__image"
          src={image || "../images/without-photo.png"}
          alt={title}
        />
        {status == "coming" ? (
          <p className="searching-results__sup-text">Будущий</p>
        ) : (
          ""
        )}
        {status == "closed" ? (
          <p className="searching-results__sup-text">Отменен туристом</p>
        ) : (
          ""
        )}
        {status == "end" ? (
          <p className="searching-results__sup-text">Завершенный</p>
        ) : (
          ""
        )}
      </div>
      <div className="searching-results__item">
        <h5 className="searching-results__item-order-number">
          Заказ №12{orderNumber}
          <span className="searching-results__item-date">{date}</span>
        </h5>
        <h5 className="searching-results__item-order-title">{title}</h5>
        <p className="searching-results__type-hotel">{hotelType}</p>
        {hotelLocation && (
          <p className="searching-results__location-hotel">
            <img src="/images/location.svg" alt="" />
            {hotelLocation}
          </p>
        )}
        {type == "hotel" && (
          <>
            <p className="searching-results__date">
              Заезд: <span>{dateIn}</span>
            </p>
            <p className="searching-results__date">
              Выезд: <span>{dateOut}</span>
            </p>
            <p className="searching-results__date">
              Гости: <span>{guests}</span>
            </p>
          </>
        )}
        {type == "excursion" && (
          <>
            <p className="searching-results__date">
            Дата экскурсии: <span>{dateIn}</span>
            </p>
            <p className="searching-results__date">
              Гости: <span>{guests}</span>
            </p>
            {options && <p className="searching-results__date">
              Дополнительные опции: <span>{options}</span>
            </p>}
            <p className="searching-results__date">
            Место встречи: <span>{meetLocation}</span>
            </p>
          </>
        )}
        {type == "rent" && (
          <>
            <p className="searching-results__date">
            Дата и время забирать: <span>{dateIn}</span>
            </p>
            <p className="searching-results__date">
            Дата и время возвращать: <span>{dateOut}</span>
            </p>
            <p className="searching-results__date">
              Гости: <span>{guests}</span>
            </p>
          </>
        )}
        {type == "transfer" && (
          <>
            <p className="searching-results__date">
            Откуда: <span>{locationFrom}</span>
            </p>
            <p className="searching-results__date">
            Куда: <span>{locationTo}</span>
            </p>
            <p className="searching-results__date">
            Дата и время забирать: <span>{dateIn}</span>
            </p>
            <p className="searching-results__date">
            Пассажиры: <span>{guests}</span>
            </p>
            <p className="searching-results__date">
            Обратная поездка, дата и время: <span>{dateOut}</span>
            </p>
          </>
        )}
        {type == "food" && (
          <>
            <p className="searching-results__date">
            Дата и время: <span>{dateIn}</span>
            </p>
            <p className="searching-results__date">
            Гости: <span>{guests}</span>
            </p>
          </>
        )}

        <p className="searching-results__price-order">
          <p><span>Оплачено:</span>{pricePaid}
          {type == "excursion" ? " с доп. опциями" : " за бронь"}</p>
          {status == 'closed' ?
           <p className="back-price">
           <span>
            Возврат:
           </span>
           {priceBack}
         </p> :
          <p>
            <span>
              {type == "hotel" && "Оплата хозяину:"}
              {type == "excursion" && "Оплата гиду-экскурсоводу:"}
              {type == "rent" && "Оплата владельцу:"}
              {type == "transfer" && "Оплата владельцу:"}
              {type == "food" && "Оплата владельцу:"}
            </span>
            {priceFor}
          </p>}
        </p>
        <div className="searching-results__btn-wrapper">
          <div className="account-page__row">
            {(status != "end" && status != "closed") && (
              <>
                <Link
                className="searching-results__edit-btn"
                  to={link !== undefined ? link : "./"}
                >
                  {type == "hotel" && 'Написать владельцу'}
                  {type == "excursion" && 'Написать гиду'}
                  {type == "rent" && 'Написать владельцу'}
                  {type == "transfer" && 'Написать компании'}
                  {type == "food" && 'Написать компании'}
                </Link>
                <Link
                 className="searching-results__calendar-btn"
                  to={link !== undefined ? link : "./"}
                >
                  Отменить бронирование
                </Link>
              </>
            )}
            {status == "end" && (
              <button
              className="searching-results__calendar-btn"
              onClick={() => setModal(true)}
              >
                  {type == "hotel" && 'Оставить отзыв об отеле'}
                  {type == "excursion" && 'Оставить отзыв об экскурсии'}
                  {type == "rent" && 'Оставить отзыв о компании'}
                  {type == "transfer" && 'Оставить отзыв о трансфере'}
                  {type == "food" && 'Оставить отзыв о ресторане'}
              </button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};
