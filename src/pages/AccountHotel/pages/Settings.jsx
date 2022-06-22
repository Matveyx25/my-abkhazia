import React, { useState } from "react";
import Radio from "../../../components/Radio/Radio";
import Checkbox from '../../../components/Checkbox/Checkbox';
import { Link } from "react-router-dom";
import { Modal } from '../../../components/Modal/Modal';

export const Settings = () => {
  const [visible, setVisible] = useState(false);
  const [isDisabledPhone, setDisabledPhone] = useState(true);
  const [isDisabledMail, setDisabledMail] = useState(true);
  const [isDisabledPassword, setDisabledPassword] = useState(true);

  const [name, setName] = useState("Сергей");
  const [lastname, setLastname] = useState("Андреев");
  const [bank, setBank] = useState([]);
  const [sex, setSex] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");

  const [phone, setPhone] = useState("+7 (927) 655-45-24");
  const [email, setEmail] = useState("nastenarodionova1993@mail.ru");

  const [editPassword, setEditPassword] = useState(false);
  const [editPassword3, setEditPassword3] = useState(false);
  const [passwordEdit, setPasswordEdit] = useState();
  const [passwordEdit2, setPasswordEdit2] = useState();
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visibleEdit2, setVisibleEdit2] = useState(false);
  const [passwordsIsEquel, setPasswordsIsEquel] = useState(true);

  const [password, setPassword] = useState("11111111");

  const [organizationName, setOrganizationName] = useState(
    "Отель у моря “Бамбучо”"
  );
  const [organizationType, setOrganizationType] = useState("");
  const [organizationLocation, setOrganizationLocation] = useState(
    "Абхазия, Пицунда, улица Речная 11а "
  );

  const changeVisible = () => {
    setVisible(!visible);
  };
  const changeVisibleEdit = () => {
    setVisibleEdit(!visibleEdit);
  };
  const changeVisibleEdit2 = () => {
    setVisibleEdit2(!visibleEdit2);
  };

  return (
    <div>
      <Modal visible={editPassword} onClose={() => setEditPassword(false)}>
        <h1 className="ballance-page__title">Изменить пароль</h1>
        <div className="ballance-page__modal-content">
        <div className="account-page__input-block">
            <p>Пароль</p>
            <div className="account-page__input-position">
              <input
                placeholder="Введите новый пароль"
                value={passwordEdit}
                onChange={(event) => {
                    setPasswordEdit(event.target.value);
                }}
                type={visibleEdit ? "text" : "password"}
                required
              />
              {visibleEdit ? (
                <img
                  src="../images/eye-invisible-filled.svg"
                  className="account-page__invisible-eye"
                  alt=""
                  onClick={changeVisibleEdit}
                />
              ) : (
                <img
                  src="../images/eye-filled.svg"
                  className="account-page__visible-eye"
                  alt=""
                  onClick={changeVisibleEdit}
                />
              )}
            </div>
          </div>
        <div className={passwordsIsEquel ? "account-page__input-block" : "account-page__input-block required"}>
            <p>Пароль</p>
            <div className="account-page__input-position">
              <input
                placeholder="Повторите новый пароль"
                value={passwordEdit2}
                onChange={(event) => {
                  setPasswordEdit2(event.target.value);
                  if(!passwordsIsEquel){
                    if(passwordEdit == passwordEdit2){
                      setPasswordsIsEquel(false)
                    }
                  }
                }}
                type={visibleEdit2 ? "text" : "password"}
                required
              />
              {visibleEdit2 ? (
                <img
                  src="../images/eye-invisible-filled.svg"
                  className="account-page__invisible-eye"
                  alt=""
                  onClick={changeVisibleEdit2}
                />
              ) : (
                <img
                  src="../images/eye-filled.svg"
                  className="account-page__visible-eye"
                  alt=""
                  onClick={changeVisibleEdit2}
                />
              )}
            </div>
            {passwordsIsEquel || <span className="account-page__input-error">
            Пароль не верный
            </span>}
          </div>
          <button
            className="account-page__btn-100"
            onClick={() => {
              if(passwordEdit != passwordEdit2){
                setPasswordsIsEquel(true)
              }else{
                setPasswordsIsEquel(false)
                setEditPassword(false);
                setEditPassword3(true)
              }
            }}
          >
            Сохранить
          </button>
        </div>
      </Modal>
      <Modal visible={editPassword3} onClose={() => setEditPassword3(false)}>
        <h1 className="ballance-page__title">Изменить пароль</h1>
        <div className="ballance-page__modal-content">
          <p className="ballance-page__center-text">
          Вы успешно изменили пароль!
          </p>
          <div className="balance-page__btns">
            <button
              className="account-page__btn"
              onClick={() => setEditPassword3(false)}
            >
              В  личный кабинет
            </button>
          </div>
        </div>
      </Modal>
      <Link className="account-page__back-btn" to="../">
            <img src="/images/arrow-right-circle-fill.svg" alt=""/>
        </Link>
      <h1 className="account-page__title">Настройки</h1>
      <form action="" className="account-page__settings-form">
        <h2 className="account-page__subtitle">Личная информация</h2>
        <div className="account-page__row">
          <div className="account-page__image-wrapper">
            <img src="../images/without-photo-profile.png" alt="" />
          </div>
          <div>
            <button className="settings-page__btn-fill">Загрузить фото</button>
            <button className="settings-page__btn-outlined">
              Удалить фото
            </button>
          </div>
        </div>
        <div className="account-page__inputs-row">
          <div className="account-page__input-block">
            <p>Имя</p>
            <input
              placeholder="Имя"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="account-page__input-block">
            <p>Фамилия</p>
            <input
              placeholder="Фамилия"
              type="text"
              value={lastname}
              onChange={(event) => setLastname(event.target.value)}
              required
            />
          </div>
          <div className="account-page__input-block">
            <p>Банк для оплаты</p>
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
                changeFunction={(event) => setBank(event.target.checked ?
                  [...bank ,event.target.value] :
                 bank.filter(item => item != event.target.value))}
              />
              <Checkbox
                labelText="Тинькоф банк"
                inputId="tinkoff"
                inputName="bank"
                inputValue="Тинькоф банк"
                changeFunction={(event) => setBank(event.target.checked ?
                   [...bank ,event.target.value] :
                  bank.filter(item => item != event.target.value))}
              />
              <Checkbox
                labelText="ВТБ"
                inputId="vtb"
                inputName="bank"
                inputValue="ВТБ"
                changeFunction={(event) => setBank(event.target.checked ?
                   [...bank ,event.target.value] :
                  bank.filter(item => item != event.target.value))}
              />
              <Checkbox
                labelText="Альфа банк"
                inputId="alfa"
                inputName="bank"
                inputValue="Альфа банк"
                changeFunction={(event) => setBank(event.target.checked ?
                   [...bank ,event.target.value] :
                  bank.filter(item => item != event.target.value))}
              />
            </div>
          </div>
        </div>
        <div className="account-page__inputs-row">
          <div className="account-page__input-block">
            <p>Пол</p>
            <input
              placeholder="Выберите ваш пол"
              value={sex}
              onChange={(event) => setSex(sex)}
              type="text"
              className="account-page__input-with-radio"
              required
            />
            <div className="account-page__radios">
              <Radio
                labelText="Мужской"
                inputId="male"
                inputName="sex"
                inputValue="Мужской"
                changeFunction={(event) => setSex(event.target.value)}
              />
              <Radio
                labelText="Женский"
                inputId="female"
                inputName="sex"
                inputValue="Женский"
                changeFunction={(event) => setSex(event.target.value)}
              />
            </div>
          </div>
          <div className="account-page__input-block">
            <p>Дата рождения</p>
            <input
              placeholder="Выберите вашу дату рождения"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              type="text"
              required
            />
          </div>
          <div className="account-page__input-block">
            <p>Город</p>
            <input
              placeholder="Выберите ваш город"
              type="text"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              required
            />
          </div>
        </div>
        <h2 className="account-page__subtitle">Контакты</h2>
        <div className="account-page__inputs-row">
          <div className="account-page__input-block">
            <p>Номер телефона</p>
            <input
              placeholder="телефон"
              value={phone}
              onChange={(event) => {
                if(isDisabledPhone){
                  setPhone(phone)
                }else{
                  setPhone(event.target.value)
                }
              }}
              type="text"
              required
            />
            <span onClick={() => setDisabledPhone(!isDisabledPhone)}>
              {isDisabledPhone
                ? "Изменить номер телефона"
                : "Сохранить номер телефона"}
            </span>
          </div>
          <div className="account-page__input-block">
            <p>Е-mail</p>
            <input
              placeholder="Е-mail"
              value={email}
              onChange={(event) => {
                if(isDisabledMail){
                  setEmail(email)
                }else{
                  setEmail(event.target.value)
                }
              }}
              type="text"
              required
            />
            <span onClick={() => setDisabledMail(!isDisabledMail)}>
              {isDisabledMail ? "Изменить E-mail" : "Сохранить E-mail"}
            </span>
          </div>
        </div>
        <h2 className="account-page__subtitle">Пароль </h2>
        <div className="account-page__inputs-row">
          <div className="account-page__input-block">
            <p>Пароль</p>
            <div className="account-page__input-position">
              <input
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  if(isDisabledPassword){
                    setPassword(password)
                  }else{
                    setPassword(event.target.value)
                  }
                }}
                type={visible ? "text" : "password"}
                required
              />
              {visible ? (
                <img
                  src="../images/eye-invisible-filled.svg"
                  className="account-page__invisible-eye"
                  alt=""
                  onClick={changeVisible}
                />
              ) : (
                <img
                  src="../images/eye-filled.svg"
                  className="account-page__visible-eye"
                  alt=""
                  onClick={changeVisible}
                />
              )}
            </div>
            <span onClick={() => setEditPassword(true)}>
                Изменить пароль
            </span>
          </div>
        </div>
        <h2 className="account-page__subtitle">Информация об отеле</h2>
        <div className="account-page__inputs-row">
          <div className="account-page__image-wrapper">
            <img src="../images/without-logotype.png" alt="" />
          </div>
          <div>
            <button className="settings-page__btn-fill">Загрузить лого</button>
            <button className="settings-page__btn-outlined">
              Удалить лого
            </button>
          </div>
        </div>
        <div className="account-page__inputs-row">
          <div className="account-page__input-block">
            <p>Название организации (или название отеля)</p>
            <input
              placeholder="Название  организации (или название отеля)"
              type="text"
              value={organizationName}
              onChange={(event) => setOrganizationName(event.target.value)}
              required
            />
          </div>
          <div className="account-page__input-block">
            <p>Тип отеля</p>
            <input
              placeholder="Тип отеля"
              type="text"
              value={organizationType}
              onChange={(event) => setOrganizationType(organizationType)}
              className="account-page__input-with-radio"
              required
            />
             <div className="account-page__radios">
              <Radio
                labelText="Отель"
                inputId="hotel"
                inputName="organizationType"
                inputValue="Отель"
                changeFunction={(event) => setOrganizationType(event.target.value)}
              />
              <Radio
                labelText="Гостевой дом"
                inputId="guest"
                inputName="organizationType"
                inputValue="Гостевой дом"
                changeFunction={(event) => setOrganizationType(event.target.value)}
              />
              <Radio
                labelText="Мини-гостиница"
                inputId="miniHotel"
                inputName="organizationType"
                inputValue="Мини-гостиница"
                changeFunction={(event) => setOrganizationType(event.target.value)}
              />
            </div>
          </div>
          <div className="account-page__input-block">
            <p>Нахождение объекта</p>
            <input
              placeholder="Нахождение объекта"
              type="text"
              value={organizationLocation}
              onChange={(event) => setOrganizationLocation(event.target.value)}
              required
            />
          </div>
        </div>
        <button className="settings-page__btn-submit">Сохранить</button>
      </form>
    </div>
  );
};
