import React from "react";
import "./Radio.css";

const Radio = ({
  inputName,
  inputValue,
  inputId,
  labelText,
  clickFunction,
  changeFunction,
  checked
}) => {
  return (
    <label
      className="housing-catalog__housing-wrapper"
      htmlFor={inputId}
      onClick={clickFunction ? () => clickFunction() : null}
    >
      <input
        className="housing-catalog__housing-input"
        type="radio"
        name={inputName}
        value={inputValue}
        id={inputId}
        defaultChecked={checked}
        onChange={changeFunction ? changeFunction : null}
      />
      <div className="housing-catalog__housing-pseudo-radio"></div>
      <p className="housing-catalog__housing-label">{labelText}</p>
    </label>
  );
};

export default Radio;
