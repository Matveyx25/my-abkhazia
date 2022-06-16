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

export const CalendarFood = () => {
  const [priceDay, setPriceDay] = useState("2 000₽");

  const [phone, setPhone] = useState();
  const [touristName, setTouristName] = useState();
  const [openedForReserved, setOpenedForReserved] = useState(true);
  const [weak, setWeak] = useState([])
  const [timer1, setTimer1] = useState()
  const [timer2, setTimer2] = useState()
  const [tabels, setTabels] = useState(0)

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
                <CalendarInput label="Дата посещения" />
                <TimeInput />
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
        <div className={s.weakWrapper}>
        <div className={s.inputsModalWrapper}>
        <div className={s.weakInput}>
            <img
              src="/images/transfer/calendar.svg"
              width="13.5"
              height="15"
              alt=""
            />
            <input
              placeholder="Выберите день недели"
              type="text"
              value={weak}
              onChange={() => setWeak(weak)}
              className="account-page__input-with-radio"
              required
            />
            <div className={s.checkboxesBlock}>
              <Checkbox
                labelText="Понидельник"
                inputId="pn"
                inputName="weak"
                inputValue="Понидельник"
                changeFunction={(event) => setWeak(event.target.checked ?
                  [...weak ,event.target.value] :
                 weak.filter(item => item != event.target.value))}
              />
              <Checkbox
                labelText="Вторник"
                inputId="pn"
                inputName="weak"
                inputValue="Понидельник"
                changeFunction={(event) => setWeak(event.target.checked ?
                  [...weak ,event.target.value] :
                 weak.filter(item => item != event.target.value))}
              />
              <Checkbox
                labelText="Среда"
                inputId="sr"
                inputName="weak"
                inputValue="Среда"
                changeFunction={(event) => setWeak(event.target.checked ?
                  [...weak ,event.target.value] :
                 weak.filter(item => item != event.target.value))}
              />
              <Checkbox
                labelText="Четверг"
                inputId="cht"
                inputName="weak"
                inputValue="Четверг"
                changeFunction={(event) => setWeak(event.target.checked ?
                  [...weak ,event.target.value] :
                 weak.filter(item => item != event.target.value))}
              />
              <Checkbox
                labelText="Пятница"
                inputId="pt"
                inputName="weak"
                inputValue="Пятница"
                changeFunction={(event) => setWeak(event.target.checked ?
                  [...weak ,event.target.value] :
                 weak.filter(item => item != event.target.value))}
              />
              <Checkbox
                labelText="Суббота"
                inputId="sb"
                inputName="weak"
                inputValue="Суббота"
                changeFunction={(event) => setWeak(event.target.checked ?
                  [...weak ,event.target.value] :
                 weak.filter(item => item != event.target.value))}
              />
              <Checkbox
                labelText="Воскресенье"
                inputId="vs"
                inputName="weak"
                inputValue="Воскресенье"
                changeFunction={(event) => setWeak(event.target.checked ?
                  [...weak ,event.target.value] :
                 weak.filter(item => item != event.target.value))}
              />
            </div>
            </div>
            <div className={s.weakInput}>
            <img
                src="/images/transfer/timer.svg"
                width="18"
                height="18"
                alt=""
            />
            <input
              placeholder="Выберите время Со скольки"
              type="text"
              value={timer1}
              onChange={(event) => setTimer1(event.target.value)}
              className="account-page__input-with-radio"
              required
            />
            </div>
            <div className={s.weakInput}>
              <img
                  src="/images/transfer/timer.svg"
                  width="18"
                  height="18"
                  alt=""
              />
            <input
              placeholder="Выберите время До скольки"
              type="text"
              value={timer2}
              onChange={(event) => setTimer2(event.target.value)}
              className="account-page__input-with-radio"
              required
            />
            </div>
        </div>
        <div className={s.weekcounter}>
          <CounterInput label="Кол-во столиков" value={tabels} onUpdate={setTabels}/>
        </div>
        </div>
        <div className={s.addInputsBlock}>
          <img src="/images/plus-add-hotel.svg" alt="" />
          <p>Добавить еще день недели и время</p>
        </div>
        </div>
       
          <button className={`${s.btn160} ${s.mt30}`} disabled>
            Применить
          </button>
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
      {openedForReserved && (
        <ReservedCalendar
          type="food"
          activeUser={activeUser}
          clickHandler={() => setActiveUser(true)}
        />
      )}
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
    </div>
  );
};
