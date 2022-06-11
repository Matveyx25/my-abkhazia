import React, { useState } from 'react'
import { AccountLinkList } from '../../../components/AccountLinkList/AccountLinkList';
import CardEdit from '../../../components/CardEdit/CardEdit';
import './pages.css'
import { Link } from 'react-router-dom';

export const Declarations = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const [pageType, setPageType] = useState('Отели')

  const changeValue1 = (event) => {
    setValue1(event.target.value);
  }

  const changeValue2 = (event) => {
    setValue2(event.target.value);
  }

  return (
    <div className="decorations-section">
        <div className="account-page__jcsb">
            <h1 className="account-page__title">Мои объявления</h1>
            <button className="account-page__btn-dashed"><img src="../images/plus.svg"/>Добавить еще услугу</button>
        </div>

        <AccountLinkList pageType={pageType} clickHandler={setPageType}/>

        <div className="account-page__filter-wrapper">
          <form className="account-page__filter">
            <input type="radio" value="0" id="filterAll" name="filter1" checked={value1 == 0} onChange={changeValue1}/>
            <label htmlFor="filterAll">Все</label>
            <input type="radio" value="1" id="filterHotel" name="filter1" checked={value1 == 1} onChange={changeValue1}/>
            <label htmlFor="filterHotel">Отели</label>
            <input type="radio" value="2" id="filterGuest" name="filter1" checked={value1 == 2} onChange={changeValue1}/>
            <label htmlFor="filterGuest">Гостевые дома</label>
            <input type="radio" value="3" id="filterMiniHotel" name="filter1" checked={value1 == 3} onChange={changeValue1}/>
            <label htmlFor="filterMiniHotel">Мини-гостиницы</label>
          </form>
          <form className="account-page__filter-fill">
            <input type="radio" value="0" id="filterActive" name="filter2" checked={value2 == 0} onChange={changeValue2}/>
            <label htmlFor="filterActive">Активные</label>
            <input type="radio" value="1" id="filterNotActive" name="filter2" checked={value2 == 1} onChange={changeValue2}/>
            <label htmlFor="filterNotActive">Неактивные</label>
            <input type="radio" value="2" id="filterDraft" name="filter2" checked={value2 == 2} onChange={changeValue2}/>
            <label htmlFor="filterDraft">Черновики</label>
          </form>
        </div>

        <div className="account-page__result-wrapper">
        <CardEdit
                image="../images/housing-catalog/item-1.jpg"
                title='Отель у моря "Бамбучо"'
                stars={5}
                reviews={15}
                subTitle1="Мини-гостиница"
                subTitle2="Пицунда"
                additions={["Бесплатный Wi-Fi, бар", "Семейные номера"]}
                price="1 600₽ сутки"
                choiseText="Снять с публикации"
                status="active"
                link="/hotel-card"
              />
          <CardEdit
                title='Отель у моря "Бамбучо"'
                stars={5}
                reviews={15}
                subTitle1="Мини-гостиница"
                subTitle2="Пицунда"
                additions={["Бесплатный Wi-Fi, бар", "Семейные номера"]}
                price="1 600₽ сутки"
                status="draft"
                link="/hotel-card"
              />
          <Link to="create-hotel" className="account-page__btn-add-hotel">
            <img src="../images/plus-add-hotel.svg" alt="" />
            <p>Добавить еще отель</p>
          </Link>
          <Link to="create-house" className="account-page__btn-add-hotel">
            <img src="../images/plus-add-hotel.svg" alt="" />
            <p>Добавить еще частное жилье</p>
          </Link>
          <Link to="create-excursion" className="account-page__btn-add-hotel">
            <img src="../images/plus-add-hotel.svg" alt="" />
            <p>Добавить еще экскурсию</p>
          </Link>
          <Link to="create-impression" className="account-page__btn-add-hotel">
            <img src="../images/plus-add-hotel.svg" alt="" />
            <p>Добавить еще впечатления</p>
          </Link>
        </div>
    </div>
  )
}
