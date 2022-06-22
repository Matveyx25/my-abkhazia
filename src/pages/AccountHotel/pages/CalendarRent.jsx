import React, { useState } from "react";
import s from "./Calendar.module.css";
import { Modal } from "../../../components/Modal/Modal";
import { CalendarInput } from "../../../components/CalendarInput/CalendarInput";
import { ReservedCalendar } from "../../../components/ReservedCalendar/ReservedCalendar";
import { CalendarCardAccount } from "../../../components/CalendarCardAccount/CalendarCardAccount";
import { GuestsInput } from "../../../components/GuestsInput/GuestsInput";
import { TimeInput } from "../../../components/TimeInput/TimeInput";
import { TouristCard } from '../../../components/TouristCard/TouristCard';
import { CalendarInputReserved } from "../../../components/CalendarInput/CalendarInputReserved";

export const CalendarRent = () => {
  const [priceDay, setPriceDay] = useState("2 000₽");

  const [phone, setPhone] = useState();
  const [touristName, setTouristName] = useState();
  const [openedForReserved, setOpenedForReserved] = useState(true);
  const [activeUser, setActiveUser] = useState(false);

  const [modal, setModal] = useState(false);
  const [reservedCalendars, setReservedCalendars] = useState([{id: 1}])

  return (
    <div>
      <Modal visible={modal} onClose={() => setModal(false)}>
        <h1 className={s.modalTitle}>Правки в календарь</h1>
        <div className={s.modalContent}>
          <div className={s.jcsb}>
            <div>
              <div className={s.ModalRow}>
                <CalendarInput label="Дата забора" />
                <TimeInput label="Время забора" />
              </div>
              <div className={s.ModalRow}>
                <CalendarInput label="Дата возврата" />
                <TimeInput label="Время возврата" />
              </div>
              <div className={s.ModalRow}>
                <div className={s.inputBlock}>
                  <p>Имя туриста</p>
                  <input
                    placeholder="Введите имя туриста"
                    value={touristName}
                    onChange={(event) => setTouristName(event.target.value)}
                    type="text"
                    required
                  />
                </div>
                <div className={s.inputBlock}>
                  <p>Телефон туриста</p>
                  <input
                    placeholder="+7 (000) 000-00-00"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    type="text"
                    required
                  />
                </div>
              </div>
              <div className={s.btnsRow}>
                <button className={s.btn200} disabled>
                  Применить
                </button>
              </div>
            </div>
            <div className={s.leftBlock}>
            {reservedCalendars.map((el, index) => 
                <CalendarInputReserved
                  label="Заезд"
                  error={index == 0 && "Выберите дату, недоступную для брони"}
                  key={el.id}
                  withOutTitle={index > 0}
                />
              )}
              <div className={s.addBtn} onClick={() => {
                setReservedCalendars([...reservedCalendars, {id: reservedCalendars[reservedCalendars.length - 1].id + 1}])
                }}>
                <img src="../images/plus-add-hotel.svg" alt="" />
                Добавить еще дату
              </div>
            </div>
          </div>
          <ReservedCalendar type="rent" />
          <div className={s.footerBtn}>
            <button className={s.btn160} disabled>
              Сохранить
            </button>
            <button
              className={`${s.btn160} ${s.outlined}`}
              onClick={() => setModal(false)}
            >
              Отменить
            </button>
          </div>
        </div>
      </Modal>
      <div className="account-page__reviews-wrapper">
        <CalendarCardAccount id="1" label="Audi Q5" 
        opened={openedForReserved}
        setOpened={setOpenedForReserved}/>
      </div>
      {openedForReserved && (<>
        <ReservedCalendar
          type="rent"
          activeUser={activeUser}
          clickHandler={() => setActiveUser(true)}
        />
      <button className={s.edit} onClick={() => setModal(true)}>
        Внести правки в календарь
      </button>
      {activeUser && (
        <div className={s.tourist}>
          <TouristCard btnTitle="Написать туристу" />
          <p className={s.closeBtn} onClick={() => setActiveUser(false)}>
            Скрыть
          </p>
        </div>
      )}
      <form className={s.form}>
        <div className={s.inputRow}>
          <div className={s.inputBlock}>
            <p className={s.inputTitle}>Цена за один день</p>
            <input
              type="text"
              className={s.input}
              value={priceDay}
              onChange={(event) => setPriceDay(event.target.value)}
            />
          </div>
        </div>
        <button className={s.savebtn}>Сохранить изменения</button>
      </form></>)}
    </div>
  );
};
