import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import s from "./Login.module.css";
import Checkbox from "../Checkbox/Checkbox";
import Radio from "../Radio/Radio";
import { useTimer } from 'react-timer-hook';
import { RegistrationUser } from "./RegistrationUser";
import { RegistrationHotel } from "./RegistrationHotel";
import { RegistrationHouse } from './RegistrationHouse';
import { RegistrationExcursion } from './RegistrationExcursion';
import { RegistrationImpression } from './RegistrationImpression';
import { RegistrationFood } from './RegistrationFood';
import { RegistrationRent } from './RegistrationRent';
import { RegistrationTransfer } from './RegistrationTransfer';
import ReactCodeInput from 'react-code-input';

export const Login = ({ visible, onClose }) => {
  const [typeModal, setTypeModal] = useState("login");

  const [email, setEmail] = useState("");
  const [visiblePassword, changeVisiblePassword] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  const [accType, setAccType] = useState("");

  const time = new Date();
  time.setSeconds(time.getSeconds() + 60);

  const {seconds, minutes, restart} = useTimer({ time, onExpire: () => console.warn('onExpire called') });

  return (
    <>
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
          <a href="#" className={s.withPhone} onClick={() => setTypeModal("phone")}>
            <img src="/images/gridicons_phone.svg" />С помощью номера телефона
          </a>
          <a href="#" className={s.withPhone}>
            <img src="/images/google-fill.svg" />С помощью Google
          </a>
        </form>
      )}
      {typeModal == "phone" && (
        <form className={s.form}>
          <div className={s.inputBlock}>
            <p>Страна</p>
            <input
              placeholder="Россия"
              type="text"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              required
            />
          </div>
          
          <div className={s.inputBlock}>
            <p>Номер телефона</p>
            <input
              placeholder="+7 (000) 000-00-00"
              type="text"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            />
          </div>
          <p className={s.smallText}>Мы вам отправим SMS, чтобы подтвердить номер телефона. Применяются стандартные условия вашего тарифа на прием сообщений и передачу данных. 
Политика конфиденциальности
</p>
          <button className={s.submitBtn} onClick={() => {
            onClose()
            setConfirmModal(true)
            restart(time)
            }}>Продолжить</button>
          <div className={s.or}>
            <span></span>
            <p>Или</p>
            <span></span>
          </div>
          <a href="#" className={s.withPhone} onClick={() => setTypeModal("login")}>
            <img src="/images/clarity_email-solid.svg" />С помощью E-mail
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
    <Modal visible={confirmModal} onClose={() => setConfirmModal(false)}>
    <p className="ballance-page__title">
        Подтвердите номер
      </p>
      <p>Введите код, отправленный на номер: +7 (927) 655-45-24:</p>
        <ReactCodeInput type='number' fields={4} inputStyle={{width: 45, height: 45,  border: '1px solid rgba(0, 0, 0, 0.3)', borderRadius: 10, marginRight: 10, fontSize: 18, padding: 10, boxSizing: 'border-box'}}/>
      {minutes + seconds != 0 ? <p>
        Новый код можно получить через:  <span className="account-page__timer">{minutes}:{seconds}</span>
      </p> : <span className="account-page__timer-link" onClick={() => restart(time)}>Получить новый код</span>}
    </Modal>
    </>
  );
};
