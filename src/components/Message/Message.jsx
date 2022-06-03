import React from 'react'
import './Message.css'

export const Message = ({seen, text, image, author, isEnd}) => {
  return (
    <div className={author == 'me' ? "message__wrapper-me" : "message__wrapper-notme"}>
        <div className="message__image-wrapper">
            <img src={image}/>
        </div>
        <div>
            <div className="message__text">{text}</div>
            {isEnd && seen && (author == 'me') ? <p className="message__seen">Просмотрено</p> : null}
        </div>
    </div>
  )
}
