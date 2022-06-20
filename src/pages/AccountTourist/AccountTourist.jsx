import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import s from './AccountTourist.module.css'
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import { Profile } from './pages/Profile';
import { Orders } from './pages/Orders';
import { Reviews } from './pages/Reviews';
import { Settings } from './pages/Settings';
import { Messenger } from './pages/Messenger';
import { Wallet } from './pages/Wallet';
import { MessengerChat } from './pages/MessengerChat';
import { BookedPage } from './pages/BookedPage';

export const AccountTourist = () => {
  const [width, setWindowWidth] = useState(0);

  useEffect(() => { 

    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize",updateDimensions);
   }, [])

  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }

  return (
    <div>
        <Header />
        <div className={s.title}>
            <h1>Мой кабинет</h1>
            <span></span>
        </div>
        <div className={s.container}>
            <div className={s.flex}>
                {width > 1150 && <Sidebar type="tourist"/>}
                <div className={s.contentWrapper}>
                  <Routes>
                    <Route
                        path="/"
                        exact
                        element={width > 1150 ?
                        <Navigate to="profile" replace />:
                        <Sidebar  type="tourist"/>
                      }
                    />
                    <Route index path="profile" element={<Profile/>}/>
                    <Route path="orders" element={<Orders/>}/>
                    <Route path="bookmarked" element={<BookedPage />}/>
                    <Route path="reviews" element={<Reviews />}/>
                    <Route path="settings" element={<Settings />}/>
                    <Route path="messenger" element={<Messenger />}/>
                    <Route path="messenger/chat" element={<MessengerChat/>}/>
                    <Route path="wallet" element={<Wallet />}/>
                  </Routes>
                </div>
            </div>
        </div>
        <section className="footer__link-list">
        <article className="link-list__logo-and-social">
          <div className="logo-and-social__wrapper">
            <img
              className="header__logo-image"
              src="/images/logo-color.svg"
              alt="header-logo-image"
              width="118"
              height="74"
            />
          </div>
          <ul className="logo-and-social__social">
            <li className="logo-and-social__social-item">
              <a className="logo-and-social__social-item-link" href="#">
                <div className="social-item-link__image social-item-link__image--vk"></div>
              </a>
            </li>
            <li className="logo-and-social__social-item">
              <a className="logo-and-social__social-item-link" href="#">
                <div className="social-item-link__image social-item-link__image--fb"></div>
              </a>
            </li>
            <li className="logo-and-social__social-item">
              <a className="logo-and-social__social-item-link" href="#">
                {" "}
                <div className="social-item-link__image social-item-link__image--inst"></div>
              </a>
            </li>
          </ul>
        </article>
        <article className="link-list__pages">
          <div className="link-list__rest">
            <h5 className="link-list__rest-title">Отдых</h5>
            <ul className="link-list__rest-links">
              <li className="link-list__rest-item">
                <a className="link-list__rest-item-link" href="#">
                  Проживание
                </a>
              </li>
              <li className="link-list__rest-item">
                <a className="link-list__rest-item-link" href="#">
                  Эскурсии и впечатления
                </a>
              </li>
              <li className="link-list__rest-item">
                <a className="link-list__rest-item-link" href="#">
                  Трансфер{" "}
                </a>
              </li>
              <li className="link-list__rest-item">
                <a className="link-list__rest-item-link" href="#">
                  Аренда авто
                </a>
              </li>
              <li className="link-list__rest-item">
                <a className="link-list__rest-item-link" href="#">
                  Кухня Абхазии
                </a>
              </li>
              <li className="link-list__rest-item">
                <a className="link-list__rest-item-link" href="#">
                  Города Абхазии
                </a>
              </li>
            </ul>
          </div>
          <div className="link-list__partners">
            <h5 className="link-list__partners-title">Партнерам</h5>
            <ul className="link-list__partners-links">
              <li className="link-list__partners-item">
                <a className="link-list__partners-item-link" href="#">
                  Стать партнером
                </a>
              </li>
            </ul>
          </div>
          <div className="link-list__feedback">
            <h5 className="link-list__feedback-title">Обратная связь</h5>
            <ul className="link-list__feedback-links">
              <li className="link-list__feedback-item">
                <Link
                  className="link-list__feedback-item-link"
                  to="/hotel-card"
                >
                  Служба туристической заботы
                </Link>
              </li>
              <li className="link-list__feedback-item">
                <Link
                  to="/town-card"
                  className="link-list__feedback-item-link"
                  href="#"
                >
                  Информация о безопасности
                </Link>
              </li>
              <li className="link-list__feedback-item">
                <Link
                  to="/report-problem"
                  className="link-list__feedback-item-link"
                  href="#"
                >
                  Сообщить о проблеме
                </Link>
              </li>
              <li className="link-list__feedback-item">
                <Link
                  to="/sentence-for"
                  className="link-list__feedback-item-link"
                >
                  Форма для предложений
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </section>
      <section className="footer__copyright">
        <ul className="footer__copyright-list">
          <li className="copyright-list__item">
            <a className="copyright-list__item-link copyright-list__item-link--not-underline" href="#">
              © 2022 myapsny.ru
            </a>
          </li>
          <li className="copyright-list__item">
            <a className="copyright-list__item-link" href="#">
              Политика конфендициальности
            </a>
          </li>
          <li className="copyright-list__item">
            <a className="copyright-list__item-link" href="#">
              Условия
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}
