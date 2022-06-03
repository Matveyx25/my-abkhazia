import React from 'react'
import { Message } from '../../../components/Message/Message';

export const Messenger = () => {
  return (
    <div className="messenger-page__section">
      <h1 className="account-page__title">Сообщения</h1>
      <div className="messenger-page__row">
        <div className="messenger-page__chat-wrapper">
          <div className="account-page__jcsb">
            <div className="messenger-page__back-btn">
              <img src="../images/arrow-right-circle-fill.svg"/>
              Назад
            </div>
            <img src="../images/three-circle-vertical-fill.svg" alt="" />
          </div>
          <div className="messenger-page__chat">
            <div className="messenger-page__messages">
              <p className="messenger-page__date">Сегодня</p>
                <Message 
                  text="Здравствуйте! Хотела узнать про ваш отель и город подробнее." 
                  image="../../images/card-description/profile--2.jpg"/>
                <Message 
                  text="Здравствуйте!" 
                  image="../../images/card-description/profile--1.jpg"
                  author='me'
                  seen={true}
                  isEnd={true}/>
              </div>
            <div className="messenger-page__send-block">
              <div className="messenger-page__input-block">
                <button className="messenger-page__emoji"><img src="../images/smile.svg" alt="" /></button>              
                  <input placeholder="Введите сообщение"/>
                <button className="messenger-page__clip"><img src="../images/paper-clip.svg" alt="" /></button>              
              </div>
              <button className="messenger-page__btn-send">Отправить</button>
            </div>
          </div>
        </div>
        <article className="card-description__owner">
              <h5 className="card-description__owner-title">Турист</h5>
              <div className="card-description__owner-data">
                <img
                  className="card-description__owner-photo"
                  src='../../images/card-description/profile--2.jpg'
                  alt="owner"
                  width="95"
                  height="95"
                />
                <div className="owner-data__wrapper">
                  <h5 className="owner-data__name">
                  Анастасия
                  </h5>
                  <p className="owner-data__registration">
                  На сайте: с 7.04.2022
                  </p>
                </div>
              </div>
              <div className="card-description__owner-option">
                <div className="owner-option__image-wrapper">
                  <img
                    className="owner-option__image"
                    src="../../images/card-description/protection.svg"
                    alt="protection"
                    width="18.6"
                    height="22"
                  />
                </div>
                <p className="owner-option__text">
                  Телефон и почта подверждены
                </p>
              </div>
              <div className="card-description__owner-option">
                <div className="owner-option__image-wrapper">
                  <img
                    className="owner-option__image"
                    src="../../images/card-description/star.svg"
                    alt="protection"
                    width="24"
                    height="24"
                  />
                </div>
                <p className="owner-option__text">
                  15 отзывов
                </p>
              </div>
              <p className="card-description__owner-write" href="#">
                Оставить отзыв о туристе
              </p>
        </article> 
      </div>
    </div>
  )
}
