import React from 'react'
import { Link } from 'react-router-dom'
import './pages.css'

export const Profile = () => {
  return (
    <div className="profile-page">
        <div className="account-page__section">
            <Link className="account-page__back-btn" to="../">
                <img src="/images/arrow-right-circle-fill.svg" alt=""/>
            </Link>
            <h1 className="account-page__title">Личная информация</h1>
            <div className="account-page__row">
                <div className="account-page__image-wrapper">
                    <img src="/images/tour-card/owner.jpg" alt=""/>
                </div>
                <div className="account-page__jcsb">
                    <ul className="account-page__info-list">
                        <li>
                            <span className="mute">Тип пользователя:</span>
                            Поставщик услуг
                        </li>
                        <li>
                            <span className="mute">Должность:</span>
                            Владелец отеля
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
                            <span className="blue">Подтвержден</span>
                        </li>
                        <li>
                            <span className="mute">E-mail:</span>
                            nastenarodionova1993@mail.ru
                            <span className="blue">Подтвержден</span>
                        </li>
                        <li>
                            <span className="mute">Город:</span>
                        </li>
                        <li>
                            <span className="mute">Дата рождения:</span>
                        </li>
                        <li>
                            <span className="mute">Банк для оплаты:</span>
                            Сбербанк, ВТБ
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="account-page__section">
            <h1 className="account-page__title">Информация об отеле</h1>
            <div className="account-page__row">
                <div className="account-page__image-wrapper">
                    <img src="https://us.123rf.com/450wm/vadymvdrobot/vadymvdrobot2003/vadymvdrobot200300051/142744663-image-of-a-young-strong-happy-cheery-sports-man-posing-outdoors-in-nature-green-park-looking-camera-.jpg?ver=6"/>
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
        <div className="account-page__row">
            <Link to="../settings" className="account-page__btn mr">Редактировать профиль</Link>
            <button className="account-page__btn-outline">Стать туристом</button>
        </div>
    </div>
  )
}
