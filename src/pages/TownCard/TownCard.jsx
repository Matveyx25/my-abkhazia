import React, { useState } from "react";
import "./TownCard.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import CardNavigation from "../../components/CardNavigation/CardNavigation";
import CardMap from "../../components/CardMap/CardMap";
import CardPostHeader from "../../components/CardPostHeader/CardPostHeader";
import CardDescriptionReviews from "../../components/CardDescriptionReviews/CardDescriptionReviews";

const Description = {
  blueHeader: [
    {
      image: "../../images/town-card/town.svg",
      number: "IV веке до н.э",
      text: "Основан",
    },
    {
      image: "../../images/impression-card/login.svg",
      number: "4",
      text: "4 148 человек",
    },
  ],
  descriptionList: [
    "Пицунда – небольшой, но очень красивый и популярный курорт в Абхазии, расположенный на Черноморском побережье Кавказа.",
    "Пицунда это климатический курорт: сочетание реликтовых сосновых рощ, субтропической растительности самшита, эвкалипта и хвои, а также влияние морского бриза создает уникальный микроклимат. Отдыхающие туристы и опытные врачи называют воздух курорта «естественным природным ингалятором». Считается, что он излечивает множество самых разных недомоганий и болезней, и оздоравливает организм в целом.",
    "Туристы приезжают сюда купаться, загорать, дышать свежим воздухом, гулять по рощам и заповедникам. Пляжи Пицунды считаются лучшими в Абхазии.",
    "В Пицунде есть несколько популярных районов: курортный поселок Алахадзы, курортный район Лдзаа, Мюссера.",
    "Пицунда не только город курорт, но и исторический город. Он один из древнейших полисов античного мира — его история восходит к греческим легендам и первым христианам. Первые письменные упоминания о Пицунде встречаются во II веке до нашей эры.",
  ],
  descriptionListWay: [
    "Пицунда популярный курорт в Абхазии. Каждый год сюда приезжает очень много туристов из разных мест. Но очень не удобная транспортная логистика. Чтобы добраться до Пицунды туристам нужно будет сделать пару пересадок.",
    "Единственный аэропрот в Абхазии  находится в городе Сухуме, но на данный момент он не принимает рейсы. Поэтому ближайщие аэропорты это в Адлере и Сочи. Международный аэропорт Сочи расположен в десятке километров от российско-абхазской границы. Отсюда на  транспорте — трансфер, такси, маршрутки можно доехать до города. ",
    "В Пицунде нет железнодорожной ветки, она проходит довольно далеко от курорта. Но можно доехать до железнодорожного вокзала Адлера или в соседний город Гагру — отсюда регулярно уезжают маршрутки, такси, трансферы. Дорога от Адлера займет не больше 1 часа, а от Гагр вообще 20 минут. ",
    "Российские города с Абхазией связывает отличная дорога, федеральная трасса М-4 Дон. По ней в Пицунду ежедневно отправляются десятки автобусов — это не очень комфортно, зато  быстро и недорого.",
    "Все туристы проходят границу, российского паспорта будет достаточно. Виза для поездки в Абхазию не требуется.",
  ],
  descriptionOptions: [
    {
      title: "О городе",
      image: "../../images/town-card/town-black.svg",
      optionList: [
        {
          optionProperty: "Валюта:",
          optionPropertyNumber: "Российский рубль",
        },
        {
          optionProperty: "Язык:",
          optionPropertyNumber: "Русский, абхазский, грузинский",
        },
      ],
    },
  ],
  accountsList: [
    {
    },
  ],

};

