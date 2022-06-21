import React from "react";
import { useState } from "react";
import Radio from "../Radio/Radio";
import s from "./CalendarCardAccount.module.css";

export const CalendarCardAccount = ({id, active, label, subtitle, freeRooms, option, clickHandler, opened, setOpened, error}) => {
  const [from, setFrom] = useState()
  const [to, setTo] = useState()

  return (
    <div className={error ? `${s.error} ${s.r100}` : s.r100}>
    <div className={active ? `${s.wrapper} ${s.active}` : s.wrapper} onClick={clickHandler}>
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
        inputId={"open_reserve" + id}
        inputName={"reserve_input" + id}
        changeFunction={() => setOpened(true)}
        checked={opened}
      />
      <Radio
        labelText="Закрыто для бронирования"
        inputId={"close_reserve" + id}
        inputName={"reserve_input" + id}
        changeFunction={() => setOpened(false)}
        checked={!opened}
      />
      {opened && <> <h1 className={s.inputTitle}>Свободная дата С</h1>
      <div className={s.inputWrapper}>
        <img src="/images/bxs_calendar-black.svg" />
        <input
          type="text"
          placeholder="2 мая, пн"
          className={s.input}
          value={from}
          onChange={(event) => setFrom(event.target.value)}
          required
        />
      </div>
      <h1 className={s.inputTitle}>Свободная дата До</h1>
      <div className={s.inputWrapper}>
        <img src="/images/bxs_calendar-black.svg" />
        <input
          type="text"
          placeholder="30 сентября, пн"
          className={s.input}
          value={to}
          onChange={(event) => setTo(event.target.value)}
          required
        />
      </div></>}
    </div>
    {error && <p className={s.errorText}>Чтобы активировать, Вам нужно выбрать свободные даты или закрыть эту категорию для бронирования.</p>}
    </div>
  );
};
