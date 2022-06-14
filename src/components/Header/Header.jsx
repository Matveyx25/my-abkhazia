import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Modal } from "../Modal/Modal";
import { Login } from "../Login/Login";

const city = [
  "Гагра",
  "Новый афон",
  "Пицунда",
  "Сухум",
  "Ткуарчал",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
];
const justCategory = [
  {
    id: 0,
    category: "Проживание",
    img: "../images/header-residence.svg",
  },
  {
    id: 1,
    category: "Эскурсии и впечатления",
    img: "../images/header-tours.svg",
  },
  {
    id: 2,
    category: "Трансфер",
    img: "../images/header-transfer.svg",
  },
  {
    id: 3,
    category: "Аренда авто",
    img: "../images/header-rent.svg",
  },
  {
    id: 4,
    category: "Кухня Абхазии",
    img: "../images/header-kitchen.svg",
  },
];

const Header = ({ wallet, closeEmail}) => {
  const [town, changeTown] = useState("Выберите город");
  const [category, changeCategory] = useState("Выберите категорию");
  const [menu, changeMenuVisibility] = useState(false);
  const [townTongler, tongTownWindow] = useState(false);
  const [menuMobileTongler, tongMenuMobileWindow] = useState(false);
  const [burger, changeBurgerVisibility] = useState(false);
  const [categoryTongler, tongCategoryWindow] = useState(false);
  const [registration, changeRegistration] = useState(true);
  const [email, changeVisibilityEmail] = useState(true);

  const [modalLogin, setModalLogin] = useState(false);

  const tongBurger = () => {
    if (burger) {
      changeBurgerVisibility(false);
    } else {
      changeBurgerVisibility(true);
    }
  };

  const choiseSearchTown = (gorod) => {
    changeTown(gorod);
    tongTownWindow(false);
  };

  const tongTown = () => {
    if (townTongler) {
      tongTownWindow(false);
    } else {
      tongTownWindow(true);
    }
  };

  const tongMenuMobile = () => {
    if (menuMobileTongler) {
      tongMenuMobileWindow(false);
    } else {
      tongMenuMobileWindow(true);
    }
  };

  const choiseSearchCategory = (parameter) => {
    changeCategory(parameter);
    tongCategoryWindow(false);
  };

  const tongCategory = () => {
    if (categoryTongler) {
      tongCategoryWindow(false);
    } else {
      tongCategoryWindow(true);
    }
  };

  const menuTongler = () => {
    if (menu) {
      changeMenuVisibility(false);
    } else {
      changeMenuVisibility(true);
    }
  };

  return (
    <div>
      <section className="header">
        <Login visible={modalLogin} onClose={() => setModalLogin(false)}/>
        <article className="header__logo">
          <div className="header__logo-image-wrapper">
            <img
              className="header__logo-image"
              src="/images/logo-color.svg"
              alt="header-logo-image"
              width="118"
              height="74"
            />
          </div>
        </article>
        <article
          className={
            menuMobileTongler
              ? "header__search"
              : "header__search header__search--close"
          }
        >
          <div
            className={
              townTongler
                ? "header__search-town header__search-town--up"
                : "header__search-town"
            }
            onClick={() => tongTown()}
          >
            <p
              className={
                town == "Выберите город"
                  ? "search-town__text"
                  : "search-town__text search-town__text--active"
              }
            >
              {town}
            </p>
            <div
              className={
                townTongler
                  ? "search-town__triangle--up"
                  : "search-town__triangle"
              }
            ></div>
            {townTongler && (
              <div className="search-town__choise__wrapper">
                <ul className="search-town__choise">
                  {city.map((el) => (
                    <li
                      className="search-town__choise-item"
                      onClick={() => choiseSearchTown(el)}
                      key={el}
                    >
                      <img
                        className="search-town__choise-item-image"
                        src="/images/header-label.svg"
                        alt="label"
                      />
                      <p className="search-town__choise-item-text">{el}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div
            className={
              categoryTongler
                ? "header__search-category header__search-category--up"
                : "header__search-category"
            }
            onClick={() => tongCategory()}
          >
            <p
              className={
                category == "Выберите категорию"
                  ? "search-category__text"
                  : "search-category__text search-category__text--active "
              }
            >
              {category}
            </p>
            <div
              className={
                categoryTongler
                  ? "search-category__triangle--up"
                  : "search-category__triangle"
              }
            ></div>
            {categoryTongler && (
              <div className="search-town__choise__wrapper">
                <ul className="search-category__choise">
                  {justCategory.map((el) => (
                    <li
                      className="search-category__choise-item"
                      onClick={() => choiseSearchCategory(el.category)}
                      key={el.id}
                    >
                      <div className="choise-item__image-wrapper">
                        <img
                          className="choise-item__image"
                          src={el.img}
                          alt={el.category}
                        />
                      </div>
                      <p className="choise-item__text">{el.category}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="header__free-space"></div>
          <button className="header__search-submit" type="submit">
            <img
              className="search-submit__image"
              src="/images/header-glass.svg"
              alt="glass"
              width="39"
              height="39"
            />
            <p className="search-submit__text">Найти</p>
          </button>
        </article>

        {!registration && (
          <article className="header__enter">
            <a className="header__enter-register" href="#">
              Зарегистрироваться
            </a>
            <a
              className="header__enter-button"
              href="#"
              onClick={() => setModalLogin(true)}
            >
              Войти
            </a>
          </article>
        )}
        {registration && (
          <article
            className={
              wallet ? "header__login header__login-wallet" : "header__login"
            }
            onClick={() => menuTongler()}
          >
            {/*  {wallet == true && (  */}
            <div className="header__wallet">
              <img
                src="/images/transfer/wallet.svg"
                width="20.6"
                height="18.7"
                alt="wallet"
              />
              <p className="header__wallet-money">0 ₽</p>
              <div className="header-wallet__email-wrapper">
                <img
                  src="/images/transfer/email.svg"
                  width="24"
                  height="24"
                  alt="email"
                />
                <p className="email-wrapper__email-count">1</p>
              </div>
            </div>
            {/* )} */}

            <div className="header__login-image-wrapper">
              <img
                className="header__login-image"
                src="/images/carbon_user-avatar-filled.svg"
                alt="header-user"
                width="28"
                height="28"
              />
              {/*                    !closeEmail && (
                <div className="login-image__email">
                  <img
                    className="login-image__email-image"
                    src="../../images/header__email.svg"
                    width="12"
                    height="12"
                    alt="email"
                  />
                </div>)
            
              !closeEmail && (
                <div className="login-image__email">
                  <img
                    className="login-image__email-image"
                    src="../../images/header__email.svg"
                    width="12"
                    height="12"
                    alt="email"
                  />
                </div>
              )
              
                */}
            </div>
            <p className="header__login-name">Анастасия</p>
            {menu && (
              <ul className="login-name__menu">
                <li className="login-name__menu-item">
                  <Link to="/hotel-account">Мой кабинет</Link>
                </li>
                <li className="login-name__menu-item">Добавить услугу</li>
                <li
                  className="login-name__menu-item"
                  onClick={() => changeRegistration(false)}
                >
                  Выйти
                </li>
              </ul>
            )}
          </article>
        )}
        <div className="header__nav">
          <Link className="header__nav-login-wrapper" to="../hotel-account">
            <img
              className={
                registration ? "header__nav-login" : "header__nav-login--close"
              }
              src="/images/header-mobile-login.svg"
              alt="login"
              width="28"
              height="28"
            />
            <div className="nav-login-wrapper__red-hook">
              <img
                src="/images/header__email.svg"
                alt="email"
                width="12"
                height="12"
              />{" "}
            </div>
          </Link>
          <img
            className="header__nav-glass"
            src="/images/glass-blue.svg"
            alt="glass"
            width="25.5"
            height="25.5"
            onClick={() => tongMenuMobile()}
          />
          <div
            className="header__nav-burger-wrapper"
            onClick={() => tongBurger()}
          >
            <img
              className="header__nav-burger"
              src={
                burger ? "/images/burger--close.svg" : "/images/burger.svg"
              }
              alt="burger"
              width={burger ? "28" : "22"}
              height={burger ? "28" : "19"}
            />
          </div>
        </div>
      </section>
      <section className={burger ? "header--mobile" : "header--mobile--close"}>
        {!registration && (
          <article className="header__enter--mobile">
            <a
              className="header__enter-register header__enter-register--mobile"
              href="#"
            >
              Зарегистрироваться
            </a>
            <a
              className="header__enter-button header__enter-button--mobile"
              href="#"
            >
              Войти
            </a>
          </article>
        )}
        {registration && (
          <>
            <article
              className="header__login header__login--mobile"
              onClick={() => menuTongler()}
            >
              <div className="header__login-image-wrapper header__login-image-wrapper--mobile">
                <img
                  className="header__login-image"
                  src="../images/header-mobile-login.svg"
                  alt="header-user"
                  width="28"
                  height="28"
                />
              </div>
              <p className="header__login-name">Анастасия</p>
              {/* {wallet == true && (  */}
              <div className="header__wallet">
                <img
                  src="/images/transfer/wallet.svg"
                  width="20.6"
                  height="18.7"
                  alt="wallet"
                />
                <p className="header__wallet-money">0 ₽</p>
              </div>
              {/* )}  */}
            </article>
            <ul className="login-name__menu--mobile">
              <li className="menu-mobile__item">
                <Link to="/hotel-account">Мой кабинет</Link>
              </li>
              <li className="menu-mobile__item">Добавить услугу</li>
              <li
                className="menu-mobile__item"
                onClick={() => changeRegistration(false)}
              >
                Выйти
              </li>
            </ul>
          </>
        )}
        <ul className="header__nav-links">
          <li className="header__nav-link-wrapper">
            <Link className="header__nav-link" to="/housing-catalog">
              <div className="header__nav-image-wrapper">
                <img className="" src="/images/header-residence.svg" alt="" />
              </div>
              <p className="header__nav-link-text">Проживание</p>
            </Link>
          </li>
          <li className="header__nav-link-wrapper">
            <Link className="header__nav-link" to="/tours">
              <div className="header__nav-image-wrapper">
                <img className="" src="/images/header-tours.svg" alt="" />
              </div>
              <p className="header__nav-link-text">Эскурсии и впечатления</p>
            </Link>
          </li>
          <li className="header__nav-link-wrapper">
            <Link className="header__nav-link" to="/transfer">
              <div className="header__nav-image-wrapper">
                <img className="" src="/images/header-transfer.svg" alt="" />
              </div>

              <p className="header__nav-link-text">Трансфер</p>
            </Link>
          </li>
          <li className="header__nav-link-wrapper">
            <Link className="header__nav-link" to="/car-rent">
              <div className="header__nav-image-wrapper">
                <img className="" src="/images/header-rent.svg" alt="" />
              </div>
              <p className="header__nav-link-text">Аренда авто</p>
            </Link>
          </li>
          <li className="header__nav-link-wrapper">
            <Link className="header__nav-link" to="/cooking">
              <div className="header__nav-image-wrapper">
                <img className="" src="/images/header-kitchen.svg" alt="" />
              </div>
              <p className="header__nav-link-text">Кухня Абхазии</p>
            </Link>
          </li>
          <li className="header__nav-link-wrapper">
            <Link className="header__nav-link" to="/cities">
              <div className="header__nav-image-wrapper">
                <img className="" src="/images/header-label.svg" alt="" />
              </div>
              <p className="header__nav-link-text">Города Абхазии</p>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Header;
