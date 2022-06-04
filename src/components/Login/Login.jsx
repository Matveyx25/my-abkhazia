import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import s from "./Login.module.css";
import Checkbox from '../Checkbox/Checkbox';

export const Login = ({ visible, onClose }) => {
  const [typeModal, setTypeModal] = useState("login");

  const [name, setName] = useState("");
  const [visiblePassword, changeVisiblePassword] = useState(false);
  const [password, setPassword] = useState("");

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
                value={name}
                onChange={(event) => setName(event.target.value)}
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
    </Modal>
  );
};
