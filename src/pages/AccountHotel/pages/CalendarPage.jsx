import React, { useState } from "react";
import "./pages.css";
import { AccountLinkList } from "../../../components/AccountLinkList/AccountLinkList";
import s from "./Calendar.module.css";
import { CalendarHotel } from "./CalendarHotel";
import { CalendarHouse } from "./CalendarHouse";
import { CalendarExcursion } from "./CalendarExcursion";
import { CalendarRent } from "./CalendarRent";
import { CalendarFood } from "./CalendarFood";
import { CalendarTransfer } from "./CalendarTransfer";
import { Link } from "react-router-dom";

export const CalendarPage = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const [pageType, setPageType] = useState("Отели");

  const [filter, setFilter] = useState(false);

  const changeValue1 = (event) => {
    setValue1(event.target.value);
  };

  const changeValue2 = (event) => {
    setValue2(event.target.value);
  };

  return (
    <div className="decorations-section">
      <Link className="account-page__back-btn" to="../">
        <img src="/images/arrow-right-circle-fill.svg" alt="" />
      </Link>
      <h1 className="account-page__title">Календарь</h1>
      <div
        className="account-page__filter-mobile"
        onClick={() => setFilter(true)}
      >
        <img src="/images/filter.svg" alt="" />
        Фильтр
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
            <img
              src="/images/ep_circle-close-filled.svg"
              alt=""
              onClick={() => setFilter(false)}
            />
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
            <button
              className="account-page__btn-outline"
              onClick={() => setFilter(false)}
            >
              Сбросить
            </button>
            <button
              className="account-page__btn"
              onClick={() => setFilter(false)}
            >
              Применить
            </button>
          </div>
        </div>
      </div>
      {
        {
          Отели: <CalendarHotel />,
          "Частное жилье": <CalendarHouse />,
          "Эскурсии и впечатления": <CalendarExcursion />,
          "Аренда авто": <CalendarRent />,
          "Кухня Абхазии": <CalendarFood />,
          Трансфер: <CalendarTransfer />,
        }[pageType]
      }
    </div>
  );
};
