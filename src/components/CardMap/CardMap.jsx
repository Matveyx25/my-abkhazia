import React from "react";
import "./CardMap.css";
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
  SearchControl,
} from "react-yandex-maps";
import { Link } from "react-router-dom";

const CardMap = ({ title, center, centerH, placemarks, text, link }) => {
  return (
    <div className="card-map">
      <section className="prefooter__title">
        <div className="prefooter__decoration"></div>
        <p className="prefooter__title-text">{title}</p>
        <div className="prefooter__decoration"></div>
      </section>
      <YMaps>
        <div className="town-card__map" id="map-card">
          <Map
            defaultState={{
              center: [center, centerH],
              zoom: 13,
              width: "600px",
            }}
            width="100%"
            height="500px"
          >
            <Placemark geometry={placemarks} />
            <FullscreenControl options={{ float: "left" }} />
            <ZoomControl options={{ float: "left" }} />
            <SearchControl options={{ float: "right" }} />
          </Map>
        </div>
      </YMaps>
      <div className="card-map__text-and-link">
        <p className="card-map__text">{text}</p>
        <Link className="card-map__link" to={link}>
          Подробнее о городе
        </Link>
      </div>
    </div>
  );
};

export default CardMap;
