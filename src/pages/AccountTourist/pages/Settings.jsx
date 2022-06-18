import React, { useState } from "react";
import Radio from "../../../components/Radio/Radio";
import Checkbox from "../../../components/Checkbox/Checkbox";
import { Link } from "react-router-dom";
import ReactCodeInput from "react-code-input";
import { Modal } from "../../../components/Modal/Modal";
import { useTimer } from "react-timer-hook";

export const Settings = () => {
  const [visible, setVisible] = useState(false);
  const [isDisabledPhone, setDisabledPhone] = useState(true);
  const [isDisabledMail, setDisabledMail] = useState(true);
  const [isDisabledPassword, setDisabledPassword] = useState(true);

  const [name, setName] = useState("Сергей");
  const [lastname, setLastname] = useState("Андреев");
  const [sex, setSex] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const [phone, setPhone] = useState("+7 (927) 655-45-24");
  const [email, setEmail] = useState("nastenarodionova1993@mail.ru");

  const [password, setPassword] = useState("11111111");

  const [removeModal, setRemoveModal] = useState(false);
  const [confirmEmailModal, setConfirmEmailModal] = useState(false);
  const [confirmPhoneModal, setConfirmPhoneModal] = useState(false);

  const [confirmPhone, setConfirmPhone] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  const [editPassword3, setEditPassword3] = useState(false);
  const [editPhone2, setEditPhone2] = useState(false);
  
  const [passwordEdit, setPasswordEdit] = useState();
  const [passwordEdit2, setPasswordEdit2] = useState();
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visibleEdit2, setVisibleEdit2] = useState(false);
  const [passwordsIsEquel, setPasswordsIsEquel] = useState(true);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 60);

  const { seconds, minutes, restart } = useTimer({
    time,
    onExpire: () => console.warn("onExpire called"),
  });

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
      <Modal visible={editEmail} onClose={() => setEditEmail(false)}>
        <h1 className="ballance-page__title">Изменить E-mail</h1>
        <div className="ballance-page__modal-content">
          <div className="account-page__input-block">
            <p>E-mail</p>
            <input
              placeholder="Введите новый адрес электронной почты"
              type="text"
              required
            />
          </div>
          <button
            className="account-page__btn-100"
            onClick={() => {
              setEditEmail(false);
              setConfirmEmailModal(true);
            }}
          >
            Продолжить
          </button>
        </div>
      </Modal>
      <Modal visible={editPhone} onClose={() => setEditPhone(false)}>
        <h1 className="ballance-page__title">Изменить номер телефона</h1>
        <div className="ballance-page__modal-content">
          <p>
            Для изменения номера телефона необходимо ввести код подтверждения
          </p>
          <div className="balance-page__btns">
            <div className="account-page__input-block">
              <input placeholder="Код из SMS" type="text" required />
            </div>
            <button
              className="account-page__btn-outline"
              onClick={() => {
                setEditPhone(false);
                setEditPhone2(true);
              }}
            >
              Получить код
            </button>
          </div>
        </div>
      </Modal>
      <Modal visible={editPhone2} onClose={() => setEditPhone2(false)}>
        <h1 className="ballance-page__title">Изменить номер телефона</h1>
        <div className="ballance-page__modal-content">
          <p>Введите новый номер телефона</p>
          <div className="account-page__input-block">
            <p>Страна</p>
            <input
              placeholder="Россия"
              type="text"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              required
            />
          </div>
          <div className="account-page__input-block">
            <p>Номер телефона</p>
            <input
              placeholder="+7 (000) 000-00-00"
              type="text"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            />
          </div>
          <p className="ballance-page__modal-small-text">
            Мы вам отправим SMS, чтобы подтвердить номер телефона. Применяются
            стандартные условия вашего тарифа на прием сообщений и передачу
            данных. Политика конфиденциальности
          </p>
          <button
            className="account-page__btn-100"
            onClick={() => {
              setEditPhone2(false);
              confirmPhoneModal(true);
              restart(time);
            }}
          >
            Продолжить
          </button>
        </div>
      </Modal>
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
      <Modal visible={removeModal} onClose={() => setRemoveModal(false)}>
        <h1 className="ballance-page__title">Удалить фото</h1>
        <div className="ballance-page__modal-content">
          <p className="ballance-page__center-text">
            Вы точно хотите удалить фото?
          </p>
          <div className="balance-page__btns">
            <button
              className="account-page__btn"
              onClick={() => setRemoveModal(false)}
            >
              Удалить фото
            </button>
            <button
              className="account-page__btn-outline"
              onClick={() => setRemoveModal(false)}
            >
              Отменить
            </button>
          </div>
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
      <Modal
        visible={confirmEmailModal}
        onClose={() => setConfirmEmailModal(false)}
      >
        <h1 className="ballance-page__title">Подтвердить E-mail</h1>
        <div className="ballance-page__modal-content">
          <p className="ballance-page__center-text">
            На Вашу почту <srtong>nastenarodionova1993@mail.ru</srtong>{" "}
            отправлено письмо с ссылкой для подтверждения
          </p>
          <div className="ballance-page__company-imgs account-page__mt25">
            <img src="/images/mail_ru.svg" alt="" />
            <img src="/images/ya_mail.svg" alt="" />
            <img src="/images/google_mail.svg" alt="" />
          </div>
        </div>
      </Modal>
      <Modal
        visible={confirmPhoneModal}
        onClose={() => setConfirmPhoneModal(false)}
      >
        <p className="ballance-page__title">Подтвердите номер</p>
        <p>Введите код, отправленный на номер: +7 (927) 655-45-24:</p>
        <ReactCodeInput
          type="number"
          fields={4}
          inputStyle={{
            width: 45,
            height: 45,
            border: "1px solid rgba(0, 0, 0, 0.3)",
            borderRadius: 10,
            marginRight: 10,
            fontSize: 18,
            padding: 10,
            boxSizing: "border-box",
          }}
        />
        {minutes + seconds != 0 ? (
          <p>
            Новый код можно получить через:{" "}
            <span className="account-page__timer">
              {minutes}:{seconds}
            </span>
          </p>
        ) : (
          <span
            className="account-page__timer-link"
            onClick={() => restart(time)}
          >
            Получить новый код
          </span>
        )}
      </Modal>
      <Link className="account-page__back-btn" to="../">
        <img src="/images/arrow-right-circle-fill.svg" alt="" />
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
            <button
              className="settings-page__btn-outlined"
              onClick={() => setRemoveModal(true)}
            >
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
          <div
            className={
              confirmPhone
                ? "account-page__input-block"
                : "account-page__input-block required"
            }
          >
            <p>Номер телефона</p>
            <input
              placeholder="телефон"
              value={phone}
              onChange={(event) => {
                if (isDisabledPhone) {
                  setPhone(phone);
                } else {
                  setPhone(event.target.value);
                }
              }}
              type="text"
              required
            />
            {confirmPhone ? (
              <span onClick={() => setEditPhone(true)}>
                Изменить номер телефона
              </span>
            ) : (
              <>
                <span className="account-page__input-error">
                  Номер телефона не подтвержден
                </span>
                <span
                  onClick={() => {
                    setConfirmPhoneModal(true);
                    setConfirmPhone(true);
                    restart(time);
                  }}
                >
                  Подтвердить номер телефона
                </span>
              </>
            )}
          </div>
          <div
            className={
              confirmEmail
                ? "account-page__input-block"
                : "account-page__input-block required"
            }
          >
            <p>Е-mail</p>
            <input
              placeholder="Е-mail"
              value={email}
              onChange={(event) => {
                if (isDisabledMail) {
                  setEmail(email);
                } else {
                  setEmail(event.target.value);
                }
              }}
              type="text"
              required
            />
            {confirmEmail ? (
              <span onClick={() => setEditEmail(true)}>Изменить E-mail</span>
            ) : (
              <>
                <span className="account-page__input-error">
                  E-mail не подтвержден
                </span>
                <span
                  onClick={() => {
                    setConfirmEmailModal(true);
                    setConfirmEmail(true);
                  }}
                >
                  Подтвердить E-mail
                </span>
              </>
            )}
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
                  if (isDisabledPassword) {
                    setPassword(password);
                  } else {
                    setPassword(event.target.value);
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
        <button className="settings-page__btn-submit">Сохранить</button>
      </form>
    </div>
  );
};
