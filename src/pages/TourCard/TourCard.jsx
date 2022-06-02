import React, { useState } from "react";
import "./TourCard.css";
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
      image: "../../images/town-card/sun.svg",
      number: "1",
      text: "Кол-во дней",
    },
    {
      image: "../../images/impression-card/login.svg",
      number: "до 20",
      text: "Групповая",
    },
    {
      image: "../../images/impression-card/time.svg",
      number: "5 часов",
      text: "Длительность",
    },
  ],
  descriptionList: [
    "Мы отправимся к озеру Рица по горной дороге через ущелье вдоль бурной реки Бзыбь.   По пути сделаем остановку у Голубого озера, которое сохраняет свой невероятный цвет даже в ненастье. Гид расскажет вам легенды, связанные с этими живописными местами.",
    "Наш путь к Рице продолжится через Юпшарский каньон, настолько узкий, что его прозвали «Каменным мешком». Вы окажетесь в месте, где отвесные скалы вплотную сближаются друг с другом, и полюбуетесь вековыми самшитами, плющом и мхами на валунах.",
    "Мы сделаем остановку также у водопадов  «Девичьи слезы» и «Мужские слезы». Здесь принято загадывать желания, а чтобы они сбылись, туристы привязывают на траву разноцветные ленточки. ",
    "Из ущелья мы поднимемся к легендарному озеру Рица в окружении горных вершин, поросших густыми лесами. В разное время года цвет воды меняется: если вы попадете сюда зимой, Рица приобретет холодно-голубой оттенок, а с весны до осени озеро остается зеленовато-желтым.",
    "Трансфер из города Гагра туда и обратно включен в стоимость",
  ],
  descriptionSubList: [
    {
      title: "Программа:",
      subList: [
        "Отправляемся в 10:00 по Мск.;",
        "Голубое озеро;",
        "Юпшарский каньон;",
        "Водопады Девичьи слезы и Мужские слезы;",
        "Озеро Рица;",
        "Возвращаемся примерно 15:00 по Мск.",
      ],
    },
    {
      title: "Место отправки:",
      subList: ["Гагры, улица или какая именно остановка"],
    },
    {
      title: "Важно знать:",
      subList: [
        "Граница Абхазии на сегодняшний день открыта только для граждан России и граждан ЛНР и ДНР (Луганск и Донецк). В дорогу вам необходимо взять паспорт.",
      ],
    },
  ],
  descriptionOptions: [
    {
      title: "Цена",
      image: "../../images/housing-card/price.svg",
      optionList: [
        {
          optionProperty: "Взрослый с 13 лет:",
          optionPropertyNumber: "2 000₽ ",
        },
        {
          optionProperty: "Дети до 12 лет:",
          optionPropertyNumber: "1 500₽ ",
        },
        {
          optionProperty: "Дети до 7 лет:",
          optionPropertyNumber: "1 000₽ ",
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
    ownerImage: "../../images/tour-card/owner.jpg",
    ownerName: "Станислав",
    ownerDate: "На сайте: с 15.04.2022",
    ownerProtection: "Гид провёл более 100 экскурсий",
    ownerHouse: "2",
    ownerHouseText: " варианта экскурсии",
    ownerReviews: 15,
  },
};

const Options = [
  {
    title: "Экологичсекий сбор на озере Рица",
    list: [
      {
        text: "Взрослые:",
        price: "350₽",
      },
      {
        text: "Дети с 8-12 лет:",
        price: "250₽",
      },
      {
        text: "Дети до 7 лет:",
        price: "Бесплатно",
      },
    ],
  },
  {
    title: "Экологичсекий сбор на озере Рица 2",
    list: [
      {
        text: "Взрослые с 13 лет:",
        price: "350₽",
      },
      {
        text: "Дети с 8-12 лет:",
        price: "250₽",
      },
      {
        text: "Дети до 7 лет:",
        price: "Бесплатно",
      },
    ],
  },
  {
    title: "Экологичсекий сбор на озере Рица 3",
    list: [
      {
        text: "Взрослые с 13 лет:",
        price: "350₽",
      },
      {
        text: "Дети с 8-12 лет:",
        price: "250₽",
      },
      {
        text: "Дети до 7 лет:",
        price: "Бесплатно",
      },
    ],
  },
];

const CalendarComponentData = {
  close: 14,
  partially: 14,
  free: 1,
  block: 1,
  descriptionTitle: 'Расписание:',
  descriptionList: ['Понедельник, вторник, среда, четврег, пятница с 10:00 до 23:00', 'Суббота, Воскресенье с 10:00 до 00:00'],
}

const TourCard = () => {
  {
    /* Блок бронирования */
  }
  const [calendarValue, onChangeCalendar] = useState(new Date());

  let calendarValue3 = new Date(calendarValue.valueOf());
  calendarValue3.setMonth(calendarValue3.getMonth() - 1);

  const [calendarValue2, onChangeCalendar2] = useState(calendarValue3);
  const [tongler, changeTongler] = useState(false);
  const [timeChoise, changeTime] = useState("12:00");
  const [timeModalWindow, tongleModalTime] = useState(false);
  const [optionsReservationModalWindow, changeOptionsReservationModalWindow] =
    useState(false);
  const [dopOptions, changeDopOptions] = useState(
    "Выберите дополнительные опции"
  );
  const [dopOptionsArr, changeDopOptionsArr] = useState([]);

  const calendarChanger = () => {
    onChangeCalendar();
    calendarValue3 = new Date(calendarValue.valueOf());
    calendarValue3.setMonth(calendarValue3.getMonth() - 1);
    onChangeCalendar2(calendarValue3);
  };

  const tongleDopOption = (element) => {
    if (dopOptionsArr.indexOf(element) == -1) {
      let newArr = [...dopOptionsArr];
      newArr.push(element);
      changeDopOptionsArr(newArr);
      changeDopOptions(newArr.join(","));
    } else {
      let newArr = [...dopOptionsArr];
      let newIndex = dopOptionsArr.indexOf(element);
      let something = newArr.splice(newIndex, 1);
      changeDopOptionsArr(newArr);
      changeDopOptions(newArr.join(","));
    }
    console.log([dopOptionsArr, dopOptions]);
  };

  const tongleModalReservationOptions = () => {
    if (optionsReservationModalWindow) {
      changeOptionsReservationModalWindow(false);
    } else {
      changeOptionsReservationModalWindow(true);
    }
  };

  const [calendarModalWindow, tongleModalCalendar] = useState(false);
  const [ourDateInForm, changeOurDateInForm] = useState("Укажите дату");
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
    changeOurDateInForm(String(our));
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

  {
    /* Блок регистрации */
  }

  return (
    <div className="tour-card">
      <Header />
      <Navigation />
      <CardNavigation
        secondText="Экскурсии"
        secondLink="/tours"
        thirdText="Эскурсия на озерео Рица"
      />
      <CardPostHeader
        title="Эскурсия на озеро Рица"
        type="Природа"
        stars="5"
        reviews="10"
        adress="Гагра"
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
        descriptionSubList={true}
        owner={true}
        ownerTitle={"Гид-Экскурсовод"}
      />

      {/* Блок бронирования */}
      <section className="hotel-number calendar">
        {/*  Календарь */}
        <article className="calendar__title-wraper">
          <h5 className="calendar__title">Календарь занятости</h5>
          <p className="calendar__decoration"></p>
        </article>

        <article className="calendar__body">
          <CalendarCardReservation grCode={false} description={false} partially={true} CalendarComponentData={CalendarComponentData} />

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
                    Желаемая дата экскурсии
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
                <div className="transfer-booking__form-item">
                  <p className="transfer-booking__form-top-text">
                    Дополнительные опции
                  </p>
                  <input
                    className="transfer-booking__form-search"
                    placeholder="2 взрослых"
                    type="text"
                    name="transfer-people"
                    value={dopOptions}
                    onClick={() => tongleModalReservationOptions()}
                  />
                  {optionsReservationModalWindow && (
                    <div className="reservation__dop-options">
                      <div className="reservation__dop-options-wrapper">
                        {Options.map((ourOption) => (
                          <>
                            <div
                              className="dop-options__our-option"
                              onClick={() => tongleDopOption(ourOption.title)}
                            >
                              <div className="dop-options__our-option-title">
                                <div className="dop-options__our-option-circle">
                                  {" "}
                                  {dopOptionsArr.indexOf(ourOption.title) !==
                                    -1 && (
                                    <>
                                      <div className="strike--1"></div>
                                      <div className="strike--2"></div>
                                    </>
                                  )}
                                </div>
                                <p className="dop-options__our-option-text">
                                  {ourOption.title}
                                </p>
                              </div>
                              {ourOption.list.map((biba) => (
                                <div className="our-option-text__item">
                                  <p className="our-option-text__item-title">
                                    {biba.text}
                                  </p>
                                  <p className="our-option-text__item-price">
                                    {biba.price}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </>
                        ))}
                      </div>
                    </div>
                  )}
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
        title="Местонахождение эскурсии на карте"
        center={43.101181}
        centerH={40.63}
        placemarks={[43.101181, 40.634187]}
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

export default TourCard;
