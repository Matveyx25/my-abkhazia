import React, { useState } from "react";
import "./HousingCard.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CardNavigation from "../../components/CardNavigation/CardNavigation";
import Navigation from "../../components/Navigation/Navigation";
import CardPostHeader from "../../components/CardPostHeader/CardPostHeader";
import PreFooterCard from "../../components/PreFooterCard/PreFooterCard";
import { Link } from "react-router-dom";
import CardMap from "../../components/CardMap/CardMap";
import Landmark from "../../components/Landmark/Landmark";
import CardDescriptionReviews from "../../components/CardDescriptionReviews/CardDescriptionReviews";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CalendarCardReservation from "../../components/CalendarCardReservation/CalendarCardReservation";

const Zaglushka = [
  {
    id: 0,
    image: "../../images/main-slider-ritsa.jpg",
    title: "1 комнатная квартира",
    category: "Комната",
    stars: 5,
  },
  {
    id: 1,
    image: "../../images/main-slider-gag-waterfall.jpg",
    title: "Отель Пицунда",
    category: "Комната",
    stars: 5,
  },
  {
    id: 2,
    image: "../../images/main-slider-kundig.jpg",
    title: "2 комнатная квартира",
    category: "Комната",
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
    title: "3 комнатная квартира",
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
const Town = "Сухум";

const Description = {
  blueHeader: [
    {
      image: "/images/card-description/header-image--1.svg",
      number: "4",
      text: "Гостей",
    },
    {
      image: "/images/card-description/header-image--3.svg",
      number: "×4",
      text: "Этаж",
    },
    {
      image: "/images/card-description/header-image--4.svg",
      number: "35 м2",
      text: "Площадь",
    },
  ],
  descriptionList: [
    "1-комнатная квартира в центре Сухума: угол Лакоба и Гоголя (ныне Генерала Дбар) 4 этаж, до моря и пляжа - 5 минут спокойным шагом, там же прекрасная набережная (400 метров).",
    "Есть кондиционер, евроокна, ТВ, холодильник, стиральная машинка, железная дверь, свежий ремонт, интернет.",
    "Имеется балкон с видом на море и горы. Есть 2 дивана, получается 4 спальных места.",
    "Продуктовый и вещевой рынок находится в 5 минутах ходьбы. Возле дома множество ресторанов, пекарня, кондитерская, кофейня, макдональдс, 2 парка для прогулок через дорогу.",
    "В доме проживают тихие и доброжелательные соседи. Я всегда на связи со своими гостями, могу ответить на ваши вопросы, оказать любую помощь.",
    "Срок проживания - от 6 суток.",
  ],
  descriptionOptions: [
    {
      title: "О квартире",
      image: "../../images/housing-card/flat.svg",
      optionList: [
        {
          optionProperty: "Интернет Wi-Fi",
          optionPropertyNumber: "",
        },
        {
          optionProperty: "Балкон",
          optionPropertyNumber: "",
        },
        {
          optionProperty: "Тип дома:",
          optionPropertyNumber: "Кирпичный",
        },
      ],
    },
    {
      title: "Цена",
      image: "../../images/housing-card/price.svg",
      optionList: [
        {
          optionProperty: "Суточно:",
          optionPropertyNumber: "1 300₽",
        },
        {
          optionProperty: "На месяц:",
          optionPropertyNumber: "35 000₽",
        },
      ],
    },
    {
      title: "В комнатах",
      image: "../../images/housing-card/rooms.svg",
      optionList: [
        {
          optionProperty: "Утюг",
          optionPropertyNumber: "",
        },
        {
          optionProperty: "Гладильная доска",
          optionPropertyNumber: "",
        },
        {
          optionProperty: "ЖК-телевизор",
          optionPropertyNumber: "",
        },
        {
          optionProperty: "Кондиционер",
          optionPropertyNumber: "",
        },
        {
          optionProperty: "Москитные сетки на окнах",
          optionPropertyNumber: "",
        },
        {
          optionProperty: "Диван кровать ( 2 места):",
          optionPropertyNumber: "2",
        },
      ],
    },
    {
      title: "Кухня",
      image: "../../images/housing-card/knife.svg",
      optionList: [
        {
          optionProperty: "Электроплита",
          optionPropertyNumber: "",
        },
        {
          optionProperty: "Столовые приборы",
          optionPropertyNumber: "",
        },
        {
          optionProperty: "Набор посуды",
          optionPropertyNumber: "",
        },
        {
          optionProperty: "Фильтр для воды",
          optionPropertyNumber: "",
        },
        {
          optionProperty: "Кофеварка",
          optionPropertyNumber: "",
        },
        {
          optionProperty: "Электрочайник",
          optionPropertyNumber: "",
        },
        {
          optionProperty: "Холодильник",
          optionPropertyNumber: "",
        },
      ],
    },
    {
      title: "Удобства",
      image: "../../images/housing-card/vanns.svg",
      optionList: [
        {
          optionProperty: "Количество С/У:",
          optionPropertyNumber: "1",
        },
        {
          optionProperty: "Сушилка для белья",
          optionPropertyNumber: "",
        },
        {
          optionProperty: "Фен",
          optionPropertyNumber: "",
        },
        {
          optionProperty: "Стиральная машинка",
          optionPropertyNumber: "",
        },
        {
          optionProperty: "Ванна",
          optionPropertyNumber: "",
        },
        {
          optionProperty: "Полотенца",
          optionPropertyNumber: "",
        },
        {
          optionProperty: "Туалетные принадлежности",
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
      title: "Правила проживания:",
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

const RoomCard = () => {
  const [calendarValue, onChangeCalendar] = useState(new Date());

  {
    /* Блок бронирования */
  }
  const [tongler, changeTongler] = useState(false);

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

  {
    /* Блок  */
  }
  return (
    <div className="housing-card">
      <Header />
      <Navigation />
      <CardNavigation
        secondText="Проживание"
        secondLink="/housing-catalog"
        thirdText="Отдельная комната"
      />
      <CardPostHeader
        title="Отдельная комната"
        type="Комната на сутки / на месяц"
        stars="4"
        reviews="15"
        adress="Абхазия, Сухумский район, Сухум, улица Генерала Дбар 17"
        imagesArr={[
          "/images/housing-card/Rectangle45.jpg",
          "/images/housing-card/Rectangle46.jpg",
          "/images/housing-card/Rectangle47.jpg",
          "/images/housing-card/Rectangle48.jpg",
          "/images/housing-card/Rectangle49.jpg",
        ]}
      />
      <CardDescriptionReviews
        Description={Description}
        blueHeader={true}
        services={false}
        accounts={true}
        rules={true}
        owner={true}
        ownerTitle={"Владелец"}
        imageAbout={"/images/bxs_home.svg"}
      />
      {/*  Блок бронирования */}
      <section className="hotel-number calendar">
        {/*  Календарь */}
        <article className="calendar__title-wraper">
          <h5 className="calendar__title">Календарь занятости</h5>
          <p className="calendar__decoration"></p>
        </article>
        <article className="calendar__body">
          <CalendarCardReservation
            grCode={false}
            description={false}
            partially={false}
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
                    Заезд
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
                <article
                  className="transfer-booking__form-item transfer-booking__form-item--hotel-number-card"
                  onClick={() => tongleModalData2()}
                >
                  <p className="transfer-booking__form-top-text transfer-booking__form-top-text--card-hotel-number ">
                    Выезд
                  </p>
                  <img
                    className="transfer-booking__form-image transfer-booking__form-image--calendar hotel-number__card-reserve"
                    src="../../../images/transfer/calendar.svg"
                    width="13.5"
                    height="15"
                  />
                  <p className="transfer-booking__form-search transfer-booking__form-search--data transfer-booking__form-search--data--number-hotel-card ">
                    {ourDateInForm2}
                  </p>
                  {calendarModalWindow2 && (
                    <div
                      className="form-search--data__calendar-wrapper"
                      onClick={(e) => changeDataInput2(e)}
                    >
                      <Calendar
                        onChange={onChangeCalendar2}
                        value={calendarValue2}
                      />
                    </div>
                  )}
                </article>
              </section>
              <div
                className="transfer-booking__form-tongler"
                onClick={() => reservationTongler()}
              >
                <div
                  className={
                    !tongler
                      ? "form-tongler__wrapper"
                      : "form-tongler__wrapper form-tongler__wrapper--active"
                  }
                >
                  <div
                    className={
                      !tongler
                        ? "form-tongler__circle"
                        : "form-tongler__circle form-tongler__circle--active"
                    }
                  ></div>
                </div>
                <p className="transfer-booking__form-tongler-text">
                  Снять на месяц
                </p>
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
                    Укажите дату заезда и выезда
                  </p>
                  <p className="reservation__price">{tongler ? "35 000₽ меясяц" : "1 300₽ сутки"}</p>
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
      {/* Конец блока бронирования */}
      <CardMap
        title="Где вы будете"
        center={43.005058}
        centerH={41.012468}
        placemarks={[43.005058, 41.012468]}
        text="Сухум – столица Абхазии. Город раскинулся на берегу Черного моря                    в Сухумской бухте. Расстояние от российской границы составляет 107 километров, от Сочи - 146 километров. С гор через город текут реки Сухумка и Басла. С южной стороны его ограничивает речка Кяласур. С севера неприступной стеной высится Главный Кавказский хребет. По прямой           от Сухума рукой подать до российских горных курортов Архыз и Домбай. Население города не превышает 70 тысяч человек."
        link={"/town-card"}
      />
      <Landmark />
      <PreFooterCard
        title="Похожие комнаты в Сухуме"
        data={Zaglushka}
        card={true}
        town={Town}
      />
      <Footer />
    </div>
  );
};

export default RoomCard;
