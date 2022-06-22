import React, { useState } from "react";
import DistanceInput from "../DistanceInput/DistanceInput";
import s from "./DistancesBlock.module.css";

export const DistancesBlock = ({placeholder}) => {
  const [distance, setDistance] = useState([
    { title: "Ресторан", value: "", type: "shops", slug: 'rest' },
    { title: "Кафе/бар", value: "", type: "shops", slug: 'cafe' },
    { title: "Столовая", value: "", type: "shops", slug: 'stol' },
    { title: "Супермаркет", value: "", type: "shops", slug: 'market' },
    { title: "Прдуктовый магазин", value: "", type: "shops", slug: 'product' },
    { title: "Аптека", value: "", type: "shops", slug: 'health' },
    { title: "Море", value: "", type: "nature", slug: 'sea' },
    { title: "Пляж", value: "", type: "nature", slug: 'plyaz' },
    { title: "Озеро", value: "", type: "nature", slug: 'ozero' },
    { title: "Горы", value: "", type: "nature", slug: 'mount' },
    { title: "Пруд", value: "", type: "nature", slug: 'prud' },
    { title: "Лес", value: "", type: "nature", slug: 'forest' },
    { title: "Река", value: "", type: "nature", slug: 'river' },
    { title: "Порт", value: "", type: "transport", slug: 'port' },
    { title: "Автобусная станция", value: "", type: "transport", slug: 'bus' },
    { title: "Остановка общ. транспорта", value: "", type: "transport", slug: 'transport' },
    { title: "Зоопарк", value: "", type: "dosug", slug: 'zoo' },
    { title: "Дельфинарий", value: "", type: "dosug", slug: 'dolphin' },
    { title: "Парк аттракционов", value: "", type: "dosug", slug: 'attractions' },
    { title: "Океанариум", value: "", type: "dosug", slug: 'ocean' },
    { title: "Цирк", value: "", type: "dosug", slug: 'cirk' },
    { title: "Ночной клуб", value: "", type: "dosug", slug: 'club' },
    { title: "Банк/банкомат", value: "", type: "other", slug: 'bank' },
    { title: "Больница", value: "", type: "other", slug: 'hospital' },
    { title: "Салон красоты", value: "", type: "other", slug: 'beuty' },
    { title: "Химчистка", value: "", type: "other", slug: 'clean' },
    { title: "Центр города", value: "", type: "other", slug: 'center' },
  ]);

  let updateDistance = (dist, event) => {
    console.log(dist.slug);
    let newDistance = [...distance];
    newDistance.find((el) => el.slug == dist.slug).value = event.target.value;
    setDistance(newDistance);
  };

  return (
    <div className={s.inputsWrapper}>
      <h2 className={s.distanceTitle}>Рестораны, кафе и покупки</h2>
      <div className={s.distansInput}>
        {distance.map((dist, index) => {
          if(dist.type == "shops") {
            return (
                <DistanceInput
                  label={dist.title}
                  value={dist.value}
                  slug={dist.slug}
                  key={dist.slug}
                  handel={(event) => updateDistance(dist, event)}
                  placeholder={placeholder}
                />
            );
          }
        })}
      </div>
      <h2 className={s.distanceTitle}>Природа</h2>
      <div className={s.distansInput}>
        {distance.map((dist, index) => {
          if (dist.type == "nature") {
            return (
                <DistanceInput
                  label={dist.title}
                  value={dist.value}
                  slug={dist.slug}
                  key={dist.slug}
                  handel={(event) => updateDistance(dist, event)}
                  placeholder={placeholder}
                />
            );
          }
        })}
      </div>
      <h2 className={s.distanceTitle}>Транспорт</h2>
      <div className={s.distansInput}>
        {distance.map((dist, index) => {
          if (dist.type == "transport") {
            return (
              <DistanceInput
                label={dist.title}
                value={dist.value}
                slug={dist.slug}
                key={dist.slug}
                handel={(event) => updateDistance(dist, event)}
                placeholder={placeholder}
              />
            );
          }
        })}
      </div>
      <h2 className={s.distanceTitle}>Досуг</h2>
      <div className={s.distansInput}>
        {distance.map((dist, index) => {
          if (dist.type == "dosug") {
            return (
                <DistanceInput
                  label={dist.title}
                  value={dist.value}
                  slug={dist.slug}
                  key={dist.slug}
                  handel={(event) => updateDistance(dist, event)}
                  placeholder={placeholder}
                />
            );
          }
        })}
      </div>
      <h2 className={s.distanceTitle}>Разное</h2>
      <div className={s.distansInput}>
        {distance.map((dist, index) => {
          if (dist.type == "other") {
            return (
                <DistanceInput
                  label={dist.title}
                  value={dist.value}
                  slug={dist.slug}
                  key={dist.slug}
                  handel={(event) => updateDistance(dist, event)}
                  placeholder={placeholder}
                />
            );
          }
        })}
      </div>
    </div>
  );
};
