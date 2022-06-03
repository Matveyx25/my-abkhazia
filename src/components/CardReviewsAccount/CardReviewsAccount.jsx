import React, { useState } from "react";
import "./CardReviewsAccount.css";

const CardReviewsAccount = ({Description}) => {
  const accountList = [];
  for (let i = 0; i < Description.accountsList.length; i++) {
    accountList.push(Description.accountsList[i]);
  }

  return (
    <>
      {accountList.map((account) => (
        <article className="card-reviews__wrapper">
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
          <p className="accounts-profile__description">{account.description}</p>
        </article>
      ))}
    </>
  );
};

export default CardReviewsAccount;
