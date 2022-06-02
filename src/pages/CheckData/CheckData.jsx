import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import "./CheckData.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { tabsListUnstyledClasses } from "@mui/base";
import Radio from "../../components/Radio/Radio";

/* Hotel Card  с бронированием и полностью */
{
  /*
const CheckDataZaglushka = {
  secondLink: "/housing-catalog",
  secondLinkText: "Проживание",
  thirdLink: "/housing-card",
  thirdLinkText: "Отель у моря “Бамбучо”",
  offer: "Заказ №12",
    mainImage: "../../images/check/item--1.jpg",
  title: "Отель у моря “Бамбучо”, Бюджетный двухместный номер с 1 кроватью",
  subTitle: "Мини гостиница",
  address: "Абхазия, Пицунда, улица Речная 11а",
  startEnd: [
    {
      title: "Заезд",
      text: "16 апреля, чт.",
    },
    {
      title: "Выезд",
      text: "2 мая, пн.",
    },
  ],
  blueLabel: [
    {
      number: 16,
      text: "Ночей",
    },
    {
      number: 2,
      text: "Взрослых",
    },
  ],
  price: [
    {
      text: "Стоимость номера:",
      number: "1 600₽ сутки",
    },
    {
      text: "Итого:",
      number: "30 400₽ за 16 ночей",
    },
  ],
  payAll: true,
    isRestaurant: false,
  isTransfer: false,
  danger: "Оплата 20% от всей суммы",
  dangerAll: "Оплата 100%",
  reservationPayText: "Оплата за бронь:",
  reservationPayTextAll: "Оплата:",
  reservationPay: "6 080₽",
  reservationPayAll: "30 400₽ ",
  ownerPay: "24 320₽",
  submitText: "Оплатить бронь",
  submitTextAll: "Оплатить",
};
*/
}
/* Car Rent Card  с  */
{
  /*
const CheckDataZaglushka = {
  secondLink: "/car-rent",
  secondLinkText: "Аренда авто",
  thirdLink: "/car-card",
  thirdLinkText: "Audi Q5",
  offer: "Заказ №12",
  mainImage: "../../images/check/item--5.jpg",
  title: "Audi Q5",
  subTitle: "Audi",
  address: "Новый Афон, ул Харазия 2",
  startEnd: [
    {
      title: "Дата забора",
      text: "12 мая, чт.",
    },
    {
      title: "Дата возврата",
      text: "12 мая, чт.",
    },
    {
      title: "Время забора",
      text: "8:00",
    },
    {
      title: "Время возврата",
      text: "20:00",
    },
  ],
  blueLabel: [
    {
      number: 1,
      text: "Дни",
    },
    {
      number: 2,
      text: "Взрослых",
    },
  ],
  price: [
    {
      text: "Стоимость аренды в день:",
      number: "1 000₽",
    },
    {
      text: "Итого:",
      number: "1 000₽",
    },
  ],
  payAll: true,
  isRestaurant: false,
  isTransfer: false,
  danger: "",
  dangerAll: "Оплата только за бронь машины",
  reservationPayText: "",
  reservationPayTextAll: "Оплата за бронь:",
  reservationPay: "",
  reservationPayAll: "500₽",
  ownerPay: "",
  submitText: "",
  submitTextAll: "Оплатить бронь",
};
*/
}

/* Transfer  */

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

const PayCards = [
  {
    id: "мир",
    number: "220220******9127",
    date: "09/24",
    image: "../../images/check/world.svg",
  },
  {
    id: "visa",
    number: "220220******4527",
    date: "09/24",
    image: "../../images/check/visa.svg",
  },
];

