import React, { useState } from "react";
import { Carousel } from 'react-carousel-minimal';
import "./CardPostHeader.css";
import { Modal } from '../Modal/Modal';

const CardPostHeader = ({ title, type, stars, reviews, adress, imagesArr }) => {
  const [cardImageNumber, changeNumber] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [stateSrc, setSrc] = useState('');
  const [curr, setCurr] = useState(0);

  const upCardImageNumber = () => {
    if (cardImageNumber == imagesArr.length - 1) {
      changeNumber(0);
    } else {
      let some = cardImageNumber;
      changeNumber(some + 1);
    }
  };

  const downCardImageNumber = () => {
    if (cardImageNumber == 0) {
      changeNumber(imagesArr.length - 1);
    } else {
      let some = cardImageNumber;
      changeNumber(some - 1);
    }
  };

  const openViewer = (src) => {
    setIsOpen(true)
    let arr = []
    if(Array.isArray(src)){
      arr = src.map(el => ({src: el}))
      setSrc(arr)
    }else{
      setSrc([{src: src}])
    }
  }

  const closeViewer = () => {
    setIsOpen(false)
    setSrc('')
    setCurr(0)
  }

  return (
    <div className="card-post-header">
      <section className="card-post-header__mobile-slider">
        <div className="mobile-slider__wrapper">
          <img
            className="mobile-slider__images"
            src={imagesArr[cardImageNumber]}
            alt="bet"
          />
          <div
            className="mobile-slider__left"
            onClick={() => downCardImageNumber()}
          >
            <img src="../../images/arrow-left.svg" alt="left" />
          </div>
          <div
            className="mobile-slider__right"
            onClick={() => upCardImageNumber()}
          >
            <img src="../../images/arrow-left.svg" alt="right" />
          </div>
        </div>
      </section>
      <section className="housing-catalog__searching-results-title-wrapper cities__body-title town-card__title-wrapper">
        <h3 className="housing-catalog__searching-results-title searching-results-title--transfer town-card__title">
          {title}
        </h3>
        <div className="housing-catalog__searching-results-title-decoration"></div>
      </section>
      <section className="town-card__sub-title">
        <article className="town-card__town-and-link">
          <div className="card-post__wrapper">
            <div className="card-post-header__star-and-reviews">
              <p className="star-and-reviews__title">{type}</p>
              <div className="star-and-reviews__stars">
                <img
                  src={
                    stars > 0
                      ? "../../images/star.svg"
                      : "../../images/star--white.svg"
                  }
                  alt="star"
                  width="18"
                  height="18"
                />
                <img
                  src={
                    stars > 1
                      ? "../../images/star.svg"
                      : "../../images/star--white.svg"
                  }
                  alt="star"
                  width="18"
                  height="18"
                />
                <img
                  src={
                    stars > 2
                      ? "../../images/star.svg"
                      : "../../images/star--white.svg"
                  }
                  alt="star"
                  width="18"
                  height="18"
                />
                <img
                  src={
                    stars > 3
                      ? "../../images/star.svg"
                      : "../../images/star--white.svg"
                  }
                  alt="star"
                  width="18"
                  height="18"
                />
                <img
                  src={
                    stars > 4
                      ? "../../images/star.svg"
                      : "../../images/star--white.svg"
                  }
                  alt="star"
                  width="18"
                  height="18"
                />
              </div>
              <p className="star-and-reviews__reviews">{reviews} отзывов</p>
            </div>
            <div className="card-post__adress">
              <img
                className="town-and-link__town-image"
                src="../../images/town-card/point.svg"
                alt="point"
                width="16.5"
                height="21"
              />
              <p className="town-and-link__town-text">{adress}</p>
              <a className="town-and-link__town-link" href="#map-card">
                Показать на карте
              </a>
            </div>
          </div>
        </article>
        <article className="town-card__share-and-heart">
          <div className="share-and-heart__share">
            <img
              className="share-and-heart__share-image"
              src="../../images/town-card/share.svg"
              alt="share"
              width="19"
              height="20"
            />
            <p className="share-and-heart__share-text">Поделиться </p>
          </div>
          <div className="share-and-heart__heart">
            <img
              className="share-and-heart__heart-image"
              src="../../images/town-card/heart.svg"
              alt="heart"
              width="20.25"
              height="18.24"
            />
            <p className="share-and-heart__heart-text">Сохранить</p>
          </div>
        </article>
      </section>
      <section className="town-card__galery">
        <Modal visible={isOpen} onClose={closeViewer}>
          <Carousel
              data={[...stateSrc].map(el => ({image: el.src}))}
              width="920px"
              height="540px"
              slideNumber={true}
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="160px"
              thumbnailHeight="160px"
              style={{
                textAlign: "center",
                width: "920px",
                margin: "0 35px"
              }}
            />
        </Modal>
        <article className="town-card__galery-item">
          <img
            className="table-message__item__absolute-image"
            src="../../images/town-card/glass.svg"
            alt="glass"
            width="24"
            height="24"
            onClick={() => openViewer(imagesArr[0])}
          />
          <img
            className="town-card__galery-item-image"
            src={
              imagesArr[0] !== undefined
                ? imagesArr[0]
                : "../../images/town-card/no-photo.jpg"
            }
            alt="town"
            width="350"
            height="470"
          />
        </article>
        <article className="town-card__galery-item">
          <img
            className="town-card__galery-item-image town-card__galery-item-image-half"
            src={
              imagesArr[1] !== undefined
                ? imagesArr[1]
                : "../../images/town-card/no-photo.jpg"
            }
            alt="town"
            width="350"
            height="220"
          />
          <img
            className="town-card__galery-item-image"
            src={
              imagesArr[2] !== undefined
                ? imagesArr[2]
                : "../../images/town-card/no-photo.jpg"
            }
            alt="town"
            width="350"
            height="220"
          />
        </article>
        <article className="town-card__galery-item ">
          <p className="town-card__galery-item-link " onClick={() => openViewer(imagesArr)}>Показать все фото</p>
          <img
            className="town-card__galery-item-image town-card__galery-item-image-half"
            src={
              imagesArr[3] !== undefined
                ? imagesArr[3]
                : "../../images/town-card/no-photo.jpg"
            }
            alt="town"
            width="350"
            height="220"
          />
          <img
            className="town-card__galery-item-image"
            src={
              imagesArr[4] !== undefined
                ? imagesArr[4]
                : "../../images/town-card/no-photo.jpg"
            }
            alt="town"
            width="350"
            height="220"
          />
        </article>
      </section>
    </div>
  );
};

export default CardPostHeader;
