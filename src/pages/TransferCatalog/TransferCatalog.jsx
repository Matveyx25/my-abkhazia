import React, { useState } from "react";
import "./TransferCatalog.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link, NavLink } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Navigation from "../../components/Navigation/Navigation";
import { Modal } from "../../components/Modal/Modal";
import Radio from "../../components/Radio/Radio";

const CheckDataZaglushka = {
  secondLink: "/transfer",
  secondLinkText: "Трансфер",
  thirdLink: "/transfer-automobile",
  thirdLinkText: "Выбор трансфера",
  offer: "Заказ №12",
  mainImage: "../../images/check/item--6.jpg",
  title: "Автомобиль эконом класса",
  subTitle: "Компания, индивидуальный",
  address: "Новый Афон, ул Харазия 2",
  startEnd: [
    {
      title: "Откуда",
      text: "Аэропорт Сочи , номер рейса №6545",
    },
    {
      title: "Куда",
      text: "г. Гагры, улица и дом",
    },
    {
      title: "Дата и время забора",
      text: "16 мая, пн., в 8:00",
    },
    {
      title: "Обратная поездка, дата и время",
      text: "28 мая, пн., в 20:00",
    },
  ],
  blueLabel: [
    {
      number: 1,
      text: "Детей",
    },
    {
      number: 2,
      text: "Взрослых",
    },
  ],
  price: [
    {
      text: "Стоимость в одну сторону:",
      number: "1 500₽ ",
    },
    {
      text: "Детское кресло:",
      number: "300₽",
    },
    {
      text: "Итого:",
      number: "3 600₽",
    },
  ],
  payAll: true,
  isRestaurant: false,
  isTransfer: true,
  danger: "",
  dangerAll: "Оплата 100%",
  reservationPayText: "",
  reservationPayTextAll: "Оплата:",
  reservationPay: "",
  reservationPayAll: "3 600₽",
  ownerPay: "",
  submitText: "",
  submitTextAll: "Оплатить",
};

