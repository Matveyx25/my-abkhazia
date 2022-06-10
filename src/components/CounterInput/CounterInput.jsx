import React, { useState } from "react";
import s from "./CounterInput.module.css";

export const CounterInput = ({ label, onUpdate, value, onPlus, onMinus }) => {
  return (
    <div className={s.counterWrapper}>
      <h5 className={s.label}>{label}</h5>
      <div className={s.counterBlock}>
        <p
          className="person-sub-menu__minus"
          onClick={onUpdate ? () => onUpdate(value - 1) : onMinus}
        >
          <p className="minus"></p>
        </p>
        <p className={s.countText}>{value}</p>
        <p
          className="person-sub-menu__plus"
          onClick={onUpdate ? () => onUpdate(value + 1) : onPlus}
        >
          +
        </p>
      </div>
    </div>
  );
};
