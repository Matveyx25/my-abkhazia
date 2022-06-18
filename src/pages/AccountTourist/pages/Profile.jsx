import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Checkbox from "../../../components/Checkbox/Checkbox";
import { RegistrationExcursion } from "../../../components/Login/RegistrationExcursion";
import { RegistrationFood } from "../../../components/Login/RegistrationFood";
import { RegistrationHotel } from "../../../components/Login/RegistrationHotel";
import { RegistrationHouse } from "../../../components/Login/RegistrationHouse";
import { RegistrationImpression } from "../../../components/Login/RegistrationImpression";
import { RegistrationRent } from "../../../components/Login/RegistrationRent";
import { RegistrationTransfer } from "../../../components/Login/RegistrationTransfer";
import { Modal } from "../../../components/Modal/Modal";
import Radio from "../../../components/Radio/Radio";
import "./pages.css";

export const Profile = () => {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [accType, setAccType] = useState("Отель");
  const [hasService, setHasService] = useState(false);

  const [service, setService] = useState();
  const [role, setRole] = useState();

  return (
    <div className="profile-page">
      <Modal visible={modal} onClose={() => setModal(false)}>
        <div className="ballance-page__modal-content">
          <h1 className="ballance-page__title">Заполните данные</h1>
          <div className="account-page__input-block">
            <p>Выберите услугу *</p>
            <input
              placeholder="Выберите вашу услугу"
              type="text"
              value={service}
              onChange={(event) => setService(event.target.value)}
              required
            />
          </div>
          <div className="account-page__input-block">
            <p>Ваша должность *</p>
            <input
              placeholder="Введите вашу должность "
              type="text"
              value={role}
              onChange={(event) => setRole(event.target.value)}
              required
            />
          </div>
          <button
            className="account-page__btn-100"
            onClick={() => {
              setModal(false);
              setModal2(true);
            }}
          >
            Продолжить
          </button>
          <p className="account-page__small-text">
            * Поля обязательны для заполнения
          </p>
        </div>
      </Modal>
      <Modal visible={modal2} onClose={() => setModal2(false)}>
        <div className="ballance-page__modal-content">
          <h1 className="ballance-page__title">Заполните данные</h1>
          <div className="account-page__input-block">
            <p>Выберите услугу *</p>
            <input
              placeholder="Выберите услугу"
              type="text"
              value={accType}
              onChange={(event) => setAccType(accType)}
              className="account-page__input-with-radio"
              required
            />
            <div className="account-page__radios">
                <Radio
                labelText="Отель"
                inputId="hotelService"
                inputName="typeService"
                inputValue="Отель"
                changeFunction={(event) => setAccType(event.target.value)}
                />
                <Radio
                labelText="Частное жилье"
                inputId="houseService"
                inputName="typeService"
                inputValue="Частное жилье"
                changeFunction={(event) => setAccType(event.target.value)}
                />
                <Radio
                labelText="Эскурсия"
                inputId="excursionService"
                inputName="typeService"
                inputValue="Эскурсия"
                changeFunction={(event) => setAccType(event.target.value)}
                />
                <Radio
                labelText="Впечатление"
                inputId="impressionService"
                inputName="typeService"
                inputValue="Впечатление"
                changeFunction={(event) => setAccType(event.target.value)}
                />
                <Radio
                labelText="Питание"
                inputId="foodService"
                inputName="typeService"
                inputValue="Питание"
                changeFunction={(event) => setAccType(event.target.value)}
                />
                <Radio
                labelText="Аренда машин"
                inputId="rentService"
                inputName="typeService"
                inputValue="Аренда машин"
                changeFunction={(event) => setAccType(event.target.value)}
                />
                <Radio
                labelText="Трансфер"
                inputId="transferService"
                inputName="typeService"
                inputValue="Трансфер"
                changeFunction={(event) => setAccType(event.target.value)}
                />
            </div>
          </div>
          {accType.includes("Отель") && <RegistrationHotel />}
          {accType.includes("Частное жилье") && <RegistrationHouse />}
          {accType.includes("Эскурсия") && <RegistrationExcursion />}
          {accType.includes("Впечатление") && <RegistrationImpression />}
          {accType.includes("Питание") && <RegistrationFood />}
          {accType.includes("Аренда машин") && <RegistrationRent />}
          {accType.includes("Трансфер") && <RegistrationTransfer />}
          <div className="account-page__forget-checkbox">
            <Checkbox
              labelText="Нажимая на кнопку, я соглашаюсь с Условиями сотрудничества "
              inputId="forget"
            />
          </div>
          <button
            className="account-page__btn-100"
            onClick={() => {
              setModal2(false);
              setHasService(true)
            }}
          >
            Продолжить
          </button>
          <p className="account-page__small-text">
            * Поля обязательны для заполнения
          </p>
        </div>
      </Modal>
      <div className="account-page__section">
        <Link className="account-page__back-btn" to="../">
          <img src="/images/arrow-right-circle-fill.svg" alt="" />
        </Link>
        <h1 className="account-page__title">Личная информация</h1>
        <div className="account-page__row">
          <div className="account-page__image-wrapper">
            <img src="/images/tour-card/owner.jpg" alt="" />
          </div>
          <div className="account-page__jcsb">
            <ul className="account-page__info-list">
              <li>
                <span className="mute">Тип пользователя:</span>
                Турист
              </li>
              <li>
                <span className="mute">Имя:</span>
                Сергей
              </li>
              <li>
                <span className="mute">Фамилия:</span>
                Андреев
              </li>
              <li>
                <span className="mute">Пол:</span>
              </li>
            </ul>
            <ul className="account-page__info-list">
              <li>
                <span className="mute">Телефон:</span>
                +7 (927) 655-45-24
                <a href="#">Подтвердить номер телефона</a>
              </li>
              <li>
                <span className="mute">E-mail:</span>
                nastenarodionova1993@mail.ru
                <a href="#">Подтвердить E-mail</a>
              </li>
              <li>
                <span className="mute">Дата рождения:</span>
              </li>
              <li>
                <span className="mute">Город:</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {hasService && (
        <div className="account-page__section">
          <h1 className="account-page__title">Информация об отеле</h1>
          <div className="account-page__row">
            <div className="account-page__image-wrapper">
              <img src="https://us.123rf.com/450wm/vadymvdrobot/vadymvdrobot2003/vadymvdrobot200300051/142744663-image-of-a-young-strong-happy-cheery-sports-man-posing-outdoors-in-nature-green-park-looking-camera-.jpg?ver=6" />
            </div>
            <ul className="account-page__info-list">
              <li>
                <span className="mute">Название отеля:</span>
                Отель у моря “Бамбучо”
              </li>
              <li>
                <span className="mute">Тип отеля:</span>
                Мини-гостиница
              </li>
              <li>
                <span className="mute">Местонахождение отеля:</span>
                Абхазия, Пицунда, улица Речная 11а
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className="account-page__row">
        <button className="account-page__btn">Редактировать профиль</button>
        <button
          className="account-page__btn-outline"
          onClick={() => setModal(true)}
        >
          Добавить свою услугу
        </button>
      </div>
    </div>
  );
};
