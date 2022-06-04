import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import s from "./Login.module.css";
import Checkbox from '../Checkbox/Checkbox';
import Radio from "../Radio/Radio";

export const Login = ({ visible, onClose }) => {
  const [typeModal, setTypeModal] = useState("login");

  const [name, setName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [EmailReg, setEmailReg] = useState("");
  const [visiblePassword, changeVisiblePassword] = useState(false);
  const [visiblePasswordReg, changeVisiblePasswordReg] = useState(false);
  const [visiblePassword2Reg, changeVisiblePassword2Reg] = useState(false);
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [password2Reg, setPassword2Reg] = useState("");

  const [accType, setAccType] = useState("");

  return (
    <Modal visible={visible} onClose={onClose}>
        <div className={s.tabbar}>
          <p
            className={
              typeModal == "login"
                ? s.active
                : null
            }
            onClick={() => setTypeModal("login")}
          >
            Войти
          </p>
          <p
            className={
              typeModal == "reg"
                ? s.active
                : null
            }
            onClick={() => setTypeModal("reg")}
          >
            Регистрация
          </p>
        </div>
        {typeModal == "login" && (
          <form className={s.form}>
            <div className={s.inputBlock}>
              <p>E-mail</p>
              <input
                placeholder="Введите адрес электронной почты"
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className={s.inputBlock}>
              <p>Пароль</p>
              <div className="account-page__input-position">
                <input
                  placeholder="Пароль"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type={visiblePassword ? "text" : "password"}
                  required
                />
                {visiblePassword ? (
                  <img
                    src="../images/eye-invisible-filled.svg"
                    className={s.eye}
                    onClick={() => changeVisiblePassword(!visiblePassword)}
                  />
                ) : (
                  <img
                    src="../images/eye-filled.svg"
                    className={s.eye}
                    onClick={() => changeVisiblePassword(!visiblePassword)}
                  />
                )}
              </div>
            </div>
            <div className={s.forget}>
                <Checkbox labelText="Запомнить меня" inputId="forget"/>
            </div>
            <button className={s.submitBtn}>Войти</button>
            <div className={s.or}>
                <span></span>
                <p>Или</p>
                <span></span>
            </div>
            <a href="#" className={s.withPhone}>
                <img src="../images/gridicons_phone.svg"/>
                С помощью номера телефона
            </a>
            <a href="#" className={s.withPhone}>
                <img src="../images/google-fill.svg"/>
                С помощью Google
            </a>
          </form>
        )}

        {typeModal == "reg" && (
          <form className={s.form}>
            <div className={s.inputBlock}>
            <p>Тип пользователя*</p>
            <input
              placeholder="Выберите тип пользователя"
              type="text"
              value={accType}
              onChange={(event) => setAccType(accType)}
              className="account-page__input-with-radio"
              required
            />
             <div className="account-page__radios">
              <Radio
                labelText="Турист"
                inputId="turist"
                inputName="accType"
                inputValue="Турист"
                changeFunction={(event) => setAccType(event.target.value)}
              />
              <Radio
                labelText="Поставщик услуг"
                inputId="postav"
                inputName="accType"
                inputValue="Поставщик услуг"
                changeFunction={(event) => setAccType(event.target.value)}
              />
              <Radio
                labelText="Партнер"
                inputId="partner"
                inputName="accType"
                inputValue="Партнер"
                changeFunction={(event) => setAccType(event.target.value)}
              />
            </div>
          </div>
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
                            onClick={() => changeVisiblePasswordReg(!visiblePasswordReg)}
                        />
                        ) : (
                        <img
                            src="../images/eye-filled.svg"
                            className={s.eye}
                            onClick={() => changeVisiblePasswordReg(!visiblePasswordReg)}
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
                            onClick={() => changeVisiblePassword2Reg(!visiblePassword2Reg)}
                        />
                        ) : (
                        <img
                            src="../images/eye-filled.svg"
                            className={s.eye}
                            onClick={() => changeVisiblePassword2Reg(!visiblePassword2Reg)}
                        />
                        )}
                    </div>
                </div>
            </div>
            <div className={s.forget}>
                <Checkbox labelText="Нажимая на кнопку, я соглашаюсь с Условиями и Политикой конфиденциальности" inputId="forget"/>
            </div>
            <button className={s.submitBtn}>Войти</button>
            <p className={s.withStar}>* Поля обязательны для заполнения</p>
            <div className={s.or}>
                <span></span>
                <p>Или</p>
                <span></span>
            </div>
            <a href="#" className={s.withPhone}>
                <img src="../images/google-fill.svg"/>
                С помощью Google
            </a>
          </form>
        )}
    </Modal>
  );
};
