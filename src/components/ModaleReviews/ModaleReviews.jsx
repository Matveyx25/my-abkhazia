import React from "react";
import "./ModaleReviews.css";

const ModaleReviews = ({ description }) => {
  return (
    <div className="modale-reviews">
      <section className="card-description__accounts">
        <article className="card-description__accounts-options">
          <h5 className="card-description__accounts-title">
            {description.accountsProcent}% – рейтинг гостеприимства
          </h5>
          {description.accountsPropertyList.map((el) => (
            <div className="card-description__accounts-option card-description__accounts-option--mobile">
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
          {description.account.accountList.map((account) => (
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
  );
};

export default ModaleReviews;
