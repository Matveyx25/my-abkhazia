import React from "react";
import { useState } from "react";
import s from "./GuestsInput.module.css"

export const GuestsInput = ({onChange}) => {
  const [passengersModalWindow, tongleModalPassengers] = useState(false);
  const [adult, changeAdult] = useState(0);
  const [children, changeChildren] = useState(0);
  const [babies, changeBabies] = useState(0);
  const [passengers, setPassengers] = useState();

  const changeAdultNumbers = (operation) => {
    if (operation == "+") {
      let some = adult + 1;
      changeAdult(some);
    } else if (adult > 0 && operation == "-") {
      let some = adult - 1;
      changeAdult(some);
    }
  };
  const changeChildrenNumbers = (operation) => {
    if (operation == "+") {
      let some = children + 1;
      changeChildren(some);
    } else if (children > 0 && operation == "-") {
      let some = children - 1;
      changeChildren(some);
    }
  };
  const changeBabiesNumbers = (operation) => {
    if (operation == "+") {
      let some = babies + 1;
      changeBabies(some);
    } else if (babies > 0 && operation == "-") {
      let some = babies - 1;
      changeBabies(some);
    }
  };
  const setPassengersInput = () => {
    setPassengers(`Взрослых ${adult}, детей ${children}, малышей ${babies}`);
    onChange(`Взрослых ${adult}, детей ${children}, малышей ${babies}`)
    tongleModalPassengers(false);
  };

  return (
    <div className={s.dateWrapper}>
      <p className={s.dateTitle}>Гости</p>
      <div className={s.inputBlock}>
      <img
        src="../../images/transfer/person.svg"
        width="11.25"
        height="15.75"
        alt=""
      />
      <input
        placeholder="2 взрослых"
        type="text"
        name="transfer-people"
        value={passengers}
        onClick={() => tongleModalPassengers(true)}
      />
      {passengersModalWindow && (
        <div className={"transfer__person-sub-menu " + s.menu}>
          <div className="person-sub-menu__age-type">
            <div className="person-sub-menu__age-type-block">
              <h5 className="person-sub-menu__title">Взрослые</h5>
              <p className="person-sub-menu__text">от 13 лет</p>
            </div>
            <p
              className="person-sub-menu__minus"
              onClick={() => changeAdultNumbers("-")}
            >
              <p className="minus"></p>
            </p>
            <p className="person-sub-menu__counter">{adult}</p>
            <p
              className="person-sub-menu__plus"
              onClick={() => changeAdultNumbers("+")}
            >
              +
            </p>
          </div>
          <div className="person-sub-menu__age-type">
            <div className="person-sub-menu__age-type-block">
              <h5 className="person-sub-menu__title">Дети</h5>
              <p className="person-sub-menu__text">от 2-12 лет</p>
            </div>
            <p
              className="person-sub-menu__minus"
              onClick={() => changeChildrenNumbers("-")}
            >
              <p className="minus"></p>{" "}
            </p>
            <p className="person-sub-menu__counter">{children}</p>
            <p
              className="person-sub-menu__plus"
              onClick={() => changeChildrenNumbers("+")}
            >
              +
            </p>
          </div>
          <div className="person-sub-menu__age-type">
            <div className="person-sub-menu__age-type-block">
              <h5 className="person-sub-menu__title">Младенцы</h5>
              <p className="person-sub-menu__text">младше 2 лет</p>
            </div>
            <p
              className="person-sub-menu__minus"
              onClick={() => changeBabiesNumbers("-")}
            >
              <p className="minus"></p>
            </p>
            <p className="person-sub-menu__counter">{babies}</p>
            <p
              className="person-sub-menu__plus"
              onClick={() => changeBabiesNumbers("+")}
            >
              +
            </p>
          </div>
          <p
            className="person-sub-menu__submit"
            onClick={() => setPassengersInput()}
          >
            Применить
          </p>
        </div>
      )}
      </div>
    </div>
  );
};
