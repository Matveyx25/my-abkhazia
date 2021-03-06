import React, { useState } from "react";
import s from "./Calendar.module.css";
import { Modal } from "../../../components/Modal/Modal";
import { CalendarInput } from "../../../components/CalendarInput/CalendarInput";
import { ReservedCalendar } from "../../../components/ReservedCalendar/ReservedCalendar";
import { CalendarCardAccount } from "../../../components/CalendarCardAccount/CalendarCardAccount";
import { TouristCard } from "../../../components/TouristCard/TouristCard";
import { GuestsInput } from "../../../components/GuestsInput/GuestsInput";
import { TimeInput } from "../../../components/TimeInput/TimeInput";
import Checkbox from "../../../components/Checkbox/Checkbox";
import { WeakInputs } from "../../../components/WeakInputs/WeakInputs";
import { CalendarInputReserved } from "../../../components/CalendarInput/CalendarInputReserved";

export const CalendarExcursion = () => {
  const [calendarId, setCalendar] = useState(1);

  const [priceAdult, setPriceAdult] = useState("2 000₽");
  const [priceKids, setPriceKids] = useState("1 500₽");
  const [priceBaby, setPriceBaby] = useState("1 000₽");
  const [priceAdult2, setPriceAdult2] = useState("350₽");
  const [priceKids2, setPriceKids2] = useState("250₽");
  const [priceBaby2, setPriceBaby2] = useState("Бесплатно");

  const [phone, setPhone] = useState();
  const [phone2, setPhone2] = useState();
  const [openedForReserved, setOpenedForReserved] = useState(true);
  const [openedForReserved2, setOpenedForReserved2] = useState(true);
  const [touristName, setTouristName] = useState();
  const [touristName2, setTouristName2] = useState();
  const [desc, setDesc] = useState("Экологичсекий сбор на озере Рица");

  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [calendarModal, setCalendarModal] = useState(false);
  const [filter, setFilter] = useState(0);
  const [tourists, setTourists] = useState()
  const [calendarValue, setCalendarValue] = useState()
  const [tourists2, setTourists2] = useState()
  const [calendarValue2, setCalendarValue2] = useState()
  const [time, setTime] = useState()
  const [sales, setSales] = useState([{ value: "", id: 1 }]);
  const [reservedCalendars, setReservedCalendars] = useState([{id: 1}])
  const [reservedCalendars2, setReservedCalendars2] = useState([{id: 1}])

  const [activeUser, setActiveUser] = useState(false);

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
                <CalendarInput label="Дата экскурсии" onChange={setCalendarValue}/>
                <GuestsInput onChange={setTourists}/>
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
                <button className={s.btn200} disabled={!phone || !touristName || !calendarValue || !tourists}>
                  Применить
                </button>
                {(phone && touristName && calendarValue && tourists) &&
                  <button className={`${s.btn200} ${s.orange}`} onClick={() => {
                    setPhone('')
                    setTouristName('')
                    }}>
                    Добавить еще гостя
                  </button>
                }
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
                <CalendarInput label="Дата экскурсии" onChange={setCalendarValue2}/>
                <div className={s.dateWrapper}>
                  <p className={s.dateTitle}>Время</p>
                  <div className={s.inputBlock}>
                  <img
                      src="/images/transfer/timer.svg"
                      width="18"
                      height="18"
                      alt=""
                  />
                  <input
                      type="text"
                      name="transfer__time"
                      placeholder="00:00"
                      value={time}
                      onChange={(event) => setTime(event.target.value)}
                      required
                  />
                  </div>
              </div>
              </div>
              <div className={s.ModalRow}>
                <GuestsInput onChange={setTourists2}/>
              </div>
              <div className={s.ModalRow}>
                <div className={s.inputBlock}>
                  <p>Имя гостя</p>
                  <input
                    placeholder="Введите имя туриста"
                    value={touristName2}
                    onChange={(event) => setTouristName2(event.target.value)}
                    type="text"
                    required
                  />
                </div>
                <div className={s.inputBlock}>
                  <p>Телефон гостя</p>
                  <input
                    placeholder="+7 (000) 000-00-00"
                    value={phone2}
                    onChange={(event) => setPhone2(event.target.value)}
                    type="text"
                    required
                  />
                </div>
              </div>
              <div className={s.btnsRow}>
                <button className={s.btn200} disabled={!phone2 || !touristName2 || !calendarValue2 || !tourists2 || !time}>
                  Применить
                </button>
                {(phone2 && touristName2 && calendarValue2 && tourists2 && time) &&
                  <button className={`${s.btn200} ${s.orange}`} onClick={() => {
                    setPhone2('')
                    setTouristName2('')
                    }}>
                    Добавить еще гостя
                  </button>
                }
              </div>
            </div>
            <div className={s.leftBlock}>
            {reservedCalendars2.map((el, index) => 
                <CalendarInputReserved
                  label="Заезд"
                  error={index == 0 && "Выберите дату, недоступную для брони"}
                  key={el.id}
                  withOutTitle={index > 0}
                />
              )}
              <div className={s.addBtn} onClick={() => {
                setReservedCalendars2([...reservedCalendars2, {id: reservedCalendars2[reservedCalendars2.length - 1].id + 1}])
                }}>
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
      <Modal visible={calendarModal} onClose={() => setCalendarModal(false)}>
        <h1 className={s.modalTitle}>Добавить расписание</h1>
        <div className={s.modalContent}>
        <p>День недели и время</p>
        <div className={s.row30}>
        {sales.map((el, index) => (
              <WeakInputs key={index} id={el.id}/>
            ))}
            <div
              className={s.addInputsBlock}
              onClick={() =>
                setSales([
                  ...sales,
                  { value: "", id: sales[sales.length - 1].id + 1 },
                ])
              }
            >
              <img src="/images/plus-add-hotel.svg" alt="" />
              <p>Добавить еще день недели и время</p>
            </div>
        </div>
          <ReservedCalendar
            type="createExcursion"
          />
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
      {calendarId == 1 && openedForReserved && (
        <div>
          <ReservedCalendar
            type="excursion"
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

            <div className={`${s.inputBlock} ${s.mt15}`}>
              <p className={s.inputTitle}>1. Доп. опция</p>
              <textarea
                className={s.input}
                value={desc}
                onChange={(event) => setDesc(event.target.value)}
              />
            </div>
            <div className={`${s.inputBlock} ${s.mt15}`}>
              <p className={s.inputTitle}>Цена за взрослый билет с 13 лет</p>
              <input
                type="text"
                className={s.input}
                value={priceAdult2}
                onChange={(event) => setPriceAdult2(event.target.value)}
              />
            </div>
            <div className={`${s.inputBlock} ${s.mt15}`}>
              <p className={s.inputTitle}>Цена за детский билет до 12 лет</p>
              <input
                type="text"
                className={s.input}
                value={priceKids2}
                onChange={(event) => setPriceKids2(event.target.value)}
              />
            </div>
            <div className={`${s.inputBlock} ${s.mt15}`}>
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
      {calendarId == 2 && openedForReserved2 && (
        <div>
          <ReservedCalendar
            type="excursion2"
            activeUser={activeUser}
            clickHandler={() => setActiveUser(true)}
          />
          <div className={s.ModalRow}>
            <button className={s.edit} onClick={() => setModal2(true)}>
              Внести правки в календарь
            </button>
            <button className={s.editOutlined} onClick={() => setCalendarModal(true)}>
              Изменить расписание
            </button>
          </div>
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
};
