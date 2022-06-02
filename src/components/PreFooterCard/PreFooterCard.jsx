import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PreFooterCard.css";

const PreFooterCard = ({ title, data, card, town, cardType }) => {
  const [sliderArr, changeSlider] = useState([0, 1, 2]);
  const [sliderActial, changeSliderActial] = useState(0);

  const sliderUp = () => {
    if (sliderArr[0] < 3) {
      let newSliderArr = [];
      sliderArr.map((el) => newSliderArr.push(el + 1));
      changeSlider(newSliderArr);
    }
  };

  const sliderDown = () => {
    if (sliderArr[0] > 0) {
      let newSliderArr = [];
      sliderArr.map((el) => newSliderArr.push(el - 1));
      changeSlider(newSliderArr);
    }
  };

  const sliderMobileDown = () => {
    if (sliderActial > 0) {
      let currentN = sliderActial;
      changeSliderActial(currentN - 1);
    }
  };

  const sliderMobileUp = () => {
    if (sliderActial < 5) {
      let currentN = sliderActial;
      changeSliderActial(currentN + 1);
    }
  };

  return (
    <section className="main__top-destinations">
      <article className="top-destinations__title">
        <div
          className={
            card
              ? "top-destinations__title-strike top-destinations__title-strike--card"
              : " top-destinations__title-strike"
          }
        ></div>
        <h2
          className={
            card
              ? "top-destinations__title-text--card"
              : "top-destinations__title-text"
          }
        >
          {title}
        </h2>
        <div
          className={
            card
              ? "top-destinations__title-strike top-destinations__title-strike--card"
              : " top-destinations__title-strike"
          }
        ></div>
      </article>
      <article className="top-destinations__slider">
        <div
          className="top-destinations__slider-left"
          onClick={() => sliderDown()}
        ></div>
        <div
          className="top-destinations__slider-right"
          onClick={() => sliderUp()}
        ></div>
        <ul className="top-destinations__slider-wrapper">
          {sliderArr.map((number) => (
            <li
              className={`top-destinations__slider-item ${data[number]["image"]}`}
              key={data[number]["id"]}
            >
              <img className="top-destinations__slider-item-image" src={data[number]["image"]} alt="" />
              <h6 className="top-destinations__slider-title">
                {data[number]["title"]}
              </h6>
              <div className="top-destinations__slider-stars">
                <img
                  className="top-destinations__slider-star"
                  src={
                    data[number]["stars"] > 0
                      ? "../../images/star.svg"
                      : "../../images/star--white.svg"
                  }
                  alt="star"
                />
                <img
                  className="top-destinations__slider-star"
                  src={
                    data[number]["stars"] > 1
                      ? "../../images/star.svg"
                      : "../../images/star--white.svg"
                  }
                  alt="star"
                />
                <img
                  className="top-destinations__slider-star"
                  src={
                    data[number]["stars"] > 2
                      ? "../../images/star.svg"
                      : "../../images/star--white.svg"
                  }
                  alt="star"
                />
                <img
                  className="top-destinations__slider-star"
                  src={
                    data[number]["stars"] > 3
                      ? "../../images/star.svg"
                      : "../../images/star--white.svg"
                  }
                  alt="star"
                />
                <img
                  className="top-destinations__slider-star"
                  src={
                    data[number]["stars"] > 4
                      ? "../../images/star.svg"
                      : "../../images/star--white.svg"
                  }
                  alt="star"
                />
              </div>
              {card ? (
                <div className="top-destinations__slider-category top-destinations__slider-category--card">
                  <p className="slider-category--card-type">{data[number]['category']}</p>
                  <p className="slider-category--card-decoration"></p>
                  <p className="slider-category--card-town">{town}</p>
                </div>
              ) : (
                <p className="top-destinations__slider-category">
                  {data[sliderActial]["category"]}
                </p>
              )}
            </li>
          ))}
        </ul>
      </article>
      <article className="top-destinations__slider--mobile">
        <div
          className="top-destinations__slider-left--mobile"
          onClick={() => sliderMobileDown()}
        >
          <img
            src="../../images/arrow-left.svg"
            alt="left"
            width="52"
            height="52"
          />
        </div>
        <div
          className="top-destinations__slider-item"
          key={data[sliderActial]["id"]}
        >
          <img
            className="top-destinations__slider-image"
            src={data[sliderActial]["image"]}
            alt="fon"
          />
          <h6 className="top-destinations__slider-title">
            {data[sliderActial]["title"]}
          </h6>
          <div className="top-destinations__slider-stars">
            <img
              className="top-destinations__slider-star"
              src={
                data[sliderActial]["stars"] > 0
                  ? "../../images/star.svg"
                  : "../../images/star--white.svg"
              }
              alt="star"
            />
            <img
              className="top-destinations__slider-star"
              src={
                data[sliderActial]["stars"] > 1
                  ? "../../images/star.svg"
                  : "../../images/star--white.svg"
              }
              alt="star"
            />
            <img
              className="top-destinations__slider-star"
              src={
                data[sliderActial]["stars"] > 2
                  ? "../../images/star.svg"
                  : "../../images/star--white.svg"
              }
              alt="star"
            />
            <img
              className="top-destinations__slider-star"
              src={
                data[sliderActial]["stars"] > 3
                  ? "../../images/star.svg"
                  : "../../images/star--white.svg"
              }
              alt="star"
            />
            <img
              className="top-destinations__slider-star"
              src={
                data[sliderActial]["stars"] > 4
                  ? "../../images/star.svg"
                  : "../../images/star--white.svg"
              }
              alt="star"
            />
          </div>
          {card ? (
            <div className="top-destinations__slider-category top-destinations__slider-category--card">
              <p className="slider-category--card-type">{data[sliderActial]["category"]}</p>
              <p className="slider-category--card-decoration"></p>
              <p className="slider-category--card-town">{town}</p>
            </div>
          ) : (
            <p className="top-destinations__slider-category">
              {data[sliderActial]["category"]}
            </p>
          )}
        </div>
        <div
          className="top-destinations__slider-right--mobile"
          onClick={() => sliderMobileUp()}
        >
          <img
            src="../../images/arrow-left.svg"
            alt="right"
            width="52"
            height="52"
          />
        </div>
      </article>
    </section>
  );
};

export default PreFooterCard;
