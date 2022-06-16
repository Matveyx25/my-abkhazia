import React, { useState } from "react";
import { CalendarCardAccount } from "../../../../components/CalendarCardAccount/CalendarCardAccount";
import { Modal } from "../../../../components/Modal/Modal";
import { ReservedCalendar } from "../../../../components/ReservedCalendar/ReservedCalendar";
import s from "../Calendar.module.css";


export const CreateCalendarRent = () => {
  const [price, setPrice] = useState("1 300₽");
  const [error, setError] = useState("");
  const [openedForReserved, setOpenedForReserved] = useState(false);

  const [modal, setModal] = useState(false);

  return (
    <div>
      <Modal visible={modal} onClose={() => setModal(false)}>
        <h1 className={s.modalTitle}>Спасибо!</h1>
        <div className={s.thanks}>
          <p>Ваше объявление отправлено на модерацию, в течение 30 минут оно будет активировано и его будут видеть пользователи сайта</p>
          <button className={s.btn160} onClick={() => setModal(false)}>В личный кабинет</button>
        </div>
      </Modal>
      <div className="account-page__breadcrumps">
        <p>Добавление машины</p>
        <p>Добавление в календарь</p>
      </div>
      <h1 className="account-page__title">Календарь</h1>
      <p className="account-page__title-text">
      Добавьте свободные даты к вашему автомобилю, чтобы туристы смогли видеть свободные даты, возможные для бронирования
      </p>
      <div className="account-page__reviews-wrapper">
        <CalendarCardAccount
          id="1"
          label="Audi Q5"
          opened={openedForReserved}
          setOpened={setOpenedForReserved}
          error={error}
        />
      </div>
      {openedForReserved && <><ReservedCalendar
        type="createRent"
      />
      <div className={s.inputRow}>
        <div className={s.inputBlock}>
          <p className={s.inputTitle}>Цена за один день</p>
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
