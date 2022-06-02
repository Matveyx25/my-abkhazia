import React from "react";
import "./HotelCard.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import CardMap from "../../components/CardMap/CardMap";
import CardNavigation from "../../components/CardNavigation/CardNavigation";
import Navigation from "../../components/Navigation/Navigation";
import CardPostHeader from "../../components/CardPostHeader/CardPostHeader";
import PreFooterCard from "../../components/PreFooterCard/PreFooterCard";
import Landmark from "../../components/Landmark/Landmark";
import CardDescriptionReviews from "../../components/CardDescriptionReviews/CardDescriptionReviews";
import HotelNumber from "../../components/HotelNumber/HotelNumber";

const Zaglushka = [
  {
    id: 0,
    image: "../../images/main-slider-ritsa.jpg",
    title: "Отель Анна",
    category: "Природа",
    stars: 5,
  },
  {
    id: 1,
    image: "../../images/main-slider-gag-waterfall.jpg",
    title: "Отель Пицунда",
    category: "Природа",
    stars: 5,
  },
  {
    id: 2,
    image: "../../images/main-slider-kundig.jpg",
    title: "Отель Мандарин",
    category: "Природа",
    stars: 3,
  },
  {
    id: 3,
    image: "../../images/main-town-new-athos.jpg",
    title: "Отель Карамель",
    category: "История",
    stars: 2,
  },
  {
    id: 4,
    image: "../../images/main-slider-lost-town.jpg",
    title: "Отель Бомбей",
    category: "Архитектура, История и культура",
    stars: 5,
  },
  {
    id: 5,
    image: "../../images/main-slider-gagra.jpg",
    title: "Отель Карандаш",
    category: "Архитектура, История и культура",
    stars: 4,
  },
  {
    id: 6,
    image: "../../images/main-slider-lost-town.jpg",
    title: "Отель Барабаш",
    category: "Архитектура, История и культура",
    stars: 4,
  },
  {
    id: 7,
    image: "../../images/main-slider-gagra.jpg",
    title: "Отель Чебурашка",
    category: "Архитектура, История и культура",
    stars: 4,
  },
];
const Town = "Пицунда";

