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
import { CreateImpression } from './pages/CreatePages/CreateImpression';
import { CreateFood } from './pages/CreatePages/CreateFood';
import { CreateRent } from './pages/CreatePages/CreateRent';
import { CreateTransfer } from './pages/CreatePages/CreateTransfer';
import { CreateCalendarHotel } from './pages/CreateCalendar/CreateCalendarHotel';
import { CreateCalendarHouse } from './pages/CreateCalendar/CreateCalendarHouse';
import { CreateCalendarImpretion } from './pages/CreateCalendar/CreateCalendarImpretion';
import { CreateCalendarExcursion } from './pages/CreateCalendar/CreateCalendarExcursion';
import { CreateCalendarRent } from './pages/CreateCalendar/CreateCalendarRent';
import { CreateCalendarTransfer } from './pages/CreateCalendar/CreateCalendarTransfer';
import { CreateCalendarFood } from './pages/CreateCalendar/CreateCalendarFood';
import { Wallet } from './pages/Wallet';

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
                    <Route path="wallet" element={<Wallet />}/>
                    <Route path="calendar/create-hotel" element={<CreateCalendarHotel />}/>
                    <Route path="calendar/create-house" element={<CreateCalendarHouse />}/>
                    <Route path="calendar/create-excursion" element={<CreateCalendarExcursion />}/>
                    <Route path="calendar/create-rent" element={<CreateCalendarRent />}/>
                    <Route path="calendar/create-transfer" element={<CreateCalendarTransfer />}/>
                    <Route path="calendar/create-food" element={<CreateCalendarFood />}/>
                    <Route path="calendar/create-impression" element={<CreateCalendarImpretion />}/>
                    <Route path="declarations/create-hotel" element={<CreateHotel />}/>
                    <Route path="declarations/create-house" element={<CreateHouse />}/>
                    <Route path="declarations/create-excursion" element={<CreateExcursion />}/>
                    <Route path="declarations/create-impression" element={<CreateImpression />}/>
                    <Route path="declarations/create-food" element={<CreateFood />}/>
                    <Route path="declarations/create-rent" element={<CreateRent />}/>
                    <Route path="declarations/create-transfer" element={<CreateTransfer />}/>
                    <Route path="declarations/create-hotel/create-number" element={<CreateHotelNumber />}/>
                  </Routes>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