const TransferCatalog = () => {
  const [babyChair, changeChairNubmer] = useState(0);
  const [booster, changeBooster] = useState(0);
  const [countdown, changeCountdown] = useState(false);
  const [timeChoise, changeTime] = useState("12:00");
  const [timeModalWindow, tongleModalTime] = useState(false);
  const [searchDataAndTimeWindow, tongleTimeDataWindow] = useState(true);

  const [calendarValue, onChangeCalendar] = useState(new Date());
  const [calendarModalWindow, tongleModalCalendar] = useState(false);
  const [ourDateInForm, changeOurDateInForm] = useState("21 мая 2022 года");
  
  const [payed, setPayed] = useState(false);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [payPercent, setPayPercent] = useState("");
  const [payType, setPayType] = useState();
  const [balanced, setBalanced] = useState();

  const addChair = () => {
    let ourNumber = babyChair;
    changeChairNubmer(ourNumber + 1);
  };
  const addBooster = () => {
    let ourNumber = booster;
    changeBooster(ourNumber + 1);
  };
  const deleteChair = () => {
    let ourNumber = babyChair;
    if (ourNumber > 0) {
      changeChairNubmer(ourNumber - 1);
    }
  };
  const deleteBooster = () => {
    let ourNumber = booster;
    if (ourNumber > 0) {
      changeBooster(ourNumber - 1);
    }
  };

  const tongleCountdown = () => {
    if (countdown) {
      changeCountdown(false);
    } else {
      changeCountdown(true);
    }
  };

  const changeDataInput = (e) => {
    let our = e.target.attributes["aria-label"].value;
    console.log(our);
    changeOurDateInForm(String(our));
  };

  const changeTimeLocal = (e) => {
    changeTime(e.target.value);
  };

  const tongleTime = () => {
    if (timeModalWindow) {
      tongleModalTime(false);
    } else {
      tongleModalTime(true);
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

  const upTime = () => {
    let newTime = timeChoise.split(":");
    let minutes = Number(newTime[1]) + 1;
    let hours = Number(newTime[0]);
    let resultHours = "";
    let resultMinutes = "";
    if (minutes > 59) {
      minutes = "00";
      hours = hours + 1;
    } else if (hours > 23) {
      hours = "00";
    }
    resultHours = hours;
    resultMinutes = minutes;

    if (Number(hours) < 10) {
      resultHours = "0" + String(hours);
    } else if (Number(minutes) < 10) {
      resultMinutes = "0" + String(minutes);
    }
    if (resultMinutes === "000") {
      resultMinutes = "00";
    } else if (resultHours === "000") {
      resultHours = "00";
    }
    changeTime(`${resultHours}:${resultMinutes}`);
    console.log(timeChoise);
  };
  const downTime = () => {
    let newTime = timeChoise.split(":");
    let minutes = Number(newTime[1]) - 1;
    let hours = Number(newTime[0]);
    let resultHours = "";
    let resultMinutes = "";
    if (minutes < 0) {
      minutes = "59";
      hours = hours - 1;
    } else if (hours < 0) {
      hours = "23";
    }
    resultHours = hours;
    resultMinutes = minutes;
    if (Number(hours) < 10) {
      resultHours = "0" + String(hours);
    } else if (Number(minutes) < 10) {
      resultMinutes = "0" + String(minutes);
    }
    if (resultMinutes === "000") {
      resultMinutes = "00";
    } else if (resultHours === "000") {
      resultHours = "00";
    }
    changeTime(`${resultHours}:${resultMinutes}`);
    console.log(timeChoise);
  };

  return (
    <div className="transfer-catalog">
      <Modal visible={modal} onClose={() => setModal(false)}>
        <h1 className="ballance-page__title">Условия оплаты</h1>
        <div className="ballance-page__modal-content">
          <p>Выберите условия оплаты:</p>
          <Radio
            labelText="20% от всей суммы за бронь"
            inputId="20percent"
            inputValue="20% от всей суммы за бронь"
            inputName="balance"
            checked={payPercent == "20% от всей суммы за бронь"}
            changeFunction={(event) => setPayPercent(event.target.value)}
          />
          <Radio
            labelText="100% оплата"
            inputId="100percent"
            inputValue="100% оплата"
            inputName="balance"
            checked={payPercent == "100% оплата"}
            changeFunction={(event) => setPayPercent(event.target.value)}
          />
          <div className="account-page__row-30">
            <button
              className="account-page__btn"
              onClick={() => {
                setModal(false)
                setModal2(true)
              }}
            >
              К оплате
            </button>
            <button
              className="account-page__btn-outline"
              onClick={() => setModal(false)}
            >
              Написать владельцу
            </button>
          </div>
          <p className="ballance-page__modal-small-text">
            * Если у вас есть вопросы или вы хоите заплатить владельцу напрямую,
            нажмите на нопку “Написать владельцу”.
            <br />
            <br />
            Но МОЯ АБХАЗИЯ не несет ответсвенность за переводы вне системы.
          </p>
        </div>
      </Modal>
      <Modal visible={modal2} onClose={() => setModal2(false)}>
          {!balanced ?<>
            <h1 className="ballance-page__title">{
          payPercent.includes('100%') ?  "Оплата" : "Оплата брони"
        }</h1>
        <div className="ballance-page__modal-content">
          <p>Выберите подходящий Вам способ оплаты:</p>
           <p>
          Выберите подходящий Вам способ, чтобы пополнить кошелек:
        </p>
        <Radio labelText="Картой онлайн на сайте" inputId="insite" inputValue="Картой онлайн на сайте" inputName="balance" checked={payType == 'Картой онлайн на сайте'} changeFunction={event => setPayType(event.target.value)}/>
        <Radio labelText="Прикрепленной картой" inputId="outsite" inputValue="Прикрепленной картой" inputName="balance" checked={payType == 'Прикрепленной картой'} changeFunction={event => setPayType(event.target.value)}/>
         {payType == 'Прикрепленной картой' && <div className="ballance-page__card-radios">
              <Radio labelText={<div className="account-page__wallet-card">
                <div className="account-page__jcsb">
                  <div>
                    <h2>Номер карты</h2>
                    <p>220220******9127</p>
                  </div>
                  <div>
                    <h2>Срок карты</h2>
                    <p>09/24</p>
                  </div>
                </div>
                <img src="/images/mir-card.svg"/>
              </div>} inputId="mircard" inputValue="MIR" inputName="cards"/>
              <Radio labelText={<div className="account-page__wallet-card">
                <div className="account-page__jcsb">
                  <div>
                    <h2>Номер карты</h2>
                    <p>220220******9127</p>
                  </div>
                  <div>
                    <h2>Срок карты</h2>
                    <p>09/24</p>
                  </div>
                </div>
                <img src="/images/mastercard_payment.svg"/>
              </div>} inputId="master" inputValue="mastercard" inputName="cards"/>
         </div>}
        <Radio labelText="Встроенный кошелек" inputId="wallet" inputValue="Встроенный кошелек" inputName="balance" checked={payType == 'Встроенный кошелек'} changeFunction={event => setPayType(event.target.value)}/>
          <button className="account-page__btn-100" onClick={() => {
            setBalanced(true)
            setPayed(true)
            }}>Оплатить</button>
        </div></> :
        <>
        <h1 className="ballance-page__title">Спасибо!</h1>
        <div className="ballance-page__modal-content">
          <p className="ballance-page__center-text">
              Ваш заказ оплачен!
              <br/>
              <br/>
              Вся информация о вашем заказе есть в Вашем личном кабинете. Так же Вам на почту придет сообщение с чеком и информацией о заказе.
          </p>
          <div className="account-page__row-30">
            <button className="account-page__btn" onClick={() => {
              setModal2(false)
              setBalanced(false)}}>На сайт</button>
            <button className="account-page__btn" onClick={() => {
              setModal2(false)
              setBalanced(false)
              }}>В личный кабинет</button>
          </div>
       </div>
       </> 
        }
      </Modal>
      <Header wallet={true} closeEmail={true} />
      <Navigation active="transfer" />
      <section className="transfer-catalog__go-back">
        <Link className="transfer-catalog__go-back-link" to="/">
          <img
            className="transfer-catalog__go-back-image"
            src="../../images/left.svg"
            width="24"
            height="24"
            alt=""
          />
          <p className="transfer-catalog__go-back-text">Назад</p>
        </Link>
      </section>
      {payed ? 
      <>
      <section className="transfer-catalog__stages-of-registration">
        <p className="stages-of-registration__number">1</p>
        <p className="stages-of-registration__text-active">Оформление заказа</p>
        <img src="/images/done.svg" alt="" className="stages-of-registration__img"/>
        <div className="stages-of-registration__decoration-fill"></div>
        <p className="stages-of-registration__number stages-of-registration__number">
          2
        </p>
        <p className="stages-of-registration__text stages-of-registration__text">
          Оплата
        </p>
      </section>
      <section className="hotel-number calendar">
        <article className="calendar__title-wraper">
          <h5 className="calendar__title">Проверьте все данные и оплатите</h5>
          <p className="calendar__decoration"></p>
        </article>
      </section>
      <section className="hotel-number check-data__wrapper">
        <article className="check-data__left-sidebar">
          <div className="check-data__cards">
            <div className="check-data__card">
              <div className="image-wrapper">
                <img
                  src="../../images/check/card.svg"
                  alt="card"
                  width="34"
                  height="25"
                />
              </div>

              <h5 className="check-data__card-title">
                Оплата онлайн на сайте{" "}
              </h5>
              <p className="check-data__card-text">
                Вы можете оплатить картой любого банка. Мы принимаем карты Visa,
                MasterCard, Мир.
              </p>
              <p className="check-data__card-sub-text">
                * Вы можете оплатить встроеным кошельком, если вы пополнили
                баланс или картой, котороуй вы сохранили. Деньги списываются с
                баланса аккаунта или карты и блокируются системой до завершения
                бронирования.
              </p>
            </div>
            <div className="check-data__card">
              <div className="image-wrapper">
                <img
                  src="../../images/check/protection.svg"
                  alt="card"
                  width="32.5"
                  height="38.5"
                />
              </div>

              <h5 className="check-data__card-title">
                Бесплатная отмена бронирования
              </h5>
              <p className="check-data__card-text">
                Если при заселении номер не будет соответствовать описанию и
                фото, вы сможете отменить бронирование. Деньги вернутся вам на
                ваш встроеный кошелек на сайте. Потом вы сможете оплатить любую
                другую услугу на ваш выбор.{" "}
              </p>
              <p className="check-data__card-link">
                Условия отмены бронирования
              </p>
            </div>
          </div>
          <div className="check-data__card-blue-block">
            <div className="check-data__card-blue-item">
              <img
                src="../../images/check/!.svg"
                alt="!"
                width="3.7"
                height="17.4"
              />
              <p className="check-data__card-blue-item-text">
                Все платежи безопасны и просходят по защищенному каналу
              </p>
            </div>
            <div className="check-data__card-blue-item">
              <img
                src="../../images/check/!.svg"
                alt="!"
                width="3.7"
                height="17.4"
              />
              <p className="check-data__card-blue-item-text">
                Данные ваши краты не передадутся третьим лицам
              </p>
            </div>
          </div>
        </article>

        <article className="check-data__check-block">
          <h5 className="check-data__check-block-title">
            {CheckDataZaglushka.offer}
          </h5>
          <img
            className="check-data__check-block-main-image"
            src={CheckDataZaglushka.mainImage}
            alt=""
            width="310"
            height="190"
          />
          <p className="check-block__card-name">{CheckDataZaglushka.title}</p>
          <p className="check-block__card-type">
            {CheckDataZaglushka.subTitle}
          </p>
          {!CheckDataZaglushka.isTransfer && (
            <div className="check-block__card-sub-text-wrapper">
              <img
                className="check-block__card-sub"
                src="../../images/check/point.svg"
                alt=""
                width="12.4"
                height="15.8"
              />
              <p className="check-block__card-sub-text">
                {CheckDataZaglushka.address}
              </p>
            </div>
          )}
          <section className="check-block__zaezd-i-viezd">
            {CheckDataZaglushka.startEnd.map((el) => (
              <article
                className={
                  CheckDataZaglushka.isTransfer
                    ? "check-block__zaezd-i-viezd-item  check-block__zaezd-i-viezd-item--transfer"
                    : "check-block__zaezd-i-viezd-item"
                }
              >
                <h5 className="zaezd-i-viezd-item__title">{el.title}</h5>
                <p className="zaezd-i-viezd-item__text">{el.text}</p>
              </article>
            ))}
          </section>
          <section className="check-block__blue-label">
            {CheckDataZaglushka.blueLabel.map((row) => (
              <article className="check-block__blue-label-item">
                <p className="blue-label-item__number">{row.number}</p>
                <p className="blue-label-item__text">{row.text}</p>
              </article>
            ))}
          </section>
          {!CheckDataZaglushka.isRestaurant && (
            <section className="check-block__price">
              {CheckDataZaglushka.price.map((cost) => (
                <article className="check-block__price-item">
                  <p className="check-block__price-item-text">{cost.text}</p>
                  <p className="check-block__price-item-number">
                    {cost.number}
                  </p>
                </article>
              ))}
            </section>
          )}

          <section className="check-block__end-block">
            <p className="end-block__danger">
              {CheckDataZaglushka.payAll
                ? CheckDataZaglushka.dangerAll
                : CheckDataZaglushka.danger}
            </p>
            <article className="end-block__wrapper-price">
              <div className="wrapper-price__item">
                <p className="wrapper-price__item-title">
                  {CheckDataZaglushka.payAll
                    ? CheckDataZaglushka.reservationPayTextAll
                    : CheckDataZaglushka.reservationPayText}
                </p>
                <p className="wrapper-price__item-number">
                  {CheckDataZaglushka.payAll
                    ? CheckDataZaglushka.reservationPayAll
                    : CheckDataZaglushka.reservationPay}
                </p>
              </div>
              {!CheckDataZaglushka.payAll && (
                <div className="wrapper-price__item">
                  <p className="wrapper-price__item-title">Оплата владельцу:</p>
                  <p className="wrapper-price__item-number wrapper-price__item-number--owner">
                    {CheckDataZaglushka.ownerPay}
                  </p>
                </div>
              )}
            </article>
            <p
              className="end-block__pay"
            >
              {CheckDataZaglushka.payAll
                ? CheckDataZaglushka.submitTextAll
                : CheckDataZaglushka.submitText}
            </p>
          </section>
        </article>
      </section>
      </> : <>
      <section className="transfer-catalog__stages-of-registration">
        <p className="stages-of-registration__number">1</p>
        <p className="stages-of-registration__text">Оформление заказа</p>
        <div className="stages-of-registration__decoration"></div>
        <p className="stages-of-registration__number stages-of-registration__number--non-active">
          2
        </p>
        <p className="stages-of-registration__text stages-of-registration__text__number--non-active">
          Оплата
        </p>
      </section>
      <section className="transfer-catalog__order">
        <article className="transfer-catalog__order-data">
          <p className="transfer-order__message">
            {" "}
            <img
              className="transfer-catalog__order-data--absolute"
              src="../../images/transfer/!.svg"
              width="3.78"
              height="17.37"
            />
            Маршрут предусматривает пересечение границы Абхазии с Россией.
            Обратите внимание, что переход границы может занять от 30 минут до 4
            часов в зависимости от загруженности КПП. Трансфер осуществляется на
            одном автомобиле, без смены на границе.
          </p>
          <div className="transfer-catalog__order-title-wrapper">
            <p className="order-title-wrapper__text">
              Данные вашего бронирования
            </p>
            <p className="order-title-wrapper__decoration"></p>
          </div>
          <section className="transfer-catalog__booking">
            <article className="transfer-catalog__booking-wrapper">
              <p className="booking-to__time">Время в пути ~ 2 часа</p>
              <div className="transfer-catalog__booking-to">
                <p className="booking-to__description">От</p>
                <p className="booking-to__place">Аэропорт Сочи</p>
                <input
                  type="text"
                  className="booking-to__ticket"
                  placeholder="Номер рейса прилета, как указано в билете"
                />
              </div>
              <div className="transfer-catalog__booking-to">
                <p className="booking-to__description">До</p>
                <p className="booking-to__place">Гагра</p>
                <input
                  type="text"
                  className="booking-to__ticket"
                  placeholder="Адрес или название отеля"
                />
                <p className="transfer-catalog__booking-to-passengers">
                  2 взрослых пассажира, 21 мая, сб., в 12:00.{" "}
                </p>
              </div>
            </article>
            <article className="transfer-catalog__back">
              <div className="transfer-catalog__back-timer">
                <p className="back-timer__text">Обратный трансфер</p>
                <div
                  className={
                    countdown
                      ? "back-timer__tongler"
                      : "back-timer__tongler back-timer__tongler--non-active"
                  }
                  onClick={() => tongleCountdown()}
                >
                  <div className="back-timer__tongler-circle"></div>
                </div>
              </div>
              {countdown && (
                <div>
                  <div className="transfer-catalog__booking-to">
                    <p className="booking-to__description">От</p>
                    <p className="booking-to__place">Гагра</p>
                  </div>
                  <div className="transfer-catalog__booking-to">
                    <p className="booking-to__description">До</p>
                    <p className="booking-to__place">Аэропорт Сочи</p>
                    {/* <p className="transfer-catalog__booking-to-passengers">
                      2 взрослых пассажира, 21 мая, сб., в 12:00.{" "}
                    </p> */}
                  </div>
                  {/* Тут еще одно окно*/}
                  {searchDataAndTimeWindow && (
                    <div>
                      <p className="transfer-catalog__time-and-date">
                        Выберите время и дату:
                      </p>
                      <div className="transfer-catalog__where-is-panel">
                        <div
                          className="transfer-booking__form-item transfer-catalog__item"
                          onClick={() => tongleModalData()}
                        >
                          <img
                            className="transfer-booking__form-image transfer-booking__form-image--calendar"
                            src="../../images/transfer/calendar.svg"
                            width="13.5"
                            height="15"
                          />
                          <p className="transfer-booking__form-search transfer-booking__form-search--data">
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
                        </div>
                        <div className="transfer-booking__form-item transfer-booking__form-item--time transfer-catalog__item">
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
                              />
                              <div className="sub-menu__timer-image"></div>
                              <div
                                className="sub-menu__timer-arrow-down"
                                onClick={() => downTime()}
                              ></div>
                              <div
                                className="sub-menu__timer-arrow-up"
                                onClick={() => upTime()}
                              ></div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </article>
          </section>
          <div>
            <div className="transfer-catalog__order-title-wrapper">
              <p className="order-title-wrapper__text">Контакты пассажира</p>
              <p className="order-title-wrapper__decoration"></p>
            </div>
            <p className="transfer-catalog__contacts">
              Андреева Анастасия{" "}
              <img
                className="transfer-catalog__contacts-image"
                src="../../images/transfer/galk.svg"
                alt="galk"
                width="11.5"
                height="11"
              />
            </p>
            <p className="transfer-catalog__contacts">
              nastenarodionova1993@mail.ru{" "}
              <img
                className="transfer-catalog__contacts-image"
                src="../../images/transfer/galk.svg"
                alt="galk"
                width="11.5"
                height="11"
              />
            </p>
            <p className="transfer-catalog__contacts">
              +7 (927) 655-45-24{" "}
              <img
                className="transfer-catalog__contacts-image"
                src="../../images/transfer/galk.svg"
                alt="galk"
                width="11.5"
                height="11"
              />
            </p>
            <p className="transfer-catalog__alert-message">
              Заполнив данные вы соглашаетесь с{" "}
              <span className="transfer-catalog__underline">
                Политикой конфиденциальности
              </span>{" "}
            </p>
          </div>

          <div className="transfer-catalog__order-title-wrapper">
            <p className="order-title-wrapper__text">Дополнительные услуги</p>
            <p className="order-title-wrapper__decoration"></p>
          </div>
          <div>
            <div className="transfer-catalog__calculator-block">
              <div>
                <h5 className="calculator-block__title">Детское кресло</h5>
                <p className="calculator-block__weight">Вес: 9–18 кг</p>
                <p className="calculator-block__price">300₽ </p>
              </div>
              <div className="transfer-catalog__calculator">
                <p
                  className="person-sub-menu__minus"
                  onClick={() => deleteChair()}
                >
                  <p className="minus"></p>
                </p>
                <p className="person-sub-menu__counter">{babyChair}</p>
                <p className="person-sub-menu__plus" onClick={() => addChair()}>
                  +
                </p>
              </div>
            </div>
            <div className="transfer-catalog__calculator-block">
              <div>
                <h5 className="calculator-block__title">Бустер</h5>
                <p className="calculator-block__weight">Вес: 15–36 кг</p>
                <p className="calculator-block__price">300₽ </p>
              </div>
              <div className="transfer-catalog__calculator">
                <p
                  className="person-sub-menu__minus"
                  onClick={() => deleteBooster()}
                >
                  <p className="minus"></p>
                </p>
                <p className="person-sub-menu__counter">{booster}</p>
                <p
                  className="person-sub-menu__plus"
                  onClick={() => addBooster()}
                >
                  +
                </p>
              </div>
            </div>
          </div>
        </article>
        <article className="transfer-catalog__order-check">
          <h5 className="order-check__title">Заказ №234</h5>
          <div className="order-check__auto">
            <img
              className="order-check__auto-image"
              src="../../images/transfer/car.svg"
              alt="car"
              width="20.8"
              height="16.8"
            />
            <p className="order-check__auto-type">Автомобиль эконом класса</p>
            <p className="order-check__auto-passengers">
              4 пассажира, 3 багажных места
            </p>
          </div>
          <div className="order-check__way-wrapper">
            <div className="order-check__way-where-and-price">
              <p className="order-check__way-where">Аэропорт Сочи - Гагра</p>
              <p className="order-check__way-price">1 500₽ </p>
            </div>
            <p className="order-check__way-direction">В одну сторону</p>
          </div>
          <div className="order-check__way-wrapper">
            <div className="order-check__way-where-and-price">
              <p className="order-check__way-where">Гагра- Аэропорт Сочи</p>
              <p className="order-check__way-price">1 500₽ </p>
            </div>
            <p className="order-check__way-direction">Обратно</p>
          </div>
          <div className="order-check__total">
            <p className="order-check__auto-type order-check__result">Итого:</p>
            <p className="order-check__price">3 000₽ </p>
            <p className="order-check__submit" onClick={() => setModal(true)}>
              Забронировать
            </p>
          </div>
        </article>
      </section></>}
      <Footer />
    </div>
  );
};

export default TransferCatalog;
