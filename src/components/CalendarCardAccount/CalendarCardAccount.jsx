import React from "react";
import Radio from "../Radio/Radio";
import s from "./CalendarCardAccount.module.css";

export const CalendarCardAccount = ({id, active}) => {
  return (
    <div className={active ? `${s.wrapper} ${s.active}` : s.wrapper}>
      <h1 className={s.title}>Отель у моря “Бамбучо”</h1>
      <hs className={s.subtitle}>Бюджетный двухместный номер с 1 кроватью</hs>
      <div className={s.jcsb}>
        <p>5 номеров</p>
        <p className={s.blue}>Категория 1</p>
      </div>
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
