import React, { useState } from "react";
import "./CardDescriptionReviews.css";

const CardDescriptionReviews = ({
  Description,
  blueHeader,
  services,
  accounts,
  rules,
  owner,
  descriptionSubList,
  ownerTitle,
}) => {
  const [descriptionType, changeDescriptionType] = useState("description");
  const [modalReviews, changeVisibilityReviews] = useState(false);

  const accountList = [];
  for (let i = 0; i < 4; i++) {
    accountList.push(Description.accountsList[i]);
  }

  return (
    <>
      <section className="card-description">
        <article className="card-description__options-bar">
          {blueHeader ? (
            <section className="options-bar__blue-header">
              {Description.blueHeader.map((el) => (
                <article className="blue-header__item">
                  <div className="blue-header__image-and-number">
                    <div className="blue-header__image-wrapper">
                      <img
                        className="blue-header__image"
                        src={el.image}
                        alt=""
                      />
                    </div>
                    <p className="blue-header__number">{el.number}</p>
                  </div>
                  <p className="blue-header__option">{el.text}</p>
                </article>
              ))}
            </section>
          ) : (
            <></>
          )}

          <div className="card-description__options-bar-tongle">
            <p
              className={
                descriptionType == "description"
                  ? "card-description__option-bar  card-description__option-bar--active"
                  : "card-description__option-bar"
              }
              onClick={() => changeDescriptionType("description")}
            >
              Описание
            </p>
            {services ? (
              <p
                className={
                  descriptionType == "services"
                    ? "card-description__option-bar  card-description__option-bar--active"
                    : "card-description__option-bar"
                }
                onClick={() => changeDescriptionType("services")}
              >
                Услуги
              </p>
            ) : (
              <></>
            )}
            {accounts ? (
              <p
                className={
                  descriptionType == "accounts"
                    ? "card-description__option-bar  card-description__option-bar--active"
                    : "card-description__option-bar"
                }
                onClick={() => changeDescriptionType("accounts")}
              >
                Отзывы ({Description.accountsList.length})
              </p>
            ) : (
              <></>
            )}
            {rules ? (
              <p
                className={
                  descriptionType == "rules"
                    ? "card-description__option-bar  card-description__option-bar--active"
                    : "card-description__option-bar"
                }
                onClick={() => changeDescriptionType("rules")}
              >
                Правила и скидки
              </p>
            ) : (
              <></>
            )}
          </div>
          {descriptionType == "description" ? (
            <>
              <h5 className="option__description-title--town-card-only">
                Краткое описание
              </h5>
              <div className="option__description-wrapper">
                {Description["descriptionList"].map((el) => (
                  <p className="option__description-wrapper-text">{el}</p>
                ))}
              </div>
              <h5 className="option__description-title--town-card-only">
                Как добраться{" "}
              </h5>
              {Description["descriptionListWay"] !== undefined ? (
                <div className="option__description-wrapper">
                  {Description["descriptionListWay"].map((el) => (
                    <p className="option__description-wrapper-text">{el}</p>
                  ))}
                </div>
              ) : (
                <></>
              )}

              {descriptionSubList == true ? (
                <section className="option__description-sub-list--wrapper">
                  {Description.descriptionSubList.map((some) => (
                    <div className="option__description-sub-list">
                      <p className="option__description-sub-list-title">
                        {some.title}
                      </p>
                      {some.subList.map((probka) => (
                        <p className="option__description-sub-list-item">
                          {probka}
                        </p>
                      ))}
                    </div>
                  ))}
                </section>
              ) : (
                <></>
              )}
              <section className="option__description-properties-wrapper">
                {Description["descriptionOptions"].map((el) => (
                  <article className="option__description-properties">
                    <div className="description-properties__title">
                      <img
                        className="description-properties__title-image"
                        src={el.image}
                        width="28"
                        height="18"
                        alt="hotel"
                      />
                      <p className="description-properties__title-text">
                        {el.title}
                      </p>
                    </div>
                    {el.optionList.map((option) => (
                      <div className="description-properties__property-wrapper">
                        <p className="description-properties__property">
                          {option.optionProperty}
                        </p>
                        <p className="description-properties__property-number">
                          {option.optionPropertyNumber}
                        </p>
                      </div>
                    ))}
                  </article>
                ))}
              </section>
            </>
          ) : (
            <></>
          )}

          {/*  Услуги */}
          {descriptionType == "services" ? (
            <section className="card-description__services-bar">
              {Description.services.map((service) => (
                <article className="services-bar__item">
                  <h5 className="services-bar__item-title">{service.title} </h5>
                  <ul className="services-bar__item-list">
                    {service.servicesList.map((item) => (
                      <li className="services-bar__item-option">{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </section>
          ) : (
            <></>
          )}

          {/*Правила и скидки*/}
          {descriptionType == "rules" ? (
            <>
              {" "}
              <section className="card-description__services-bar card-description__rules-bar">
                {Description.rulesList.map((rule) => (
                  <article className="services-bar__item">
                    <h5 className="services-bar__item-title">{rule.title} </h5>
                    <ul className="services-bar__item-list">
                      {rule.list.map((item) => (
                        <li className="services-bar__item-option">{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </section>
              <div className="card-description__rules-bar-down-wrapper">
                {Description.rulesDangerList.map((el) => (
                  <div className="card-description__rules-bar-down">
                    <img
                      className="rules-bar-down__image"
                      src="../../images/card-description/!.svg"
                      alt="!"
                      width="3.78"
                      height="17.37"
                    />
                    <p className="rules-bar-down__text">{el}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <></>
          )}

          {/* Отзывы */}
          {descriptionType == "accounts" ? (
            <>
              <section className="card-description__accounts">
                <h5 className="card-description__accounts-title">
                  {Description.accountsProcent}% – рейтинг гостеприимства
                </h5>
                <article className="card-description__accounts-options">
                  {Description.accountsPropertyList.map((el) => (
                    <div className="card-description__accounts-option">
                      <p className="accounts-option__title">{el.title}</p>
                      <img
                        className="accounts-option__star"
                        src={
                          el.stars > 0
                            ? "../../images/star.svg"
                            : "../../images/star--white.svg"
                        }
                        alt="star"
                        width="18"
                        height="18"
                      />
                      <img
                        className="accounts-option__star"
                        src={
                          el.stars > 1
                            ? "../../images/star.svg"
                            : "../../images/star--white.svg"
                        }
                        alt="star"
                        width="18"
                        height="18"
                      />
                      <img
                        className="accounts-option__star"
                        src={
                          el.stars > 2
                            ? "../../images/star.svg"
                            : "../../images/star--white.svg"
                        }
                        alt="star"
                        width="18"
                        height="18"
                      />
                      <img
                        className="accounts-option__star"
                        src={
                          el.stars > 3
                            ? "../../images/star.svg"
                            : "../../images/star--white.svg"
                        }
                        alt="star"
                        width="18"
                        height="18"
                      />
                      <img
                        className="accounts-option__star"
                        src={
                          el.stars > 4
                            ? "../../images/star.svg"
                            : "../../images/star--white.svg"
                        }
                        alt="star"
                        width="18"
                        height="18"
                      />
                    </div>
                  ))}
                </article>
                <article className="card-description__accounts-profile-wrapper">
                  {accountList.map((account) => (
                    <article className="card-description__accounts-profile">
                      <div className="accounts-profile__option">
                        <img
                          className="accounts-profile__option-image"
                          src={account.accountImage}
                          alt="profile"
                          width="95"
                          height="95"
                        />
                        <div className="accounts-profile__option-name-stars-date">
                          <h5 className="accounts-profile__option-name">
                            {account.accountName}
                          </h5>
                          <div className="accounts-profile__stars">
                            {" "}
                            <img
                              className="accounts-option__star"
                              src={
                                account.stars > 0
                                  ? "../../images/star.svg"
                                  : "../../images/star--white.svg"
                              }
                              alt="star"
                              width="18"
                              height="18"
                            />
                            <img
                              className="accounts-option__star"
                              src={
                                account.stars > 1
                                  ? "../../images/star.svg"
                                  : "../../images/star--white.svg"
                              }
                              alt="star"
                              width="18"
                              height="18"
                            />
                            <img
                              className="accounts-option__star"
                              src={
                                account.stars > 2
                                  ? "../../images/star.svg"
                                  : "../../images/star--white.svg"
                              }
                              alt="star"
                              width="18"
                              height="18"
                            />
                            <img
                              className="accounts-option__star"
                              src={
                                account.stars > 3
                                  ? "../../images/star.svg"
                                  : "../../images/star--white.svg"
                              }
                              alt="star"
                              width="18"
                              height="18"
                            />
                            <img
                              className="accounts-option__star"
                              src={
                                account.stars > 4
                                  ? "../../images/star.svg"
                                  : "../../images/star--white.svg"
                              }
                              alt="star"
                              width="18"
                              height="18"
                            />
                          </div>
                          <p className="accounts-profile__option-date">
                            {account.dateOfRegistration}
                          </p>
                        </div>
                      </div>
                      <p className="accounts-profile__description">
                        {account.description}
                      </p>
                    </article>
                  ))}
                </article>
                <p
                  className="accounts-profile__see-more-button"
                  onClick={() => changeVisibilityReviews(true)}
                >
                  Показать все отзывы
                </p>
              </section>
            </>
          ) : (
            <></>
          )}
        </article>
        {/* Владелец */}
        {owner ? (
          <article className="card-description__owner">
            <h5 className="card-description__owner-title">{ownerTitle}</h5>
            <div className="card-description__owner-data">
              <img
                className="card-description__owner-photo"
                src={Description.owner.ownerImage}
                alt="owner"
                width="95"
                height="95"
              />
              <div className="owner-data__wrapper">
                <h5 className="owner-data__name">
                  {Description.owner.ownerName}
                </h5>
                <p className="owner-data__registration">
                  На сайте: с {Description.owner.ownerDate}
                </p>
              </div>
            </div>
            <div className="card-description__owner-option">
              <div className="owner-option__image-wrapper">
                <img
                  className="owner-option__image"
                  src="/images/card-description/protection.svg"
                  alt="protection"
                  width="18.6"
                  height="22"
                />
              </div>
              <p className="owner-option__text">
                {Description.owner.ownerProtection}
              </p>
            </div>
            <div className="card-description__owner-option">
              <div className="owner-option__image-wrapper">
               {ownerTitle == "Гид-Экскурсовод" && <img
                  className="owner-option__image"
                  src="/images/tour-card/excursion-man.svg"
                  alt="protection"
                  width="20"
                  height="20"
                />}
              </div>
              <p className="owner-option__text">
                {Description.owner.ownerHouse}{" "}
                {Description.owner.ownerHouseText}
              </p>
            </div>
            <div className="card-description__owner-option">
              <div className="owner-option__image-wrapper">
                <img
                  className="owner-option__image"
                  src="/images/card-description/star.svg"
                  alt="protection"
                  width="24"
                  height="24"
                />
              </div>
              <p className="owner-option__text">
                {Description.owner.ownerReviews} отзывов
              </p>
            </div>
            <p className="card-description__owner-write" href="#">
              Написать
            </p>
          </article>
        ) : (
          <></>
        )}

        {/* Модальное окно*/}
        {modalReviews && (
          <div className="modale-reviews">
            <div className="modale-reviews__wrapper-mobile">
              <img
                className="left-sidebar__close-button--2"
                src="../../images/card-description/close.svg"
                alt="close"
                width="28"
                height="28"
                onClick={() => changeVisibilityReviews(false)}
              />
              <section className="modale-reviews__wrapper modale-reviews__wrapper--mobile">
                <article className="modale-reviews__left-sidebar">
                  <img
                    className="left-sidebar__close-button"
                    src="../../images/card-description/close.svg"
                    alt="close"
                    width="28"
                    height="28"
                    onClick={() => changeVisibilityReviews(false)}
                  />
                  <h5 className="card-description__accounts-title card-description__accounts-title--mobile">
                    {Description.accountsProcent}% – рейтинг гостеприимства
                  </h5>

                  {Description.accountsPropertyList.map((el) => (
                    <div className="card-description__accounts-option">
                      <p className="accounts-option__title">{el.title}</p>
                      <img
                        className="accounts-option__star"
                        src={
                          el.stars > 0
                            ? "../../images/star.svg"
                            : "../../images/star--white.svg"
                        }
                        alt="star"
                        width="18"
                        height="18"
                      />
                      <img
                        className="accounts-option__star"
                        src={
                          el.stars > 1
                            ? "../../images/star.svg"
                            : "../../images/star--white.svg"
                        }
                        alt="star"
                        width="18"
                        height="18"
                      />
                      <img
                        className="accounts-option__star"
                        src={
                          el.stars > 2
                            ? "../../images/star.svg"
                            : "../../images/star--white.svg"
                        }
                        alt="star"
                        width="18"
                        height="18"
                      />
                      <img
                        className="accounts-option__star"
                        src={
                          el.stars > 3
                            ? "../../images/star.svg"
                            : "../../images/star--white.svg"
                        }
                        alt="star"
                        width="18"
                        height="18"
                      />
                      <img
                        className="accounts-option__star"
                        src={
                          el.stars > 4
                            ? "../../images/star.svg"
                            : "../../images/star--white.svg"
                        }
                        alt="star"
                        width="18"
                        height="18"
                      />
                    </div>
                  ))}
                </article>
                <article className="card-description__accounts-profile-wrapper modale-reviews__right-sidebar">
                  {Description.accountsList.map((account) => (
                    <article className="card-description__accounts-profile">
                      <div className="accounts-profile__option">
                        <img
                          className="accounts-profile__option-image"
                          src={account.accountImage}
                          alt="profile"
                          width="95"
                          height="95"
                        />
                        <div className="accounts-profile__option-name-stars-date">
                          <h5 className="accounts-profile__option-name">
                            {account.accountName}
                          </h5>
                          <div className="accounts-profile__stars">
                            {" "}
                            <img
                              className="accounts-option__star"
                              src={
                                account.stars > 0
                                  ? "../../images/star.svg"
                                  : "../../images/star--white.svg"
                              }
                              alt="star"
                              width="18"
                              height="18"
                            />
                            <img
                              className="accounts-option__star"
                              src={
                                account.stars > 1
                                  ? "../../images/star.svg"
                                  : "../../images/star--white.svg"
                              }
                              alt="star"
                              width="18"
                              height="18"
                            />
                            <img
                              className="accounts-option__star"
                              src={
                                account.stars > 2
                                  ? "../../images/star.svg"
                                  : "../../images/star--white.svg"
                              }
                              alt="star"
                              width="18"
                              height="18"
                            />
                            <img
                              className="accounts-option__star"
                              src={
                                account.stars > 3
                                  ? "../../images/star.svg"
                                  : "../../images/star--white.svg"
                              }
                              alt="star"
                              width="18"
                              height="18"
                            />
                            <img
                              className="accounts-option__star"
                              src={
                                account.stars > 4
                                  ? "../../images/star.svg"
                                  : "../../images/star--white.svg"
                              }
                              alt="star"
                              width="18"
                              height="18"
                            />
                          </div>
                          <p className="accounts-profile__option-date">
                            {account.dateOfRegistration}
                          </p>
                        </div>
                      </div>
                      <p className="accounts-profile__description">
                        {account.description}
                      </p>
                    </article>
                  ))}
                </article>
              </section>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default CardDescriptionReviews;