const Points = [
  {
    id: 0,
    image:
      "https://avatars.mds.yandex.net/get-zen_doc/1880383/pub_5e5fb0df1e936c3b7656690d_5e5fb533558e00163b1347b3/scale_1200",
    title: "Патриарший собор в Пицунде",
    text: "Пицундский храм, он же – собор Андрея Первозванного, возвышается в пределах государственного заповедника «Великий Питиунт», основанного в 1991 году для сохранения культурного наследия Абхазии.",
  },
  {
    id: 1,
    image:
      "https://avatars.mds.yandex.net/get-zen_doc/1863556/pub_5e5fb0df1e936c3b7656690d_5e5fb673cf459940df7d6ff9/scale_1200",
    title: "Пицундо-Мюссерский заповедник",
    text: "Наконец, положение той или иной страны — в данном случае России — в мире, ее взаимоотношения с миром наиболее глубоко и остро выявляются, обнаруживаются именно в ситуации грандиозной войны, и, осмысляя тему «Россия и мир во время Второй мировой войны»...",
  },
  {
    id: 2,
    image:
      "https://avatars.mds.yandex.net/get-zen_doc/1528313/pub_5e5fb0df1e936c3b7656690d_5e5fb5d43211892b68e23ee9/scale_1200",
    title: "Водопад Девичьи слезы в Абхазии",
    text: "Корни этого германского устремления к имперскому «первенству» уходят очень далеко в глубь истории. Апелляцию нацистов к средневековой Германии чаще всего истолковывают как чисто идеологическое предприятие, как конструирование мобилизующего нацию мифа.",
  },
  {
    id: 3,
    image:
      "https://avatars.mds.yandex.net/get-zen_doc/1591747/pub_5e5fb0df1e936c3b7656690d_5e5fb5a7e21a7454861bede3/scale_1200",
    title: "Водопад Мужские слезы",
    text: "Главное здесь в том, что «империя германской нации» объединила Европу в определенную целостность и так или иначе правила ею в течение нескольких столетий. Могут возразить, что дело идет о слишком давнем времени, с которым Германию, XX века можно связывать только теоретически.",
  },
  {
    id: 4,
    image:
      "https://avatars.mds.yandex.net/get-zen_doc/1880383/pub_5e5fb0df1e936c3b7656690d_5e5fb533558e00163b1347b3/scale_1200",
    title: "Историко-архитектурный заповедник Великий Питиунт",
    text: "Притом, вторгаясь в пределы той или иной европейской страны, германские войска встречали тогда способное изумить своей нерешительностью и слабостью сопротивление. Так, германское вторжение в Польшу началось 1 сентября 1939 года, а уже 17 сентября польское правительство покинуло страну.",
  },
  {
    id: 5,
    image:
      "https://avatars.mds.yandex.net/get-zen_doc/1899873/pub_5e5fb0df1e936c3b7656690d_5e5fb55414e7d91e01d20e66/scale_1200",
    title: "Дачи Горбачева и Сталина",
    text: "Очень много написано о последующем европейском «движении Сопротивления», наносившем будто бы громадный ущерб Германии, а кроме того (и это, пожалуй, главное), свидетельствующем, что Европа-де наотрез отвергала свое объединение под германским главенством.",
  },
];

const Towns = [
  {
    id: 0,
    town: "Гагра",
    image: "../../images/cities/gagra.jpg",
    link: "какая-то ссылка на страницу другого города",
  },
  {
    id: 1,
    town: "Гауза",
    image: "../../images/cities/gudauta.jpg",
    link: "какая-то ссылка на страницу другого города",
  },
  {
    id: 2,
    town: "Новый Афон",
    image: "../../images/cities/new-afon.jpg",
    link: "какая-то ссылка на страницу другого города",
  },
  {
    id: 3,
    town: "Омичара",
    image: "../../images/cities/ochamchira.jpg",
    link: "какая-то ссылка на страницу другого города",
  },
  {
    id: 4,
    town: "Пицунда",
    image: "../../images/cities/pitsunda.jpg",
    link: "какая-то ссылка на страницу другого города",
  },
  {
    id: 5,
    town: "Сухум",
    image: "../../images/cities/sukhum.jpg",
    link: "какая-то ссылка на страницу другого города",
  },
  {
    id: 6,
    town: "Тцандыш",
    image: "../../images/cities/tsandrypsh.jpg",
    link: "какая-то ссылка на страницу другого города",
  },
];

