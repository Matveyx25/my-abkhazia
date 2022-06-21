import React, { useState } from 'react'
import Checkbox from '../Checkbox/Checkbox';
import s from "./Login.module.css";


const Cars = [
  {
    id: 0,
    car: "Audi",
    variation: ["Audi A4", "Audi A3", "Audi Q5"],
  },
  {
    id: 1,
    car: "BMW",
    variation: ["BMW A4", "BMW A3", "BMW Q5"],
  },
  {
    id: 2,
    car: "Ford",
    variation: ["Ford A4", "Ford A3", "Ford Q5"],
  },
  {
    id: 3,
    car: "Honda",
    variation: ["Honda A4", "Honda A3", "Honda Q5"],
  },
  {
    id: 4,
    car: "Toyota",
    variation: ["Toyota A4", "Toyota A3", "Toyota Q5"],
  },
  {
    id: 5,
    car: "Tesla",
    variation: ["Tesla A4", "Tesla A3", "Tesla Q5"],
  },
  {
    id: 6,
    car: "UAZ",
    variation: ["UAZ A4", "UAZ A3", "UAZ Q5"],
  },
];

export const RegistrationRent = () => {
  
  const [bank, setBank] = useState([]);
  const [allCar, seeAllCar] = useState(false);
  const [organizationName, setOrganizationName] = useState("");
  const [organizationLocation, setOrganizationLocation] = useState("");
  const [role, setRole] = useState("");

    
  let workingCars = [...Cars];
  workingCars.length = 3;

  return (
    <>
      <div className={s.inputBlock}>
        <p>Тип владения*</p>
        <input
          placeholder="Введите кем вы являетесь"
          type="text"
          value={role}
          onChange={(event) => setRole(event.target.value)}
          required
        />
      </div>
      <div className={s.inputBlock}>
        <p>Модель и марка машины*</p>
        <input
          placeholder="Выберите модель и марку машины"
          type="text"
          value={organizationName}
          onChange={(event) => setOrganizationName(organizationName)}
          className="account-page__input-with-radio"
          required
        />
        <div className="account-page__radios">
          {Cars.map((el) => (
                <label
                  className="housing-catalog__housing-wrapper car-rent__item"
                  htmlFor={`car-rent__${el.car}`}
                >
                  <input
                    className="housing-catalog__private-house care-rent__main-input"
                    type="checkbox"
                    name="car-rent__model"
                    value={el.car}
                    id={`car-rent__${el.car}`}
                  />
                  <div className="housing-catalog__housing-pseudo-checkbox"></div>
                  <p className="housing-catalog__housing-label">{el.car}</p>
                  <div className="housing-catalog__sub-private  car-rent__sub-private">
                    {el.variation.map((variant) => (
                      <Checkbox
                        inputName={`car-rent__${el.car}`}
                        inputValue={variant}
                        inputId={`car-rent__${el.car}--${variant}`}
                        labelText={variant}
                        changeFunction={(event) => setOrganizationName(event.target.checked
                          ? [...organizationName, event.target.value]
                          : organizationName.filter((item) => item !== event.target.value))}
                        subMenu={true}
                      />
                    ))}
                  </div>
                </label>
              ))}
        </div>
      </div>
      <div className={s.inputBlock}>
        <p>Город*</p>
        <input
          placeholder="Выберите город"
          type="text"
          value={organizationLocation}
          onChange={(event) => setOrganizationLocation(event.target.value)}
          required
        />
      </div>
      <div className={s.inputBlock}>
        <p>Банк для получения платежа*</p>
        <input
          placeholder="Выберите подходящий банк"
          type="text"
          value={bank}
          className="account-page__input-with-radio"
          required
        />
        <div className="account-page__radios">
          <Checkbox
            labelText="Сбербанк"
            inputId="sber"
            inputName="bank"
            inputValue="Сбербанк"
            changeFunction={(event) =>
              setBank(
                event.target.checked
                  ? [...bank, event.target.value]
                  : bank.filter((item) => item != event.target.value)
              )
            }
          />
          <Checkbox
            labelText="Тинькоф банк"
            inputId="tinkoff"
            inputName="bank"
            inputValue="Тинькоф банк"
            changeFunction={(event) =>
              setBank(
                event.target.checked
                  ? [...bank, event.target.value]
                  : bank.filter((item) => item != event.target.value)
              )
            }
          />
          <Checkbox
            labelText="ВТБ"
            inputId="vtb"
            inputName="bank"
            inputValue="ВТБ"
            changeFunction={(event) =>
              setBank(
                event.target.checked
                  ? [...bank, event.target.value]
                  : bank.filter((item) => item != event.target.value)
              )
            }
          />
          <Checkbox
            labelText="Альфа банк"
            inputId="alfa"
            inputName="bank"
            inputValue="Альфа банк"
            changeFunction={(event) =>
              setBank(
                event.target.checked
                  ? [...bank, event.target.value]
                  : bank.filter((item) => item != event.target.value)
              )
            }
          />
        </div>
      </div>
    </>
  );
}
