import React from 'react'
import Header from '../../components/Header/Header'
import s from './AccountHotel.module.css'
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { Profile } from './pages/Profile';

export const AccountHotel = () => {
  const location = useLocation()

  return (
    <div>
        <Header/>
        <div className={s.title}>
            <h1>Мой кабинет</h1>
            <span></span>
        </div>
        <div className={s.container}>
            <div className={s.flex}>
                <Sidebar />
                <div className={s.contentWrapper}>
                  <Routes>
                    <Route
                        path="/"
                        exact
                        element={<Navigate to="profile" replace />}
                    />
                    <Route index path="profile" element={<Profile/>}/>
                  </Routes>
                </div>
            </div>
        </div>
    </div>
  )
}
