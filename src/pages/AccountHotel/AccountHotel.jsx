import React from 'react'
import Header from '../../components/Header/Header'
import s from './AccountHotel.module.css'
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Profile } from './pages/Profile';
import { Declarations } from './pages/Declarations';
import { Reviews } from './pages/Reviews';
import { Settings } from './pages/Settings';
import { Messenger } from './pages/Messenger';
import { CalendarPage } from './pages/CalendarPage';
import Footer from '../../components/Footer/Footer';
import { CreateHotel } from './pages/CreatePages/CreateHotel';
import { CreateHotelNumber } from './pages/CreatePages/CreateHotelNumber';
import { CreateHouse } from './pages/CreatePages/CreateHouse';
import { CreateExcursion } from './pages/CreatePages/CreateExcursion';

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
                    <Route path="declarations" element={<Declarations/>}/>
                    <Route path="reviews" element={<Reviews />}/>
                    <Route path="settings" element={<Settings />}/>
                    <Route path="messenger" element={<Messenger />}/>
                    <Route path="calendar" element={<CalendarPage />}/>
                    <Route path="declarations/create-hotel" element={<CreateHotel />}/>
                    <Route path="declarations/create-house" element={<CreateHouse />}/>
                    <Route path="declarations/create-excursion" element={<CreateExcursion />}/>
                    <Route path="declarations/create-hotel/create-number" element={<CreateHotelNumber />}/>
                  </Routes>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
