import React, { useState } from "react";
import "./TransferCatalog.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Navigation from "../../components/Navigation/Navigation";

const TransferCatalog = () => {
  const [babyChair, changeChairNubmer] = useState(0);
  const [booster, changeBooster] = useState(0);
  const [countdown, changeCountdown] = useState(false);
  const [timeChoise, changeTime] = useState("12:00");
  const [timeModalWindow, tongleModalTime] = useState(false);
  const [searchDataAndTimeWindow, tongleTimeDataWindow] = useState(true);

  const [calendarValue, onChangeCalendar] = useState(new Date());
  const [calendarModalWindow, tongleModalCalendar] = useState(false);
  const [ourDateInForm, changeOurDateInForm] = useState("21 мая 2022 года");

  const addChair = () => {
    let ourNumber = babyChair;
    changeChairNubmer(ourNumber + 1);
  };
  const addBooster = () => {
    let ourNumber = booster;
    changeBooster(ourNumber + 1);
  };
  const deleteChair = () => {
    let ourNumber = babyChair;
    if (ourNumber > 0) {
      changeChairNubmer(ourNumber - 1);
    }
  };
  const deleteBooster = () => {
    let ourNumber = booster;
    if (ourNumber > 0) {
      changeBooster(ourNumber - 1);
    }
  };

  const tongleCountdown = () => {
    if (countdown) {
      changeCountdown(false);
    } else {
      changeCountdown(true);
    }
  };

  const changeDataInput = (e) => {
    let our = e.target.attributes["aria-label"].value;
    console.log(our);
    changeOurDateInForm(String(our));
  };

  const changeTimeLocal = (e) => {
    changeTime(e.target.value);
  };

  const tongleTime = () => {
    if (timeModalWindow) {
      tongleModalTime(false);
    } else {
      tongleModalTime(true);
    }
  };

  const tongleModalData = () => {
    console.log(calendarValue);
    if (calendarModalWindow) {
      tongleModalCalendar(false);
    } else {
      tongleModalCalendar(true);
    }
  };

  const upTime = () => {
    let newTime = timeChoise.split(":");
    let minutes = Number(newTime[1]) + 1;
    let hours = Number(newTime[0]);
    let resultHours = "";
    let resultMinutes = "";
    if (minutes > 59) {
      minutes = "00";
      hours = hours + 1;
    } else if (hours > 23) {
      hours = "00";
    }
    resultHours = hours;
    resultMinutes = minutes;

    if (Number(hours) < 10) {
      resultHours = "0" + String(hours);
    } else if (Number(minutes) < 10) {
      resultMinutes = "0" + String(minutes);
    }
    if (resultMinutes === "000") {
      resultMinutes = "00";
    } else if (resultHours === "000") {
      resultHours = "00";
    }
    changeTime(`${resultHours}:${resultMinutes}`);
    console.log(timeChoise);
  };
  const downTime = () => {
    let newTime = timeChoise.split(":");
    let minutes = Number(newTime[1]) - 1;
    let hours = Number(newTime[0]);
    let resultHours = "";
    let resultMinutes = "";
    if (minutes < 0) {
      minutes = "59";
      hours = hours - 1;
    } else if (hours < 0) {
      hours = "23";
    }
    resultHours = hours;
    resultMinutes = minutes;
    if (Number(hours) < 10) {
      resultHours = "0" + String(hours);
    } else if (Number(minutes) < 10) {
      resultMinutes = "0" + String(minutes);
    }
    if (resultMinutes === "000") {
      resultMinutes = "00";
    } else if (resultHours === "000") {
      resultHours = "00";
    }
    changeTime(`${resultHours}:${resultMinutes}`);
    console.log(timeChoise);
  };

  return (
    <div className="transfer-catalog">
      <Header wallet={true} closeEmail={true} />
      <Navigation active="transfer" />
      <section className="transfer-catalog__go-back">
        <Link className="transfer-catalog__go-back-link" to="/">
          <img
            className="transfer-catalog__go-back-image"
            src="../../images/left.svg"
            width="24"
            height="24"
            alt=""
          />
          <p className="transfer-catalog__go-back-text">Назад</p>
        </Link>
      </section>
      <section className="transfer-catalog__stages-of-registration">
        <p className="stages-of-registration__number">1</p>
        <p className="stages-of-registration__text">Оформление заказа</p>
        <div className="stages-of-registration__decoration"></div>
        <p className="stages-of-registration__number stages-of-registration__number--non-active">
          2
        </p>
        <p className="stages-of-registration__text stages-of-registration__text__number--non-active">
          Оплата
        </p>
      </section>
      <section className="transfer-catalog__order">
        <article className="transfer-catalog__order-data">
          <p className="transfer-order__message">
            {" "}
            <img
              className="transfer-catalog__order-data--absolute"
              src="../../images/transfer/!.svg"
              width="3.78"
              height="17.37"
            />
            Маршрут предусматривает пересечение границы Абхазии с Россией.
            Обратите внимание, что переход границы может занять от 30 минут до 4
            часов в зависимости от загруженности КПП. Трансфер осуществляется на
            одном автомобиле, без смены на границе.
          </p>
          <div className="transfer-catalog__order-title-wrapper">
            <p className="order-title-wrapper__text">
              Данные вашего бронирования
            </p>
            <p className="order-title-wrapper__decoration"></p>
          </div>
          <section className="transfer-catalog__booking">
            <article className="transfer-catalog__booking-wrapper">
              <p className="booking-to__time">Время в пути ~ 2 часа</p>
              <div className="transfer-catalog__booking-to">
                <p className="booking-to__description">От</p>
                <p className="booking-to__place">Аэропорт Сочи</p>
                <input
                  type="text"
                  className="booking-to__ticket"
                  placeholder="Номер рейса прилета, как указано в билете"
                />
              </div>
              <div className="transfer-catalog__booking-to">
                <p className="booking-to__description">До</p>
                <p className="booking-to__place">Гагра</p>
                <input
                  type="text"
                  className="booking-to__ticket"
                  placeholder="Адрес или название отеля"
                />
                <p className="transfer-catalog__booking-to-passengers">
                  2 взрослых пассажира, 21 мая, сб., в 12:00.{" "}
                </p>
              </div>
            </article>
            <article className="transfer-catalog__back">
              <div className="transfer-catalog__back-timer">
                <p className="back-timer__text">Обратный трансфер</p>
                <div
                  className={
                    countdown
                      ? "back-timer__tongler"
                      : "back-timer__tongler back-timer__tongler--non-active"
                  }
                  onClick={() => tongleCountdown()}
                >
                  <div className="back-timer__tongler-circle"></div>
                </div>
              </div>
              {countdown && (
                <div>
                  <div className="transfer-catalog__booking-to">
                    <p className="booking-to__description">От</p>
                    <p className="booking-to__place">Гагра</p>
                  </div>
                  <div className="transfer-catalog__booking-to">
                    <p className="booking-to__description">До</p>
                    <p className="booking-to__place">Аэропорт Сочи</p>
                    {/* <p className="transfer-catalog__booking-to-passengers">
                      2 взрослых пассажира, 21 мая, сб., в 12:00.{" "}
                    </p> */}
                  </div>
                  {/* Тут еще одно окно*/}
                  {searchDataAndTimeWindow && (
                    <div>
                      <p className="transfer-catalog__time-and-date">
                        Выберите время и дату:
                      </p>
                      <div className="transfer-catalog__where-is-panel">
                        <div
                          className="transfer-booking__form-item transfer-catalog__item"
                          onClick={() => tongleModalData()}
                        >
                          <img
                            className="transfer-booking__form-image transfer-booking__form-image--calendar"
                            src="../../images/transfer/calendar.svg"
                            width="13.5"
                            height="15"
                          />
                          <p className="transfer-booking__form-search transfer-booking__form-search--data">
                            {ourDateInForm}
                          </p>
                          {calendarModalWindow && (
                            <div
                              className="form-search--data__calendar-wrapper"
                              onClick={(e) => changeDataInput(e)}
                            >
                              <Calendar
                                onChange={onChangeCalendar}
                                value={calendarValue}
                              />
                            </div>
                          )}
                        </div>
                        <div className="transfer-booking__form-item transfer-booking__form-item--time transfer-catalog__item">
                          <img
                            className="transfer-booking__form-image transfer-booking__form-image--time"
                            src="../../images/transfer/timer.svg"
                            width="18"
                            height="18"
                          />
                          <input
                            className="transfer-booking__form-search transfer-booking__form-search--time"
                            type="text"
                            name="transfer__time"
                            value={timeChoise}
                            onClick={() => tongleTime()}
                          />
                          {timeModalWindow && (
                            <div className="form-time__input-wrapper">
                              <input
                                className="form-time__input"
                                type="time"
                                name="transfer__time-clicker"
                                onChange={(e) => changeTimeLocal(e)}
                                value={timeChoise}
                              />
                              <div className="sub-menu__timer-image"></div>
                              <div
                                className="sub-menu__timer-arrow-down"
                                onClick={() => downTime()}
                              ></div>
                              <div
                                className="sub-menu__timer-arrow-up"
                                onClick={() => upTime()}
                              ></div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </article>
          </section>
          <div>
            <div className="transfer-catalog__order-title-wrapper">
              <p className="order-title-wrapper__text">Контакты пассажира</p>
              <p className="order-title-wrapper__decoration"></p>
            </div>
            <p className="transfer-catalog__contacts">
              Андреева Анастасия{" "}
              <img
                className="transfer-catalog__contacts-image"
                src="../../images/transfer/galk.svg"
                alt="galk"
                width="11.5"
                height="11"
              />
            </p>
            <p className="transfer-catalog__contacts">
              nastenarodionova1993@mail.ru{" "}
              <img
                className="transfer-catalog__contacts-image"
                src="../../images/transfer/galk.svg"
                alt="galk"
                width="11.5"
                height="11"
              />
            </p>
            <p className="transfer-catalog__contacts">
              +7 (927) 655-45-24{" "}
              <img
                className="transfer-catalog__contacts-image"
                src="../../images/transfer/galk.svg"
                alt="galk"
                width="11.5"
                height="11"
              />
            </p>
            <p className="transfer-catalog__alert-message">
              Заполнив данные вы соглашаетесь с{" "}
              <span className="transfer-catalog__underline">
                Политикой конфиденциальности
              </span>{" "}
            </p>
          </div>

          <div className="transfer-catalog__order-title-wrapper">
            <p className="order-title-wrapper__text">Дополнительные услуги</p>
            <p className="order-title-wrapper__decoration"></p>
          </div>
          <div>
            <div className="transfer-catalog__calculator-block">
              <div>
                <h5 className="calculator-block__title">Детское кресло</h5>
                <p className="calculator-block__weight">Вес: 9–18 кг</p>
                <p className="calculator-block__price">300₽ </p>
              </div>
              <div className="transfer-catalog__calculator">
                <p
                  className="person-sub-menu__minus"
                  onClick={() => deleteChair()}
                >
                  <p className="minus"></p>
                </p>
                <p className="person-sub-menu__counter">{babyChair}</p>
                <p className="person-sub-menu__plus" onClick={() => addChair()}>
                  +
                </p>
              </div>
            </div>
            <div className="transfer-catalog__calculator-block">
              <div>
                <h5 className="calculator-block__title">Бустер</h5>
                <p className="calculator-block__weight">Вес: 15–36 кг</p>
                <p className="calculator-block__price">300₽ </p>
              </div>
              <div className="transfer-catalog__calculator">
                <p
                  className="person-sub-menu__minus"
                  onClick={() => deleteBooster()}
                >
                  <p className="minus"></p>
                </p>
                <p className="person-sub-menu__counter">{booster}</p>
                <p
                  className="person-sub-menu__plus"
                  onClick={() => addBooster()}
                >
                  +
                </p>
              </div>
            </div>
          </div>
        </article>
        <article className="transfer-catalog__order-check">
          <h5 className="order-check__title">Заказ №234</h5>
          <div className="order-check__auto">
            <img
              className="order-check__auto-image"
              src="../../images/transfer/car.svg"
              alt="car"
              width="20.8"
              height="16.8"
            />
            <p className="order-check__auto-type">Автомобиль эконом класса</p>
            <p className="order-check__auto-passengers">
              4 пассажира, 3 багажных места
            </p>
          </div>
          <div className="order-check__way-wrapper">
            <div className="order-check__way-where-and-price">
              <p className="order-check__way-where">Аэропорт Сочи - Гагра</p>
              <p className="order-check__way-price">1 500₽ </p>
            </div>
            <p className="order-check__way-direction">В одну сторону</p>
          </div>
          <div className="order-check__way-wrapper">
            <div className="order-check__way-where-and-price">
              <p className="order-check__way-where">Гагра- Аэропорт Сочи</p>
              <p className="order-check__way-price">1 500₽ </p>
            </div>
            <p className="order-check__way-direction">Обратно</p>
          </div>
          <div className="order-check__total">
            <p className="order-check__auto-type order-check__result">Итого:</p>
            <p className="order-check__price">3 000₽ </p>
            <p className="order-check__submit">Забронировать</p>
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default TransferCatalog;
