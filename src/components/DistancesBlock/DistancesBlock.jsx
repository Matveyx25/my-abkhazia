import React, { useState } from "react";
import DistanceInput from "../DistanceInput/DistanceInput";
import s from "./DistancesBlock.module.css"

export const DistancesBlock = () => {
  const [distance, setDistance] = useState([
    { title: "Ресторан", value: "", type: "shops" },
    { title: "Кафе/бар", value: "", type: "shops" },
    { title: "Столовая", value: "", type: "shops" },
    { title: "Супермаркет", value: "", type: "shops" },
    { title: "Прдуктовый магазин", value: "", type: "shops" },
    { title: "Аптека", value: "", type: "shops" },
    { title: "Море", value: "", type: "nature" },
    { title: "Пляж", value: "", type: "nature" },
    { title: "Озеро", value: "", type: "nature" },
    { title: "Горы", value: "", type: "nature" },
    { title: "Пруд", value: "", type: "nature" },
    { title: "Лес", value: "", type: "nature" },
    { title: "Река", value: "", type: "nature" },
    { title: "Порт", value: "", type: "transport" },
    { title: "Автобусная станция", value: "", type: "transport" },
    { title: "Остановка общ. транспорта", value: "", type: "transport" },
    { title: "Зоопарк", value: "", type: "dosug" },
    { title: "Дельфинарий", value: "", type: "dosug" },
    { title: "Парк аттракционов", value: "", type: "dosug" },
    { title: "Океанариум", value: "", type: "dosug" },
    { title: "Цирк", value: "", type: "dosug" },
    { title: "Ночной клуб", value: "", type: "dosug" },
    { title: "Банк/банкомат", value: "", type: "other" },
    { title: "Больница", value: "", type: "other" },
    { title: "Салон красоты", value: "", type: "other" },
    { title: "Химчистка", value: "", type: "other" },
    { title: "Центр города", value: "", type: "other" },
  ]);



  let updateDistance = (title, event) => {
    console.log(title);
    let newDistance = [...distance];
    newDistance.find(el => el.title == title).value = event.target.value;
    setDistance(newDistance);
  };

  return (
    <div className={s.inputsWrapper}>
      <h2 className={s.distanceTitle}>Рестораны, кафе и покупки</h2>
      <div className={s.distansInput}>
        {distance.map((dist, index) => {
          if (dist.type == "shops") {
            return (
              <DistanceInput
                label={dist.title}
                value={dist.value}
                index={index}
                handel={(event) => updateDistance(dist.title, event)}
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
                index={index}
                handel={(event) => updateDistance(dist.title, event)}
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
                index={index}
                handel={(event) => updateDistance(dist.title, event)}
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
                index={index}
                handel={(event) => updateDistance(dist.title, event)}
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
                index={index}
                handel={(event) => updateDistance(dist.title, event)}
              />
            );
          }
        })}
      </div>
    </div>
  );
};
