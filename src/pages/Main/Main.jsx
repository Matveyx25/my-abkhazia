import React, { useState } from "react";
import "./Main.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import PreFooterCard from "../../components/PreFooterCard/PreFooterCard";

const bestDeal = [
  {
    id: 0,
    image: "../../images/main-slider-ritsa.jpg",
    title: "Эскурсия на озеро Рица",
    category: "Природа",
    stars: 5,
  },
  {
    id: 1,
    image: "../../images/main-slider-gag-waterfall.jpg",
    title: "Эскурсия на Гегский водопад ",
    category: "Природа",
    stars: 5,
  },
  {
    id: 2,
    image: "../../images/main-slider-kundig.jpg",
    title: "Термальные источники Кындыг",
    category: "Природа",
    stars: 3,
  },
  {
    id: 3,
    image: "../../images/main-town-new-athos.jpg",
    title: "Новый Афон и его храмы",
    category: "История",
    stars: 2,
  },
  {
    id: 4,
    image: "../../images/main-slider-lost-town.jpg",
    title: "Эскурсия в заброшенный город",
    category: "Архитектура, История и культура",
    stars: 5,
  },
  {
    id: 5,
    image: "../../images/main-slider-gagra.jpg",
    title: "Эскурсия в город Гагра",
    category: "Архитектура, История и культура",
    stars: 4,
  },
];

