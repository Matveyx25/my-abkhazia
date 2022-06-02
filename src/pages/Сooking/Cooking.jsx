import React, { useState } from "react";
import "./Cooking.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import Checkbox from "../../components/Checkbox/Checkbox";
import { Link } from "react-router-dom";
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

const Cooking = () => {
  const [allTown, seeAllTown] = useState(false);
  //const [allCar, seeAllCar] = useState(false);
  const [mobileForm, seeMobileForm] = useState(false);
  let workingTown = [...Towns];
  workingTown.length = 4;

  const mobileFormTongler = () => {
    if (mobileForm) {
      seeMobileForm(false);
    } else {
      seeMobileForm(true);
    }
  };

  const townTongler = () => {
    if (allTown) {
      seeAllTown(false);
    } else {
      seeAllTown(true);
    }
  };

  return (
    <div className="cooking">
      <Header />
      <Navigation active="cooking" />
      <Banner title="Кухня Абхазии" image="../../images/cooking/banner.jpg" />
      <section className="housing-catalog__page-way">
        <Link to="/" className="page-way__first">
          Главная
        </Link>
        <div className="page-way__decoration"></div>
        <p className="page-way__second">Кухня Абхазии</p>
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
            {/* Вид заведения */}
            <div className="housing-catalog__town">
              <p className="housing-catalog__town-title">Категории</p>
              <ul className="housing-catalog__town-list">
                <li>
                  <Checkbox
                    inputName="cooking__place"
                    inputValue="cafe"
                    inputId="cooking-place--cafe"
                    labelText="Кафе"
                  />
                </li>
                <li>
                  <Checkbox
                    inputName="cooking__place"
                    inputValue="restaurant"
                    inputId="cooking-place--restaurant"
                    labelText="Ресторан"
                  />
                </li>
                <li>
                  <Checkbox
                    inputName="cooking__place"
                    inputValue="dining-room"
                    inputId="cooking-type--dining-room"
                    labelText="Столовая"
                  />
                </li>
              </ul>
            </div>
            {/* Тип предлагаемой кулинарии*/}
            <div className="housing-catalog__town">
              <p className="housing-catalog__town-title">Вид кухни</p>
              <ul className="housing-catalog__town-list">
                <li>
                  <Checkbox
                    inputName="cooking__type"
                    inputValue="national"
                    inputId="cooking-type--national"
                    labelText="Национальная"
                  />
                </li>
                <li>
                  <Checkbox
                    inputName="cooking__type"
                    inputValue="european"
                    inputId="cooking-type--european"
                    labelText="Европейская"
                  />
                </li>
                <li>
                  <Checkbox
                    inputName="cooking__type"
                    inputValue="fast-food"
                    inputId="cooking-type--fast-food"
                    labelText="Фастфуд"
                  />
                </li>
                <li>
                  <Checkbox
                    inputName="cooking__type"
                    inputValue="vegetarian"
                    inputId="cooking-type--vegetarian"
                    labelText="Вегетарианская"
                  />
                </li>
                <li>
                  <Checkbox
                    inputName="cooking__type"
                    inputValue="vegan"
                    inputId="cooking-type--vegan"
                    labelText="Веганская"
                  />
                </li>
              </ul>
            </div>
            {/* Выбор города*/}
            <div className="housing-catalog__town housing-catalog__town--last">
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
              image="../images/cooking/item-1.jpg"
              title="Ресторан Абаата"
              stars={3}
              reviews={20}
              subTitle1="Ресторан"
              subTitle2="Гагра"
              additions={[
                "Национальная и европейская кухни",
                "Акция! Приведи друга, получи бокал вина в подарок",
              ]}
              price=""
              choiseText="Выбрать"
              pigeonDroppings=""
              link="/restaurant-card"
            />
          </ul>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default Cooking;
