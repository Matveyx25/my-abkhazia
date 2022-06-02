import React, { useState } from "react";
import "./Tours.css";
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

const Tours = () => {
  const [allTown, seeAllTown] = useState(false);
  const [mobileForm, seeMobileForm] = useState(false);
  let workingTown = [...Towns];
  workingTown.length = 4;

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
    let radioTongler = document.getElementById("tours-category__tours");
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

  return (
    <div>
      <Header />
      <div className="tours">
        <Navigation active="tours" />
        <Banner
          image="../../images/tours/banner.jpg"
          title="Эскурсии и впечатления"
        />
        <section className="housing-catalog__page-way">
          <Link to="/" className="page-way__first">
            Главная
          </Link>
          <div className="page-way__decoration"></div>
          <p className="page-way__second">Эскурсии и впечатления</p>
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
                  inputName="category__tours"
                  inputValue="tours"
                  inputId="tours-category__tours"
                  labelText="Эскурсии"
                  clickFunction={subPrivate}
                />
                <div className="housing-catalog__sub-private">
                  <Checkbox
                    inputName="tours-category__sub-type"
                    inputValue="weekend-tours"
                    inputId="sub-tors-category__weekend-tours"
                    labelText="Туры выходного дня"
                    subMenu={true}
                  />
                  <Checkbox
                    inputName="tours-category__sub-type"
                    inputValue="religious"
                    inputId="sub-tors-category__religious"
                    labelText="Религиозные"
                    subMenu={true}
                  />
                  <Checkbox
                    inputName="tours-category__sub-type"
                    inputValue="history-and-culture"
                    inputId="sub-tors-category__history-and-culture"
                    labelText="История и культура"
                    subMenu={true}
                  />
                  <Checkbox
                    inputName="tours-category__sub-type"
                    inputValue="nature"
                    inputId="sub-tors-category__nature"
                    labelText="Природа"
                    subMenu={true}
                  />
                  <Checkbox
                    inputName="tours-category__sub-type"
                    inputValue="architecture"
                    inputId="sub-tors-category__architecture"
                    labelText="Архитектура"
                    subMenu={true}
                  />
                  <Checkbox
                    inputName="tours-category__sub-type"
                    inputValue="extreme"
                    inputId="sub-tors-category__extreme"
                    labelText="Экстремальные"
                    subMenu={true}
                  />
                </div>
                <Radio
                  inputName="category__tours"
                  inputValue="impression"
                  inputId="tours-category__impression"
                  labelText="Впечатления"
                  clickFunction={subPrivate}
                />
              </div>
              <div className="housing-catalog__town">
                <p className="housing-catalog__town-title">Количество дней</p>
                <ul className="housing-catalog__town-list">
                  <li>
                    <Checkbox
                      inputName="tours__number-of-days"
                      inputValue="1"
                      inputId="tours__number-of-days--1"
                      labelText="Дневные"
                    />
                  </li>
                  <li>
                    <Checkbox
                      inputName="tours__number-of-days"
                      inputValue="2"
                      inputId="tours__number-of-days--2"
                      labelText="2-х дневные"
                    />
                  </li>
                  <li>
                    <Checkbox
                      inputName="tours__number-of-days"
                      inputValue="2+"
                      inputId="tours__number-of-days--2+"
                      labelText="Болеее 2-х дней"
                    />
                  </li>
                </ul>
              </div>
              <div className="housing-catalog__rooms">
                <p className="housing-catalog__rooms-title">Тип эскурсии</p>
                <Checkbox
                  inputName="tour__people-number"
                  inputValue="1+"
                  inputId="tour__people-number--1+"
                  labelText="Групповая"
                />
                <Checkbox
                  inputName="tour__people-number"
                  inputValue="1"
                  inputId="tour__people-number--1"
                  labelText="Индивидуальная"
                />
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
              <div className="housing-catalog__price">
                <p className="housing-catalog__price-title">Цена</p>
                {/* Такой же скролл, как и на странице HousingCatalog */}
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
            <section className="housing-catalog__form-buttons">
              <p className="housing-catalog__form-button-reset">Сбросить</p>
              <p className="housing-catalog__form-button-apply">Применить</p>
            </section>
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
                image="https://cdn.igromania.ru/mnt/news/3/a/4/a/8/e/104887/9e978a933b74285c_1920xH.jpg"
                title="Эскурсия на озеро Рица"
                stars={5}
                reviews={10}
                subTitle1="Природа"
                subTitle2="Гагра"
                additions={["Дневная", "Индивидуальная"]}
                price=" от 2 000₽ с человека"
                choiseText="Подробнее"
                pigeonDroppings=""
                link="/tour-card"
              />
              <Card
                image="../images/housing-catalog/item-2.jpg"
                title="Лепка из глины"
                stars={5}
                reviews={22}
                subTitle1="Впечатление"
                subTitle2="Гагра"
                additions={[
                  "Продолжительность 2-3 часа",
                  "Интересено, увлекательно и взрослым и детям",
                ]}
                price="от 2 500₽ с человека"
                choiseText="Подробнее"
                pigeonDroppings=""
                link="/impression-card"
              />
            </ul>
          </section>
        </section>
      </div>
      <Footer />
      <Slider />
    </div>
  );
};

export default Tours;
