import React, { useState } from "react";
import "./TransferAutomobile.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import Checkbox from "../../components/Checkbox/Checkbox";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Navigation from "../../components/Navigation/Navigation";
import Banner from "../../components/Banner/Banner";

const TransferAutomobile = () => {
  const [mobileForm, seeMobileForm] = useState(false);
  const [mainFormWindow, seeMainForm] = useState(false);

  const mobileFormTongler = () => {
    if (mobileForm) {
      seeMobileForm(false);
    } else {
      seeMobileForm(true);
    }
  };

  const subPrivate = () => {
    console.log();
    let subPrivateHouse = document.querySelector(
      ".housing-catalog__sub-private"
    );
    let radioTongler = document.getElementById("transfer-auto__individual");
    if (radioTongler.checked == true) {
      subPrivateHouse.classList.add("housing-catalog__sub-private--open");
    } else {
      subPrivateHouse.classList.remove("housing-catalog__sub-private--open");
    }
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  function RangeSlider() {
    const [value, setValue] = React.useState([1500, 5000]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <Box sx={{ width: 200 }}>
        <Slider
          valueLabelDisplay="on"
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          getAriaValueText={valuetext}
          min={0}
          max={10000}
          sx={{
            "& .MuiSlider-thumb": {
              borderRadius: "9px",
              color: "#ffffff",
              boxShadow: "0px 4px 15px 4px rgba(0, 0, 0, 0.18)",
            },
            "&  .MuiSlider-valueLabelLabel": {
              color: "#000000",
              background: "transparent",
              width: "30px",
            },
            "&  .MuiSlider-valueLabelCircle": { background: "#ffffff" },
            "&  .MuiSlider-valueLabel": { background: "#ffffff" },
          }}
        />
      </Box>
    );
  }

  /* Из элемента transfer*/

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
    <div className="transfer-automobile" onClick={() => closeAll()}>
      <Header />
      <Navigation active="transfer" />
      <Banner title="Трансфер" image="../../images/transfer/banner.jpg" />
      <section className="housing-catalog__page-way">
        <Link to="/" className="page-way__first">
          Главная
        </Link>
        <div className="page-way__decoration"></div>
        <Link
          to="/transfer"
          className="page-way__second page-way__second-automobile"
        >
          Трансфер
        </Link>
        <div className="page-way__decoration"></div>
        <p className="page-way__second">Выбор трансфера</p>
      </section>
      {/* наша панель выбора предложения*/}
      <section className="transfer-automobile__offer">
        <article className="transfer-automobile__offer-body">
          <div className="transfer-automobile__to">
            <p className="transfer-automobile__sub-title">Ваша поездка</p>
            <p className="transfer-automobile__sub-text">
              Аэропорт Сочи- Гагра, 2 взрослых,
              <br/>
               21 мая, сб., в 12:00
            </p>
          </div>
          <div className="transfer-automobile__back">
            <p className="transfer-automobile__sub-title">Ваша поездка</p>
            <p className="transfer-automobile__sub-text">
              Аэропорт Сочи- Гагра, 2 взрослых,
              <br/>
               21 мая, сб., в 12:00
            </p>
          </div>
          {/* <div className="transfer-automobile__back">
            <p
              className="transfer-auto__add-back-travel"
              onClick={() => tongleSides()}
            >
              Добавить поездку обратно
            </p>
          </div> */}
          <div className="transfer-automobile__time-to-destination">
            <img
              className="transfer-automobile__time-to-destination-image"
              src="../../images/transfer/timer-blue.svg"
              alt=""
              width="18"
              height="18"
            />
            <p className="transfer-automobile__time-to-destination-text">
              Время в пути ~ 2 часа
            </p>
          </div>
          <p
            className="transfer-automobile__change-button"
            onClick={() => seeMainForm(true)}
          >
            Изменить маршрут
          </p>
        </article>
        {mainFormWindow && (
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
                    onClick={(e) =>
                      changeFromInputStandart(e, "Аэропорт Адлера")
                    }
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
                    onClick={(e) =>
                      changeToInputStandart(e, "Ж/Д вокзал Адлера")
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
                      changeToInputStandart(e, "Ж/Д вокзал Гагра")
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
            <input
              className="transfer-booking__form-submit"
              type="submit"
              value="Найти"
            />
          </form>
        )}
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

      <section className="housing-catalog__filter-tongler">
        <div
          className="housing-catalog__filter-tongler-wrapper"
          onClick={() => mobileFormTongler()}
        >
          <img
            className="housing-catalog__filter-image"
            src={
              mobileForm
                ? "../../images/housing-catalog/filter--close.svg"
                : "../../images/housing-catalog/filter.svg"
            }
            alt="filter"
            width="24"
            height="24"
          />
          <h6
            className={
              mobileForm
                ? "housing-catalog__filter-title housing-catalog__filter-title--active"
                : " housing-catalog__filter-title"
            }
          >
            Фильтр
          </h6>
        </div>
      </section>

      {/* ФИильт и подборка карточек*/}
      <section className="housing-catalog__main">
        <div
          className={
            mobileForm
              ? "housing-catalog__main-form-wrapper housing-catalog__main-form-wrapper--open"
              : "housing-catalog__main-form-wrapper"
          }
        >
          <form className="housing-catalog__form">
            <h4 className="housing-catalog__form-title">
              Выберите по критериям:
            </h4>
            <div className="housing-catalog__housing">
              <p className="housing-catalog__housing-title">Вид трансфера</p>
              <Checkbox
                inputName="transfer-auto__type"
                inputValue="individual"
                inputId="transfer-auto__individual"
                labelText="Индивидуальный"
                clickFunction={subPrivate}
              />
              <div className="housing-catalog__sub-private">
                <Checkbox
                  inputName="transfer-individual__sub-type"
                  inputValue="economy"
                  inputId="transfer-individual__economy"
                  labelText="Эконом"
                  subMenu={true}
                />
                <Checkbox
                  inputName="transfer-individual__sub-type"
                  inputValue="comfort"
                  inputId="transfer-individual__comfort"
                  labelText="Комфорт"
                  subMenu={true}
                />
              </div>
              <Checkbox
                inputName="transfer-auto__type"
                inputValue="group"
                inputId="transfer-auto__group"
                labelText="Групповые поездки"
                clickFunction={subPrivate}
              />
            </div>

            <div className="housing-catalog__price">
              <p className="housing-catalog__price-title">Цена</p>
              {/* Такой же скролл, как и на странице HousingCatalog */}
              <RangeSlider />
            </div>
            <section
              className={
                mobileForm
                  ? "housing-catalog__form-buttons  housing-catalog__form-buttons--open"
                  : "housing-catalog__form-buttons"
              }
            >
              <p className="housing-catalog__form-button-reset">Сбросить</p>
              <p className="housing-catalog__form-button-apply">Применить</p>
            </section>
          </form>
        </div>
        <section className="housing-catalog__searching-results">
          <div className="housing-catalog__searching-results-title-wrapper">
            <h3 className="housing-catalog__searching-results-title">
              Найдено 4500 вариантов
            </h3>
            <div className="housing-catalog__searching-results-title-decoration"></div>
          </div>
          <ul className="housing-catalog__searching-results-list">
            <Card
              image="../images/housing-catalog/item-1.jpg"
              title="Автомобиль эконом класса"
              stars={3}
              reviews={5}
              subTitle1="Компания"
              subTitle2="Индивидуальная"
              additions={[
                "Вместительность - 4 человека",
                "Багаж - 3 чемодана",
                "Skoda Octavia, Toyota Corolla, Lada Vesta, и т.п.",
              ]}
              price="3 000₽"
              choiseText="Выбрать"
              pigeonDroppings="hour"
              link="/transfer-catalog"
            />
            <Card
              image="../images/housing-catalog/item-1.jpg"
              title="Автомобиль комфорт класса"
              stars={3}
              reviews={5}
              subTitle1="Компания"
              subTitle2="Индивидуальная"
              additions={[
                "Вместительность - 4 человека",
                "Багаж - 3 чемодана",
                "Lexus GS, Mercedes E-class, Audi A6, BMW 5 Series и т.п.",
              ]}
              price="5 000₽"
              choiseText="Выбрать"
              pigeonDroppings="hour"
              link="/transfer-catalog"
            />
            <Card
              image="../images/housing-catalog/item-2.jpg"
              title="Маршрутка"
              stars={3}
              reviews={5}
              subTitle1="Компания"
              subTitle2="Групповая"
              additions={["Вместительность - 16 человек", "Место в маршрутке"]}
              price="1 000₽"
              choiseText="Выбрать"
              pigeonDroppings="hour"
              link="/transfer-catalog"
            />
          </ul>
        </section>
      </section>

      <Footer />
    </div>
  );
};

export default TransferAutomobile;
