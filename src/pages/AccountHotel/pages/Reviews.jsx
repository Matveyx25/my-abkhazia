import React, { useState } from 'react'
import CardReviewsAccount from '../../../components/CardReviewsAccount/CardReviewsAccount';
import './pages.css'
import { AccountLinkList } from '../../../components/AccountLinkList/AccountLinkList';
import { Link } from 'react-router-dom';


const Description = {
  accountsList: [
    {
      accountImage: "../../images/card-description/profile--2.jpg",
      accountName: "Татьяна",
      stars: 5,
      dateOfRegistration: "12.04.2022 г.",
      description:
        "Прекрасный отель. Очень милые и приветливые хозяева. Расположен идеально удобно для прогулок по городу. Для отдыха на пляже лучше иметь машину. Всем рекомендую. Спасибо за хороший отдых.",
    },
    {
      accountImage: "../../images/card-description/profile--3.jpg",
      accountName: "Владимир",
      stars: 3,
      dateOfRegistration: "12.04.2022 г.",
      description:
        "Прекрасный отель. Очень милые и приветливые хозяева. Расположен идеально удобно для прогулок по городу. Для отдыха на пляже лучше иметь машину. Всем рекомендую. Спасибо за хороший отдых.",
    },
    {
      accountImage: "../../images/card-description/profile--4.jpg",
      accountName: "Кирилл",
      stars: 4,
      dateOfRegistration: "08.08.2022 г.",
      description:
        "Прекрасный отель. Очень милые и приветливые хозяева. Расположен идеально удобно для прогулок по городу. Для отдыха на пляже лучше иметь машину. Всем рекомендую. Спасибо за хороший отдых.",
    },
    {
      accountImage: "../../images/card-description/profile--5.jpg",
      accountName: "Олег",
      stars: 5,
      dateOfRegistration: "12.04.2022 г.",
      description:
        "Прекрасный отель. Очень милые и приветливые хозяева. Расположен идеально удобно для прогулок по городу. Для отдыха на пляже лучше иметь машину. Всем рекомендую. Спасибо за хороший отдых.",
    },
  ]
};

export const Reviews = () => {
  const [value, setValue] = useState(0);
  const [filter, setFilter] = useState(false);

  const changeValue = (event) => {
    setValue(event.target.value);
  }

  return (
    <div className="decorations-section">
      <Link className="account-page__back-btn" to="../">
            <img src="/images/arrow-right-circle-fill.svg" alt=""/>
        </Link>
        <h1 className="account-page__title">Отзывы</h1>
        <div className="account-page__filter-mobile" onClick={() => setFilter(true)}>
            <img src="/images/filter.svg" alt="" />
            Фильтр
        </div>
        <div className={filter ? "account-page__filter-wrapper-mobile visible" : "account-page__filter-wrapper-mobile"}>
          <div className="account-page__filter-title">
            <img src="/images/ep_circle-close-filled.svg" alt="" onClick={() => setFilter(false)}/>
            Фильтр
          </div>
          <AccountLinkList/>
          <div className="account-page__filter-wrapper">
            <form className="account-page__filter">
              <input type="radio" value="0" id="filterAll" name="filter" checked={value == 0} onChange={changeValue}/>
              <label htmlFor="filterAll">Все</label>
              <input type="radio" value="1" id="filterHotel" name="filter" checked={value == 1} onChange={changeValue}/>
              <label htmlFor="filterHotel">Отели</label>
              <input type="radio" value="2" id="filterGuest" name="filter" checked={value == 2} onChange={changeValue}/>
              <label htmlFor="filterGuest">Гостевые дома</label>
              <input type="radio" value="3" id="filterMiniHotel" name="filter" checked={value == 3} onChange={changeValue}/>
              <label htmlFor="filterMiniHotel">Мини-гостиницы</label>
            </form>
          </div>
          <div className="account-page__filter-btns">
            <button className="account-page__btn-outline" onClick={() => setFilter(false)}>Сбросить</button>
            <button className="account-page__btn" onClick={() => setFilter(false)}>Применить</button>
          </div>
        </div>

        <div className="account-page__reviews-wrapper">
        <CardReviewsAccount
          Description={Description}
        />
        </div>
    </div>
  )
}
