import React from 'react'
import Header from '../../components/Header/Header'
import s from './AccountHotel.module.css'
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Route, Routes, useLocation } from 'react-router-dom';

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
                <Routes>
                  <Route exact path={location.pathname}>
                    <h3>Please select a topic.</h3>
                  </Route>
                  <Route path={`${location.pathname}/profile`}>
                    <>LK</>
                  </Route>
                </Routes>
            </div>
        </div>
    </div>
  )
}
