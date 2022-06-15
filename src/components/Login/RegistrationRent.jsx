import React, { useState } from 'react'
import Checkbox from '../Checkbox/Checkbox';
import Radio from '../Radio/Radio';
import s from "./Login.module.css";

export const RegistrationRent = () => {
  
  const [bank, setBank] = useState([]);
  const [organizationName, setOrganizationName] = useState("");
  const [organizationLocation, setOrganizationLocation] = useState("");
  const [role, setRole] = useState("");


  return (<>
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
              onChange={(event) => setOrganizationName(event.target.value)}
              required
            />
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
  )
}
