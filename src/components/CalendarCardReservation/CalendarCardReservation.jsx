import React, { useState } from "react";
import "./CalendarCardReservation.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarCardReservation = ({
  CalendarComponentData,
  grCode,
  description,
  partially,
}) => {
  const [calendarValue, onChangeCalendar] = useState(new Date());

  let calendarValue3 = new Date(calendarValue.valueOf());
  calendarValue3.setMonth(calendarValue3.getMonth() - 1);

  const [calendarValue2, onChangeCalendar2] = useState(calendarValue3);

  const calendarChanger = () => {
    onChangeCalendar();
    calendarValue3 = new Date(calendarValue.valueOf());
    calendarValue3.setMonth(calendarValue3.getMonth() - 1);
    onChangeCalendar2(calendarValue3);
  };

  return (
    <>
      <div className="calendar__table-and-numbers">
        <div className="calendar__table-and-numbers__wrapper">
          <Calendar onChange={calendarChanger} value={calendarValue} showDoubleView/>
        </div>
        <div className="calendar__reservation-information">
          <div className="calendar__reservation-information-item calendar__reservation-information-close">
            <p className="reservation-information-close__number">
              {CalendarComponentData.close}
            </p>
            <p className="reservation-information-close__text">Занято</p>
          </div>
          {partially && (
            <div className="calendar__reservation-information-item calendar__reservation-information-close calendar__reservation-information-close-half">
              <p className="reservation-information-close__number">
                {CalendarComponentData.partially}
              </p>
              <p className="reservation-information-close__text">
                Частично занято
              </p>
            </div>
          )}
          <div className="calendar__reservation-information-item calendar__reservation-information-close">
            <p className="reservation-information-close__number reservation-information-free__number">
              {CalendarComponentData.free}
            </p>
            <p className="reservation-information-close__text reservation-information-free__text">
              Свободно
            </p>
          </div>
          <div className=" calendar__reservation-information-item calendar__reservation-information-close">
            <p className="reservation-information-close__number reservation-information-block__number">
              {CalendarComponentData.block}
            </p>
            <p className="reservation-information-close__text reservation-information-block__text">
              Недоступно для записи
            </p>
          </div>
        </div>
        {description && (
          <div className="calendar__reservation-information__timetable">
            <h5 className="reservation-information__timetable-title">
              {CalendarComponentData.descriptionTitle}
            </h5>
            {CalendarComponentData.descriptionList.map((element) => (
              <p className="reservation-information__timetable-text">
                {element}
              </p>
            ))}
          </div>
        )}
        {grCode && (
          <div className="calendar__reservation-information__qr-code">
            <p className="reservation-information__qr-code__title">
              Предъяви QR код и получи скидку 3%
            </p>
            <img
              className="reservation-information__qr-code__image"
              src="../../images/qr-code.svg"
              alt=""
              width="100"
              height="100"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default CalendarCardReservation;
