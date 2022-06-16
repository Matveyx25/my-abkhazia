import React, { useState } from "react";
import s from "./CounterInput.module.css";

export const CounterInput = ({ label, onUpdate, value, onPlus, onMinus }) => {
 const [active, setActive] = useState();

  return (
    <div className={s.counterWrapper}>
      <h5 className={s.label}>{label}</h5>
      <div className={s.counterBlock}>
        <p
          className={active == 'minus' ? "person-sub-menu__minus active" : "person-sub-menu__minus"}
          onClick={onUpdate ? () => {
            onUpdate(value - 1)
            setActive('minus')
          } : () => {
            onMinus()
            setActive('minus')
          }}
        >
          <p className="minus"></p>
        </p>
        <p className={s.countText}>{value}</p>
        <p
          className={active == 'plus' ? "person-sub-menu__plus active" : "person-sub-menu__plus"}
          onClick={onUpdate ? () => {
            onUpdate(value + 1)
            setActive('plus')
          } : () => {
            onPlus()
            setActive('plus')
          }}>
          +
        </p>
      </div>
    </div>
  );
};
