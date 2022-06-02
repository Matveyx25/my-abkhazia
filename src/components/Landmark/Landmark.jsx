import React from "react";
import "./Landmark.css";

const Landmarks = [
  {
    id: 0,
    image: "../../images/landmarks/fork-knife.svg",
    title: "Рестораны,кафе и покупки",
    options: [
      {
        id: 0,
        type: "Ресторан ",
        number: "меньше 50 м",
      },
      {
        id: 1,
        type: "Кафе/бар",
        number: "меньше 50 м",
      },
      {
        id: 2,
        type: "Столовая",
        number: "300 м",
      },
      {
        id: 3,
        type: "Супермаркет",
        number: "300 м",
      },
    ],
  },
  {
    id: 1,
    image: "../../images/landmarks/mountain.svg",
    title: "Природа",
    options: [
      {
        id: 0,
        type: "Река",
        number: "меньше 50 м",
      },
      {
        id: 1,
        type: "Горы",
        number: "меньше 50 м",
      },
      {
        id: 2,
        type: "Море",
        number: "400 м",
      },
      {
        id: 3,
        type: "Пляж",
        number: "400 м",
      },
      {
        id: 4,
        type: "Озеро",
        number: "6 км",
      },
    ],
  },
  {
    id: 2,
    image: "../../images/landmarks/car.svg",
    title: "Транспорт",
    options: [
      {
        id: 0,
        type: "Порт",
        number: "400 м",
      },
      {
        id: 1,
        type: "Автобусная станция",
        number: "1.5 км",
      },
      {
        id: 2,
        type: "Остановка общ. транспорта",
        number: "50 м",
      },
    ],
  },
  {
    id: 3,
    image: "../../images/landmarks/smile.svg",
    title: "Досуг",
    options: [
      {
        id: 0,
        type: "Зоопарк",
        number: "3 км",
      },
      {
        id: 1,
        type: "Дельфинарий",
        number: "9 км",
      },
      {
        id: 2,
        type: "Парк аттракционов",
        number: "400 м",
      },
    ],
  },
  {
    id: 4,
    image: "../../images/landmarks/bookmark.svg",
    title: "Разное",
    options: [
      {
        id: 0,
        type: "Больница",
        number: "3 км",
      },
      {
        id: 1,
        type: "Салон красоты",
        number: "9 км",
      },
      {
        id: 2,
        type: "Центр города",
        number: "3 км",
      },
    ],
  },
  {
    id: 5,
    image: "../../images/landmarks/ball.svg",
    title: "Активный отдых",
    options: [
      {
        id: 0,
        type: "Прогулки на лошадях",
        number: "",
      },
      {
        id: 1,
        type: "Джиппинг",
        number: "",
      },
      {
        id: 2,
        type: "Большой теннис",
        number: "",
      },
      {
        id: 3,
        type: "Рыбалка",
        number: "",
      },
      {
        id: 4,
        type: "Походы в горы",
        number: "",
      },
    ],
  },
];

const Landmark = () => {
  return (
    <section className="landmarks">
      <article className="landmarks__title">
        <h5 className="landmarks__title-text">Ориентиры поблизости</h5>
        <p className="landmarks__title-decoration"> </p>
      </article>
      <article className="landmarks__options">
        {Landmarks.map((el) => (
          <section className="landmarks__option" key={el.id}>
            <article className="landmarks__option-title">
              <div className="landmarks__option-title-image-wrapper">
                <img
                  className="landmarks__option-title-image"
                  src={el.image}
                  alt={el.title}
                />
              </div>

              <p className="landmarks__option-title-text">{el.title}</p>
            </article>
            <article className="landmarks__option-list">
              {el.options.map((option) => (
                <div className="landmarks__option-item" key={option.id}>
                  <p className="landmarks__option-item-type">{option.type}</p>
                  <p className="landmarks__option-item-number">
                    {option.number}
                  </p>{" "}
                </div>
              ))}
            </article>
          </section>
        ))}
      </article>
    </section>
  );
};

export default Landmark;
