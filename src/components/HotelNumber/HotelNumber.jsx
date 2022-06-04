import React, { useState } from "react";
import "./HotelNumber.css";
import Calendar from "react-calendar";

const HotelNumberData = [
  {
    id: 0,
    imageArr: [
      "https://www.ccnova.ru/upload/resize_cache/iblock/3ab/800_500_0/zagorodnyj_dom_v_stile_shale_s_dvuskatnoj_krovlej.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfa7RoC7For7yMf7bHZhKCYhzOSPlCE3MLtA&usqp=CAU",
      "https://realnoevremya.ru/uploads/articles/fb/1f/bdc22ce193fd0dc1.jpg",
      "https://klike.net/uploads/posts/2020-01/1579858769_1.jpg",
      "https://rus-et.ru/wp-content/uploads/2020/11/dom-na-holme.jpg",
    ],
    title: "Бюджетный двухместный номер с 1 кроватью",
    guests: 2,
    beds: 1,
    rooms: 1,
    vanns: 1,
    square: 8,
    price: 1600,
    options: [
      {
        title: "О номере",
        optionList: [
          {
            optionProperty: "Вид из окна:",
            optionPropertyNumber: "Горы,сад",
          },
          {
            optionProperty: "Интернет Wi-Fi",
            optionPropertyNumber: "",
          },
          {
            optionProperty:
              "Небольшой двухместный номер с отдельным входом и с видом на горы.",
            optionPropertyNumber: "",
          },
        ],
      },
      {
        title: "В комнате",
        optionList: [
          {
            optionProperty: "ЖК-телевизор",
            optionPropertyNumber: "",
          },
          {
            optionProperty: "Кабельное ТВ",
            optionPropertyNumber: "",
          },
          {
            optionProperty: "Кондиционер",
            optionPropertyNumber: "",
          },
        ],
      },
      {
        title: "Сон",
        optionList: [
          {
            optionProperty: "Двуспальная кровать:",
            optionPropertyNumber: "1",
          },
          {
            optionProperty: "Постельные принадлежности: ",
            optionPropertyNumber: "2",
          },
        ],
      },
      {
        title: "Удобства",
        optionList: [
          {
            optionProperty: "Ванная комната:",
            optionPropertyNumber: "В номере",
          },
          {
            optionProperty: "Туалет:",
            optionPropertyNumber: "В номере",
          },
          {
            optionProperty: "Душевая кабина",
            optionPropertyNumber: "",
          },
          {
            optionProperty: "Полотенца",
            optionPropertyNumber: "",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    imageArr: [
      "https://rus-et.ru/wp-content/uploads/2020/11/dom-na-holme.jpg",
      "https://www.ccnova.ru/upload/resize_cache/iblock/3ab/800_500_0/zagorodnyj_dom_v_stile_shale_s_dvuskatnoj_krovlej.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfa7RoC7For7yMf7bHZhKCYhzOSPlCE3MLtA&usqp=CAU",
      "https://realnoevremya.ru/uploads/articles/fb/1f/bdc22ce193fd0dc1.jpg",
      "https://klike.net/uploads/posts/2020-01/1579858769_1.jpg",
    ],
    guests: 3,
    beds: 3,
    rooms: 1,
    vanns: 1,
    square: 9,
    price: 1600,
    options: [
      {
        title: "О номере",
        optionList: [
          {
            optionProperty: "Вид из окна:",
            optionPropertyNumber: "Горы,сад",
          },
          {
            optionProperty: "Интернет Wi-Fi",
            optionPropertyNumber: "",
          },
          {
            optionProperty:
              "Небольшой двухместный номер с отдельным входом и с видом на горы.",
            optionPropertyNumber: "",
          },
        ],
      },
      {
        title: "В комнате",
        optionList: [
          {
            optionProperty: "ЖК-телевизор",
            optionPropertyNumber: "",
          },
          {
            optionProperty: "Кабельное ТВ",
            optionPropertyNumber: "",
          },
          {
            optionProperty: "Кондиционер",
            optionPropertyNumber: "",
          },
        ],
      },
      {
        title: "Сон",
        optionList: [
          {
            optionProperty: "Двуспальная кровать:",
            optionPropertyNumber: "1",
          },
          {
            optionProperty: "Постельные принадлежности: ",
            optionPropertyNumber: "2",
          },
        ],
      },
      {
        title: "Удобства",
        optionList: [
          {
            optionProperty: "Ванная комната:",
            optionPropertyNumber: "В номере",
          },
          {
            optionProperty: "Туалет:",
            optionPropertyNumber: "В номере",
          },
          {
            optionProperty: "Душевая кабина",
            optionPropertyNumber: "",
          },
          {
            optionProperty: "Полотенца",
            optionPropertyNumber: "",
          },
        ],
      },
    ],
  },
];

const HotelNumber = () => {
  const [ourDateInForm, changeOurDateInForm] = useState("21 мая 2022 года");
  const [ourDateInForm2, changeOurDateInForm2] = useState("21 мая 2022 года");
  const [passengersModalWindow, tongleModalPassengers] = useState(false);

  const [calendarValue, onChangeCalendar] = useState(new Date());
  const [calendarValue2, onChangeCalendar2] = useState(new Date());
  const [calendarModalWindow, tongleModalCalendar] = useState(false);
  const [calendarModalWindow2, tongleModalCalendar2] = useState(false);

  const [adult, changeAdult] = useState(0);
  const [children, changeChildren] = useState(0);
  const [babies, changeBabies] = useState(0);
  const [passengers, setPassengers] = useState("");

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

  const tongleModalData = () => {
    console.log(calendarValue);
    if (calendarModalWindow) {
      tongleModalCalendar(false);
    } else {
      tongleModalCalendar(true);
    }
  };

  const tongleModalData2 = () => {
    console.log(calendarValue2);
    if (calendarModalWindow2) {
      tongleModalCalendar2(false);
    } else {
      tongleModalCalendar2(true);
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

  const setPassengersInput = () => {
    setPassengers(`Взрослых ${adult}, детей ${children}, малышей ${babies}`);
    tongleModalPassengers(false);
  };

  const closeSubOptions = (id) => {
    let ourElement = document.getElementById(id);
    ourElement.classList.add("close-hotel-number-sub-options");
  };
  const seeSubOptions = (id) => {
    let ourElement = document.getElementById(id);
    ourElement.classList.remove("close-hotel-number-sub-options");
  };

  const upImageNumber = (id, numberOfElementInData) => {
    let ourElement = document.getElementById(id);

    let ourImage = ourElement.getElementsByClassName(
      "hotel-number__card-image"
    );
    let imageIndex = HotelNumberData[numberOfElementInData].imageArr.indexOf(
      ourImage[0].src
    );
    if (
      imageIndex <
      HotelNumberData[numberOfElementInData].imageArr.length - 1
    ) {
      ourImage[0].src =
        HotelNumberData[numberOfElementInData].imageArr[imageIndex + 1];
    } else {
      ourImage[0].src = HotelNumberData[numberOfElementInData].imageArr[0];
    }
  };

  const downImageNumber = (id, numberOfElementInData) => {
    let ourElement = document.getElementById(id);

    let ourImage = ourElement.getElementsByClassName(
      "hotel-number__card-image"
    );
    let imageIndex = HotelNumberData[numberOfElementInData].imageArr.indexOf(
      ourImage[0].src
    );
    if (imageIndex > 0) {
      ourImage[0].src =
        HotelNumberData[numberOfElementInData].imageArr[imageIndex - 1];
    } else {
      ourImage[0].src =
        HotelNumberData[numberOfElementInData].imageArr[
          HotelNumberData[numberOfElementInData].imageArr.length - 1
        ];
    }
  };

  return (
    <section className="hotel-number">
      <article className="hotel-number__title">
        <h3 className="hotel-number__title-text">Выбрать номер</h3>
        <p className="hotel-number__title-decoration"></p>
      </article>
      {/* Тело запроса*/}

      <article className="hotel-number__body">
        <section className="hotel-number__cards">
          {HotelNumberData.map((el) => (
            <article className="hotel-number__card-wrapper">
              <div className="hotel-number__card" id={el.imageArr[0]}>
                <img
                  className="hotel-number__card-image"
                  src={el.imageArr[0]}
                  alt="fon"
                />
                <div
                  className="hotel-number__card-arrow-left"
                  onClick={() => downImageNumber(el.imageArr[0], el.id)}
                >
                  <img
                    className="hotel-number__card-arrow-left-image"
                    src="../../images/arrow-left.svg"
                    alt=""
                    width="32"
                    height="32"
                  />
                </div>
                <div
                  className="hotel-number__card-arrow-right"
                  onClick={() => upImageNumber(el.imageArr[0], el.id)}
                >
                  <img
                    className="hotel-number__card-arrow-right-image"
                    src="../../images/arrow-left.svg"
                    alt=""
                    width="32"
                    height="32"
                  />
                </div>
                <div className="hotel-number__card-head">
                  <img
                    className="hotel-number__card-head-image"
                    src="../../images/hotel-number/!.svg"
                    alt="!"
                    width="3.78"
                    height="17.37"
                  />
                  <p className="hotel-number__card-head-text">
                    Остался 1 номер
                  </p>
                </div>
                <img
                  className="hotel-number__card-glass"
                  src="../../images/hotel-number/glass-+.svg"
                  alt="glass"
                  width="24"
                  height="24"
                />
                <div className="hotel-number__card-options">
                  <h5 className="hotel-number__card-options-title">
                    {el.title}
                  </h5>
                  <section className="card-options__list">
                    <article className="card-options__list-item">
                      <div className="card-options__list-item-image-number">
                        <div className="list-item-image-number__image-wrapper">
                          <img
                            className="list-item-image-number__image"
                            src="../../images/hotel-number/login.svg"
                            alt="login"
                          />
                        </div>
                        <p className="list-item-image-number__number">
                          {el.guests}
                        </p>
                      </div>
                      <p className="list-item-image-number__text">Гостей</p>
                    </article>
                    <article className="card-options__list-item">
                      <div className="card-options__list-item-image-number">
                        <div className="list-item-image-number__image-wrapper">
                          <img
                            className="list-item-image-number__image"
                            src="../../images/hotel-number/beds.svg"
                            alt="login"
                          />
                        </div>
                        <p className="list-item-image-number__number">
                          ×{el.beds}
                        </p>
                      </div>
                      <p className="list-item-image-number__text">Кроватей</p>
                    </article>
                    <article className="card-options__list-item">
                      <div className="card-options__list-item-image-number">
                        <div className="list-item-image-number__image-wrapper">
                          <img
                            className="list-item-image-number__image"
                            src="../../images/hotel-number/rooms.svg"
                            alt="rooms"
                          />
                        </div>
                        <p className="list-item-image-number__number">
                          ×{el.rooms}
                        </p>
                      </div>
                      <p className="list-item-image-number__text">Комнат</p>
                    </article>
                    <article className="card-options__list-item">
                      <div className="card-options__list-item-image-number">
                        <div className="list-item-image-number__image-wrapper">
                          <img
                            className="list-item-image-number__image"
                            src="../../images/hotel-number/vanns.svg"
                            alt="vanns"
                          />
                        </div>
                        <p className="list-item-image-number__number">
                          ×{el.vanns}
                        </p>
                      </div>
                      <p className="list-item-image-number__text">Ванн</p>
                    </article>
                    <article className="card-options__list-item">
                      <div className="card-options__list-item-image-number">
                        <div className="list-item-image-number__image-wrapper">
                          <img
                            className="list-item-image-number__image"
                            src="../../images/hotel-number/square.svg"
                            alt="login"
                          />
                        </div>
                        <p className="list-item-image-number__number">
                          {el.square} м
                          <sup className="list-item-image-number__number-sup">
                            2
                          </sup>
                        </p>
                      </div>
                      <p className="list-item-image-number__text">Площадь</p>
                    </article>
                  </section>
                  <section className="card-options__danger-and-price">
                    <p className="card-options__danger">
                      Укажите дату заезда и выезда
                    </p>
                    <p className="card-options__price">{el.price}₽ сутки</p>
                  </section>
                  <div className="card-options__jcsb">
                    <p className="card-options__reserve">Забронировать</p>
                    <p
                      className="card-options__about-number"
                      onClick={() => seeSubOptions(el.imageArr[1])}
                    >
                      Подробнее о номере
                    </p>
                  </div>
                </div>
                
              </div>
              <div
                className="hotel-number__card-sub-options-wrapper close-hotel-number-sub-options"
                id={el.imageArr[1]}
              >
                <div className="hotel-number__card-sub-options">
                  <div className="hotel-number__sub-flex">
                    {el.options.map((option) => (
                      <div className="hotel-number__card-option">
                        <h5 className="hotel-number__card-option-title">
                          {option.title}
                        </h5>
                        {option.optionList.map((el) => (
                          <div className="card-option__property-item">
                            <p className="card-option__property">
                              {el.optionProperty}
                            </p>
                            <p className="card-option__property-number">
                              {el.optionPropertyNumber}
                            </p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <p
                    className="card-sub-options__close"
                    onClick={() => closeSubOptions(el.imageArr[1])}
                  >
                    Свернуть
                  </p>
                </div>
                
              </div>
            </article>
          ))}
        </section>

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
                  <Calendar onChange={onChangeCalendar} value={calendarValue} />
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
          <div className="transfer-booking__form-item">
            <p className="transfer-booking__form-top-text">Пассажиры</p>
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
              value="Рассчитать стоимость"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default HotelNumber;
