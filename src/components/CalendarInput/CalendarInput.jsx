import React, { useState } from 'react'
import s from './CalendarInput.module.css';
import { Calendar } from 'react-calendar';

export const CalendarInput = ({label, error, onChange}) => {
    const [calendarValue, onChangeCalendar] = useState(new Date());
    const [calendarModalWindow, toggleModalCalendar] = useState(false);
    const [ourDateInForm, changeOurDateInForm] = useState();

  return (
    <article
    className={s.dateWrapper}
    onClick={() => toggleModalCalendar(!calendarModalWindow)}
  >

      {error ? 
      <p className={s.dateTitle}>
        {error} 
        <img src="../images/exclamation-mark.svg" alt=""/> 
        <div className={s.popupError}>
        Вы можете выбрать дату, когда возможно нужен выходной или вам необходимо по каким либо обстоятельствам отменить бронь на конкретную дату
        </div>
      </p>
      : 
      <p className={s.dateTitle}>
        {label} 
      </p>}
   
    <div className={s.inputBlock}>
      <img
        src="/images/transfer/calendar.svg"
        width="13.5"
        height="15"
        alt=""
      />
        <input value={ourDateInForm} onChange={() => changeOurDateInForm(ourDateInForm)} placeholder="Укажите дату" required/>
    </div>
    {calendarModalWindow && (
      <div
        className="form-search--data__calendar-wrapper"
        onClick={(e) => {
          changeOurDateInForm(e.target.attributes["aria-label"].value)
          onChange(e.target.attributes["aria-label"].value)
        }}
      >
        <Calendar
          onChange={onChangeCalendar}
          value={calendarValue}
        />
      </div>
    )}
  </article>
  )
}