const Main = () => {
  return (
    <div className="banner">
      <Header />
      <section className="main__banner">
        <h1 className="main__banner-title">
          Откройте все грани гостеприимства Абхазии
        </h1>
        <p className="main__banner-slogan">
          Уникальные предложения проживания, эскурсий и впечатлений на любой
          вкус
        </p>
        <ul className="main__banner-link-list">
          <li className="main__banner-link-list-item">
            <Link className="main__banner-link" to="/housing-catalog">
              <img
                className="main__banner-link-image"
                src="../images/header-residence.svg"
                alt=""
              />
              <p className="main__banner-link-text">Проживание</p>
            </Link>
          </li>
          <li className="main__banner-link-list-item">
            <Link className="main__banner-link" to="/tours">
              <img
                className="main__banner-link-image"
                src="../images/header-tours.svg"
                alt=""
              />
              <p className="main__banner-link-text">Эскурсии и впечатления</p>
            </Link>
          </li>
          <li className="main__banner-link-list-item">
            <Link className="main__banner-link" to="/transfer">
              <img
                className="main__banner-link-image"
                src="../images/header-transfer.svg"
                alt=""
              />
              <p className="main__banner-link-text">Трансфер</p>
            </Link>
          </li>
          <li className="main__banner-link-list-item">
            <Link className="main__banner-link" to="car-rent">
              <img
                className="main__banner-link-image"
                src="../images/header-rent.svg"
                alt=""
              />
              <p className="main__banner-link-text">Аренда авто</p>
            </Link>
          </li>
          <li className="main__banner-link-list-item">
            <Link className="main__banner-link" to="./cooking">
              <img
                className="main__banner-link-image"
                src="../images/header-kitchen.svg"
                alt=""
              />
              <p className="main__banner-link-text">Кухня Абхазии</p>
            </Link>
          </li>
          <li className="main__banner-link-list-item">
            <Link className="main__banner-link" to="/cities">
              <img
                className="main__banner-link-image"
                src="../images/header-label.svg"
                alt=""
              />
              <p className="main__banner-link-text">Города Абхазии</p>
            </Link>
          </li>
        </ul>
      </section>
      <section className="main__explore-abkhazia">
        <article className="explore-abkhazia__title">
          <h2 className="explore-abkhazia__title-text">Исследуйте Абхазию</h2>
          <div className="explore-abkhazia__title-strike"></div>
        </article>
        <article className="explore-abkhazia__town-images">
          <div className="town-images__town town-images__gagra">
            <img
              className="town-images__absolute-image"
              src="../../images/main-town-gagra.jpg"
              alt="gagra"
            />
            <h4 className="town-images__title">Гагра</h4>
          </div>
          <div className="town-images__wrapper">
            <div className="town-images__town  town-images__new-athos">
              <img
                className="town-images__absolute-image"
                src="../../images/main-town-new-athos.jpg"
                alt="new-athos"
              />
              <h4 className="town-images__title">Новый афон</h4>
            </div>
            <div className="town-images__town town-images__sukhum">
              <img
                className="town-images__absolute-image"
                src="../../images/main-town-sukhum.jpg"
                alt="sukhum"
              />
              <h4 className="town-images__title">Сухум</h4>
            </div>
          </div>
          <div className="town-images__wrapper town-images__wrapper--pitsunda">
            <div className="town-images__town  town-images__pitsunda">
              <img
                className="town-images__absolute-image"
                src="../../images/main-town-pitsunda.jpg"
                alt="pitsunda"
              />
              <h4 className="town-images__title">Пицунда</h4>
            </div>
            <div className="town-images__town  town-images__tkuarchal">
              <img
                className="town-images__absolute-image"
                src="../../images/main-town-tkuarchal.jpg"
                alt="tkuarchal"
              />
              <h4 className="town-images__title">Ткуарчал</h4>
            </div>
          </div>
        </article>
      </section>
      <PreFooterCard data={bestDeal} title={"Лучшие направления"} />
      <section className="main__cities-of-abkhazia">
        <article className="cities-of-abkhazia__title">
          <h2 className="cities-of-abkhazia__title-text">Города Абхазии</h2>
          <div className="cities-of-abkhazia__title-decoration"></div>
        </article>
        <article className="cities-of-abkhazia__map">
          <div className="map__item map__gagra">
            <div className="map-item__circle"></div>
            <img
              className="map-item__image"
              src="../images/main-slider-gagra.jpg"
              alt="gagra"
              width="190"
              height="120"
            />
          </div>
          <div className="map__item map__ritsa">
            <div className="map-item__circle"></div>
            <img
              className="map-item__image"
              src="../images/main-slider-ritsa.jpg"
              alt="ritsa"
              width="190"
              height="120"
            />
          </div>
          <div className="map__item map__pitsunda">
            <div className="map-item__circle"></div>
            <img
              className="map-item__image"
              src="../images/main-town-pitsunda.jpg"
              alt="pitsunda"
              width="190"
              height="120"
            />
          </div>
          <div className="map__item map__new-afon">
            <div className="map-item__circle"></div>
            <img
              className="map-item__image"
              src="../images/main-town-new-athos.jpg"
              alt="pitsunda"
              width="190"
              height="120"
            />
          </div>
          <div className="map__item map__suhum">
            {" "}
            <div className="map-item__circle"></div>
            <img
              className="map-item__image"
              src="../images/main-town-sukhum.jpg"
              alt="pitsunda"
              width="190"
              height="120"
            />
          </div>
          <div className="map__item map__tkuarchal">
            {" "}
            <div className="map-item__circle"></div>
            <img
              className="map-item__image"
              src="../images/main-town-tkuarchal.jpg"
              alt="pitsunda"
              width="190"
              height="120"
            />
          </div>
        </article>
      </section>

      <section className="main__kitchen-and-car">
        <article className="kitchen-and-car__car">
          <h2 className="kitchen-and-car__title">
            Выбирайте автомобиль и пробуйте разнообразие национальной кухни
          </h2>
          <div className="kitchen-and-car__car-image">
            <h4 className="kitchen-and-car__car-title">Аренда авто</h4>
            <a className="kitchen-and-car__car-link" href="">
              Подробнее
            </a>
          </div>
        </article>
        <article className="kitchen-and-car__kitchen">
          <div className="kitchen-and-car__kitchen-image">
            <h4 className="kitchen-and-car__kitchen-title">Кухня Абхазии</h4>
            <a className="kitchen-and-car__kitchen-link" href="">
              Подробнее
            </a>
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default Main;
