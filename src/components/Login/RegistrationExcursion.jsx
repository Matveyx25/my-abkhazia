import React, { useState } from 'react'
import Checkbox from '../Checkbox/Checkbox';
import Radio from '../Radio/Radio';
import s from "./Login.module.css";

export const RegistrationExcursion = () => {
  
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
            <p>Категория экскурсии*</p>
            <input
              placeholder="Выберите категорию экскурсии"
              type="text"
              value={organizationType}
              onChange={() => setOrganizationType(organizationType)}
              className="account-page__input-with-radio"
              required
            />
            <div className="account-page__radios">
              <Radio
                labelText="Туры выходного дня"
                inputId="weekend"
                inputName="organizationType"
                inputValue="Туры выходного дня"
                changeFunction={(event) =>
                  setOrganizationType(event.target.value)
                }
              />
              <Radio
                labelText="Религиозные"
                inputId="religion"
                inputName="organizationType"
                inputValue="Религиозные"
                changeFunction={(event) =>
                  setOrganizationType(event.target.value)
                }
              />
              <Radio
                labelText="История и культура"
                inputId="history"
                inputName="organizationType"
                inputValue="История и культура"
                changeFunction={(event) =>
                  setOrganizationType(event.target.value)
                }
              />
              <Radio
                labelText="Природа"
                inputId="nature"
                inputName="organizationType"
                inputValue="Природа"
                changeFunction={(event) =>
                  setOrganizationType(event.target.value)
                }
              />
              <Radio
                labelText="Архитектура"
                inputId="architecture"
                inputName="organizationType"
                inputValue="Архитектура"
                changeFunction={(event) =>
                  setOrganizationType(event.target.value)
                }
              />
              <Radio
                labelText="Экстремальные"
                inputId="extreme"
                inputName="organizationType"
                inputValue="Экстремальные"
                changeFunction={(event) =>
                  setOrganizationType(event.target.value)
                }
              />
            </div>
          </div>
          <div className={s.inputBlock}>
            <p>Навзание экскурсии*</p>
            <input
              placeholder="Введите название экскурсии"
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
