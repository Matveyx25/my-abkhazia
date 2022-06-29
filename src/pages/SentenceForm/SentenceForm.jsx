import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import "./SentenceForm.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal";

const SentenceForm = () => {
  const [checkedButton, changeChecked] = useState(true);
  const [modal, setModal] = useState(false);

  const tongleCheked = () => {
    if (checkedButton) {
      changeChecked(false);
    } else {
      changeChecked(true);
    }
  };

  return (
    <div className="sentence-form">
      <Modal visible={modal} onClose={() => setModal(false)}>
        <h1 className="ballance-page__title">Спасибо!</h1>
        <p className="ballance-page__center-text">
        Ваша заявка отправлена!
        <br />
        В ближайщее время мы с Вами свяжемся.
       </p>
       <div className="balance-page__btns">
         <button className="account-page__btn" onClick={() => setModal(false)}>На сайт</button>
       </div>
      </Modal>
      <Header />
      <Navigation />
      <section className="housing-catalog__page-way">
        <Link to="/" className="page-way__first">
          Главная
        </Link>
        <div className="page-way__decoration"></div>
        <p className="page-way__second page-way__second--hover">
          Форма для предложений
        </p>
      </section>
      <section className="hotel-number form">
        <article className="calendar__title-wraper">
          <h5 className="calendar__title">Форма для предложений</h5>
          <p className="calendar__decoration"></p>
        </article>
        <form className="sentence-form__body" action="">
          <p className="sentence-form__text">
            Если у Вас есть предложение о сотрудничестве, то отправьте его нам ,
            мы рассмотрим и свяжемся с Вами в ближайшее время.
          </p>
          <label className="sentence-form__title" htmlFor="sentence__form-name">
            Имя*
          </label>
          <input
            class="form-body__name input-form__wrapper"
            id="sentence__form-name"
            type="text"
            placeholder="Введите Ваше имя"
            required
          ></input>
          <label
            className="sentence-form__title"
            htmlFor="sentence__form-email"
          >
            E-mail*
          </label>
          <input
            class="form-body__name input-form__wrapper"
            id="sentence__form-email"
            type="email"
            placeholder="Введите адрес электронной почты"
            required
          />
          <div className="sentence-form__half">
            <div className="sentence-form__half-wrapper">
              <label
                className="sentence-form__title"
                htmlFor="sentence__form-country"
              >
                Страна*
              </label>
              <input
                class="form-body__name input-form__wrapper"
                id="sentence__form-country"
                type="text"
                placeholder="Россия"
                required
              />
            </div>
            <div className="sentence-form__half-wrapper">
              <label
                className="sentence-form__title"
                htmlFor="sentence__form-phone-number"
              >
                Номер телефона*
              </label>
              <input
                class="form-body__name input-form__wrapper"
                id="sentence__form-phone-number"
                type="tel"
                placeholder="+7 (000) 000-00-00"
                required
              />
            </div>
          </div>
          <label
            className="sentence-form__title"
            htmlFor="sentence__form-message"
          >
            Ваше предложение*
          </label>
          <textarea
            class="form-body__name input-form__wrapper input-form__wrapper--your-question"
            id="sentence__form-message"
            type="text"
            placeholder="Введите текст Вашего предложеня"
            required
          />
          <input
            class="form-body__submit"
            type="submit"
            value="Отправить"
            onClick={() => setModal(true)}
          ></input>
          <div className="form-body__checkbox-wrapper">
            {checkedButton == true ? (
              <input
                className="form-body__checkbox"
                type="checkbox"
                id="footer-checkbox-input"
                required
                checked
              />
            ) : (
              <input
                className="form-body__checkbox"
                type="checkbox"
                id="footer-checkbox-input"
                required
              />
            )}
            <label
              className="form-body__checkbox-label"
              htmlFor="footer-checkbox-input"
              onClick={() => tongleCheked()}
            >
              <div className="footer-checkbox__box"></div>
              <p className="footer-checkbox__text sentence-form__title">
                Нажимая на кнопку, я соглашаюсь с{" "}
                <a className="form-body__checkbox-link" href="#">
                  Условиями
                </a>{" "}
                и{" "}
                <a className="form-body__checkbox-link" href="#">
                  Политикой конфиденциальности
                </a>
              </p>
            </label>
          </div>
          <p className="sentence-form__title">
            * Поля обязательны для заполнения
          </p>
        </form>
      </section>

      <Footer form={true} />
    </div>
  );
};

export default SentenceForm;