const CheckData = () => {
  const [cardModal, changeVisiabilityCardModal] = useState(false);
  const [modalPayWindow, changeVisiabilityPayWindow] = useState(false);
  const [modalThankWindow, changeVisiabilityThankWindow] = useState(false);

  const modalCardClick = (payMethod) => {
    console.log(payMethod);
    if (payMethod == "card") {
      changeVisiabilityCardModal(true);
    } else {
      changeVisiabilityCardModal(false);
    }
  };

  const wePay = () => {
    changeVisiabilityPayWindow(false);
    changeVisiabilityThankWindow(true);
  };

  return (
    <div className="check-data">
      <Header />
      <Navigation />
      <section className="housing-catalog__page-way">
        <Link to="/" className="page-way__first">
          Главная
        </Link>
        <div className="page-way__decoration"></div>
        <Link
          className="page-way__second page-way__second--hover"
          to={CheckDataZaglushka.secondLink}
        >
          {CheckDataZaglushka.secondLinkText}
        </Link>
        <div className="page-way__decoration"></div>
        <Link
          className="page-way__second page-way__second--hover"
          to={CheckDataZaglushka.thirdLink}
        >
          {CheckDataZaglushka.thirdLinkText}
        </Link>
        <div className="page-way__decoration"></div>
        <p className="page-way__second">Оплата</p>
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
              onClick={() => changeVisiabilityPayWindow(true)}
            >
              {CheckDataZaglushka.payAll
                ? CheckDataZaglushka.submitTextAll
                : CheckDataZaglushka.submitText}
            </p>
          </section>
        </article>
      </section>

      <Footer form={true} />

      {modalPayWindow && (
        <section className="modal-pay">
          <article className="modal-pay__wrapper">
            <img
              className="modal-pay__close"
              src="../../images/check/close.svg"
              alt="close"
              width="28"
              height="28"
              onClick={() => changeVisiabilityPayWindow(false)}
            />
            <h5 className="modal-pay__title">Способ оплаты</h5>
            <p className="modal-pay__choise-text">
              Выберите подходящий Вам способ оплаты:
            </p>
            <form className="modal-pay__form" action="">
              <Radio
                inputName="pay"
                inputValue="online"
                inputId="pay__online"
                labelText="Картой онлайн на сайте"
                clickFunction={() => modalCardClick("online")}
              />
              <Radio
                inputName="pay"
                inputValue="card"
                inputId="pay__card"
                labelText="Прикрепленной картой"
                clickFunction={() => modalCardClick("card")}
              />
              {cardModal ? (
                <>
                  {PayCards.map((el) => (
                    <label
                      className="housing-catalog__housing-wrapper check-pay-card"
                      htmlFor={el.id}
                    >
                      <input
                        className="housing-catalog__housing-input"
                        type="radio"
                        name="card-reserve"
                        value={el.number}
                        id={el.id}
                      />
                      <div className="housing-catalog__housing-pseudo-radio"></div>
                      <div className="housing-catalog__housing-label check-pay-card__block">
                        <div className="check-pay-card__block-number-and-code">
                          <div className="block-number-and-code__number">
                            <p className="block-number-and-code__title">
                              Номер карты
                            </p>
                            <p className="block-number-and-code__number">
                              {el.number}
                            </p>
                          </div>
                          <div className="block-number-and-code__number block-number-and-code__date">
                            <p className="block-number-and-code__title">
                              Срок карты
                            </p>
                            <p className="block-number-and-code__number">
                              {el.date}
                            </p>
                          </div>
                        </div>

                        <img
                          className="type-of-card"
                          src={el.image}
                          alt="card"
                        />
                      </div>
                    </label>
                  ))}
                </>
              ) : (
                <></>
              )}
              <Radio
                inputName="pay"
                inputValue="wallet"
                inputId="pay__wallet"
                labelText="Встроенный кошелек"
                clickFunction={() => modalCardClick("wallet")}
              />
              <p className="modal-pay__submit" onClick={() => wePay()}>
                Оплатить
              </p>
            </form>
          </article>
        </section>
      )}
      {modalThankWindow && (
        <section className="modal-pay">
          <article className="modal-pay__wrapper">
            <img
              className="modal-pay__close"
              src="../../images/check/close.svg"
              alt="close"
              width="28"
              height="28"
              onClick={() => changeVisiabilityThankWindow(false)}
            />
            <h5 className="modal-pay__title">Спасибо!</h5>
            <p className="modal-pay__choise-text modal-pay__thanks-text">
              Ваш заказ оплачен!
            </p>
            <p className="modal-pay__thanks-text">
              Вся информация о вашем заказе есть в Вашем личном кабинете. Так же
              Вам на почту придет сообщение с чеком и информацией о заказе.
            </p>
            <div className="modal-pay__submit-wrapper">
              <Link
                to="/"
                className="modal-pay__submit"
                onClick={() => changeVisiabilityThankWindow(false)}
              >
                На сайт
              </Link>
              <p
                className="modal-pay__submit modal-pay__submit--white"
                onClick={() => changeVisiabilityThankWindow(false)}
              >
                В личный кабинет
              </p>
            </div>
          </article>
        </section>
      )}
    </div>
  );
};

export default CheckData;
