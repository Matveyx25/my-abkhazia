import React, { useState } from "react";
import "./Footer.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Footer = ({ form }) => {
  const [checkedButton, changeChecked] = useState(true);

  const tongleCheked = () => {
    if (checkedButton) {
      changeChecked(false);
    } else {
      changeChecked(true);
    }
  };



  return (
    <div className="footer">
      {form == true ? (
        <></>
      ) : (
        <section className="footer__form">
          <h2 className="footer__form-title">
            Есть вопросы
            <br className="footer__form-title-br" />
            по отдыху в Абхазии?
          </h2>
          <p className="footer__form-message">
            Задайте их нам, заполнив форму:
          </p>
          <form action="" className="footer__form-body">
            <div className="form-body__name-and-email">
              <input
                className="form-body__name"
                type="text"
                placeholder="Имя"
              />
              <input
                className="form-body__email"
                type="email"
                placeholder="Email"
              />
            </div>
            <textarea
              className="form-body__question"
              type="text"
              placeholder="Напишите свой вопрос"
            />
            <input
              className={
                checkedButton == true
                  ? "form-body__submit"
                  : "form-body__submit form-body__submit--disabled "
              }
              type="submit"
              value="Отправить"
            />
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
                <p className="footer-checkbox__text">
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
          </form>
        </section>
      )}

      <section className="footer__link-list">
        <article className="link-list__logo-and-social">
          <div className="logo-and-social__wrapper">
            <img
              className="header__logo-image"
              src="../images/logo-color.svg"
              alt="header-logo-image"
              width="118"
              height="74"
            />
            {/*
                  <div className="logo-and-social__logo"></div>
            <div className="logo-and-social__text"></div>
      */}
          </div>
          <ul className="logo-and-social__social">
            <li className="logo-and-social__social-item">
              <a className="logo-and-social__social-item-link" href="#">
                <div className="social-item-link__image social-item-link__image--vk"></div>
              </a>
            </li>
            <li className="logo-and-social__social-item">
              <a className="logo-and-social__social-item-link" href="#">
                <div className="social-item-link__image social-item-link__image--fb"></div>
              </a>
            </li>
            <li className="logo-and-social__social-item">
              <a className="logo-and-social__social-item-link" href="#">
                {" "}
                <div className="social-item-link__image social-item-link__image--inst"></div>
              </a>
            </li>
          </ul>
        </article>
        <article className="link-list__pages">
          <div className="link-list__rest">
            <h5 className="link-list__rest-title">Отдых</h5>
            <ul className="link-list__rest-links">
              <li className="link-list__rest-item">
                <a className="link-list__rest-item-link" href="#">
                  Проживание
                </a>
              </li>
              <li className="link-list__rest-item">
                <a className="link-list__rest-item-link" href="#">
                  Эскурсии и впечатления
                </a>
              </li>
              <li className="link-list__rest-item">
                <a className="link-list__rest-item-link" href="#">
                  Трансфер{" "}
                </a>
              </li>
              <li className="link-list__rest-item">
                <a className="link-list__rest-item-link" href="#">
                  Аренда авто
                </a>
              </li>
              <li className="link-list__rest-item">
                <a className="link-list__rest-item-link" href="#">
                  Кухня Абхазии
                </a>
              </li>
              <li className="link-list__rest-item">
                <a className="link-list__rest-item-link" href="#">
                  Города Абхазии
                </a>
              </li>
            </ul>
          </div>
          <div className="link-list__partners">
            <h5 className="link-list__partners-title">Партнерам</h5>
            <ul className="link-list__partners-links">
              <li className="link-list__partners-item">
                <a className="link-list__partners-item-link" href="#">
                  Стать партнером
                </a>
              </li>
            </ul>
          </div>
          <div className="link-list__feedback">
            <h5 className="link-list__feedback-title">Обратная связь</h5>
            <ul className="link-list__feedback-links">
              <li className="link-list__feedback-item">
                <Link
                  className="link-list__feedback-item-link"
                  to="/hotel-card"
                >
                  Служба туристической заботы
                </Link>
              </li>
              <li className="link-list__feedback-item">
                <Link
                  to="/town-card"
                  className="link-list__feedback-item-link"
                  href="#"
                >
                  Информация о безопасности
                </Link>
              </li>
              <li className="link-list__feedback-item">
                <Link
                  to="/report-problem"
                  className="link-list__feedback-item-link"
                  href="#"
                >
                  Сообщить о проблеме
                </Link>
              </li>
              <li className="link-list__feedback-item">
                <Link
                  to="/sentence-for"
                  className="link-list__feedback-item-link"
                >
                  Форма для предложений
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </section>
      <section className="footer__copyright">
        <ul className="footer__copyright-list">
          <li className="copyright-list__item">
            <a
              className="copyright-list__item-link copyright-list__item-link--not-underline"
              href="#"
            >
              © 2022 myapsny.ru
            </a>
          </li>
          <li className="copyright-list__item">
            <a className="copyright-list__item-link" href="#">
              Политика конфендициальности
            </a>
          </li>
          <li className="copyright-list__item">
            <a className="copyright-list__item-link" href="#">
              Условия
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Footer;
