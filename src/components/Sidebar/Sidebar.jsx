import React from 'react'
import s from './Sidebar.module.css'
import { Link, useLocation } from 'react-router-dom'

export const Sidebar = () => {
    const location = useLocation()
     
  return (
    <div className={s.wrapper}>
        <Link to={`${location.pathname}/profile`} className={s.profileLink} activeClass={s.active}>
            <div className={s.imgWrapper}>
                <img src="https://us.123rf.com/450wm/vadymvdrobot/vadymvdrobot2003/vadymvdrobot200300051/142744663-image-of-a-young-strong-happy-cheery-sports-man-posing-outdoors-in-nature-green-park-looking-camera-.jpg?ver=6"/>
            </div>
            Сергей
        </Link>
        <Link to="/" className={s.navLink}>
            <img src="../../images/fluent_clipboard.svg"/>    
            Мои объявления
        </Link>
        <Link to="/" className={s.navLink}>
            <img src="../../images/bxs_calendar.svg"/>    
            Календарь занятости
        </Link>
        <Link to="/" className={s.navLink}>
            <img src="../../images/clarity_email-solid.svg"/>    
            Сообщения
        </Link>
        <Link to="/" className={s.navLink}>
            <img src="../../images/clarity_wallet-solid.svg"/>    
            Кошелек
        </Link>
        <Link to="/" className={s.navLink}>
            <img src="../../images/bi_people-fill.svg"/>    
            Отзывы
        </Link>
        <Link to="/" className={s.navLink}>
            <img src="../../images/ci_settings-filled.svg"/>    
            Настройки
        </Link>
    </div>
  )
}
