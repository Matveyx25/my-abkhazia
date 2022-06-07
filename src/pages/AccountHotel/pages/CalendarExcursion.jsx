import React, { useState } from 'react'
import s from './Calendar.module.css'
import { Modal } from '../../../components/Modal/Modal';
import { CalendarInput } from '../../../components/CalendarInput/CalendarInput';
import { ReservedCalendar } from '../../../components/ReservedCalendar/ReservedCalendar';
import { CalendarCardAccount } from '../../../components/CalendarCardAccount/CalendarCardAccount';
import { TouristCard } from '../../../components/TouristCard/TouristCard';
import { GuestsInput } from '../../../components/GuestsInput/GuestsInput';

export const CalendarExcursion = () => {

    const [priceAdult, setPriceAdult] = useState("2 000₽");
    const [priceKids, setPriceKids] = useState("1 500₽");
    const [priceBaby, setPriceBaby] = useState("1 000₽");
    const [priceAdult2, setPriceAdult2] = useState("350₽");
    const [priceKids2, setPriceKids2] = useState("250₽");
    const [priceBaby2, setPriceBaby2] = useState("Бесплатно");

    const [phone, setPhone] = useState();
    const [touristName, setTouristName] = useState();
    const [desc, setDesc] = useState("Экологичсекий сбор на озере Рица");
  
    const [modal, setModal] = useState(false);
  
    const [activeUser, setActiveUser] = useState(false);

  return (
    <div>
        <Modal visible={modal} onClose={() => setModal(false)}>
        <h1 className={s.modalTitle}>Правки в календарь</h1>
        <div className={s.modalContent}>
          <div className={s.jcsb}>
            <div>
              <div className={s.ModalRow}>
                <CalendarInput label="Заезд"/>
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
          <ReservedCalendar
            activeUser={activeUser}
            clickHandler={() => setActiveUser(true)}
            type='excursion'
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
        <CalendarCardAccount id="1" label="Экскурсия на озеро Рица" option="20 человек"/>
      </div>
      <ReservedCalendar
        activeUser={activeUser}
        clickHandler={() => setActiveUser(true)}
        type='excursion'
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

        <div className={s.inputBlock}>
            <p className={s.inputTitle}>Цена за детский билет до 7 лет</p>
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
  )
}
