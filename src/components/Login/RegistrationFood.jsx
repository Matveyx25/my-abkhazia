import React, { useState } from 'react'
import Checkbox from '../Checkbox/Checkbox';
import Radio from '../Radio/Radio';
import s from "./Login.module.css";

export const RegistrationFood = () => {
  
  const [bank, setBank] = useState([]);
  const [organizationName, setOrganizationName] = useState("");
  const [organizationType, setOrganizationType] = useState("");
  const [organizationLocation, setOrganizationLocation] = useState("");
  const [role, setRole] = useState("");


  return (<>
          <div className={s.inputBlock}>
            <p>Ваша должность*</p>
            <input
              placeholder="Введите вашу должность"
              type="text"
              value={role}
              onChange={(event) => setRole(event.target.value)}
              required
            />
          </div>
          <div className={s.inputBlock}>
            <p>Категория кухни*</p>
            <input
              placeholder="Выберите категорию объекта"
              type="text"
              value={organizationType}
              onChange={() => setOrganizationType(organizationType)}
              className="account-page__input-with-radio"
              required
            />
            <div className="account-page__radios">
              <Radio
                labelText="Ресторан"
                inputId="rest"
                inputName="organizationType"
                inputValue="Ресторан"
                changeFunction={(event) =>
                  setOrganizationType(event.target.value)
                }
              />
              <Radio
                labelText="Кафе"
                inputId="cafe"
                inputName="organizationType"
                inputValue="Кафе"
                changeFunction={(event) =>
                  setOrganizationType(event.target.value)
                }
              />
              <Radio
                labelText="Столовая"
                inputId="minicafe"
                inputName="organizationType"
                inputValue="Столовая"
                changeFunction={(event) =>
                  setOrganizationType(event.target.value)
                }
              />
            </div>
          </div>
          <div className={s.inputBlock}>
            <p>Навзание организации, вашего объекта*</p>
            <input
              placeholder="Введите название организации"
              type="text"
              value={organizationName}
              onChange={(event) => setOrganizationName(event.target.value)}
              required
            />
          </div>
          <div className={s.inputBlock}>
            <p>Нахождение объекта*</p>
            <input
              placeholder="Введите или выберите город и адрес"
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
