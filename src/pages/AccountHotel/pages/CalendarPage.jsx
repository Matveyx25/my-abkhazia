import React, { useState } from "react";
import "./pages.css";
import { AccountLinkList } from "../../../components/AccountLinkList/AccountLinkList";
import s from "./Calendar.module.css";
import { CalendarHotel } from './CalendarHotel';
import { CalendarHouse } from "./CalendarHouse";
import { CalendarExcursion } from "./CalendarExcursion";
import { CalendarRent } from "./CalendarRent";
import { CalendarFood } from "./CalendarFood";
import { CalendarTransfer } from "./CalendarTransfer";

export const CalendarPage = () => {
  const [pageType, setPageType] = useState('Отели')
  
  return (
    <div className="decorations-section">
      <h1 className="account-page__title">Календарь</h1>
      <AccountLinkList pageType={pageType} clickHandler={setPageType}/>
      {
        {
          'Отели': <CalendarHotel />,
          'Частное жилье': <CalendarHouse />,
          'Эскурсии и впечатления': <CalendarExcursion/>,
          'Аренда авто': <CalendarRent/>,
          'Кухня Абхазии': <CalendarFood/>,
          'Трансфер': <CalendarTransfer />,
        }[pageType]
      }
    </div>
  );
};
