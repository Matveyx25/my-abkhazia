import React, { useState } from "react";
import { AccountLinkList } from "../../../components/AccountLinkList/AccountLinkList";
import CardEdit from "../../../components/CardEdit/CardEdit";
import "./pages.css";
import { Link } from "react-router-dom";
import { RegistrationImpression } from "../../../components/Login/RegistrationImpression";
import { RegistrationFood } from "../../../components/Login/RegistrationFood";
import { RegistrationRent } from "../../../components/Login/RegistrationRent";
import { RegistrationTransfer } from "../../../components/Login/RegistrationTransfer";
import { RegistrationExcursion } from "../../../components/Login/RegistrationExcursion";
import { RegistrationHouse } from "../../../components/Login/RegistrationHouse";
import { RegistrationHotel } from "../../../components/Login/RegistrationHotel";
import Radio from "../../../components/Radio/Radio";
import { Modal } from "../../../components/Modal/Modal";
import Checkbox from "../../../components/Checkbox/Checkbox";

export const Declarations = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const [pageType, setPageType] = useState("Отели");

  const [filter, setFilter] = useState(false);

  const [modal, setModal] = useState(false);
  const [accType, setAccType] = useState("Отель");

  const changeValue1 = (event) => {
    setValue1(event.target.value);
  };

  const changeValue2 = (event) => {
    setValue2(event.target.value);
  };

  return (
    <div className="decorations-section">
      <Modal visible={modal} onClose={() => setModal(false)}>
        <div className="ballance-page__modal-content">
          <h1 className="ballance-page__title">Заполните данные</h1>
          <div className="account-page__input-block">
            <p>Выберите услугу *</p>
            <input
              placeholder="Выберите услугу"
              type="text"
              value={accType}
              onChange={(event) => setAccType(accType)}
              className="account-page__input-with-radio"
              required
            />
            <div className="account-page__radios">
                <Radio
                labelText="Отель"
                inputId="hotelService"
                inputName="typeService"
                inputValue="Отель"
                changeFunction={(event) => setAccType(event.target.value)}
                />
                <Radio
                labelText="Частное жилье"
                inputId="houseService"
                inputName="typeService"
                inputValue="Частное жилье"
                changeFunction={(event) => setAccType(event.target.value)}
                />
                <Radio
                labelText="Эскурсия"
                inputId="excursionService"
                inputName="typeService"
                inputValue="Эскурсия"
                changeFunction={(event) => setAccType(event.target.value)}
                />
                <Radio
                labelText="Впечатление"
                inputId="impressionService"
                inputName="typeService"
                inputValue="Впечатление"
                changeFunction={(event) => setAccType(event.target.value)}
                />
                <Radio
                labelText="Питание"
                inputId="foodService"
                inputName="typeService"
                inputValue="Питание"
                changeFunction={(event) => setAccType(event.target.value)}
                />
                <Radio
                labelText="Аренда машин"
                inputId="rentService"
                inputName="typeService"
                inputValue="Аренда машин"
                changeFunction={(event) => setAccType(event.target.value)}
                />
                <Radio
                labelText="Трансфер"
                inputId="transferService"
                inputName="typeService"
                inputValue="Трансфер"
                changeFunction={(event) => setAccType(event.target.value)}
                />
            </div>
          </div>
          {accType.includes("Отель") && <RegistrationHotel />}
          {accType.includes("Частное жилье") && <RegistrationHouse />}
          {accType.includes("Эскурсия") && <RegistrationExcursion />}
          {accType.includes("Впечатление") && <RegistrationImpression />}
          {accType.includes("Питание") && <RegistrationFood />}
          {accType.includes("Аренда машин") && <RegistrationRent />}
          {accType.includes("Трансфер") && <RegistrationTransfer />}
          <div className="account-page__forget-checkbox">
            <Checkbox
              labelText="Нажимая на кнопку, я соглашаюсь с Условиями сотрудничества "
              inputId="forget"
            />
          </div>
          <button
            className="account-page__btn-100"
            onClick={() => {
              setModal(false);
            }}
          >
            Продолжить
          </button>
          <p className="account-page__small-text">
            * Поля обязательны для заполнения
          </p>
        </div>
      </Modal>
      <Link className="account-page__back-btn" to="../">
          <img src="/images/arrow-right-circle-fill.svg" alt=""/>
      </Link>
      <div className="account-page__jcsb title-row">
        <h1 className="account-page__title">Мои объявления</h1>
        <div
            className="account-page__filter-mobile"
            onClick={() => setFilter(true)}
          >
            <img src="/images/filter.svg" alt="" />
            Фильтр
          </div>
        <button className="account-page__btn-dashed" onClick={() => setModal(true)}>
          <img src="../images/plus.svg" />
          Добавить еще услугу
        </button>
      </div>
      <div
        className={
          filter
            ? "account-page__filter-wrapper-mobile visible"
            : "account-page__filter-wrapper-mobile"
        }
      >
        <div className="account-page__filter-scroll">
        <div className="account-page__filter-title">
            <img src="/images/ep_circle-close-filled.svg" alt="" onClick={() => setFilter(false)}/>
            Фильтр
          </div>
        <AccountLinkList pageType={pageType} clickHandler={setPageType} />
        {pageType == "Отели" && (
          <>
            <div className="account-page__filter-wrapper">
              <form className="account-page__filter">
                <input
                  type="radio"
                  value="0"
                  id="filterAll"
                  name="filter1"
                  checked={value1 == 0}
                  onChange={changeValue1}
                />
                <label htmlFor="filterAll">Все</label>
                <input
                  type="radio"
                  value="1"
                  id="filterHotel"
                  name="filter1"
                  checked={value1 == 1}
                  onChange={changeValue1}
                />
                <label htmlFor="filterHotel">Отели</label>
                <input
                  type="radio"
                  value="2"
                  id="filterGuest"
                  name="filter1"
                  checked={value1 == 2}
                  onChange={changeValue1}
                />
                <label htmlFor="filterGuest">Гостевые дома</label>
                <input
                  type="radio"
                  value="3"
                  id="filterMiniHotel"
                  name="filter1"
                  checked={value1 == 3}
                  onChange={changeValue1}
                />
                <label htmlFor="filterMiniHotel">Мини-гостиницы</label>
              </form>
              <span className="line"></span>
              <form className="account-page__filter-fill">
                <input
                  type="radio"
                  value="0"
                  id="filterActive"
                  name="filter2"
                  checked={value2 == 0}
                  onChange={changeValue2}
                />
                <label htmlFor="filterActive">Активные</label>
                <input
                  type="radio"
                  value="1"
                  id="filterNotActive"
                  name="filter2"
                  checked={value2 == 1}
                  onChange={changeValue2}
                />
                <label htmlFor="filterNotActive">Неактивные</label>
                <input
                  type="radio"
                  value="2"
                  id="filterDraft"
                  name="filter2"
                  checked={value2 == 2}
                  onChange={changeValue2}
                />
                <label htmlFor="filterDraft">Черновики</label>
              </form>
            </div>
          </>
        )}
        {pageType == "Частное жилье" && (
          <>
            <div className="account-page__filter-wrapper">
              <form className="account-page__filter">
                <input
                  type="radio"
                  value="0"
                  id="filterAll"
                  name="filter1"
                  checked={value1 == 0}
                  onChange={changeValue1}
                />
                <label htmlFor="filterAll">Все</label>
                <input
                  type="radio"
                  value="1"
                  id="filterHotel"
                  name="filter1"
                  checked={value1 == 1}
                  onChange={changeValue1}
                />
                <label htmlFor="filterHotel">Квартиры</label>
                <input
                  type="radio"
                  value="2"
                  id="filterGuest"
                  name="filter1"
                  checked={value1 == 2}
                  onChange={changeValue1}
                />
                <label htmlFor="filterGuest">Дома</label>
                <input
                  type="radio"
                  value="3"
                  id="filterMiniHotel"
                  name="filter1"
                  checked={value1 == 3}
                  onChange={changeValue1}
                />
                <label htmlFor="filterMiniHotel">Комнаты</label>
              </form>
              <span className="line"></span>
              <form className="account-page__filter-fill">
                <input
                  type="radio"
                  value="0"
                  id="filterActive"
                  name="filter2"
                  checked={value2 == 0}
                  onChange={changeValue2}
                />
                <label htmlFor="filterActive">Активные</label>
                <input
                  type="radio"
                  value="1"
                  id="filterNotActive"
                  name="filter2"
                  checked={value2 == 1}
                  onChange={changeValue2}
                />
                <label htmlFor="filterNotActive">Неактивные</label>
                <input
                  type="radio"
                  value="2"
                  id="filterDraft"
                  name="filter2"
                  checked={value2 == 2}
                  onChange={changeValue2}
                />
                <label htmlFor="filterDraft">Черновики</label>
              </form>
            </div>
          </>
        )}
        {pageType == "Эскурсии и впечатления" && (
          <>
            <div className="account-page__filter-wrapper">
              <form className="account-page__filter">
                <input
                  type="radio"
                  value="0"
                  id="filterAll"
                  name="filter1"
                  checked={value1 == 0}
                  onChange={changeValue1}
                />
                <label htmlFor="filterAll">Все</label>
                <input
                  type="radio"
                  value="1"
                  id="filterHotel"
                  name="filter1"
                  checked={value1 == 1}
                  onChange={changeValue1}
                />
                <label htmlFor="filterHotel">Экскурсии</label>
                <input
                  type="radio"
                  value="2"
                  id="filterGuest"
                  name="filter1"
                  checked={value1 == 2}
                  onChange={changeValue1}
                />
                <label htmlFor="filterGuest">Впечатления</label>
              </form>
              <span className="line"></span>
              <form className="account-page__filter-fill">
                <input
                  type="radio"
                  value="0"
                  id="filterActive"
                  name="filter2"
                  checked={value2 == 0}
                  onChange={changeValue2}
                />
                <label htmlFor="filterActive">Активные</label>
                <input
                  type="radio"
                  value="1"
                  id="filterNotActive"
                  name="filter2"
                  checked={value2 == 1}
                  onChange={changeValue2}
                />
                <label htmlFor="filterNotActive">Неактивные</label>
                <input
                  type="radio"
                  value="2"
                  id="filterDraft"
                  name="filter2"
                  checked={value2 == 2}
                  onChange={changeValue2}
                />
                <label htmlFor="filterDraft">Черновики</label>
              </form>
            </div>
          </>
        )}
        <div className="account-page__filter-btns">
          <button className="account-page__btn-outline" onClick={() => setFilter(false)}>Сбросить</button>
          <button className="account-page__btn" onClick={() => setFilter(false)}>Применить</button>
        </div>
        </div>
      </div>


      {pageType == "Отели" && (
        <>
          <div className="account-page__result-wrapper">
            <CardEdit
              image="../images/housing-catalog/item-1.jpg"
              title='Отель у моря "Бамбучо"'
              stars={5}
              reviews={15}
              subTitle1="Мини-гостиница"
              subTitle2="Пицунда"
              additions={["Бесплатный Wi-Fi, бар", "Семейные номера"]}
              price="1 600₽ сутки"
              choiseText="Снять с публикации"
              status="active"
              link="/hotel-card"
            />
            <CardEdit
              title='Отель у моря "Бамбучо"'
              stars={5}
              reviews={15}
              subTitle1="Мини-гостиница"
              subTitle2="Пицунда"
              additions={["Бесплатный Wi-Fi, бар", "Семейные номера"]}
              price="1 600₽ сутки"
              status="draft"
              link="/hotel-card"
              choiseText="Удалить объявление"
            />
            <Link to="create-hotel" className="account-page__btn-add-hotel">
              <img src="../images/plus-add-hotel.svg" alt="" />
              <p>Добавить еще отель</p>
            </Link>
          </div>
        </>
      )}
      {pageType == "Частное жилье" && (
        <>
          <div className="account-page__result-wrapper">
            <Link to="create-house" className="account-page__btn-add-hotel">
              <img src="../images/plus-add-hotel.svg" alt="" />
              <p>Добавить еще частное жилье</p>
            </Link>
          </div>
        </>
      )}
      {pageType == "Эскурсии и впечатления" && (
        <>
          <div className="account-page__result-wrapper">
            <Link to="create-excursion" className="account-page__btn-add-hotel">
              <img src="../images/plus-add-hotel.svg" alt="" />
              <p>Добавить еще экскурсию</p>
            </Link>
            <Link
              to="create-impression"
              className="account-page__btn-add-hotel"
            >
              <img src="../images/plus-add-hotel.svg" alt="" />
              <p>Добавить еще впечатления</p>
            </Link>
          </div>
        </>
      )}
      {pageType == "Трансфер" && (
        <>
          <div className="account-page__result-wrapper">
            <Link to="create-transfer" className="account-page__btn-add-hotel">
              <img src="../images/plus-add-hotel.svg" alt="" />
              <p>Добавить еще трансфер</p>
            </Link>
          </div>
        </>
      )}
      {pageType == "Аренда авто" && (
        <>
          <div className="account-page__result-wrapper">
            <Link to="create-rent" className="account-page__btn-add-hotel">
              <img src="../images/plus-add-hotel.svg" alt="" />
              <p>Добавить еще аренду авто</p>
            </Link>
          </div>
        </>
      )}
      {pageType == "Кухня Абхазии" && (
        <>
          <div className="account-page__result-wrapper">
            <Link to="create-food" className="account-page__btn-add-hotel">
              <img src="../images/plus-add-hotel.svg" alt="" />
              <p>Добавить еще кухни</p>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
