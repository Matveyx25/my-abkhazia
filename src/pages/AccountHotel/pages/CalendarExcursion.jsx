import React, { useState } from 'react'
import s from './Calendar.module.css'
import { Modal } from '../../../components/Modal/Modal';
import { CalendarInput } from '../../../components/CalendarInput/CalendarInput';
import { ReservedCalendar } from '../../../components/ReservedCalendar/ReservedCalendar';
import { CalendarCardAccount } from '../../../components/CalendarCardAccount/CalendarCardAccount';
import { TouristCard } from '../../../components/TouristCard/TouristCard';
import { GuestsInput } from '../../../components/GuestsInput/GuestsInput';
import { TimeInput } from '../../../components/TimeInput/TimeInput';

export const CalendarExcursion = () => {
    const [calendarId, setCalendar] = useState(1);

    const [priceAdult, setPriceAdult] = useState("2 000₽");
    const [priceKids, setPriceKids] = useState("1 500₽");
    const [priceBaby, setPriceBaby] = useState("1 000₽");
    const [priceAdult2, setPriceAdult2] = useState("350₽");
    const [priceKids2, setPriceKids2] = useState("250₽");
    const [priceBaby2, setPriceBaby2] = useState("Бесплатно");

    const [phone, setPhone] = useState();
  const [openedForReserved, setOpenedForReserved] = useState(true);
  const [openedForReserved2, setOpenedForReserved2] = useState(true);
    const [touristName, setTouristName] = useState();
    const [desc, setDesc] = useState("Экологичсекий сбор на озере Рица");
  
    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [filter, setFilter] = useState(0)
    const changeFilter = (event) => {
      setFilter(event.target.value);
    };
  return (
    <div>
      <Modal visible={modal} onClose={() => setModal(false)}>
        <h1 className={s.modalTitle}>Правки в календарь</h1>
        <div className={s.modalContent}>
          <div className={s.jcsb}>
            <div>
              <div className={s.ModalRow}>
                <CalendarInput label="Заезд" />
                <GuestsInput />
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
              <CalendarInput
                label="Заезд"
                error="Выберите дату, недоступную для брони"
              />
              <button className={s.btn160} disabled>
                Применить
              </button>
              <div className={s.addBtn}>
                <img src="../images/plus-add-hotel.svg" alt="" />
                Добавить еще дату
              </div>
            </div>
          </div>
          <ReservedCalendar type="excursion" />
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
      <Modal visible={modal2} onClose={() => setModal2(false)}>
        <h1 className={s.modalTitle}>Правки в календарь</h1>
        <div className={s.modalContent}>
          <div className={s.jcsb}>
            <div>
              <div className={s.ModalRow}>
                <CalendarInput label="Заезд" />
                <TimeInput />
              </div>
              <div className={s.ModalRow}>
                <GuestsInput />
              </div>
              <div className={s.ModalRow}>
                <div className={s.inputBlock}>
                  <p>Имя гостя</p>
                  <input
                    placeholder="Введите имя туриста"
                    value={touristName}
                    onChange={(event) => setTouristName(event.target.value)}
                    type="text"
                    required
                  />
                </div>
                <div className={s.inputBlock}>
                  <p>Телефон гостя</p>
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
              <CalendarInput
                label="Заезд"
                error="Выберите дату, недоступную для брони"
              />
              <button className={s.btn160} disabled>
                Применить
              </button>
              <div className={s.addBtn}>
                <img src="../images/plus-add-hotel.svg" alt="" />
                Добавить еще дату
              </div>
            </div>
          </div>
          <ReservedCalendar type="excursion2" />
          <div className={s.footerBtn}>
            <button className={s.btn160} disabled>
              Сохранить
            </button>
            <button
              className={`${s.btn160} ${s.outlined}`}
              onClick={() => setModal2(false)}
            >
              Отменить
            </button>
          </div>
        </div>
      </Modal>
      <div className="account-page__filter-wrapper">
        <form className="account-page__filter">
          <input
            type="radio"
            value="0"
            id="filterAll"
            name="filter"
            checked={filter == 0}
            onChange={changeFilter}
          />
          <label htmlFor="filterAll">Все</label>
          <input
            type="radio"
            value="1"
            id="filterHotel"
            name="filter"
            checked={filter == 1}
            onChange={changeFilter}
          />
          <label htmlFor="filterHotel">Экскурсии</label>
          <input
            type="radio"
            value="2"
            id="filterGuest"
            name="filter"
            checked={filter == 2}
            onChange={changeFilter}
          />
          <label htmlFor="filterGuest">Впечатления</label>
        </form>
      </div>
      <div className="account-page__reviews-wrapper">
        <CalendarCardAccount
          id="1"
          label="Экскурсия на озеро Рица"
          option="20 человек"
          clickHandler={() => setCalendar(1)}
          active={calendarId == 1}
          opened={openedForReserved}
          setOpened={setOpenedForReserved}
        />
        <CalendarCardAccount
          id="2"
          label="Лепка из глины"
          option="5 человек"
          clickHandler={() => setCalendar(2)}
          active={calendarId == 2}
          opened={openedForReserved2}
          setOpened={setOpenedForReserved2}
        />
      </div>
      {(calendarId == 1  && openedForReserved)&& (
        <div>
          <ReservedCalendar type="excursion" />
          <button className={s.edit} onClick={() => setModal(true)}>
            Внести правки в календарь
          </button>
          <form className={s.form}>
            <div className={s.inputRow}>
              <div className={s.inputBlock}>
                <p className={s.inputTitle}>Цена за взрослый билет с 13 лет</p>
                <input
                  type="text"
                  className={s.input}
                  value={priceAdult}
                  onChange={(event) => setPriceAdult(event.target.value)}
                />
              </div>
              <div className={s.inputBlock}>
                <p className={s.inputTitle}>Цена за детский билет до 12 лет</p>
                <input
                  type="text"
                  className={s.input}
                  value={priceKids}
                  onChange={(event) => setPriceKids(event.target.value)}
                />
              </div>
              <div className={s.inputBlock}>
                <p className={s.inputTitle}>Цена за детский билет до 7 лет</p>
                <input
                  type="text"
                  className={s.input}
                  value={priceBaby}
                  onChange={(event) => setPriceBaby(event.target.value)}
                />
              </div>
            </div>

            <div className={s.inputBlock}>
              <p className={s.inputTitle}>1. Доп. опция</p>
              <textarea
                className={s.input}
                value={desc}
                onChange={(event) => setDesc(event.target.value)}
              />
            </div>
            <div className={s.inputBlock}>
              <p className={s.inputTitle}>Цена за взрослый билет с 13 лет</p>
              <input
                type="text"
                className={s.input}
                value={priceAdult2}
                onChange={(event) => setPriceAdult2(event.target.value)}
              />
            </div>
            <div className={s.inputBlock}>
              <p className={s.inputTitle}>Цена за детский билет до 12 лет</p>
              <input
                type="text"
                className={s.input}
                value={priceKids2}
                onChange={(event) => setPriceKids2(event.target.value)}
              />
            </div>
            <div className={s.inputBlock}>
              <p className={s.inputTitle}>Цена за детский билет до 7 лет</p>
              <input
                type="text"
                className={s.input}
                value={priceBaby2}
                onChange={(event) => setPriceBaby2(event.target.value)}
              />
            </div>
            <button className={s.savebtn}>Сохранить изменения</button>
          </form>
        </div>
      )}
      {(calendarId == 2 && openedForReserved2) && (
        <div>
          <ReservedCalendar type="excursion2" />
          <button className={s.edit} onClick={() => setModal2(true)}>
            Внести правки в календарь
          </button>
          <form className={s.form}>
            <div className={s.inputRow}>
              <div className={s.inputBlock}>
                <p className={s.inputTitle}>Цена за взрослый билет с 13 лет</p>
                <input
                  type="text"
                  className={s.input}
                  value={priceAdult}
                  onChange={(event) => setPriceAdult(event.target.value)}
                />
              </div>
              <div className={s.inputBlock}>
                <p className={s.inputTitle}>Цена за детский билет до 12 лет</p>
                <input
                  type="text"
                  className={s.input}
                  value={priceKids}
                  onChange={(event) => setPriceKids(event.target.value)}
                />
              </div>
              <div className={s.inputBlock}>
                <p className={s.inputTitle}>Цена за детский билет до 7 лет</p>
                <input
                  type="text"
                  className={s.input}
                  value={priceBaby}
                  onChange={(event) => setPriceBaby(event.target.value)}
                />
              </div>
            </div>
            <button className={s.savebtn}>Сохранить изменения</button>
          </form>
        </div>
      )}
    </div>
  );
}
