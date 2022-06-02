import React from 'react'
import s from './Sidebar.module.css'
import { Link, NavLink, useLocation } from 'react-router-dom'

export const Sidebar = () => {
    const location = useLocation()
     
  return (
    <div className={s.wrapper}>
        <NavLink to="profile" className={s.profileLink} style={({ isActive }) => isActive ? {background: '#fff'} : undefined}>
            <div className={s.imgWrapper}>
                <img src="https://us.123rf.com/450wm/vadymvdrobot/vadymvdrobot2003/vadymvdrobot200300051/142744663-image-of-a-young-strong-happy-cheery-sports-man-posing-outdoors-in-nature-green-park-looking-camera-.jpg?ver=6"/>
            </div>
            Сергей
        </NavLink>
        <NavLink to="declarations" className={s.navLink} style={({ isActive }) => isActive ? {background: '#fff'} : undefined}>
            <img src="../../images/fluent_clipboard.svg"/>    
            Мои объявления
        </NavLink>
        <NavLink to="calendar" className={s.navLink} style={({ isActive }) => isActive ? {background: '#fff'} : undefined}>
            <img src="../../images/bxs_calendar.svg"/>    
            Календарь занятости
        </NavLink>
        <NavLink to="email" className={s.navLink} style={({ isActive }) => isActive ? {background: '#fff'} : undefined}>
            <img src="../../images/clarity_email-solid.svg"/>    
            Сообщения
        </NavLink>
        <NavLink to="wallet" className={s.navLink} style={({ isActive }) => isActive ? {background: '#fff'} : undefined}>
            <img src="../../images/clarity_wallet-solid.svg"/>    
            Кошелек
        </NavLink>
        <NavLink to="reviews" className={s.navLink} style={({ isActive }) => isActive ? {background: '#fff'} : undefined}>
            <img src="../../images/bi_people-fill.svg"/>    
            Отзывы
        </NavLink>
        <NavLink to="settings" className={s.navLink} style={({ isActive }) => isActive ? {background: '#fff'} : undefined}>
            <img src="../../images/ci_settings-filled.svg"/>    
            Настройки
        </NavLink>
    </div>
  )
}
