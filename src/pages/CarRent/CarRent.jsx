import React, { useState } from "react";
import "./CarRent.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Checkbox from "../../components/Checkbox/Checkbox";
import Card from "../../components/Card/Card";
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

const Cars = [
  {
    id: 0,
    car: "Audi",
    variation: ["Audi A4", "Audi A3", "Audi Q5"],
  },
  {
    id: 1,
    car: "BMW",
    variation: ["BMW A4", "BMW A3", "BMW Q5"],
  },
  {
    id: 2,
    car: "Ford",
    variation: ["Ford A4", "Ford A3", "Ford Q5"],
  },
  {
    id: 3,
    car: "Honda",
    variation: ["Honda A4", "Honda A3", "Honda Q5"],
  },
  {
    id: 4,
    car: "Toyota",
    variation: ["Toyota A4", "Toyota A3", "Toyota Q5"],
  },
  {
    id: 5,
    car: "Tesla",
    variation: ["Tesla A4", "Tesla A3", "Tesla Q5"],
  },
  {
    id: 6,
    car: "UAZ",
    variation: ["UAZ A4", "UAZ A3", "UAZ Q5"],
  },
];

/* У нас в этом компоненте выбор по городу и марке авто. Список городов получаем с сервера, копируем в свою переменную первые 3-4 в отдельный массив. По нему отрисовыем панельку 
чекбоксов. Когда нажимаем на "показать все" - отрисовываем по изначальному списку городов. Также и для выбора авто. Появление/скрытие подвидов автомобилей сделано 
через привязку к свойству checked для компонента input. Когда ckecked - показываем, в обычном состоянии скрыто. Так как у меня данных с сервера 
нет, то я создал два массива-заглушки Towns и Cars. Их уменьшенная версия -  workingTown и workingCars, соответственно*/

const CarRent = () => {
  const [allTown, seeAllTown] = useState(false);
  const [allCar, seeAllCar] = useState(false);
  const [mobileForm, seeMobileForm] = useState(false);
  let workingTown = [...Towns];
  workingTown.length = 4;
  let workingCars = [...Cars];
  workingCars.length = 3;

  const townTongler = () => {
    if (allTown) {
      seeAllTown(false);
    } else {
      seeAllTown(true);
    }
  };

  const carTongler = () => {
    if (allCar) {
      seeAllCar(false);
    } else {
      seeAllCar(true);
    }
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  const mobileFormTongler = () => {
    if (mobileForm) {
      seeMobileForm(false);
    } else {
      seeMobileForm(true);
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
      <div className="car-rent">
        <Navigation active="car-rent" />
        <Banner title="Аренда авто" image="../../images/car-rent/banner.jpg" />
        <section className="housing-catalog__page-way">
          <Link to="/" className="page-way__first">
            Главная
          </Link>
          <div className="page-way__decoration"></div>
          <p className="page-way__second">Аренда авто</p>
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
        {/* */}
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

              <div className="housing-catalog__housing">
                <p className="housing-catalog__housing-title">
                  Марка и модель машины
                </p>

                {allCar
                  ? Cars.map((el) => (
                      <label
                        className="housing-catalog__housing-wrapper car-rent__item"
                        htmlFor={`car-rent__${el.car}`}
                      >
                        <input
                          className="housing-catalog__private-house care-rent__main-input"
                          type="checkbox"
                          name="car-rent__model"
                          value={el.car}
                          id={`car-rent__${el.car}`}
                        />
                        <div className="housing-catalog__housing-pseudo-checkbox"></div>
                        <p className="housing-catalog__housing-label">
                          {el.car}
                        </p>
                        <div className="housing-catalog__sub-private  car-rent__sub-private">
                          {el.variation.map((variant) => (
                            <Checkbox
                              inputName={`car-rent__${el.car}`}
                              inputValue={variant}
                              inputId={`car-rent__${el.car}--${variant}`}
                              labelText={variant}
                              subMenu={true}
                            />
                          ))}
                        </div>
                      </label>
                    ))
                  : workingCars.map((el) => (
                      <label
                        className="housing-catalog__housing-wrapper car-rent__item"
                        htmlFor={`car-rent__${el.car}`}
                      >
                        <input
                          className="housing-catalog__private-house care-rent__main-input"
                          type="checkbox"
                          name="car-rent__model"
                          value={el.car}
                          id={`car-rent__${el.car}`}
                        />
                        <div className="housing-catalog__housing-pseudo-checkbox"></div>
                        <p className="housing-catalog__housing-label">
                          {el.car}
                        </p>
                        <div className="housing-catalog__sub-private  car-rent__sub-private">
                          {el.variation.map((variant) => (
                            <Checkbox
                              inputName={`car-rent__${el.car}`}
                              inputValue={variant}
                              inputId={`car-rent__${el.car}--${variant}`}
                              labelText={variant}
                              subMenu={true}
                            />
                          ))}
                        </div>
                      </label>
                    ))}

                {/* Начало первого элемента списка с всплывающим\скрывающимся меню */}
                <p
                  className="housing-catalog__town-see-all"
                  onClick={() => carTongler()}
                >
                  <span>{allCar ? "Свернуть" : "Показать все марки"} </span>
                  <span
                    className={
                      allCar
                        ? "town-see-all__triangle--up"
                        : "town-see-all__triangle"
                    }
                  ></span>
                </p>
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
                image="../images/car-rent/item-1.jpg"
                title="Audi Q5"
                stars={3}
                reviews={5}
                subTitle1="Audi"
                subTitle2="Новый афон"
                additions={[
                  "Год выпуска: 2017",
                  "Максимальная скорость: 240 км/ч",
                ]}
                price="1 000₽ день"
                choiseText="Подробнее"
                pigeonDroppings=""
                link="/car-card"
              />
            </ul>
          </section>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CarRent;
