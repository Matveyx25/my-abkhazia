import React from "react";
import Radio from "../Radio/Radio";
import s from "./CalendarCardAccount.module.css";

export const CalendarCardAccount = ({id, active, label, subtitle, freeRooms, option}) => {
  return (
    <div className={active ? `${s.wrapper} ${s.active}` : s.wrapper}>
      <h1 className={s.title}>{label}</h1>
      {subtitle && <h2 className={s.subtitle}>{subtitle}</h2>}
      {freeRooms && <div className={s.jcsb}>
        <p>{freeRooms} номеров</p>
        <p className={s.blue}>Категория 1</p>
      </div>}
      {option && <div className={s.jcsb}>
        <p>{option}</p>
      </div>}
      <span className={s.line}></span>
      <Radio
        labelText="Открыто для бронирования"
        inputId="open_reserve"
        inputName={"reserve_input" + id}
        checked={true}
      />
      <Radio
        labelText="Открыто для бронирования"
        inputId="close_reserve"
        inputName={"reserve_input" + id}
      />
      <h1 className={s.inputTitle}>Свободная дата С</h1>
      <p className={s.inputWrapper}>
        <img src="../images/bxs_calendar-black.svg" />2 мая, пн
      </p>
      <h1 className={s.inputTitle}>Свободная дата До</h1>
      <p className={s.inputWrapper}>
        <img src="../images/bxs_calendar-black.svg" />
        30 сентября, пн
      </p>
    </div>
  );
};
