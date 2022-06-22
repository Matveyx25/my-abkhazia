import React, { useState } from "react";
import s from "./LocationInput.module.css"

export const LocationInput = ({label, onChange}) => {

    const [modal, setModal] = useState(false);
    const [from, setFrom] = useState();

  return (
    <div className={s.dateWrapper}>
      <p className={s.dateTitle}>{label}</p>
      <div className={s.inputBlock}>
        <img
            src="../../images/transfer/punkt.svg"
            width="11"
            height="12"
            alt=""
        />
        <input
            placeholder="Введите адрес"
            value={from}
            type="text"
            name="transfer-from"
            onFocus={() => setModal(true)}
            onChange={(event) => setFrom(event.target.value)}
        />
      {modal && (
        <ul className={s.menu}>
          <li
            className="form-sub-menu__item"
            onClick={() => {
              setFrom("Аэропорт Адлера")
              onChange("Аэропорт Адлера")
              setModal(false)
            }}
          >
            <div className="form-sub-menu__image-wrapper">
              <img
                className="form-sub-menu__image"
                src="../../images/transfer/plain.svg"
                alt="plain"
                width="23.7"
                height="17.4"
              />
            </div>
            <p className="form-sub-menu__text">Аэропорт Адлера</p>
          </li>
          <li
            className="form-sub-menu__item"
            onClick={() => {
              setFrom("Ж/Д вокзал Адлера")
              onChange("Ж/Д вокзал Адлера")
              setModal(false)
            }}
          >
            <div className="form-sub-menu__image-wrapper">
              <img
                className="form-sub-menu__image"
                src="../../images/transfer/train.svg"
                alt="plain"
                width="16"
                height="20"
              />
            </div>
            <p className="form-sub-menu__text">Ж/Д вокзал Адлера</p>
          </li>
          <li
            className="form-sub-menu__item"
            onClick={() => {
              setFrom("Ж/Д вокзал Гагра")
              onChange("Ж/Д вокзал Гагра")
              setModal(false)
            }}
          >
            <div className="form-sub-menu__image-wrapper">
              <img
                className="form-sub-menu__image form-sub-menu__image--train"
                src="../../images/transfer/train.svg"
                alt="plain"
                width="16"
                height="20"
              />
            </div>
            <p className="form-sub-menu__text">Ж/Д вокзал Гагра</p>
          </li>
          <li
            className="form-sub-menu__item"
            onClick={() => {
              setFrom("Аэропорт Сочи")
              onChange("Аэропорт Сочи")
              setModal(false)
            }}
          >
            <div className="form-sub-menu__image-wrapper">
              <img
                className="form-sub-menu__image"
                src="../../images/transfer/plain.svg"
                alt="plain"
                width="23.7"
                height="17.4"
              />
            </div>
            <p className="form-sub-menu__text">Аэропорт Сочи</p>
          </li>
        </ul>
      )}
      </div>
    </div>
  );
};
