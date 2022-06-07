import React, { useState } from "react";
import "./pages.css";
import { AccountLinkList } from "../../../components/AccountLinkList/AccountLinkList";
import { CalendarCardAccount } from "../../../components/CalendarCardAccount/CalendarCardAccount";
import { ReservedCalendar } from "../../../components/ReservedCalendar/ReservedCalendar";
import s from "./Calendar.module.css";
import { TouristCard } from "../../../components/TouristCard/TouristCard";
import { Modal } from "../../../components/Modal/Modal";
import { Calendar } from "react-calendar";
import { CalendarInput } from "../../../components/CalendarInput/CalendarInput";

export const CalendarPage = () => {
  const [value, setValue] = useState(0);

  const [price, setPrice] = useState("1 300₽");
  const [life, setLife] = useState("от 3 ночей");
  const [phone, setPhone] = useState();
  const [touristName, setTouristName] = useState();

  const [modal, setModal] = useState(true);
  const [user, setUser] = useState({name: 'Нина', dayIn: 3, dayOut: 13, monthIn: 'Июнь'});

  const [activeUser, setActiveUser] = useState(false);

  const changeValue = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="decorations-section">
      <Modal visible={modal} onClose={() => setModal(false)}>
        <h1 className={s.modalTitle}>Правки в календарь</h1>
        <div className={s.modalContent}>
          <div className={s.jcsb}>
            <div>
              <div className={s.ModalRow}>
                <CalendarInput label="Заезд"/>
                <CalendarInput label="Выезд"/>
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
              <CalendarInput label="Заезд" error="Выберите дату, недоступную для брони"/>
              <button className={s.btn160} disabled>
                  Применить
                </button>
                <div className={s.addBtn}>
                  <img src="../images/plus-add-hotel.svg" alt=""/>
                  Добавить еще дату
                </div>
            </div>
          </div>
          <ReservedCalendar user={user} removeUser={() => setUser()}/>
          <div className={s.footerBtn}>
                 <button className={s.btn160} disabled>
                  Сохранить
                </button>
                 <button className={`${s.btn160} ${s.outlined}`} onClick={() => setModal(false)}>
                  Отменить
                </button>
          </div>
        </div>
      </Modal>
      <h1 className="account-page__title">Календарь</h1>
      <AccountLinkList />
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

      <div className="account-page__reviews-wrapper">
        <CalendarCardAccount id="1" />
      </div>
      <ReservedCalendar
        activeUser={activeUser}
        clickHandler={() => setActiveUser(true)}
        user={user}
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
      <div className={s.inputRow}>
        <div className={s.inputBlock}>
          <p className={s.inputTitle}>Цена за сутки </p>
          <input
            type="text"
            className={s.input}
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div className={s.inputBlock}>
          <p className={s.inputTitle}>Минимальный срок проживания</p>
          <input
            type="text"
            className={s.input}
            value={life}
            onChange={(event) => setLife(event.target.value)}
          />
        </div>
      </div>
      <button className={s.savebtn}>Сохранить изменения</button>
    </div>
  );
};
