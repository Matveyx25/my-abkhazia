import React from 'react'
import Header from '../../components/Header/Header'
import s from './AccountHotel.module.css'
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Profile } from './pages/Profile';
import { Declarations } from './pages/Declarations';
import { Reviews } from './pages/Reviews';
import { Settings } from './pages/Settings';

export const AccountHotel = () => {
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
                    <Route index path="declarations" element={<Declarations/>}/>
                    <Route index path="reviews" element={<Reviews />}/>
                    <Route index path="settings" element={<Settings />}/>
                  </Routes>
                </div>
            </div>
        </div>
    </div>
  )
}
