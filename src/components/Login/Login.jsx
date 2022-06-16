import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import s from "./Login.module.css";
import Checkbox from "../Checkbox/Checkbox";
import Radio from "../Radio/Radio";
import { RegistrationUser } from "./RegistrationUser";
import { RegistrationHotel } from "./RegistrationHotel";
import { RegistrationHouse } from './RegistrationHouse';
import { RegistrationExcursion } from './RegistrationExcursion';
import { RegistrationImpression } from './RegistrationImpression';
import { RegistrationFood } from './RegistrationFood';
import { RegistrationRent } from './RegistrationRent';
import { RegistrationTransfer } from './RegistrationTransfer';

export const Login = ({ visible, onClose }) => {
  const [typeModal, setTypeModal] = useState("login");

  const [email, setEmail] = useState("");
  const [visiblePassword, changeVisiblePassword] = useState(false);
  const [password, setPassword] = useState("");

  const [accType, setAccType] = useState("");

  return (
    <Modal visible={visible} onClose={onClose}>
      {typeModal == "reg2" || (
        <div className={s.tabbar}>
          <p
            className={typeModal == "login" ? s.active : null}
            onClick={() => setTypeModal("login")}
          >
            Войти
          </p>
          <p
            className={typeModal == "reg" ? s.active : null}
            onClick={() => setTypeModal("reg")}
          >
            Регистрация
          </p>
        </div>
      )}
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
                  src="/images/eye-invisible-filled.svg"
                  alt=""
                  className={s.eye}
                  onClick={() => changeVisiblePassword(!visiblePassword)}
                />
              ) : (
                <img
                  src="/images/eye-filled.svg"
                  alt=""
                  className={s.eye}
                  onClick={() => changeVisiblePassword(!visiblePassword)}
                />
              )}
            </div>
          </div>
          <div className={s.forget}>
            <Checkbox labelText="Запомнить меня" inputId="forget" />
          </div>
          <button className={s.submitBtn}>Войти</button>
          <div className={s.or}>
            <span></span>
            <p>Или</p>
            <span></span>
          </div>
          <a href="#" className={s.withPhone}>
            <img src="/images/gridicons_phone.svg" />С помощью номера телефона
          </a>
          <a href="#" className={s.withPhone}>
            <img src="/images/google-fill.svg" />С помощью Google
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
              {accType == 'Поставщик услуг' && <div className={s.subCheck}>
                <Radio
                  labelText="Отель"
                  inputId="hotelService"
                  inputName="typeService"
                  inputValue="Отель"
                  changeFunction={(event) => setAccType(accType + ", " + event.target.value)}
                />
                <Radio
                  labelText="Частное жилье"
                  inputId="houseService"
                  inputName="typeService"
                  inputValue="Частное жилье"
                  changeFunction={(event) => setAccType(accType + ", " + event.target.value)}
                />
                <Radio
                  labelText="Эскурсия"
                  inputId="excursionService"
                  inputName="typeService"
                  inputValue="Эскурсия"
                  changeFunction={(event) => setAccType(accType + ", " + event.target.value)}
                />
                <Radio
                  labelText="Впечатление"
                  inputId="impressionService"
                  inputName="typeService"
                  inputValue="Впечатление"
                  changeFunction={(event) => setAccType(accType + ", " + event.target.value)}
                />
                <Radio
                  labelText="Питание"
                  inputId="foodService"
                  inputName="typeService"
                  inputValue="Питание"
                  changeFunction={(event) => setAccType(accType + ", " + event.target.value)}
                />
                <Radio
                  labelText="Аренда машин"
                  inputId="rentService"
                  inputName="typeService"
                  inputValue="Аренда машин"
                  changeFunction={(event) => setAccType(accType + ", " + event.target.value)}
                />
                <Radio
                  labelText="Трансфер"
                  inputId="transferService"
                  inputName="typeService"
                  inputValue="Трансфер"
                  changeFunction={(event) => setAccType(accType + ", " + event.target.value)}
                />
              </div>}
              <Radio
                labelText="Партнер"
                inputId="partner"
                inputName="accType"
                inputValue="Партнер"
                changeFunction={(event) => setAccType(event.target.value)}
              />
            </div>
          </div>
          {(accType == "Турист" || accType == "Поставщик услуг" || accType == "Партнер" || !accType) && <RegistrationUser/>}
          {accType.includes('Отель') && <RegistrationHotel />}
          {accType.includes('Частное жилье') && <RegistrationHouse />}
          {accType.includes('Эскурсия') && <RegistrationExcursion />}
          {accType.includes('Впечатление') && <RegistrationImpression />}
          {accType.includes('Питание') && <RegistrationFood />}
          {accType.includes('Аренда машин') && <RegistrationRent />}
          {accType.includes('Трансфер') && <RegistrationTransfer/>}
          <div className={s.forget}>
            <Checkbox
              labelText="Нажимая на кнопку, я соглашаюсь с Условиями и Политикой конфиденциальности"
              inputId="forget"
            />
          </div>
          <button className={s.submitBtn} onClick={onClose}>
            Зарегистрироваться
          </button>
          <p className={s.withStar}>* Поля обязательны для заполнения</p>
          <div className={s.or}>
            <span></span>
            <p>Или</p>
            <span></span>
          </div>
          <a href="#" className={s.withPhone}>
            <img src="/images/google-fill.svg" alt=""/>С помощью Google
          </a>
        </form>
      )}
    </Modal>
  );
};
