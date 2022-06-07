import React, { useState } from "react";
import "./pages.css";
import { AccountLinkList } from "../../../components/AccountLinkList/AccountLinkList";
import s from "./Calendar.module.css";
import { CalendarHotel } from './CalendarHotel';
import { CalendarHouse } from "./CalendarHouse";

export const CalendarPage = () => {
  const [value, setValue] = useState(0);

  const [pageType, setPageType] = useState('Отели')

  const changeValue = (event) => {
    setValue(event.target.value);
  };

  const renderSwitch = () => {
    switch(pageType){
      case 'Отели': 
        return <CalendarHotel/>
      default:
        return <CalendarHotel/>
    }
  }

  return (
    <div className="decorations-section">
      <h1 className="account-page__title">Календарь</h1>
      <AccountLinkList pageType={pageType} clickHandler={setPageType}/>
      <div className="account-page__filter-wrapper">
        <form className="account-page__filter">
          <input
            type="radio"
            value="0"
            id="filterAll"
            name="filter"
            checked={value == 0}
            onChange={changeValue}
          />
          <label htmlFor="filterAll">Все</label>
          <input
            type="radio"
            value="1"
            id="filterHotel"
            name="filter"
            checked={value == 1}
            onChange={changeValue}
          />
          <label htmlFor="filterHotel">Отели</label>
          <input
            type="radio"
            value="2"
            id="filterGuest"
            name="filter"
            checked={value == 2}
            onChange={changeValue}
          />
          <label htmlFor="filterGuest">Гостевые дома</label>
          <input
            type="radio"
            value="3"
            id="filterMiniHotel"
            name="filter"
            checked={value == 3}
            onChange={changeValue}
          />
          <label htmlFor="filterMiniHotel">Мини-гостиницы</label>
        </form>
      </div>
      {
        {
          'Отели': <CalendarHotel />,
          'Частное жилье': <CalendarHouse />,
        }[pageType]
      }
    </div>
  );
};
