import React, { useState } from 'react'
import s from './Calendar.module.css'
import { Modal } from '../../../components/Modal/Modal';
import { CalendarInput } from '../../../components/CalendarInput/CalendarInput';
import { ReservedCalendar } from '../../../components/ReservedCalendar/ReservedCalendar';
import { CalendarCardAccount } from '../../../components/CalendarCardAccount/CalendarCardAccount';
import { TouristCard } from '../../../components/TouristCard/TouristCard';
import { CalendarInputReserved } from '../../../components/CalendarInput/CalendarInputReserved';

export const CalendarHouse = () => {

    const [price, setPrice] = useState("1 300₽");
    const [priceMonth, setPriceMonth] = useState("35 000₽");
    const [life, setLife] = useState("от 3 ночей");
    const [phone, setPhone] = useState();
    const [touristName, setTouristName] = useState();
    const [calendar, setCalendar] = useState();
    const [calendar2, setCalendar2] = useState();
  const [openedForReserved, setOpenedForReserved] = useState(true);
  const [reservedCalendars, setReservedCalendars] = useState([{id: 1}])

  
    const [modal, setModal] = useState(false);
  
    const [activeUser, setActiveUser] = useState(false);

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
                <CalendarInput label="Заезд" onChange={setCalendar}/>
                <CalendarInput label="Выезд" onChange={setCalendar2}/>
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
                <button className={s.btn200} disabled={!phone || !touristName || !calendar || !calendar2}>
                  Применить
                </button>
                {(phone && touristName && calendar && calendar2) &&
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
          <ReservedCalendar type="house" />
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
        <CalendarCardAccount id="1" label="1 комнатная квартира" 
        opened={openedForReserved}
        setOpened={setOpenedForReserved}/>
      </div>
      {openedForReserved && <>
      <ReservedCalendar
        activeUser={activeUser}
        clickHandler={() => setActiveUser(true)}
        type="house"
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
          <p className={s.inputTitle}>Цена за месяц</p>
          <input
            type="text"
            className={s.input}
            value={priceMonth}
            onChange={(event) => setPriceMonth(event.target.value)}
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
      <button className={s.savebtn}>Сохранить изменения</button></>}
    </div>
  );
}
