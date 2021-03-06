import React, { useState } from "react";
import s from "./Calendar.module.css";
import { Modal } from "../../../components/Modal/Modal";
import { CalendarInput } from "../../../components/CalendarInput/CalendarInput";
import { ReservedCalendar } from "../../../components/ReservedCalendar/ReservedCalendar";
import { CalendarCardAccount } from "../../../components/CalendarCardAccount/CalendarCardAccount";
import { TimeInput } from "../../../components/TimeInput/TimeInput";
import { LocationInput } from "../../../components/LocationInput/LocationInput";
import { TouristCard } from '../../../components/TouristCard/TouristCard';
import { act } from "react-dom/test-utils";
import { CalendarInputReserved } from "../../../components/CalendarInput/CalendarInputReserved";

export const CalendarTransfer = () => {
  const [priceDay, setPriceDay] = useState("2 000₽");

  const [phone, setPhone] = useState();
  const [calendar, setCalendar] = useState();
  const [trakNumber, setTrakNumber] = useState();
  const [location, setLocation] = useState();
  const [location2, setLocation2] = useState();
  const [backCheck, setBackCheck] = useState(false);
  const [chair, setChair] = useState(0);
  const [booster, setBooster] = useState(0);
  const [touristName, setTouristName] = useState();
  const [tourists, setTourists] = useState();
  const [time, setTime] = useState();
  const [openedForReserved, setOpenedForReserved] = useState(true);

  const [modal, setModal] = useState(false);
  const [activeUser, setActiveUser] = useState(false);
  const [reservedCalendars, setReservedCalendars] = useState([{id: 1}])

  return (
    <div>
      <Modal visible={modal} onClose={() => setModal(false)}>
        <h1 className={s.modalTitle}>Правки в календарь</h1>
        <div className={s.modalContent}>
          <div className={s.jcsb}>
            <div>
              <div className={s.ModalRow}>
                <CalendarInput label="Дата забора" onChange={setCalendar}/>
                <div className={s.dateWrapper}>
                  <p className={s.dateTitle}>Время забора</p>
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
                <LocationInput label="Откуда" onChange={setLocation}/>
                <LocationInput label="Куда" onChange={setLocation2}/>
              </div>
              <div className={s.ModalRow}>
                <div className={s.inputBlock}>
                  <p>Номер рейса</p>
                  <input
                    placeholder="№ Введите номер рейса"
                    value={trakNumber}
                    onChange={(event) => setTrakNumber(event.target.value)}
                    type="text"
                    required
                  />
                </div>
                <div className={s.inputBlock}>
                  <p>Кол-во пассажиров</p>
                  <div className={s.position}>
                    <img src="../images/user-filled.svg" alt="" />
                    <input
                      placeholder="Выберите кол- во пассажиров"
                      value={tourists}
                      onChange={(event) => setTourists(event.target.value)}
                      type="number"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className={s.ModalRow}>
                <div className={s.counterWrapper}>
                  <div className="person-sub-menu__age-type-block">
                    <h5 className="person-sub-menu__title">Детское кресло</h5>
                    <p className="person-sub-menu__text">Вес: 9–18 кг</p>
                  </div>
                  <div className={s.counterBlock}>
                    <p
                      className="person-sub-menu__minus"
                      onClick={() => setChair(chair - 1)}
                    >
                      <p className="minus"></p>
                    </p>
                    <p className={s.countText}>{chair}</p>
                    <p
                      className="person-sub-menu__plus"
                      onClick={() => setChair(chair + 1)}
                    >
                      +
                    </p>
                  </div>
                  
                </div>
                <div className={s.counterWrapper}>
                  <div className="person-sub-menu__age-type-block">
                    <h5 className="person-sub-menu__title">Бустер</h5>
                    <p className="person-sub-menu__text">Вес: 15–36 кг</p>
                  </div>
                  <div className={s.counterBlock}>
                    <p
                      className="person-sub-menu__minus"
                      onClick={() => setBooster(booster - 1)}
                    >
                      <p className="minus"></p>
                    </p>
                    <p className={s.countText}>{booster}</p>
                    <p
                      className="person-sub-menu__plus"
                      onClick={() => setBooster(booster + 1)}
                    >
                      +
                    </p>
                  </div>
                </div>
              </div>
              <article
                className="transfer__booking-tongler"
                onClick={() => setBackCheck(!backCheck)}
              >
                <p className={s.switchText}>Обратный трансфер</p>
                <div
                  className={
                    backCheck
                      ? "booking-tongler__strike  booking-tongler__strike--both"
                      : "booking-tongler__strike"
                  }
                >
                  <div
                    className={
                      backCheck
                        ? "booking-tongler__circle booking-tongler__circle--both"
                        : "booking-tongler__circle"
                    }
                  ></div>
                </div>
              </article>
              {backCheck && (
                <div className={s.ModalRow}>
                  <CalendarInput label="Дата забора" />
                  <TimeInput label="Время забора" />
                </div>
              )}
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
              <button className={s.btn200} disabled={!phone || !touristName || !calendar || !tourists || !time || !location || !location2 || !trakNumber}>
                  Применить
                </button>
                {(phone && touristName && calendar && tourists && time && location && location2 && trakNumber) &&
                  <button className={`${s.btn200} ${s.orange}`} onClick={() => {
                    setPhone('')
                    setTouristName('')
                    setTourists('')
                    setTrakNumber('')
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
          <ReservedCalendar type="transfer" />
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
        <CalendarCardAccount
          id="1"
          label="Автомобиль эконом класса"
          option="5 машин"
          opened={openedForReserved}
          setOpened={setOpenedForReserved}
        />
      </div>
      {openedForReserved && <>
      <ReservedCalendar type="transfer" activeUser={activeUser} clickHandler={() => setActiveUser(true)}/>
      <button className={s.edit} onClick={() => setModal(true)}>
        Внести правки в календарь
      </button>
      {activeUser && (
        <div className={s.tourist}>
          <TouristCard btnTitle="Удалить бронь" options={[
            {title: 'От:', value: 'Аэропорт Сочи'},
            {title: '№ рейса:', value: '2325'},
            {title: 'Дата и время:', value: '4 мая, ср., в 9:00'},
            {title: 'До:', value: 'Гагра, улица и дом'},
            {title: 'Пассажиры:', value: '2 взрослых'},
            {title: 'Обратный трансфер:', value: '11 мая,ср. в 21:00'},
          ]}/>
          <p className={s.closeBtn} onClick={() => setActiveUser(false)}>
            Скрыть
          </p>
        </div>
      )}
      <form className={s.form}>
        <div className={s.inputRow}>
          <div className={s.inputBlock}>
            <p className={s.inputTitle}>Цена за км</p>
            <input
              type="text"
              className={s.input}
              value={priceDay}
              onChange={(event) => setPriceDay(event.target.value)}
            />
          </div>
        </div>
        <button className={s.savebtn}>Сохранить изменения</button>
      </form></>}
    </div>
  );
};
