import React, { useState } from "react";
import s from "./Calendar.module.css";
import { Modal } from "../../../components/Modal/Modal";
import { CalendarInput } from "../../../components/CalendarInput/CalendarInput";
import { ReservedCalendar } from "../../../components/ReservedCalendar/ReservedCalendar";
import { CalendarCardAccount } from "../../../components/CalendarCardAccount/CalendarCardAccount";
import { TimeInput } from "../../../components/TimeInput/TimeInput";
import { TouristCard } from "../../../components/TouristCard/TouristCard";
import { CounterInput } from '../../../components/CounterInput/CounterInput';
import Checkbox from '../../../components/Checkbox/Checkbox';
import { WeakInputs } from '../../../components/WeakInputs/WeakInputs';
import { CalendarInputReserved } from "../../../components/CalendarInput/CalendarInputReserved";

export const CalendarFood = () => {
  const [priceDay, setPriceDay] = useState("2 000₽");

  const [phone, setPhone] = useState();
  const [touristName, setTouristName] = useState();
  const [openedForReserved, setOpenedForReserved] = useState(true);
  const [weak, setWeak] = useState([])
  const [timer1, setTimer1] = useState()
  const [timer2, setTimer2] = useState()
  const [tabels, setTabels] = useState(0)
  const [calendar, setCalendar] = useState()
  const [time, setTime] = useState()
  const [sales, setSales] = useState([{ value: "", id: 1 }]);
  const [reservedCalendars, setReservedCalendars] = useState([{id: 1}])


  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [activeUser, setActiveUser] = useState(false);

  return (
    <div>
      <Modal visible={modal} onClose={() => setModal(false)}>
        <h1 className={s.modalTitle}>Правки в календарь</h1>
        <div className={s.modalContent}>
          <div className={s.jcsb}>
            <div>
              <div className={s.ModalRow}>
                <CalendarInput label="Дата посещения" onChange={setCalendar}/>
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
                        placeholder="12:00"
                        value={time}
                        onChange={(event) => setTime(event.target.value)}
                        required
                    />
                    </div>
                </div>
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
                <button className={s.btn200} disabled={!phone || !touristName || !calendar || !time}>
                  Применить
                </button>
                {(phone && touristName && calendar && time) &&
                  <button className={`${s.btn200} ${s.orange}`} onClick={() => {
                    setPhone('')
                    setTouristName('')
                    setTime('')
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
          <ReservedCalendar type="food" />
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
        <p>День недели и время</p>
        <div className={s.row30}>
        {sales.map((el, index) => (
              <WeakInputs counter={true} key={index} id={el.id}/>
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
            type="food"
          />
          <div className={s.footerBtn}>
              <button className={s.btn160} disabled>
              Сохранить
            </button>
              <button className={`${s.btn160} ${s.outlined}`} onClick={() => setModal2(false)}>
              Отменить
            </button>
        </div>
        </div>
      </Modal>
      <div className="account-page__reviews-wrapper">
        <CalendarCardAccount
          id="1"
          label="Ресторан Абатаа"
          opened={openedForReserved}
          setOpened={setOpenedForReserved}
        />
      </div>
      {openedForReserved && (<>
        <ReservedCalendar
          type="food"
          activeUser={activeUser}
          clickHandler={() => setActiveUser(true)}
        />
      <div className={s.ModalRow}>
        <button className={s.edit} onClick={() => setModal(true)}>
          Внести правки в календарь
        </button>
        <button className={s.editOutlined} onClick={() => setModal2(true)}>
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
            <p className={s.inputTitle}>Цена за средний чек</p>
            <input
              type="text"
              className={s.input}
              value={priceDay}
              onChange={(event) => setPriceDay(event.target.value)}
            />
          </div>
        </div>
        <button className={s.savebtn}>Сохранить изменения</button>
      </form>
      </>
      )}
    </div>
  );
};
