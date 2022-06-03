import React, { useState } from "react";

export const Settings = () => {
  const [visible, setVisible] = useState(false);
  const [isDisabledPhone, setDisabledPhone] = useState(true);
  const [isDisabledMail, setDisabledMail] = useState(true);
  const [isDisabledPassword, setDisabledPassword] = useState(true);

  const [name, setName] = useState("Сергей");
  const [lastname, setLastname] = useState("Андреев");
  const [bank, setBank] = useState("Сбербанк, ВТБ");
  const [sex, setSex] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");

  const [phone, setPhone] = useState("+7 (927) 655-45-24");
  const [email, setEmail] = useState("nastenarodionova1993@mail.ru");

  const [password, setPassword] = useState("11111111");

  const [organizationName, setOrganizationName] = useState(
    "Отель у моря “Бамбучо”"
  );
  const [organizationType, setOrganizationType] = useState("Мини - гостиница");
  const [organizationLocation, setOrganizationLocation] = useState(
    "Абхазия, Пицунда, улица Речная 11а "
  );

  const changeVisible = () => {
    setVisible(!visible);
  };

  return (
    <div>
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
              placeholder="Напишите название компании"
              type="text"
              value={bank}
              onChange={(event) => setBank(event.target.value)}
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
              onChange={(event) => setSex(event.target.value)}
              type="text"
              required
            />
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
              onChange={(event) => setPhone(event.target.value)}
              type="text"
              disabled={isDisabledPhone}
              required
            />
            <span onClick={() => setDisabledPhone(!isDisabledPhone)}>
              {isDisabledPhone ? 'Изменить номер телефона' : 'Сохранить номер телефона'}
            </span>
          </div>
          <div className="account-page__input-block">
            <p>Е-mail</p>
            <input
              placeholder="Е-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="text"
              disabled={isDisabledMail}
              required
            />
            <span onClick={() => setDisabledMail(!isDisabledMail)}>
              {isDisabledMail ? 'Изменить E-mail' : 'Сохранить E-mail'}
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
                onChange={(event) => setPassword(event.target.value)}
                type={visible ? "text" : "password"}
                disabled={isDisabledPassword}
                required
              />
              {visible ? (
                <img
                  src="../images/eye-invisible-filled.svg"
                  className="account-page__invisible-eye"
                  onClick={changeVisible}
                />
              ) : (
                <img
                  src="../images/eye-filled.svg"
                  className="account-page__visible-eye"
                  onClick={changeVisible}
                />
              )}
            </div>
            <span onClick={() => setDisabledPassword(!isDisabledPassword)}>
            {isDisabledPassword ? 'Изменить пароль' : 'Сохранить пароль'}
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
              onChange={(event) => setOrganizationType(event.target.value)}
              required
            />
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
