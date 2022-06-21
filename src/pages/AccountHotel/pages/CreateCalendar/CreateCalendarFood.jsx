import React, { useState } from "react";
import { CalendarCardAccount } from "../../../../components/CalendarCardAccount/CalendarCardAccount";
import { Modal } from "../../../../components/Modal/Modal";
import { ReservedCalendar } from "../../../../components/ReservedCalendar/ReservedCalendar";
import s from "../Calendar.module.css";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import { CounterInput } from '../../../../components/CounterInput/CounterInput';
import { WeakInputs } from "../../../../components/WeakInputs/WeakInputs";


export const CreateCalendarFood = () => {
  const [price, setPrice] = useState("2 000₽");
  const [error, setError] = useState("");
  const [openedForReserved, setOpenedForReserved] = useState(true);

  const [weak, setWeak] = useState([])
  const [timer1, setTimer1] = useState()
  const [timer2, setTimer2] = useState()
  const [weaks, setWeaks] = useState(1)

  const [modal, setModal] = useState(false);
  const [calendarModal, setCalendarModal] = useState(false);
  const [sales, setSales] = useState([
    {value: '', id: 1},
  ]);

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
          {sales.map((el, index) => 
            <WeakInputs counter={true} key={index} id={el.id}/>
          )}
        <div className={s.addInputsBlock} onClick={() => setSales([...sales, {value: '', id: sales[sales.length - 1].id + 1}])}>
          <img src="/images/plus-add-hotel.svg" alt="" />
          <p>Добавить еще день недели и время</p>
        </div>
        </div>

          <button className={`${s.btn160} ${s.mt30}`} disabled={weak.length == 0 || !timer1 || !timer2}>
            Применить
          </button>
          <ReservedCalendar
            type="createFood"
          />
          <div className={s.footerBtn}>
              <button className={s.btn160} disabled={weak.length == 0 || !timer1 || !timer2}>
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
          opened={openedForReserved}
          setOpened={setOpenedForReserved}
          error={error}
        />
        <p className={s.calendarCardText}>Добавьте Ваше расписание в календарь (день недели и время, кол-во столиков)</p>
          <button className={`${s.btn200} ${s.orange}`} onClick={() => setCalendarModal(true)}>Добавить расписание</button>
        </div>
      </div>
      {openedForReserved && <><ReservedCalendar type="createFood"/>
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
      }}>Активировать и отправить на модерацию</button></>}
    </div>
  );
};