const TownCard = () => {
  const [point, changePoint] = useState(0);
  const [sliderArr, changeSlider] = useState([0, 1, 2]);

  const pointRight = () => {
    if (point < Points.length - 1) {
      let some = point;
      changePoint(some + 1);
    } else {
      changePoint(0);
    }
  };
  const pointLeft = () => {
    if (point > 0) {
      let some = point;
      changePoint(some - 1);
    } else {
      changePoint(Points.length - 1);
    }
  };
  const sliderUp = () => {
    if (sliderArr[2] < Towns.length - 1) {
      let newSliderArr = [];
      sliderArr.map((el) => newSliderArr.push(el + 1));
      changeSlider(newSliderArr);
    }
  };
  const sliderDown = () => {
    if (sliderArr[0] > 0) {
      let newSliderArr = [];
      sliderArr.map((el) => newSliderArr.push(el - 1));
      changeSlider(newSliderArr);
    }
  };

  return (
    <div className="town-card">
      <Header />
      <Navigation />
      <CardNavigation
        secondText="Города Абхазии"
        secondLink="/cities"
        thirdText="Пицунда"
      />
      <CardPostHeader
        title="Пицунда"
        type="Пицунда"
        stars=""
        reviews=""
        adress="Пицунда"
        imagesArr={[
          "../../images/town-card/town-item--1.jpg",
          "../../images/town-card/town-item--2.jpg",
          "../../images/town-card/town-item--3.jpg",
          "../../images/town-card/town-item--4.jpg",
          "../../images/town-card/town-item--5.jpg",
        ]}
      />
      <CardDescriptionReviews
        Description={Description}
        blueHeader={true}
        services={false}
        accounts={false}
        rules={false}
        descriptionSubList={false}
        owner={false}
        ownerTitle={""}
      />
      <section className="housing-catalog__searching-results-title-wrapper cities__body-title town-card__post-title">
        <h3 className="housing-catalog__searching-results-title  town-card__title-with-strike">
          Лучшие места для посещения
        </h3>
        <div className="housing-catalog__searching-results-title-decoration"></div>
      </section>
      <section className="town-card__best-places">
        <article className="best-places__image-wrapper">
          <img
            className="best-places__image"
            src={Points[point]["image"]}
            alt="town"
            width="760"
            height="600"
          />
        </article>
        <article className="best-places__text-wrapper">
          <h5 className="best-places__title">{Points[point]["title"]}</h5>
          <p className="best-places__text">{Points[point]["text"]}</p>
          <div
            className="best-places__arrow-wrapper best-places__arrow-wrapper--left"
            onClick={() => pointLeft()}
          >
            <img
              src="../../images/town-card/arrow-left.svg"
              alt=""
              width="32"
              height="32"
            />
          </div>
          <div
            className="best-places__arrow-wrapper best-places__arrow-wrapper--right"
            onClick={() => pointRight()}
          >
            <img
              src="../../images/town-card/arrow-left.svg"
              alt=""
              width="32"
              height="32"
            />
          </div>
        </article>
      </section>
      <CardMap
        title="Местонахождение Пицунды на карте"
        center={43.159705}
        centerH={40.338794}
        placemarks={[43.159705, 40.338794]}
        text=""
        link={"/town-card"}
      />

      {/* Извините, что не загнал это тоже в какой-то компонент. */}
      <section className="town-card__prefooter">
        <article className="prefooter__title">
          <div className="prefooter__decoration"></div>
          <p className="prefooter__title-text">Другие города Абхазии</p>
          <div className="prefooter__decoration"></div>
        </article>
        <article></article>
      </section>
      <section className="card-town__prefooter-slider">
        {sliderArr.map((el) => (
          <article className="prefooter-slider__item">
            <img
              className="prefooter-slider__item-image"
              src={Towns[el]["image"]}
              alt="town"
            />
            <p className="prefooter-slider__item-text">{Towns[el]["town"]}</p>
            <a className="prefooter-slider__item-link" href={Towns[el]["link"]}>
              Подробнее
            </a>
          </article>
        ))}
        <div
          className="prefooter-slider__button prefooter-slider__button--left"
          onClick={() => sliderDown()}
        >
          <img
            src="../../images/main-arrow-left.svg"
            alt="arrow-left"
            width="52"
            height="52"
          />
        </div>
        <div
          className="prefooter-slider__button prefooter-slider__button--right"
          onClick={() => sliderUp()}
        >
          <img
            src="../../images/main-arrow-left.svg"
            alt="arrow-right"
            width="52"
            height="52"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TownCard;
