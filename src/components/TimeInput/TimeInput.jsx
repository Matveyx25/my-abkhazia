import React, { useState } from 'react'
import s from './TimeInput.module.css'

export const TimeInput = ({label}) => {
const TimesForReservation = ["10:00", "11:00", "12:00"];

const [timeChoise, changeTime] = useState("12:00");
const [timeModalWindow, tongleModalTime] = useState(false);

const tongleTime = () => {
    if (timeModalWindow) {
      tongleModalTime(false);
    } else {
      tongleModalTime(true);
    }
  };

  return (
    <div>
        <p className={s.dateTitle}>{label || 'Время'}</p>
        <div className={s.inputBlock}>
        <img
            src="../../images/transfer/timer.svg"
            width="18"
            height="18"
            alt=""
        />
        <input
            type="text"
            name="transfer__time"
            value={timeChoise}
            onClick={() => tongleTime()}
        />
        {timeModalWindow && (
            <div className={s.menu}>
            {TimesForReservation.map((timeElement) => (
                <div
                className="form-time__input_radio"
                onClick={() => changeTime(timeElement)}
                >
                <div className="form-time__input_radio-circle">
                    {timeChoise == timeElement ? (
                    <div className="form-time__input_radio-circle--active"></div>
                    ) : (
                    <></>
                    )}
                </div>
                <p className="form-time__input_radio-text">
                    {timeElement}
                </p>
                </div>
            ))}
            </div>
        )}
        </div>
    </div>
  )
}
