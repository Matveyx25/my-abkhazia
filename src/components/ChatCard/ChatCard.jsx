import React from 'react'
import { Link } from 'react-router-dom'

export const ChatCard = ({online, notifications}) => {
  return (
    <article className="card-description__owner chat-card">
          <div className="card-description__owner-data">
            <div className="card-description__owner-data-img">
              <img
                className="card-description__owner-photo"
                src='../../images/card-description/profile--2.jpg'
                alt="owner"
                width="95"
                height="95"
              />
              <span className="card-description__owner-data-online-dot"></span>
            </div>
            <div className="owner-data__wrapper">
              <h5 className="owner-data__name">
              Анастасия
              </h5>
              <p className="owner-data__registration">
              {online ? "Онлайн" : "Не в сети"}
              </p>
            </div>
          </div>
          <Link className="card-description__owner-write chat-btn" to="chat">
              Перейти в чат
              <span className="card-description__owner-write-notifications">{notifications}</span>
          </Link>
        </article> 
  )
}
