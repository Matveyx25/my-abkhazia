import React from 'react'
import { Modal } from '../../../components/Modal/Modal'
import { useState } from 'react';
import Radio from '../../../components/Radio/Radio';
import { Link } from 'react-router-dom';

export const Wallet = () => {
  const [modal, setModal] = useState(false)
  const [removeModal, setRemoveModal] = useState(false)
  const [ballanceModal, setBallanceModal] = useState(false)
  const [removed, setRemoved] = useState(false)
  const [balanced, setBalanced] = useState(false)
  const [payType, setPayType] = useState()

  return (
    <div className="messenger-page__section">
      <Modal visible={modal} onClose={() => setModal(false)}>
        <h1 className="ballance-page__title">Добавление карты</h1>
        <div className="ballance-page__company-imgs">
          <img src="/images/mir-card.svg" alt="" />
          <img src="/images/visa.svg" alt="" />
          <img src="/images/mastercard_payment.svg" alt="" />
        </div>
        <input type="text" className="balance-page__input-number" placeholder="0000 0000 0000 0000"/>
        <div className="balance-page__inputs-row">
          <input type="text" className="balance-page__input-date" placeholder="ММ"/>
          <input type="text" className="balance-page__input-date" placeholder="ГГ"/>
          <input type="text" className="balance-page__input-ccv" placeholder="СVV/ СVС"/>
        </div>
        <div className="balance-page__btns">
          <button className="account-page__btn">Добавить карту</button>
          <button className="account-page__btn-outline" onClick={() => setModal(false)}>Отменить</button>
        </div>
        <p className="ballance-page__desc">
        Гарантируем безопасность платежа и сохранность личных данных протоколом
        </p>
      </Modal>
      <Modal visible={removeModal} onClose={() => setRemoveModal(false)}>
        <h1 className="ballance-page__title">Добавление карты</h1>
        <div className="ballance-page__modal-content">
        {!removed ?<> <p className="ballance-page__center-text">
         Вы точно хотите удалить карту <br/>220220******9127?
        </p>
        <div className="balance-page__btns">
          <button className="account-page__btn" onClick={() => setRemoved(true)}>Удалить карту</button>
          <button className="account-page__btn-outline">Отменить</button>
        </div></> :
        <> <p className="ballance-page__center-text">
          Ваша карта удалена!
       </p>
       <div className="balance-page__btns">
         <button className="account-page__btn" onClick={() => setRemoveModal(false)}>В  личный кабинет</button>
       </div></> 
        }
        </div>
      </Modal>
      <Modal visible={ballanceModal} onClose={() => setBallanceModal(false)}>
        <h1 className="ballance-page__title">Пополнить кошелек</h1>
        <div className="ballance-page__modal-content">
        {!balanced ?<> <p>
          Выберите подходящий Вам способ, чтобы пополнить кошелек:
        </p>
        <Radio labelText="Картой онлайн на сайте" inputId="insite" inputValue="Картой онлайн на сайте" inputName="balance" checked={payType == 'Картой онлайн на сайте'} changeFunction={event => setPayType(event.target.value)}/>
        <Radio labelText="Прикрепленной картой" inputId="outsite" inputValue="Прикрепленной картой" inputName="balance" checked={payType == 'Прикрепленной картой'} changeFunction={event => setPayType(event.target.value)}/>
         {payType == 'Прикрепленной картой' && <div className="ballance-page__card-radios">
              <Radio labelText={<div className="account-page__wallet-card">
                <div className="account-page__jcsb">
                  <div>
                    <h2>Номер карты</h2>
                    <p>220220******9127</p>
                  </div>
                  <div>
                    <h2>Срок карты</h2>
                    <p>09/24</p>
                  </div>
                </div>
                <img src="/images/mir-card.svg"/>
              </div>} inputId="mircard" inputValue="MIR" inputName="cards"/>
              <Radio labelText={<div className="account-page__wallet-card">
                <div className="account-page__jcsb">
                  <div>
                    <h2>Номер карты</h2>
                    <p>220220******9127</p>
                  </div>
                  <div>
                    <h2>Срок карты</h2>
                    <p>09/24</p>
                  </div>
                </div>
                <img src="/images/mastercard_payment.svg"/>
              </div>} inputId="master" inputValue="mastercard" inputName="cards"/>
         </div>}
          <button className="account-page__btn-100" onClick={() => setBalanced(true)}>Пополнить</button></> :
        <> <p className="ballance-page__center-text">
          Ваш кошелек пополнен! 
          <br/>
          Теперь вы сможете бронировать нужные вам услуги, без ввода данных вашей карты!
       </p>
       <div className="balance-page__btns">
         <button className="account-page__btn" onClick={() => setBallanceModal(false)}>На сайт</button>
       </div></> 
        }
        </div>
      </Modal>
      <Link className="account-page__back-btn" to="../">
          <img src="/images/arrow-right-circle-fill.svg" alt=""/>
      </Link>
      <h1 className="account-page__title">Кошелек</h1>
      <div className="account-page__wallet-row">
        <div className="account-page__wallet-ballance-card">
          <div className="account-page__jcsb">
            <p className="account-page__wallet-ballance">100,00₽ </p>
            <img src="/images/clarity_wallet-solid.svg"/>  
          </div>
          <button className="account-page__add-ballance-btn" onClick={() => setBallanceModal(true)}>Пополнить кошелек</button>
        </div>
        <p className="account-page__balance-desc">*Встроенным кошельком вы можете оплатить бронирование услуги, которую вы выбрали.
При отмене бронирования, деньги будут возвращаться                на ваш кошелек.</p>
      </div>
      <h2 className="account-page__history-title">История заказов</h2>
      <p className="account-page__history">Оплата брони 20% “Отель Бамбучо”  <strong> 6 084₽</strong></p>
      <span className="account-page__line"></span>
      <div className="account-page__row-30">
      <div className="account-page__wallet-card">
          <div className="account-page__jcsb">
            <div>
              <h2>Номер карты</h2>
              <p>220220******9127</p>
            </div>
            <div>
              <h2>Срок карты</h2>
              <p>09/24</p>
            </div>
          </div>
          <img src="/images/mir-card.svg"/>
          <div className="account-page__btn-remove-card" onClick={() => setRemoveModal(true)}>
              <img src="/images/dashicons_trash.svg" />
              <img src="/images/dashicons_trash-blue.svg" />
          </div>
        </div>
        <div className="account-page__wallet-add-card" onClick={() => setModal(true)}>
          <img src="/images/plus-add-hotel.svg" alt="" />
          <p>Добавить карту</p>
        </div>
      </div>
    </div>
  )
}
