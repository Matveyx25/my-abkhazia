import React, { useState } from "react";
import "./HousingCatalog.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import Checkbox from "../../components/Checkbox/Checkbox";
import Radio from "../../components/Radio/Radio";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Navigation from "../../components/Navigation/Navigation";
import Banner from "../../components/Banner/Banner";

const Towns = [
  "Гагра",
  "Новый Афон",
  "Сухум",
  "Пицунда",
  "Очамчира",
  "Гудаута",
  "Цандрыпш",
];

const HousingCatalog = () => {
  const [allTown, seeAllTown] = useState(false);
  const [mobileForm, seeMobileForm] = useState(false);
  let workingTown = [...Towns];
  workingTown.length = 4;

  function valuetext(value) {
    return `${value}°C`;
  }

  const townTongler = () => {
    if (allTown) {
      seeAllTown(false);
    } else {
      seeAllTown(true);
    }
  };

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
    let radioTongler = document.getElementById("housing__private");
    console.log(subPrivateHouse, radioTongler);
    if (radioTongler.checked == true) {
      subPrivateHouse.classList.add("housing-catalog__sub-private--open");
    } else {
      subPrivateHouse.classList.remove("housing-catalog__sub-private--open");
    }
  };

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

  return (
    <div>
      <Header />
      <div className="housing-catalog">
        <Navigation active="housing-catalog" />
        <Banner
          title="Проживание в Абхазии"
          image="../../images/housing-catalog/banner.jpg"
        />
        <section className="housing-catalog__page-way">
          <Link to="/" className="page-way__first">
            Главная
          </Link>
          <div className="page-way__decoration"></div>
          <p className="page-way__second">Проживание</p>
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
                <p className="housing-catalog__housing-title">Категория</p>
                <Radio
                  inputName="category__housing"
                  inputValue="hotel"
                  inputId="housing__hotel"
                  labelText="Отели"
                  clickFunction={subPrivate}
                />
                <Radio
                  inputName="category__housing"
                  inputValue="private"
                  inputId="housing__private"
                  labelText="Частное жилье"
                  clickFunction={subPrivate}
                />
                <div className="housing-catalog__sub-private">
                  <Checkbox
                    inputName="category__housing-private"
                    inputValue="house"
                    inputId="housing__private-house"
                    labelText="Дома"
                    subMenu={true}
                  />
                  <Checkbox
                    inputName="category__housing-private"
                    inputValue="flat"
                    inputId="housing__private-flat"
                    labelText="Квартиры"
                    subMenu={true}
                  />
                  <Checkbox
                    inputName="category__housing-private"
                    inputValue="rooms"
                    inputId="housing__private-rooms"
                    labelText="Комнаты"
                    subMenu={true}
                  />
                </div>
              </div>
              <div className="housing-catalog__town">
                <p className="housing-catalog__town-title">Город</p>
                <ul className="housing-catalog__town-list">
                  {allTown
                    ? Towns.map((el) => (
                        <li>
                          <Checkbox
                            inputName="category__town"
                            inputValue={el}
                            inputId={`town__${el}`}
                            labelText={el}
                          />
                        </li>
                      ))
                    : workingTown.map((el) => (
                        <li>
                          <Checkbox
                            inputName="category__town"
                            inputValue={el}
                            inputId={`town__${el}`}
                            labelText={el}
                          />
                        </li>
                      ))}
                </ul>
                <p
                  className="housing-catalog__town-see-all"
                  onClick={() => townTongler()}
                >
                  <span>{allTown ? "Свернуть" : "Показать все города"} </span>
                  <span
                    className={
                      allTown
                        ? "town-see-all__triangle--up"
                        : "town-see-all__triangle"
                    }
                  ></span>
                </p>
              </div>

              <div className="housing-catalog__rooms">
                <p className="housing-catalog__rooms-title">
                  Количество комнат
                </p>
                <Checkbox
                  inputName="category__rooms"
                  inputValue="1"
                  inputId="housing__rooms--1"
                  labelText="1 комната"
                />
                <Checkbox
                  inputName="category__rooms"
                  inputValue="2"
                  inputId="housing__rooms--2"
                  labelText="2 комнаты"
                />
                <Checkbox
                  inputName="category__rooms"
                  inputValue="3"
                  inputId="housing__rooms--3"
                  labelText="3 комнаты"
                />
                <Checkbox
                  inputName="category__rooms"
                  inputValue="3+"
                  inputId="housing__rooms--3+"
                  labelText="Более 3 комнат"
                />
              </div>
              <div className="housing-catalog__sleeping-places">
                <p className="housing-catalog__sleeping-places-title">
                  Количество спальных мест
                </p>
                <Checkbox
                  inputName="category__sleeping-places"
                  inputValue="2"
                  inputId="sleeping-places--2"
                  labelText="2"
                />
                <Checkbox
                  inputName="category__sleeping-places"
                  inputValue="3"
                  inputId="sleeping-places--3"
                  labelText="3"
                />
                <Checkbox
                  inputName="category__sleeping-places"
                  inputValue="4"
                  inputId="sleeping-places--4"
                  labelText="4"
                />
                <Checkbox
                  inputName="category__sleeping-places"
                  inputValue="4+"
                  inputId="sleeping-places--4+"
                  labelText="Более 4"
                />
              </div>
              <div className="housing-catalog__time">
                <p className="housing-catalog__time-title">Срок</p>
                <Radio
                  inputName="category__time"
                  inputValue="daily"
                  inputId="category-time__daily"
                  labelText="Посуточно"
                />
                <Radio
                  inputName="category__time"
                  inputValue="monthly"
                  inputId="category-time__monthly"
                  labelText="Помесячно"
                />
              </div>
              <div className="housing-catalog__price">
                <p className="housing-catalog__price-title">Цена</p>
                {/* тут будет скролл*/}
                <RangeSlider />
                <section
                  className={
                    mobileForm
                      ? "housing-catalog__form-buttons  housing-catalog__form-buttons--open"
                      : "housing-catalog__form-buttons"
                  }
                >
                  <p className="housing-catalog__form-button-reset">Сбросить</p>
                  <p className="housing-catalog__form-button-apply">
                    Применить
                  </p>
                </section>
              </div>
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
                title='Отель у моря "Бамбучо"'
                stars={5}
                reviews={15}
                subTitle1="Мини-гостиница"
                subTitle2="Пицунда"
                additions={["Бесплатный Wi-Fi, бар", "Семейные номера"]}
                price="1 600₽ сутки"
                choiseText="Подробнее"
                pigeonDroppings=""
                link="/hotel-card"
              />
              <Card
                image="../images/housing-catalog/item-2.jpg"
                title="1 комнатная квартира"
                stars={4}
                reviews={15}
                subTitle1="Квартира"
                subTitle2="Сухум"
                additions={[
                  "1 комната",
                  "2 кровати (1 двухспальная , 1 диван кровать)",
                  "3 спальных места",
                ]}
                price="1 300₽ сутки"
                choiseText="Подробнее"
                pigeonDroppings="dayMonth"
                link="/housing-card"
              />
              <Card
                image="../images/housing-catalog/item-3.jpg"
                title="Двухкомнатный дом"
                stars={4}
                reviews={15}
                subTitle1="Дом"
                subTitle2="Новый Афон"
                additions={[
                  "2 комнаты",
                  "4 кровати (2 двухспальных , 2 диван кровать)",
                  "6 спальных мест",
                ]}
                price="2 000₽ сутки"
                choiseText="Подробнее"
                pigeonDroppings="dayMonth"
              />
              <Card
                image="../images/housing-catalog/item-4.jpg"
                title="Отдельная комната"
                stars={4}
                reviews={15}
                subTitle1="Комната"
                subTitle2="Новый Афон"
                additions={[
                  "1 комната",
                  " 2 кровати (1 двухспальная , 1 диван кровать)",
                  "4 спальных места",
                ]}
                price="1 000₽ сутки"
                choiseText="Подробнее"
                pigeonDroppings="day"
              />
            </ul>
          </section>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default HousingCatalog;
