import React, { useState } from "react";
import { AccountLinkList } from "../../../components/AccountLinkList/AccountLinkList";
import CardEdit from "../../../components/CardEdit/CardEdit";
import "./pages.css";
import { Link } from "react-router-dom";
import { CardOrders } from "../../../components/CardEdit/CardOrders";

export const Orders = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const [pageType, setPageType] = useState("Отели");

  const [filter, setFilter] = useState(false);

  const changeValue1 = (event) => {
    setValue1(event.target.value);
  };

  const changeValue2 = (event) => {
    setValue2(event.target.value);
  };

  return (
    <div className="decorations-section">
      <Link className="account-page__back-btn" to="../">
          <img src="/images/arrow-right-circle-fill.svg" alt=""/>
      </Link>
      <div className="account-page__jcsb title-row">
        <h1 className="account-page__title">Мои объявления</h1>
        <div
            className="account-page__filter-mobile"
            onClick={() => setFilter(true)}
          >
            <img src="/images/filter.svg" alt="" />
            Фильтр
          </div>
      </div>
      <div
        className={
          filter
            ? "account-page__filter-wrapper-mobile visible"
            : "account-page__filter-wrapper-mobile"
        }
      >
        <div className="account-page__filter-scroll">
        <div className="account-page__filter-title">
            <img src="/images/ep_circle-close-filled.svg" alt="" onClick={() => setFilter(false)}/>
            Фильтр
          </div>
        <AccountLinkList pageType={pageType} clickHandler={setPageType} />
        {pageType == "Отели" && (
          <>
            <div className="account-page__filter-wrapper">
              <form className="account-page__filter">
                <input
                  type="radio"
                  value="0"
                  id="filterAll"
                  name="filter1"
                  checked={value1 == 0}
                  onChange={changeValue1}
                />
                <label htmlFor="filterAll">Все</label>
                <input
                  type="radio"
                  value="1"
                  id="filterHotel"
                  name="filter1"
                  checked={value1 == 1}
                  onChange={changeValue1}
                />
                <label htmlFor="filterHotel">Отели</label>
                <input
                  type="radio"
                  value="2"
                  id="filterGuest"
                  name="filter1"
                  checked={value1 == 2}
                  onChange={changeValue1}
                />
                <label htmlFor="filterGuest">Гостевые дома</label>
                <input
                  type="radio"
                  value="3"
                  id="filterMiniHotel"
                  name="filter1"
                  checked={value1 == 3}
                  onChange={changeValue1}
                />
                <label htmlFor="filterMiniHotel">Мини-гостиницы</label>
              </form>
              <span className="line"></span>
              <form className="account-page__filter-fill">
                <input
                  type="radio"
                  value="0"
                  id="filterActive"
                  name="filter2"
                  checked={value2 == 0}
                  onChange={changeValue2}
                />
                <label htmlFor="filterActive">Будущие</label>
                <input
                  type="radio"
                  value="1"
                  id="filterNotActive"
                  name="filter2"
                  checked={value2 == 1}
                  onChange={changeValue2}
                />
                <label htmlFor="filterNotActive">Завершенные</label>
                <input
                  type="radio"
                  value="2"
                  id="filterDraft"
                  name="filter2"
                  checked={value2 == 2}
                  onChange={changeValue2}
                />
                <label htmlFor="filterDraft">Отмененные</label>
              </form>
            </div>
          </>
        )}
        {pageType == "Частное жилье" && (
          <>
            <div className="account-page__filter-wrapper">
              <form className="account-page__filter">
                <input
                  type="radio"
                  value="0"
                  id="filterAll"
                  name="filter1"
                  checked={value1 == 0}
                  onChange={changeValue1}
                />
                <label htmlFor="filterAll">Все</label>
                <input
                  type="radio"
                  value="1"
                  id="filterHotel"
                  name="filter1"
                  checked={value1 == 1}
                  onChange={changeValue1}
                />
                <label htmlFor="filterHotel">Квартиры</label>
                <input
                  type="radio"
                  value="2"
                  id="filterGuest"
                  name="filter1"
                  checked={value1 == 2}
                  onChange={changeValue1}
                />
                <label htmlFor="filterGuest">Дома</label>
                <input
                  type="radio"
                  value="3"
                  id="filterMiniHotel"
                  name="filter1"
                  checked={value1 == 3}
                  onChange={changeValue1}
                />
                <label htmlFor="filterMiniHotel">Комнаты</label>
              </form>
              <span className="line"></span>
              <form className="account-page__filter-fill">
                <input
                  type="radio"
                  value="0"
                  id="filterActive"
                  name="filter2"
                  checked={value2 == 0}
                  onChange={changeValue2}
                />
                <label htmlFor="filterActive">Будущие</label>
                <input
                  type="radio"
                  value="1"
                  id="filterNotActive"
                  name="filter2"
                  checked={value2 == 1}
                  onChange={changeValue2}
                />
                <label htmlFor="filterNotActive">Завершенные</label>
                <input
                  type="radio"
                  value="2"
                  id="filterDraft"
                  name="filter2"
                  checked={value2 == 2}
                  onChange={changeValue2}
                />
                <label htmlFor="filterDraft">Отмененные</label>
              </form>
            </div>
          </>
        )}
        {pageType == "Эскурсии и впечатления" && (
          <>
            <div className="account-page__filter-wrapper">
              <form className="account-page__filter">
                <input
                  type="radio"
                  value="0"
                  id="filterAll"
                  name="filter1"
                  checked={value1 == 0}
                  onChange={changeValue1}
                />
                <label htmlFor="filterAll">Все</label>
                <input
                  type="radio"
                  value="1"
                  id="filterHotel"
                  name="filter1"
                  checked={value1 == 1}
                  onChange={changeValue1}
                />
                <label htmlFor="filterHotel">Экскурсии</label>
                <input
                  type="radio"
                  value="2"
                  id="filterGuest"
                  name="filter1"
                  checked={value1 == 2}
                  onChange={changeValue1}
                />
                <label htmlFor="filterGuest">Впечатления</label>
              </form>
              <span className="line"></span>
              <form className="account-page__filter-fill">
                <input
                  type="radio"
                  value="0"
                  id="filterActive"
                  name="filter2"
                  checked={value2 == 0}
                  onChange={changeValue2}
                />
                <label htmlFor="filterActive">Будущие</label>
                <input
                  type="radio"
                  value="1"
                  id="filterNotActive"
                  name="filter2"
                  checked={value2 == 1}
                  onChange={changeValue2}
                />
                <label htmlFor="filterNotActive">Завершенные</label>
                <input
                  type="radio"
                  value="2"
                  id="filterDraft"
                  name="filter2"
                  checked={value2 == 2}
                  onChange={changeValue2}
                />
                <label htmlFor="filterDraft">Отмененные</label>
              </form>
            </div>
          </>
        )}
        {pageType == "Трансфер" && (
          <>
            <div className="account-page__filter-wrapper">
              <form className="account-page__filter-fill">
                <input
                  type="radio"
                  value="0"
                  id="filterActive"
                  name="filter2"
                  checked={value2 == 0}
                  onChange={changeValue2}
                />
                <label htmlFor="filterActive">Будущие</label>
                <input
                  type="radio"
                  value="1"
                  id="filterNotActive"
                  name="filter2"
                  checked={value2 == 1}
                  onChange={changeValue2}
                />
                <label htmlFor="filterNotActive">Завершенные</label>
                <input
                  type="radio"
                  value="2"
                  id="filterDraft"
                  name="filter2"
                  checked={value2 == 2}
                  onChange={changeValue2}
                />
                <label htmlFor="filterDraft">Отмененные</label>
              </form>
            </div>
          </>
        )}
        {pageType == "Аренда авто" && (
          <>
            <div className="account-page__filter-wrapper">
              <form className="account-page__filter-fill">
                <input
                  type="radio"
                  value="0"
                  id="filterActive"
                  name="filter2"
                  checked={value2 == 0}
                  onChange={changeValue2}
                />
                <label htmlFor="filterActive">Будущие</label>
                <input
                  type="radio"
                  value="1"
                  id="filterNotActive"
                  name="filter2"
                  checked={value2 == 1}
                  onChange={changeValue2}
                />
                <label htmlFor="filterNotActive">Завершенные</label>
                <input
                  type="radio"
                  value="2"
                  id="filterDraft"
                  name="filter2"
                  checked={value2 == 2}
                  onChange={changeValue2}
                />
                <label htmlFor="filterDraft">Отмененные</label>
              </form>
            </div>
          </>
        )}
        {pageType == "Кухня Абхазии" && (
          <>
            <div className="account-page__filter-wrapper">
              <form className="account-page__filter-fill">
                <input
                  type="radio"
                  value="0"
                  id="filterActive"
                  name="filter2"
                  checked={value2 == 0}
                  onChange={changeValue2}
                />
                <label htmlFor="filterActive">Будущие</label>
                <input
                  type="radio"
                  value="1"
                  id="filterNotActive"
                  name="filter2"
                  checked={value2 == 1}
                  onChange={changeValue2}
                />
                <label htmlFor="filterNotActive">Завершенные</label>
                <input
                  type="radio"
                  value="2"
                  id="filterDraft"
                  name="filter2"
                  checked={value2 == 2}
                  onChange={changeValue2}
                />
                <label htmlFor="filterDraft">Отмененные</label>
              </form>
            </div>
          </>
        )}
        <div className="account-page__filter-btns">
          <button className="account-page__btn-outline" onClick={() => setFilter(false)}>Сбросить</button>
          <button className="account-page__btn" onClick={() => setFilter(false)}>Применить</button>
        </div>
        </div>
      </div>


      {pageType == "Отели" && (
        <>
          <div className="account-page__result-wrapper">
            <CardOrders
              image="/images/housing-catalog/item-1.jpg"
              title='Отель у моря “Бамбучо”, Бюджетный двухместный номер с 1 кроватью '
              pricePaid="1 600₽ за бронь"
              priceFor="28 800₽"
              status="coming"
              type="hotel"
              date="от 30.04.2022"
              dateIn="16 апреля, чт."
              dateOut="2 мая, пн."
              guests="2 мая, пн."
              link="/hotel-card"
              hotelType="Мини гостиница"
              hotelLocation="Абхазия, Пицунда, улица Речная 11а "
            />
            <CardOrders
              image="/images/housing-catalog/item-1.jpg"
              title='Отель у моря “Бамбучо”, Бюджетный двухместный номер с 1 кроватью '
              pricePaid="1 600₽ за бронь"
              priceFor="28 800₽"
              status="end"
              type="hotel"
              date="от 30.04.2022"
              dateIn="16 апреля, чт."
              dateOut="2 мая, пн."
              guests="2 мая, пн."
              link="/hotel-card"
              hotelType="Мини гостиница"
              hotelLocation="Абхазия, Пицунда, улица Речная 11а "
            />
            <CardOrders
              image="/images/housing-catalog/item-1.jpg"
              title='Отель у моря “Бамбучо”, Бюджетный двухместный номер с 1 кроватью '
              pricePaid="1 600₽ за бронь"
              priceBack="1 600₽"
              status="closed"
              type="hotel"
              date="от 30.04.2022"
              dateIn="16 апреля, чт."
              dateOut="2 мая, пн."
              guests="2 мая, пн."
              link="/hotel-card"
              hotelType="Мини гостиница"
              hotelLocation="Абхазия, Пицунда, улица Речная 11а "
            />
          </div>
        </>
      )}
      {pageType == "Частное жилье" && (
        <>
          <div className="account-page__result-wrapper">
            <CardOrders
                image="/images/housing-catalog/item-4.jpg"
                title='Отель у моря “Бамбучо”, Бюджетный двухместный номер с 1 кроватью '
                pricePaid="1 600₽ за бронь"
                priceFor="28 800₽"
                status="coming"
                type="hotel"
                date="от 30.04.2022"
                dateIn="16 апреля, чт."
                dateOut="2 мая, пн."
                guests="2 мая, пн."
                link="/hotel-card"
                hotelType="Мини гостиница"
                hotelLocation="Абхазия, Пицунда, улица Речная 11а "
              />
          </div>
        </>
      )}
      {pageType == "Эскурсии и впечатления" && (
        <>
          <div className="account-page__result-wrapper">
            <CardOrders
                image="/images/tours/item-1.jpg"
                title='Эскурсия на озеро Рица'
                pricePaid="4 700₽ с доп. опциями"
                priceFor="0₽"
                status="coming"
                type="excursion"
                date="от 30.04.2022"
                dateIn="4 мая, ср."
                options="Экологический сбор"
                guests="2 мая, пн."
                meetLocation="г. Гагра, улица и дом"
                link="/hotel-card"
                hotelType="Природа"
                hotelLocation="Абхазия, Гагра"
              />
            <CardOrders
                image="/images/tours/item-2.jpg"
                title='Лепка из глины'
                pricePaid="4 000₽"
                priceFor="0₽"
                status="coming"
                type="impression"
                date="от 30.04.2022"
                dateIn="4 мая, ср."
                guests="2 мая, пн."
                meetLocation="г. Гагра, улица и дом"
                link="/hotel-card"
                hotelType="Впечатление"
                hotelLocation="Абхазия, Гагра"
              />
          </div>
        </>
      )}
      {pageType == "Трансфер" && (
        <>
          <div className="account-page__result-wrapper">
            <CardOrders
                image="/images/car-card/slider--2.jpg"
                title='Автомобиль эконом класса'
                pricePaid="500₽ за бронь"
                priceFor="1 000₽"
                status="coming"
                type="transfer"
                date="от 30.04.2022"
                dateIn="4 мая, ср."
                dateOut="16 мая, пн., в 8:00 часов"
                locationFrom="Аэропорт Сочи, номер рейса №6545 "
                locationTo="Гагра, улица и дом "
                guests="2 мая, пн."
                link="/hotel-card"
                hotelType="Компания, индивидульный"
              />
          </div>
        </>
      )}
      {pageType == "Аренда авто" && (
        <>
          <div className="account-page__result-wrapper">
              <CardOrders
                image="/images/car-card/slider--1.jpg"
                title='Audi Q5'
                pricePaid="500₽ за бронь"
                priceFor="1 000₽"
                status="coming"
                type="rent"
                date="от 30.04.2022"
                dateIn="16 мая, пн., в 8:00 часов"
                dateOut="16 мая, пн., в 8:00 часов"
                guests="2 взрослых"
                link="/hotel-card"
                hotelType="Audi"
                hotelLocation="Новый Афон, ул Харазия 2"
                meetLocation="Новый Афон, ул Харазия 2"
              />
          </div>
        </>
      )}
      {pageType == "Кухня Абхазии" && (
        <>
          <div className="account-page__result-wrapper">
          <CardOrders
                image="/images/restaurant-card/item--2.jpg"
                title='Ресторан Абаата'
                pricePaid="500₽ за бронь"
                priceFor="0₽"
                status="coming"
                type="food"
                date="от 30.04.2022"
                dateIn="16 мая, пн., в 16:00 "
                guests="2 взрослых"
                link="/hotel-card"
                hotelType="Ресторан"
                hotelLocation="Гагра, Пр-т Нартаа 115"
              />
          </div>
        </>
      )}
    </div>
  );
};
