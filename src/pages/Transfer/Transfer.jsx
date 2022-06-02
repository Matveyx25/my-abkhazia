import React, { useState } from "react";
import "./Transfer.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Navigation from "../../components/Navigation/Navigation";
import Banner from "../../components/Banner/Banner";

const Transfer = () => {
  const [fromInput, changeFrom] = useState("");
  const [toInput, changeTo] = useState("");
  const [fromModalWindow, tongleModalFrom] = useState(false);
  const [toModalWindow, tongleModalTo] = useState(false);
  const [passengersModalWindow, tongleModalPassengers] = useState(false);
  const [timeChoise, changeTime] = useState("12:00");
  const [timeChoise2, changeTime2] = useState("12:00");
  const [timeModalWindow, tongleModalTime] = useState(false);
  const [timeModalWindow2, tongleModalTime2] = useState(false);

  const [bothSides, bothSidesTongler] = useState(false);
  const [calendarValue, onChangeCalendar] = useState(new Date());
  const [calendarValue2, onChangeCalendar2] = useState(new Date());
  const [calendarModalWindow, tongleModalCalendar] = useState(false);
  const [calendarModalWindow2, tongleModalCalendar2] = useState(false);
  const [ourDateInForm, changeOurDateInForm] = useState("21 мая 2022 года");
  const [ourDateInForm2, changeOurDateInForm2] = useState("21 мая 2022 года");

  const [adult, changeAdult] = useState(0);
  const [children, changeChildren] = useState(0);
  const [babies, changeBabies] = useState(0);
  const [passengers, setPassengers] = useState("");

  const closeAll = () => {
    if (fromModalWindow) {
      tongleModalFrom(null);
    }
  };

  const changeDataInput = (e) => {
    let our = e.target.attributes["aria-label"].value;
    console.log(our);
    changeOurDateInForm(String(our));
  };
  const changeDataInput2 = (e) => {
    let our = e.target.attributes["aria-label"].value;
    console.log(our);
    changeOurDateInForm2(String(our));
  };

  const tongleSides = () => {
    if (bothSides) {
      bothSidesTongler(false);
    } else {
      bothSidesTongler(true);
    }
  };

  const tongleTime = () => {
    if (timeModalWindow) {
      tongleModalTime(false);
    } else {
      tongleModalTime(true);
    }
  };
  const tongleTime2 = () => {
    if (timeModalWindow2) {
      tongleModalTime2(false);
    } else {
      tongleModalTime2(true);
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

  const tongleModalData2 = () => {
    console.log(calendarValue2);
    if (calendarModalWindow2) {
      tongleModalCalendar2(false);
    } else {
      tongleModalCalendar2(true);
    }
  };

  const changeTimeLocal = (e) => {
    changeTime(e.target.value);
  };

  const changeTimeLocal2 = (e) => {
    changeTime2(e.target.value);
  };

  const setPassengersInput = () => {
    setPassengers(`Взрослых ${adult}, детей ${children}, малышей ${babies}`);
    tongleModalPassengers(false);
  };

  const changeFromInput = (e) => {
    e.preventDefault();
    changeFrom(e.target.value);
    if (fromInput !== "") {
      tongleModalFrom(null);
    }
  };

  const changeToInput = (e) => {
    e.preventDefault();
    changeFrom(e.target.value);
    if (toInput !== "") {
      tongleModalTo(null);
    }
  };

  const changeFromInputStandart = (e, variant) => {
    e.preventDefault();
    changeFrom(variant);
    tongleModalFrom(null);
  };

  const changeToInputStandart = (e, variant) => {
    e.preventDefault();
    changeTo(variant);
    tongleModalTo(null);
  };

  const openFromWindow = () => {
    if (fromInput == "") {
      tongleModalFrom(true);
    } else {
      tongleModalFrom(false);
    }
  };

  const openToWindow = () => {
    if (toInput == "") {
      tongleModalTo(true);
    } else {
      tongleModalTo(false);
    }
  };

  const changeAdultNumbers = (operation) => {
    if (operation == "+") {
      let some = adult + 1;
      changeAdult(some);
    } else if (adult > 0 && operation == "-") {
      let some = adult - 1;
      changeAdult(some);
    }
  };
  const changeChildrenNumbers = (operation) => {
    if (operation == "+") {
      let some = children + 1;
      changeChildren(some);
    } else if (children > 0 && operation == "-") {
      let some = children - 1;
      changeChildren(some);
    }
  };
  const changeBabiesNumbers = (operation) => {
    if (operation == "+") {
      let some = babies + 1;
      changeBabies(some);
    } else if (babies > 0 && operation == "-") {
      let some = babies - 1;
      changeBabies(some);
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

  const upTime2 = () => {
    let newTime = timeChoise2.split(":");
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
    changeTime2(`${resultHours}:${resultMinutes}`);
    console.log(timeChoise);
  };
  const downTime2 = () => {
    let newTime = timeChoise2.split(":");
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
    changeTime2(`${resultHours}:${resultMinutes}`);
    console.log(timeChoise);
  };

  return (
    <div onClick={() => closeAll()}>
      <Header />
      <div className="cities transfer">
        <Navigation active="transfer" />

        <Banner title="Трансфер" image="../../images/transfer/banner.jpg" />
        <section className="housing-catalog__page-way">
          <Link to="/" className="page-way__first">
            Главная
          </Link>
          <div className="page-way__decoration"></div>
          <p className="page-way__second">Трансфер</p>
        </section>
      </div>

      <section className="housing-catalog__searching-results-title-wrapper cities__body-title">
        <h3 className="housing-catalog__searching-results-title searching-results-title--transfer ">
          Забронируйте трансфер для вашего проживания
        </h3>
        <div className="housing-catalog__searching-results-title-decoration"></div>
      </section>
      <section className="transfer__booking">
        <article
          className="transfer__booking-tongler"
          onClick={() => tongleSides()}
        >
          <div
            className={
              bothSides
                ? "booking-tongler__strike  booking-tongler__strike--both"
                : "booking-tongler__strike"
            }
          >
            <div
              className={
                bothSides
                  ? "booking-tongler__circle booking-tongler__circle--both"
                  : "booking-tongler__circle"
              }
            ></div>
          </div>
          <p className="booking-tongler__text">В обе стороны</p>
        </article>
        <form action="" className="transfer-booking__form">
          <div
            className="transfer-booking__form-item"
            onClick={() => openFromWindow()}
          >
            <p className="transfer-booking__form-top-text">Откуда</p>
            <img
              className="transfer-booking__form-image transfer-booking__form-image--pointer"
              src="../../images/transfer/punkt.svg"
              width="11"
              height="12"
            />
            <input
              className="transfer-booking__form-search"
              placeholder=" Аэропорт, ж/д вокзал, город.."
              value={fromInput}
              type="text"
              name="transfer-from"
              onChange={(e) => changeFromInput(e)}
            />
            {fromModalWindow && (
              <ul className="transfer-booking__form-sub-menu">
                <li
                  className="form-sub-menu__item"
                  onClick={(e) => changeFromInputStandart(e, "Аэропорт Адлера")}
                >
                  <div className="form-sub-menu__image-wrapper">
                    <img
                      className="form-sub-menu__image"
                      src="../../images/transfer/plain.svg"
                      alt="plain"
                      width="23.7"
                      height="17.4"
                    />
                  </div>
                  <p className="form-sub-menu__text">Аэропорт Адлера</p>
                </li>
                <li
                  className="form-sub-menu__item"
                  onClick={(e) =>
                    changeFromInputStandart(e, "Ж/Д вокзал Адлера")
                  }
                >
                  <div className="form-sub-menu__image-wrapper">
                    <img
                      className="form-sub-menu__image"
                      src="../../images/transfer/train.svg"
                      alt="plain"
                      width="16"
                      height="20"
                    />
                  </div>
                  <p className="form-sub-menu__text">Ж/Д вокзал Адлера</p>
                </li>
                <li
                  className="form-sub-menu__item"
                  onClick={(e) =>
                    changeFromInputStandart(e, "Ж/Д вокзал Гагра")
                  }
                >
                  <div className="form-sub-menu__image-wrapper">
                    <img
                      className="form-sub-menu__image form-sub-menu__image--train"
                      src="../../images/transfer/train.svg"
                      alt="plain"
                      width="16"
                      height="20"
                    />
                  </div>
                  <p className="form-sub-menu__text">Ж/Д вокзал Гагра</p>
                </li>
                <li
                  className="form-sub-menu__item"
                  onClick={(e) => changeFromInputStandart(e, "Аэропорт Сочи")}
                >
                  <div className="form-sub-menu__image-wrapper">
                    <img
                      className="form-sub-menu__image"
                      src="../../images/transfer/plain.svg"
                      alt="plain"
                      width="23.7"
                      height="17.4"
                    />
                  </div>

                  <p className="form-sub-menu__text">Аэропорт Сочи</p>
                </li>
              </ul>
            )}
          </div>
          <div
            className="transfer-booking__form-item"
            onClick={() => openToWindow()}
          >
            <p className="transfer-booking__form-top-text">Куда</p>
            <img
              className="transfer-booking__form-image transfer-booking__form-image--pointer"
              src="../../images/transfer/punkt.svg"
              width="11"
              height="12"
            />
            <input
              type="text"
              className="transfer-booking__form-search"
              placeholder=" Аэропорт, ж/д вокзал, город.."
              name="transfer-to"
              value={toInput}
              onChange={(e) => changeToInput(e)}
            />
            {toModalWindow && (
              <ul className="transfer-booking__form-sub-menu">
                <li
                  className="form-sub-menu__item"
                  onClick={(e) => changeToInputStandart(e, "Аэропорт Адлера")}
                >
                  <div className="form-sub-menu__image-wrapper">
                    <img
                      className="form-sub-menu__image"
                      src="../../images/transfer/plain.svg"
                      alt="plain"
                      width="23.7"
                      height="17.4"
                    />
                  </div>
                  <p className="form-sub-menu__text">Аэропорт Адлера</p>
                </li>
                <li
                  className="form-sub-menu__item"
                  onClick={(e) => changeToInputStandart(e, "Ж/Д вокзал Адлера")}
                >
                  <div className="form-sub-menu__image-wrapper">
                    <img
                      className="form-sub-menu__image"
                      src="../../images/transfer/train.svg"
                      alt="plain"
                      width="16"
                      height="20"
                    />
                  </div>
                  <p className="form-sub-menu__text">Ж/Д вокзал Адлера</p>
                </li>
                <li
                  className="form-sub-menu__item"
                  onClick={(e) => changeToInputStandart(e, "Ж/Д вокзал Гагра")}
                >
                  <div className="form-sub-menu__image-wrapper">
                    <img
                      className="form-sub-menu__image form-sub-menu__image--train"
                      src="../../images/transfer/train.svg"
                      alt="plain"
                      width="16"
                      height="20"
                    />
                  </div>
                  <p className="form-sub-menu__text">Ж/Д вокзал Гагра</p>
                </li>
                <li
                  className="form-sub-menu__item"
                  onClick={(e) => changeToInputStandart(e, "Аэропорт Сочи")}
                >
                  <div className="form-sub-menu__image-wrapper">
                    <img
                      className="form-sub-menu__image"
                      src="../../images/transfer/plain.svg"
                      alt="plain"
                      width="23.7"
                      height="17.4"
                    />
                  </div>

                  <p className="form-sub-menu__text">Аэропорт Сочи</p>
                </li>
              </ul>
            )}
          </div>
          <div className="transfer-booking__form-item">
            <p className="transfer-booking__form-top-text">Пассажиры</p>
            <img
              className="transfer-booking__form-image transfer-booking__form-image--person "
              src="../../images/transfer/person.svg"
              width="11.25"
              height="15.75"
            />
            <input
              className="transfer-booking__form-search"
              placeholder="2 взрослых"
              type="text"
              name="transfer-people"
              value={passengers}
              onClick={() => tongleModalPassengers(true)}
            />
            {passengersModalWindow && (
              <div className="transfer__person-sub-menu">
                <div className="person-sub-menu__age-type">
                  <div className="person-sub-menu__age-type-block">
                    <h5 className="person-sub-menu__title">Взрослые</h5>
                    <p className="person-sub-menu__text">от 13 лет</p>
                  </div>
                  <p
                    className="person-sub-menu__minus"
                    onClick={() => changeAdultNumbers("-")}
                  >
                    <p className="minus"></p>
                  </p>
                  <p className="person-sub-menu__counter">{adult}</p>
                  <p
                    className="person-sub-menu__plus"
                    onClick={() => changeAdultNumbers("+")}
                  >
                    +
                  </p>
                </div>
                <div className="person-sub-menu__age-type">
                  <div className="person-sub-menu__age-type-block">
                    <h5 className="person-sub-menu__title">Дети</h5>
                    <p className="person-sub-menu__text">от 2-12 лет</p>
                  </div>
                  <p
                    className="person-sub-menu__minus"
                    onClick={() => changeChildrenNumbers("-")}
                  >
                    <p className="minus"></p>{" "}
                  </p>
                  <p className="person-sub-menu__counter">{children}</p>
                  <p
                    className="person-sub-menu__plus"
                    onClick={() => changeChildrenNumbers("+")}
                  >
                    +
                  </p>
                </div>
                <div className="person-sub-menu__age-type">
                  <div className="person-sub-menu__age-type-block">
                    <h5 className="person-sub-menu__title">Младенцы</h5>
                    <p className="person-sub-menu__text">младше 2 лет</p>
                  </div>
                  <p
                    className="person-sub-menu__minus"
                    onClick={() => changeBabiesNumbers("-")}
                  >
                    <p className="minus"></p>
                  </p>
                  <p className="person-sub-menu__counter">{babies}</p>
                  <p
                    className="person-sub-menu__plus"
                    onClick={() => changeBabiesNumbers("+")}
                  >
                    +
                  </p>
                </div>
                <p
                  className="person-sub-menu__submit"
                  onClick={() => setPassengersInput()}
                >
                  Применить
                </p>
              </div>
            )}
          </div>
          <div
            className="transfer-booking__form-item"
            onClick={() => tongleModalData()}
          >
            <p className="transfer-booking__form-top-text">Дата</p>
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
                <Calendar onChange={onChangeCalendar} value={calendarValue} />
              </div>
            )}
          </div>
          <div className="transfer-booking__form-item transfer-booking__form-item--time">
            <p className="transfer-booking__form-top-text">Время</p>
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
                  required
                />
                <div className="sub-menu__timer-image"></div>
              </div>
            )}
          </div>
          <input
            className="transfer-booking__form-submit"
            type="submit"
            value="Найти"
          />
        </form>
        {bothSides && (
          <form
            action=""
            className="transfer-booking__form transfer-booking__form--back"
          >
            <div className="transfer-booking__form-item">
              <p className="transfer-booking__form-top-text">Откуда</p>
              <img
                className="transfer-booking__form-image transfer-booking__form-image--pointer"
                src="../../images/transfer/punkt.svg"
                width="11"
                height="12"
              />
              <input
                className="transfer-booking__form-search"
                placeholder=" Аэропорт, ж/д вокзал, город.."
                value={toInput}
                type="text"
                name="transfer-from"
              />
            </div>
            <div className="transfer-booking__form-item">
              <p className="transfer-booking__form-top-text">Куда</p>
              <img
                className="transfer-booking__form-image transfer-booking__form-image--pointer"
                src="../../images/transfer/punkt.svg"
                width="11"
                height="12"
              />
              <input
                type="text"
                className="transfer-booking__form-search"
                placeholder=" Аэропорт, ж/д вокзал, город.."
                name="transfer-to"
                value={fromInput}
              />
            </div>
            <div className="transfer-booking__form-item">
              <p className="transfer-booking__form-top-text">Пассажиры</p>
              <img
                className="transfer-booking__form-image transfer-booking__form-image--person "
                src="../../images/transfer/person.svg"
                width="11.25"
                height="15.75"
              />
              <input
                className="transfer-booking__form-search"
                placeholder="2 взрослых"
                type="text"
                name="transfer-people"
                value={passengers}
              />
            </div>
            <div
              className="transfer-booking__form-item"
              onClick={() => tongleModalData2()}
            >
              <p className="transfer-booking__form-top-text">Дата</p>
              <img
                className="transfer-booking__form-image transfer-booking__form-image--calendar"
                src="../../images/transfer/calendar.svg"
                width="13.5"
                height="15"
              />
              <p className="transfer-booking__form-search transfer-booking__form-search--data">
                {ourDateInForm2}
              </p>
              {calendarModalWindow2 && (
                <div
                  className="form-search--data__calendar-wrapper"
                  onClick={(e) => changeDataInput2(e)}
                >
                  <Calendar
                    onChange={onChangeCalendar2}
                    value={calendarValue}
                  />
                </div>
              )}
            </div>
            <div className="transfer-booking__form-item transfer-booking__form-item--time">
              <p className="transfer-booking__form-top-text">Время</p>
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
                value={timeChoise2}
                onClick={() => tongleTime2()}
              />
              {timeModalWindow2 && (
                <div className="form-time__input-wrapper">
                  <input
                    className="form-time__input"
                    type="time"
                    name="transfer__time-clicker"
                    onChange={(e) => changeTimeLocal2(e)}
                    value={timeChoise2}
                  />
                  <div className="sub-menu__timer-image"></div>
                  <div
                    className="sub-menu__timer-arrow-down"
                    onClick={() => downTime2()}
                  ></div>
                  <div
                    className="sub-menu__timer-arrow-up"
                    onClick={() => upTime2()}
                  ></div>
                </div>
              )}
            </div>
            <input
              className="transfer-booking__form-submit"
              type="submit"
              value="Найти"
            />
          </form>
        )}
      </section>

      <section className="housing-catalog__searching-results-title-wrapper cities__body-title">
        <h3 className="housing-catalog__searching-results-title">
          Как работает трансфер?
        </h3>
        <div className="housing-catalog__searching-results-title-decoration"></div>
      </section>
      <section className="transfer__how-it-works">
        <article className="how-it-works__card">
          <h2 className="how-it-works__card-title">1</h2>
          <p className="how-it-works__card-text-1">
            Вы указываете маршрут, количество пассажиров, дату, время и
            выбираете подходящий транспорт
          </p>
          <p className="how-it-works__card-text-2">
            Можно заброниравть легковой автомобиль или место в автобусе,
            маршрутке
          </p>
        </article>
        <article className="how-it-works__card">
          <h2 className="how-it-works__card-title">2</h2>
          <p className="how-it-works__card-text-1">
            Вы заполнятете все даные и оплачиваете{" "}
          </p>
          <p className="how-it-works__card-text-2">
            Оплата возможна только онлайн 100%. После оформления на почту
            приходит оповещение о поездке.
          </p>
        </article>
        <article className="how-it-works__card">
          <h2 className="how-it-works__card-title">3</h2>
          <p className="how-it-works__card-text-1">
            По приезду встречает водитель
          </p>
          <p className="how-it-works__card-text-2">
            В назначенное время и место, водитель вас встречает с табличкой.
            Потом везет в указанное место.
          </p>
        </article>
      </section>
      <section className="transfer__benefits">
        <article className="top-destinations__title">
          <div className="top-destinations__title-strike transfer__title-strike"></div>
          <h2 className="top-destinations__title-text">В чем преимущества</h2>
          <div className="top-destinations__title-strike transfer__title-strike"></div>
        </article>
        <article className="transfer__benefits-list">
          <div className="transfer-benefits__item">
            <img
              className="transfer-benefits__image"
              src="../../images/transfer/two-person.svg"
              alt=""
              width="42"
              height="42"
            />
            <h5 className="transfer-benefits__title">Встреча с водителем</h5>
            <p className="transfer-benefits__text">
              Водителю известна информация о вашем приезде, он заранее приезжает
              - встречает и дождется даже если вы задерживаетесь.
            </p>
          </div>
          <div className="transfer-benefits__item">
            <img
              className="transfer-benefits__image transfer-benefits__image--car"
              src="../../images/transfer/car.svg"
              alt=""
              width="36.5"
              height="29.5"
            />
            <h5 className="transfer-benefits__title">Выбор транспорта</h5>
            <p className="transfer-benefits__text">
              Можно выбрать на свое усмотрение удобный для вас вид транспорта
            </p>
          </div>
          <div className="transfer-benefits__item">
            <img
              className="transfer-benefits__image transfer-benefits__image--tower"
              src="../../images/transfer/tower.svg"
              alt=""
              width="34.4"
              height="27.5"
            />
            <h5 className="transfer-benefits__title">
              Довозят до места проживания
            </h5>
            <p className="transfer-benefits__text">
              Водитель довозит вас до указанноговами места проживания - не нужно
              искать такси или общественный транспорт
            </p>
          </div>
          <div className="transfer-benefits__item">
            <img
              className="transfer-benefits__image transfer-benefits__image--mountains"
              src="../../images/transfer/mountains.svg"
              alt=""
              width="42"
              height="29.5"
            />
            <h5 className="transfer-benefits__title">Мини эскурсия</h5>
            <p className="transfer-benefits__text">
              Трансфер - это туристическая услуга, и водители трнасфера скорее
              всего местные, они могут рассказать очень много о городе и о
              достопримечательностях.
            </p>
          </div>
        </article>
      </section>
      <section className="transfer__choise">
        <article className="housing-catalog__searching-results-title-wrapper cities__body-title">
          <h3 className="housing-catalog__searching-results-title">
            Транспорт на ваш выбор
          </h3>
          <div className="housing-catalog__searching-results-title-decoration"></div>
        </article>
        <article className="transfer__choise-list">
          <div className="transfer__choise-item ">
            <img
              className="transfer__choise-image"
              src="https://avatars.mds.yandex.net/get-vertis-journal/3934100/2021-01-19-2c5996d983f64716bbd554e321b49db8.jpg_1622737068729/1920x1920"
              alt=""
            />
            <p className="transfer__choise-text">Автомобили эконом класса</p>
          </div>
          <div className="transfer__choise-item">
            <img
              className="transfer__choise-image"
              src="https://avatars.mds.yandex.net/get-vertis-journal/3934100/2021-01-19-2c5996d983f64716bbd554e321b49db8.jpg_1622737068729/1920x1920"
              alt=""
            />
            <p className="transfer__choise-text">Автомобили комфорт класса</p>
          </div>
          <div className="transfer__choise-item">
            <img
              className="transfer__choise-image"
              src="https://avatars.mds.yandex.net/get-vertis-journal/3934100/2021-01-19-2c5996d983f64716bbd554e321b49db8.jpg_1622737068729/1920x1920"
              alt=""
            />
            <p className="transfer__choise-text">Групповая поездка</p>
          </div>
        </article>
      </section>

      <Footer />
    </div>
  );
};

export default Transfer;
