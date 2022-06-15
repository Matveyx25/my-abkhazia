import React, { useState } from 'react'
import s from "./Login.module.css";

export const RegistrationUser = () => {

    const [name, setName] = useState("");
    const [LastName, setLastName] = useState("");
    const [EmailReg, setEmailReg] = useState("");
    const [visiblePasswordReg, changeVisiblePasswordReg] = useState(false);
    const [visiblePassword2Reg, changeVisiblePassword2Reg] = useState(false);
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [password2Reg, setPassword2Reg] = useState("");

  return (
    <>
    <div className={s.inputRow}>
            <div className={s.inputBlock}>
              <p>Имя*</p>
              <input
                placeholder="Введите Ваше имя"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div className={s.inputBlock}>
              <p>Фамилия*</p>
              <input
                placeholder="Введите Вашу фамилию"
                type="text"
                value={LastName}
                onChange={(event) => setLastName(event.target.value)}
                required
              />
            </div>
          </div>
          <div className={s.inputBlock}>
            <p>E-mail*</p>
            <input
              placeholder="Введите адрес электронной почты"
              type="text"
              value={EmailReg}
              onChange={(event) => setEmailReg(event.target.value)}
              required
            />
          </div>
          <div className={s.inputRow}>
            <div className={s.inputBlock}>
              <p>Страна*</p>
              <input
                placeholder="Россия"
                type="text"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
                required
              />
            </div>
            <div className={s.inputBlock}>
              <p>Номер телефона*</p>
              <input
                placeholder="+7 (000) 000-00-00"
                type="text"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              />
            </div>
          </div>
          <div className={s.inputRow}>
            <div className={s.inputBlock}>
              <p>Пароль*</p>
              <div className="account-page__input-position">
                <input
                  placeholder="Пароль"
                  value={passwordReg}
                  onChange={(event) => setPasswordReg(event.target.value)}
                  type={visiblePasswordReg ? "text" : "password"}
                  required
                />
                {visiblePasswordReg ? (
                  <img
                    src="../images/eye-invisible-filled.svg"
                    className={s.eye}
                    alt=""
                    onClick={() =>
                      changeVisiblePasswordReg(!visiblePasswordReg)
                    }
                  />
                ) : (
                  <img
                    src="../images/eye-filled.svg"
                    className={s.eye}
                    alt=""
                    onClick={() =>
                      changeVisiblePasswordReg(!visiblePasswordReg)
                    }
                  />
                )}
              </div>
            </div>
            <div className={s.inputBlock}>
              <p>Повторите пароль*</p>
              <div className="account-page__input-position">
                <input
                  placeholder="Пароль"
                  value={password2Reg}
                  onChange={(event) => setPassword2Reg(event.target.value)}
                  type={visiblePassword2Reg ? "text" : "password"}
                  required
                />
                {visiblePassword2Reg ? (
                  <img
                    src="../images/eye-invisible-filled.svg"
                    className={s.eye}
                    alt=""
                    onClick={() =>
                      changeVisiblePassword2Reg(!visiblePassword2Reg)
                    }
                  />
                ) : (
                  <img
                    src="../images/eye-filled.svg"
                    className={s.eye}
                    alt=""
                    onClick={() =>
                      changeVisiblePassword2Reg(!visiblePassword2Reg)
                    }
                  />
                )}
              </div>
            </div>
          </div>
          </>
  )
}
