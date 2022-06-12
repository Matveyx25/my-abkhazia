import React, { useState } from "react";
import { CalendarCardAccount } from "../../../../components/CalendarCardAccount/CalendarCardAccount";
import { Modal } from "../../../../components/Modal/Modal";
import { ReservedCalendar } from "../../../../components/ReservedCalendar/ReservedCalendar";
import s from "../Calendar.module.css";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import { CounterInput } from '../../../../components/CounterInput/CounterInput';


export const CreateCalendarFood = () => {
  const [price, setPrice] = useState("2 000₽");
  const [error, setError] = useState("");
  const [openedForReserved, setOpenedForReserved] = useState(true);

  const [weak, setWeak] = useState([])
  const [timer1, setTimer1] = useState()
  const [timer2, setTimer2] = useState()
  const [tabels, setTabels] = useState(0)

  const [modal, setModal] = useState(false);
  const [calendarModal, setCalendarModal] = useState(false);

  return (
    <div>
      <Modal visible={modal} onClose={() => setModal(false)}>
        <h1 className={s.modalTitle}>Спасибо!</h1>
        <div className={s.thanks}>
          <p>Ваше объявление отправлено на модерацию, в течение 30 минут оно будет активировано и его будут видеть пользователи сайта</p>
          <button className={s.btn160} onClick={() => setModal(false)}>В личный кабинет</button>
        </div>
      </Modal>
      <Modal visible={calendarModal} onClose={() => setCalendarModal(false)}>
        <h1 className={s.modalTitle}>Добавить расписание</h1>
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
            type="createFood"
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
      <div className="account-page__breadcrumps">
        <p>Добавление ресторана</p>
        <p>Добавление в календарь</p>
      </div>
      <h1 className="account-page__title">Календарь</h1>
      <p className="account-page__title-text">
      Добавьте свободные даты к вашему ресторану, чтобы туристы смогли видеть свободные даты, возможные для бронирования
      </p>
      <div className="account-page__reviews-wrapper">
        <div>
        <CalendarCardAccount
          id="1"
          label="Ресторан Абаата"
          option="5 человек" 
          opened={openedForReserved}
          setOpened={setOpenedForReserved}
          error={error}
        />
        <p className={s.calendarCardText}>Добавьте Ваше расписание в календарь (день недели и время, кол-во столиков)</p>
          <button className={`${s.btn200} ${s.orange}`} onClick={() => setCalendarModal(true)}>Добавить расписание</button>
        </div>
      </div>
      {openedForReserved && <ReservedCalendar type="createFood"/>}
      <div className={s.inputRow}>
        <div className={s.inputBlock}>
          <p className={s.inputTitle}>Цена за средни йчек</p>
          <input
            type="text"
            className={s.input}
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
      </div>
      <button className={s.moderationButton} onClick={() => {
        if(!openedForReserved){
          setError('not required')
        }else{
          setModal(true)
        }
      }}>Активировать и отправить на модерацию</button>
    </div>
  );
};
