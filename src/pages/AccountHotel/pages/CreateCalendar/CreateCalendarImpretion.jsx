import React, { useState } from "react";
import { CalendarCardAccount } from "../../../../components/CalendarCardAccount/CalendarCardAccount";
import { Modal } from "../../../../components/Modal/Modal";
import { ReservedCalendar } from "../../../../components/ReservedCalendar/ReservedCalendar";
import s from "../Calendar.module.css";
import { TimeInput } from "../../../../components/TimeInput/TimeInput";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import { WeakInputs } from "../../../../components/WeakInputs/WeakInputs";

export const CreateCalendarImpretion = () => {
  const [priceAdult, setPriceAdult] = useState("2 000₽");
  const [priceKids, setPriceKids] = useState("1 500₽");
  const [priceBaby, setPriceBaby] = useState("1 000₽");
  const [error, setError] = useState("");
  const [openedForReserved, setOpenedForReserved] = useState(false);

  const [weak, setWeak] = useState([]);
  const [timer1, setTimer1] = useState();
  const [timer2, setTimer2] = useState();

  const [modal, setModal] = useState(false);
  const [calendarModal, setCalendarModal] = useState(false);
  const [sales, setSales] = useState([{ value: "", id: 1 }]);

  return (
    <div>
      <Modal visible={modal} onClose={() => setModal(false)}>
        <h1 className={s.modalTitle}>Спасибо!</h1>
        <div className={s.thanks}>
          <p>
            Ваше объявление отправлено на модерацию, в течение 30 минут оно
            будет активировано и его будут видеть пользователи сайта
          </p>
          <button className={s.btn160} onClick={() => setModal(false)}>
            В личный кабинет
          </button>
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
          <ReservedCalendar type="createExcursion" />
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
      <div className="account-page__breadcrumps">
        <p>Добавление впечатления</p>
        <p>Добавление в календарь</p>
      </div>
      <h1 className="account-page__title">Календарь</h1>
      <p className="account-page__title-text">
        Добавьте свободные даты к вашему впечатлению, чтобы туристы смогли
        видеть свободные даты, возможные для бронирования
      </p>
      <div className="account-page__reviews-wrapper">
        <div>
          <CalendarCardAccount
            id="1"
            label="Лепка из глины"
            option="5 человек"
            opened={openedForReserved}
            setOpened={setOpenedForReserved}
            error={error}
          />
          <p className={s.calendarCardText}>
            Добавьте Ваше расписание в календарь (день недели и время)
          </p>
          <button
            className={`${s.btn200} ${s.orange}`}
            onClick={() => setCalendarModal(true)}
          >
            Добавить расписание
          </button>
        </div>
      </div>
      {openedForReserved && (
        <>
          <ReservedCalendar type="createExcursion" />
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
          </form>
          <button
            className={s.moderationButton}
            onClick={() => {
              if (!openedForReserved) {
                setError("not required");
              } else {
                setModal(true);
              }
            }}
          >
            Активировать и отправить на модерацию
          </button>
        </>
      )}
    </div>
  );
};
