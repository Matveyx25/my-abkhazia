import React, { useState } from "react";
import { CalendarCardAccount } from "../../../../components/CalendarCardAccount/CalendarCardAccount";
import { Modal } from "../../../../components/Modal/Modal";
import { ReservedCalendar } from "../../../../components/ReservedCalendar/ReservedCalendar";
import s from "../Calendar.module.css";


export const CreateCalendarExcursion = () => {
  const [priceAdult, setPriceAdult] = useState("2 000₽");
  const [priceKids, setPriceKids] = useState("1 500₽");
  const [priceBaby, setPriceBaby] = useState("1 000₽");
  const [priceAdult2, setPriceAdult2] = useState("350₽");
  const [priceKids2, setPriceKids2] = useState("250₽");
  const [priceBaby2, setPriceBaby2] = useState("Бесплатно");
  const [desc, setDesc] = useState("");
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
        <p>Добавление экскурсии</p>
        <p>Добавление в календарь</p>
      </div>
      <h1 className="account-page__title">Календарь</h1>
      <p className="account-page__title-text">
      Добавьте свободные даты к вашей квартире, чтобы туристы смогли видеть свободные даты, возможные для бронирования
      </p>
      <div className="account-page__reviews-wrapper">
        <CalendarCardAccount
          id="1"
          label="Экскурсия на озеро Рица"
          option="20 человек" 
          opened={openedForReserved}
          setOpened={setOpenedForReserved}
          error={error}
        />
      </div>
      {openedForReserved && <ReservedCalendar
        type="createHouse"
      />}
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
      </form>
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
