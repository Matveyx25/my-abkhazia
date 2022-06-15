import React, { useState } from 'react'
import { Message } from '../../../components/Message/Message';
import { TouristCard } from '../../../components/TouristCard/TouristCard';
import { ChatCard } from '../../../components/ChatCard/ChatCard';
import { Link } from 'react-router-dom';

export const Messenger = () => {
  return (
    <div className="messenger-page__section">
      <Link className="account-page__back-btn" to="../">
          <img src="/images/arrow-right-circle-fill.svg" alt=""/>
      </Link>
      <h1 className="account-page__title">Сообщения</h1>
      <div className="messenger-page__chats-wrapper">
          <ChatCard online={true} notifications={1}/>
      </div>
    </div>
  )
}
