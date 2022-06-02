import React, { useState } from "react";
import "./RestaurantCard.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import CardMap from "../../components/CardMap/CardMap";
import CardNavigation from "../../components/CardNavigation/CardNavigation";
import Navigation from "../../components/Navigation/Navigation";
import CardPostHeader from "../../components/CardPostHeader/CardPostHeader";
import PreFooterCard from "../../components/PreFooterCard/PreFooterCard";
import CardDescriptionReviews from "../../components/CardDescriptionReviews/CardDescriptionReviews";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CalendarCardReservation from "../../components/CalendarCardReservation/CalendarCardReservation";

const Zaglushka = [
  {
    id: 0,
    image: "../../images/restaurant-card/slider--1.jpg",
    title: "Le Terrazze",
    category: "Ресторан",
    stars: 5,
  },
  {
    id: 1,
    image: "../../images/restaurant-card/slider--2.jpg",
    title: "Ресторан Al Capone",
    category: "Ресторан",
    stars: 5,
  },
  {
    id: 2,
    image: "../../images/restaurant-card/slider--3.jpg",
    title: "Mon Cafe",
    category: "Ресторан",
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
const Town = "Гагра";

const Description = {
  blueHeader: [
    {
      image: "../../images/restaurant-card/check.svg",
      number: "450₽",
      text: "Средний чек",
    },
    {
      image: "../../images/impression-card/login.svg",
      number: "С 10:00 до 23:00",
      text: "Часы работы",
    },
  ],
  descriptionList: [
    "Этот ресторан находится неподалеку от Парк Принцы Ольденбургского. Вы можете попробовать здесь изумительный шашлык, камбалу и салаты. Постоянные клиенты отмечают, что в Ресторан Абаата готовят неплохие блины. Обязательно посетите это место, если вы хотите попробовать хорошее вино. Многие посетители утверждают, что в этом заведении вкусный лимонад.",
    "В этом ресторане уютная атмосфера. По отзывам гостей, персонал здесь приятный. Гостям нравится профессиональный сервис. Большинство посетителей указывают на то, что цены здесь привлекательные. Посетителям нравится впечатляющий интерьер.",
  ],
  descriptionOptions: [
    {
      title: "Особенности",
      image: "../../images/restaurant-card/black-star.svg",
      optionList: [
        {
          optionProperty: "Веранда",
          optionPropertyNumber: "",
        },
        {
          optionProperty: "Wi-Fi",
          optionPropertyNumber: "",
        },
        {
          optionProperty: "Еда на вынос",
          optionPropertyNumber: "",
        },
      ],
    },
    {
      title: "Кухня",
      image: "../../images/housing-card/knife.svg",
      optionList: [
        {
          optionProperty: "Национальная",
          optionPropertyNumber: "",
        },
        {
          optionProperty: "Европейская ",
          optionPropertyNumber: "",
        },
      ],
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
    ownerImage: "../../images/restaurant-card/owner.jpg",
    ownerName: "Дарья",
    ownerDate: "На сайте: с 15.04.2022",
    ownerProtection: "Проверено",
    ownerHouse: "1",
    ownerHouseText: " ресторан",
    ownerReviews: 20,
  },
};

const CalendarComponentData = {
  close: 14,
  partially: 14,
  free: 1,
  block: 1,
  descriptionTitle: "Расписание:",
  descriptionList: [
    "Понедельник, вторник, среда, четврег, пятница с 10:00 до 23:00",
    "Суббота, Воскресенье с 10:00 до 00:00",
  ],
};

const RestaurantCard = () => {
  {
    /* Блок бронирования */
  }
  const [calendarValue, onChangeCalendar] = useState(new Date());
  const [tongler, changeTongler] = useState(false);
  const [timeChoise, changeTime] = useState("12:00");
  const [timeModalWindow, tongleModalTime] = useState(false);

  const reservationTongler = () => {
    if (tongler) {
      changeTongler(false);
    } else {
      changeTongler(true);
    }
  };

  const [calendarModalWindow, tongleModalCalendar] = useState(false);
  const [ourDateInForm, changeOurDateInForm] = useState("Укажите дату");
  const [calendarValue2, onChangeCalendar2] = useState(new Date());
  const [calendarModalWindow2, tongleModalCalendar2] = useState(false);
  const [ourDateInForm2, changeOurDateInForm2] = useState("Укажите дату");
  const [passengersModalWindow, tongleModalPassengers] = useState(false);

  const [adult, changeAdult] = useState(0);
  const [children, changeChildren] = useState(0);
  const [babies, changeBabies] = useState(0);
  const [passengers, setPassengers] = useState("Выберите количество гостей");

  const tongleModalData = () => {
    console.log(calendarValue);
    if (calendarModalWindow) {
      tongleModalCalendar(false);
    } else {
      tongleModalCalendar(true);
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

  const tongleModalData2 = () => {
    console.log(calendarValue2);
    if (calendarModalWindow2) {
      tongleModalCalendar2(false);
    } else {
      tongleModalCalendar2(true);
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
  const setPassengersInput = () => {
    setPassengers(`Взрослых ${adult}, детей ${children}, малышей ${babies}`);
    tongleModalPassengers(false);
  };

  const tongleTime = () => {
    if (timeModalWindow) {
      tongleModalTime(false);
    } else {
      tongleModalTime(true);
    }
  };

  const changeTimeLocal = (e) => {
    changeTime(e.target.value);
  };

  {
    /* Блок регистрации */
  }

  return (
    <div>
      <Header />
      <Navigation />
      <CardNavigation
        secondText="Кухня Абхазии"
        secondLink="/cooking"
        thirdText="Ресторан Абаата"
      />
      <CardPostHeader
        title="Ресторан Абаата"
        type="Ресторан"
        stars="3"
        reviews="20"
        adress="Гагра, Пр-т Нартаа 115"
        imagesArr={[
          "../../images/tour-card/tour-item--1.jpg",
          "../../images/tour-card/tour-item--2.jpg",
          "../../images/tour-card/tour-item--3.jpg",
          "../../images/tour-card/tour-item--4.jpg",
          "../../images/tour-card/tour-item--5.jpg",
        ]}
      />
      <CardDescriptionReviews
        Description={Description}
        blueHeader={true}
        services={false}
        accounts={true}
        rules={false}
        descriptionSubList={false}
        owner={true}
        ownerTitle={"Ресторатор"}
      />
      {/* Блок бронирования */}
      <section className="hotel-number calendar">
        {/*  Календарь */}
        <article className="calendar__title-wraper">
          <h5 className="calendar__title">Календарь занятости</h5>
          <p className="calendar__decoration"></p>
        </article>
        <article className="calendar__body">
          <CalendarCardReservation
            grCode={true}
            description={true}
            partially={true}
            CalendarComponentData={CalendarComponentData}
          />

          {/*  Бронирование */}
          <div className="calendar__reservation">
            <div className="hotel-number__reservation">
              <h5 className="hotel-number__reservation-title">Бронирование</h5>
              <section className="hotel-number__date-wrapper">
                <article
                  className="transfer-booking__form-item transfer-booking__form-item--hotel-number-card"
                  onClick={() => tongleModalData()}
                >
                  <p className="transfer-booking__form-top-text transfer-booking__form-top-text--card-hotel-number ">
                    Дата
                  </p>
                  <img
                    className="transfer-booking__form-image transfer-booking__form-image--calendar hotel-number__card-reserve"
                    src="../../../images/transfer/calendar.svg"
                    width="13.5"
                    height="15"
                  />
                  <p className="transfer-booking__form-search transfer-booking__form-search--data transfer-booking__form-search--data--number-hotel-card ">
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
                </article>
              </section>
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
              <div className="transfer-booking__form-item">
                <p className="transfer-booking__form-top-text">Гости</p>
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
                <div className="reservation__danger-and-price">
                  <p className="reservation__danger">
                    Оплата только за бронирование столика
                  </p>
                  <p className="reservation__price reservation__price--bron">
                    500₽ бронь
                  </p>
                </div>
                <input
                  className="hotel-number__reservation-submit"
                  type="submit"
                  value="Забронировать"
                />
              </div>
            </div>
          </div>
        </article>
      </section>
      {/* Блок бронирования */}
      <CardMap
        title="Местонахождение ресторана на карте"
        center={43.101181}
        centerH={40.63}
        placemarks={[43.101181, 40.634187]}
        text="Гагра – один из наиболее популярных курортов Абхазии, расположенный в небольшой бухте. Из-за мягкого климата, богатой субтропической растительности и живописного побережья знаменитый этот приморский город-курорт часто называют «Абхазской Ривьерой»."
        link={"/town-card"}
      />
      <PreFooterCard
        title="Похожие рестораны в Гаграх"
        data={Zaglushka}
        card={true}
        town={Town}
      />
      <Footer />
    </div>
  );
};

export default RestaurantCard;
