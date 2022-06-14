import React, { useState } from 'react'
import { Message } from '../../../components/Message/Message';
import { TouristCard } from '../../../components/TouristCard/TouristCard';

export const Messenger = () => {
  const [moveModal, setMoveModal] = useState(false);

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
            <div className="image-item__three-dots">
              <img src="../images/three-circle-vertical-fill.svg" alt="" onClick={() => setMoveModal(!moveModal)}/>
              {moveModal && (
                        <div className="image-item__btn-wrapper">
                          <button onClick={() => setMoveModal(false)}>
                            Очистить чат
                          </button>
                          <button onClick={() => setMoveModal(false)}>
                            Удалить чат
                          </button>
                        </div>
                      )}
            </div>
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
                <button className="messenger-page__btn-send-mobile">
                  <img src="/images/send.svg" alt="" />
                </button>
              </div>
              <button className="messenger-page__btn-send">Отправить</button>
            </div>
          </div>
        </div>
        <TouristCard btnTitle="Оставить отзыв о туристе"/>
      </div>
    </div>
  )
}
