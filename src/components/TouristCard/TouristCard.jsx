import React from 'react'

export const TouristCard = ({btnTitle}) => {
  return (
    <article className="card-description__owner small">
          <h5 className="card-description__owner-title">Турист</h5>
          <div className="card-description__owner-data">
            <img
              className="card-description__owner-photo"
              src='../../images/card-description/profile--2.jpg'
              alt="owner"
              width="95"
              height="95"
            />
            <div className="owner-data__wrapper">
              <h5 className="owner-data__name">
              Анастасия
              </h5>
              <p className="owner-data__registration">
              На сайте: с 7.04.2022
              </p>
            </div>
          </div>
          <div className="card-description__owner-option">
            <div className="owner-option__image-wrapper">
              <img
                className="owner-option__image"
                src="../../images/card-description/protection.svg"
                alt="protection"
                width="18.6"
                height="22"
              />
            </div>
            <p className="owner-option__text">
              Телефон и почта подверждены
            </p>
          </div>
          <div className="card-description__owner-option">
            <div className="owner-option__image-wrapper">
              <img
                className="owner-option__image"
                src="../../images/card-description/star.svg"
                alt="protection"
                width="24"
                height="24"
              />
            </div>
            <p className="owner-option__text">
              15 отзывов
            </p>
          </div>
          <p className="card-description__owner-write" href="#">
            {btnTitle}
          </p>
        </article> 
  )
}