const Description = {
  blueHeader: [
    {
      image: "../../images/card-description/header-image--1.svg",
      number: "4",
      text: "Гостей",
    },
    {
      image: "../../images/card-description/header-image--2.svg",
      number: "х1",
      text: "Комнат",
    },
    {
      image: "../../images/card-description/header-image--3.svg",
      number: "×4",
      text: "Этаж",
    },
    {
      image: "../../images/card-description/header-image--4.svg",
      number: "35 м2",
      text: "Площадь",
    },
  ],
  descriptionList: [
    'До пляжа можно дойти всего за 5 минут. Мини-гостиница «Отель у моря "Бамбучо"» расположена в Пицунде, в 750 метрах от пляжаЛдзаа. К услугам гостей ресторан, бар, бесплатная частная парковка и сад. Гости могут забронировать семейные номера и отдохнуть на террасе. Стойка регистрации открыта круглосуточно. Для гостей организуют трансфер от/до аэропорта. Осуществляется доставка еды и напитков в номер. На всей территории мини-гостиницы действует бесплатный Wi-Fi.',
    "В некоторых номерах в распоряжении гостей мини-кухня с плитой и мини-баром. В каждом номере предоставляется постельное белье.",
    "В Пицунде и окрестностях можно активно провести досуг, в частности, заняться рыбной ловлей, пешим туризмом и велоспортом.",
    'Мини-гостиница «Отель у моря "Бамбучо"» находится в 1,8 км от пляжа Бичвинта.',
  ],
  descriptionOptions: [
    {
      title: "В отеле",
      image: '../../images/card-description/hotel.svg',
      optionList: [
        {
          optionProperty: "Интернет Wi-Fi",
          optionPropertyNumber: "",
        },
        {
          optionProperty: "Ресторан",
          optionPropertyNumber: "",
        },
      ],
    },
    {
      title: "На территории",
      image: '../../images/card-description/hotel.svg',
      optionList: [
        {
          optionProperty: "Веранда или терраса",
          optionPropertyNumber: "",
        },
        {
          optionProperty: "Внутренний свой двор",
          optionPropertyNumber: "",
        },
      ],
    },
  ],
  services: [
    {
      title: "Услуги включены в стоимость:",
      servicesList: [
        "Предоставление документов для отчетности",
        "Смена постельного белья",
        "Постельное белье для всех гостей",
        "Парковка",
      ],
    },
    {
      title: "Услуги за дополнительную плату:",
      servicesList: [
        "Прокат велосипедов",
        "Помощь в организации осмотра достопримечательностей",
        "Пользование стиральной машиной",
      ],
    },
  ],
  rulesList: [
    {
      title: "Услуги включены в стоимость:",
      list: [
        "С домашними животными не принимаем",
        "Курение запрещено",
        "Принимаем с детьми",
        "Запрещено для шумных компаний",
        "Запрещено проведение мероприятий (банкетов, свадеб)",
      ],
    },
    {
      title: "Условия бронирования:",
      list: [
        "Время заезда 14:00",
        "Время выезда 12:00",
        "Минимальный срок проживания: от 1 ночи",
      ],
    },
    {
      title: "Скидки и акции: ",
      list: ["Для детей до 3 лет скидка на доп. места 100%"],
    },
  ],
  rulesDangerList: ["При заселении требуется QR код или ПЦР тест"],
  accountsProcent: 95,
  accountsPropertyList: [
    {
      title: "Хозяин/персонал",
      stars: 5,
    },
    {
      title: "Чистота",
      stars: 5,
    },
    {
      title: "Комфорт",
      stars: 5,
    },
    {
      title: "Местоположение",
      stars: 5,
    },
  ],
  accountsList: [
    {
      accountImage: "../../images/card-description/profile--2.jpg",
      accountName: "Татьяна",
      stars: 5,
      dateOfRegistration: "12.04.2022 г.",
      description:
        "Прекрасный отель. Очень милые и приветливые хозяева. Расположен идеально удобно для прогулок по городу. Для отдыха на пляже лучше иметь машину. Всем рекомендую. Спасибо за хороший отдых.",
    },
    {
      accountImage: "../../images/card-description/profile--3.jpg",
      accountName: "Владимир",
      stars: 3,
      dateOfRegistration: "12.04.2022 г.",
      description:
        "Прекрасный отель. Очень милые и приветливые хозяева. Расположен идеально удобно для прогулок по городу. Для отдыха на пляже лучше иметь машину. Всем рекомендую. Спасибо за хороший отдых.",
    },
    {
      accountImage: "../../images/card-description/profile--4.jpg",
      accountName: "Кирилл",
      stars: 4,
      dateOfRegistration: "08.08.2022 г.",
      description:
        "Прекрасный отель. Очень милые и приветливые хозяева. Расположен идеально удобно для прогулок по городу. Для отдыха на пляже лучше иметь машину. Всем рекомендую. Спасибо за хороший отдых.",
    },
    {
      accountImage: "../../images/card-description/profile--5.jpg",
      accountName: "Олег",
      stars: 5,
      dateOfRegistration: "12.04.2022 г.",
      description:
        "Прекрасный отель. Очень милые и приветливые хозяева. Расположен идеально удобно для прогулок по городу. Для отдыха на пляже лучше иметь машину. Всем рекомендую. Спасибо за хороший отдых.",
    },
    {
      accountImage: "../../images/card-description/profile--2.jpg",
      accountName: "Татьяна",
      stars: 5,
      dateOfRegistration: "12.04.2022 г.",
      description:
        "Прекрасный отель. Очень милые и приветливые хозяева. Расположен идеально удобно для прогулок по городу. Для отдыха на пляже лучше иметь машину. Всем рекомендую. Спасибо за хороший отдых.",
    },
    {
      accountImage: "../../images/card-description/profile--3.jpg",
      accountName: "Владимир",
      stars: 3,
      dateOfRegistration: "12.04.2022 г.",
      description:
        "Прекрасный отель. Очень милые и приветливые хозяева. Расположен идеально удобно для прогулок по городу. Для отдыха на пляже лучше иметь машину. Всем рекомендую. Спасибо за хороший отдых.",
    },
    {
      accountImage: "../../images/card-description/profile--4.jpg",
      accountName: "Кирилл",
      stars: 4,
      dateOfRegistration: "08.08.2022 г.",
      description:
        "Прекрасный отель. Очень милые и приветливые хозяева. Расположен идеально удобно для прогулок по городу. Для отдыха на пляже лучше иметь машину. Всем рекомендую. Спасибо за хороший отдых.",
    },
    {
      accountImage: "../../images/card-description/profile--5.jpg",
      accountName: "Олег",
      stars: 5,
      dateOfRegistration: "12.04.2022 г.",
      description:
        "Прекрасный отель. Очень милые и приветливые хозяева. Расположен идеально удобно для прогулок по городу. Для отдыха на пляже лучше иметь машину. Всем рекомендую. Спасибо за хороший отдых.",
    },
  ],
  owner: {
    ownerImage: "../../images/card-description/profile--1.jpg",
    ownerName: "Сергей",
    ownerDate: "7.04.2022",
    ownerProtection: "Телефон и жилье подтверждены",
    ownerHouse: 1,
    ownerHouseText: " вариант жилья",
    ownerReviews: 15,
  },
};

const HotelCard = () => {
  return (
    <div className="hotel-card">
      <Header />
      <Navigation />
      <CardNavigation
        secondText="Проживание"
        secondLink="/housing-catalog"
        thirdText="Отель у моря “Бамбучо”  "
      />
      <CardPostHeader
        title="Отель у моря “Бамбучо”"
        type="Мини гостиница"
        stars="4"
        reviews="15"
        adress="Абхазия, Пицунда, улица Речная 11а"
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
        blueHeader={false}
        services={true}
        accounts={true}
        rules={true}
        owner={true}
        ownerTitle={"Владелец"}
      />
      <HotelNumber />
      <CardMap
        title="Где вы будете"
        center={43.101181}
        centerH={40.63}
        placemarks={[43.101181, 40.634187]}
        text="Пицунда это климатический курорт: сочетание реликтовых сосновых рощ, субтропической растительности самшита, эвкалипта и хвои, а также влияние морского бриза создает уникальный микроклимат.  Отдыхающие туристы и опытные врачи называют воздух курорта «естественным природным ингалятором». Считается, что он излечивает множество самых разных недомоганий и болезней, и оздоравливает организм в целом."
        link={"/town-card"}
      />
      <Landmark />
      <PreFooterCard
        title="Похожие отели в Пицунде"
        data={Zaglushka}
        card={true}
        town={Town}
      />
      <Footer />
    </div>
  );
};

export default HotelCard;
