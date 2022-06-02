import React, { useState } from "react";
import "./ImpressionCard.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import CardMap from "../../components/CardMap/CardMap";
import CardNavigation from "../../components/CardNavigation/CardNavigation";
import Navigation from "../../components/Navigation/Navigation";
import CardPostHeader from "../../components/CardPostHeader/CardPostHeader";
import PreFooterCard from "../../components/PreFooterCard/PreFooterCard";
import CardDescriptionReviews from "../../components/CardDescriptionReviews/CardDescriptionReviews";
import HotelNumber from "../../components/HotelNumber/HotelNumber";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CalendarCardReservation from "../../components/CalendarCardReservation/CalendarCardReservation";

const Zaglushka = [
  {
    id: 0,
    image: "../../images/impression-card/slider--3.jpg",
    title: "Рисование на песке",
    category: "Природа",
    stars: 5,
  },
  {
    id: 1,
    image: "../../images/impression-card/slider--2.jpg",
    title: "Научим национальному танцу",
    category: "Природа",
    stars: 5,
  },
  {
    id: 2,
    image: "../../images/impression-card/slider--1.jpg",
    title: "Катание на лошадях",
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
const Town = "Гагра";

const Description = {
  blueHeader: [
    {
      image: "../../images/impression-card/login.svg",
      number: "1",
      text: "Индивидуальное",
    },
    {
      image: "../../images/impression-card/time.svg",
      number: "2 часа",
      text: "Длительность",
    },
  ],
  descriptionList: [
    "Возможно вы мечтали об очень красивой тарелке, но не смогли найти в магазине. А может быть хотели сделать сосуд для хранения ценных вещей? Или чудесную необычную вазу, которой ни у кого нет, в подарок? ",
    " И вот, вы оказались здесь, в гончарной мастерской. Теперь наслаждайтесь процессом. Под руководством мастера научитесь работать на гончарном круге, изготовите 3 или 4 изделия за 1 час. Привет, необычная ваза, сосуд для хранения ценных вещей, красивая тарелка, ваша личная креативная кружка и много-много всего! Перед походом, запаситесь идеями, чтобы сразу «в бой».",
  ],
  descriptionSubList: [
    {
      title: "Место встречи:",
      subList: ["Гагра,ул. Навагинская, 9Д, мкр. Центральный"],
    },
  ],
  descriptionOptions: [
    {
      title: "Цена",
      image: "../../images/housing-card/price.svg",
      optionList: [
        {
          optionProperty: "Взрослый:",
          optionPropertyNumber: "1 500₽ ",
        },
        {
          optionProperty: "Дети до 12 лет:",
          optionPropertyNumber: "1 000₽ ",
        },
        {
          optionProperty: "Дети до 7 лет:",
          optionPropertyNumber: "Бесплатно",
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
    ownerName: "Дарья",
    ownerDate: "На сайте: с 15.04.2022",
    ownerProtection: "Проверено",
    ownerHouse: 1,
    ownerHouseText: "впечатление",
    ownerReviews: 22,
  },
};

const CalendarComponentData = {
  close: 14,
  partially: 14,
  free: 1,
  block: 1,
  descriptionTitle: "Расписание:",
  descriptionList: [
    "Понедельник, среда с 12:00 до 14:00",
    "Вторник, четверг с 10:00 до 12:00",
    "Пятница с 10:00 до 19:00",
  ],
};

const TimesForReservation = ["10:00", "11:00", "12:00"];

const ImpressionCard = () => {
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
    <div className="impression-card">
      <Header />
      <Navigation />
      <CardNavigation
        secondText="Впечатления"
        secondLink="/tours"
        thirdText="Лепка из глины"
      />
      <CardPostHeader
        title="Лепка из глины"
        type="Впечатление"
        stars="5"
        reviews="22"
        adress="Гагра,ул. Навагинская, 9Д, мкр. Центральный"
        imagesArr={[
          "../../images/impression-card/impression-item--1.jpg",
          "../../images/impression-card/impression-item--2.jpg",
          "../../images/impression-card/impression-item--3.jpg",
          "../../images/impression-card/impression-item--4.jpg",
          "../../images/impression-card/impression-item--5.jpg",
        ]}
      />
      <CardDescriptionReviews
        Description={Description}
        blueHeader={true}
        services={false}
        accounts={true}
        rules={false}
        owner={true}
        descriptionSubList={true}
        ownerTitle={"Владелец"}
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
            grCode={false}
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
                    Дата посещения
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
                    {TimesForReservation.map((timeElement) => (
                      <div
                        className="form-time__input_radio"
                        onClick={() => changeTime(timeElement)}
                      >
                        <div className="form-time__input_radio-circle">
                          {timeChoise == timeElement ? (
                            <div className="form-time__input_radio-circle--active"></div>
                          ) : (
                            <></>
                          )}
                        </div>
                        <p className="form-time__input_radio-text">
                          {timeElement}
                        </p>
                      </div>
                    ))}
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
        title="Местонахождение впечатления на карте"
        center={43.280482}
        centerH={40.265698}
        placemarks={[43.280482, 40.265698]}
        text="Гагра – один из наиболее популярных курортов Абхазии, расположенный в небольшой бухте. Из-за мягкого климата, богатой субтропической растительности и живописного побережья знаменитый этот приморский город-курорт часто называют «Абхазской Ривьерой»."
        link={"/town-card"}
      />
      <PreFooterCard
        title="Похожие впечатления в Гаграх"
        data={Zaglushka}
        card={true}
        town={Town}
      />
      <Footer />
    </div>
  );
};

export default ImpressionCard;
