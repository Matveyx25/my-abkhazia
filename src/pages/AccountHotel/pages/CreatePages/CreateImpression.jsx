import React, { useState } from "react";
import s from "./Create.module.css";
import Radio from "../../../../components/Radio/Radio";
import ReactImageUploading from "react-images-uploading";
import { CounterInput } from "../../../../components/CounterInput/CounterInput";
import { Link } from "react-router-dom";

export const CreateImpression = () => {
  const [excursionName, setExcursionName] = useState(
    "Экскурсия на озеро Рица"
  );
  const [excursionType, setExcursionType] = useState("");
  const [fromPlace, setFromPlace] = useState();
  const [notePlace, setNotePlace] = useState();
  const [excursionLocation, setExcursionLocation] = useState(
    "Гагра"
  );

  const [desc, setDesc] = useState('');
  const [priceAdult, setPriceAdult] = useState();
  const [priceKids, setPriceKids] = useState();
  const [priceBaby, setPriceBaby] = useState();
  const [hours, setHours] = useState(0);
  const [people, setPeople] = useState(0);

  const [moveModal, setMoveModal] = React.useState(false);
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  }

  return (
    <div>
      <div className="account-page__breadcrumps">
        <p>Добавление впечатление</p>
      </div>
      <div className="account-page__jcsb">
        <h1 className="account-page__title">Заполнение информации о впечатление</h1>
        <button className="account-page__btn160 intitle">
          <img src="../../images/eye-filled_white.svg" />
          <img src="../../images/eye-filled-blue.svg" className="blue-eye"/>
          <p>Просмотр</p> 
        </button>
      </div>
      <form action="" className="account-page__settings-form">
        <div className="account-page__inputs-row">
          <div className="account-page__input-block">
            <p>Название впечатления*</p>
            <input
              placeholder="Навзание экскурсии"
              type="text"
              value={excursionName}
              onChange={(event) => setExcursionName(event.target.value)}
              required
            />
          </div>
          <div className="account-page__input-block">
            <p>Город*</p>
            <input
              placeholder="Город"
              type="text"
              value={excursionLocation}
              onChange={(event) => setExcursionLocation(event.target.value)}
              required
            />
          </div>
        </div>
        <div className={s.row30}>
        <div className="account-page__input-block">
            <p>Вид впечатления*</p>
            <input
              placeholder="Категория экскурсии"
              type="text"
              value={excursionType}
              onChange={() => setExcursionType(excursionType)}
              className="account-page__input-with-radio"
              required
            />
            <div className="account-page__radios">
              <Radio
                labelText="Природа"
                inputId="nature"
                inputName="excurtionType"
                inputValue="Природа"
                changeFunction={(event) =>
                  setExcursionType(event.target.value)
                }
              />
            </div>
          </div>
          <div className={`${s.mt45} ${s.w317}`}>
            <CounterInput label="Длительность (часов)*" value={hours} onUpdate={setHours}/>
          </div>
        </div>
        <div className={`${s.mt25} ${s.w317}`}>
            <CounterInput label="Кол-во человек*" value={people} onUpdate={setPeople}/>
          </div>
      </form>
      <ReactImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          onImageUpload,
          isDragging,
          dragProps,
          imageList,
          onImageUpdate,
          onImageRemove,
        }) => (
          <div>
            <button
              className="account-page__upload-photo-btn"
              style={isDragging ? { color: "red" } : undefined}
              {...dragProps}
            >
              {imageList.length == 0 ? (
                <div onClick={onImageUpload}>
                  <img src="/images/add-photo.svg" alt=""/>
                  <p>Загрузить фотографию</p>
                </div>
              ) : (
                <>
                  {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                      <img
                        src={image["data_url"]}
                        alt=""
                        className="result-photo"
                      />
                      <img
                        src="/images/three-circle-vertical-fill.svg"
                        className="btn-more-moves"
                        onClick={() => setMoveModal(!moveModal)}
                        alt=""
                      />
                      {moveModal && (
                        <div className="image-item__btn-wrapper">
                          <button
                            onClick={() => {
                              onImageUpdate(index);
                              setMoveModal(false);
                            }}
                          >
                            Загрузить другое фото
                          </button>
                          <button
                            onClick={() => {
                              onImageRemove(index);
                              setMoveModal(false);
                            }}
                          >
                            Удалить фото
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </>
              )}
            </button>
          </div>
        )}
      </ReactImageUploading>

      <h2 className="account-page__input-block-title">Описание</h2>
      <textarea
        className="account-page__hotel-textarea"
        placeholder="Напишите все самое важное о впечатлении"
        value={desc}
        onChange={(event) => setDesc(event.target.value)}
      ></textarea>
      <div className={`${s.row30} ${s.mt30}`}>
    <div>
      <h2>Место встречи*</h2>
      <div className={s.inputBlock}>
        <textarea
          placeholder="Введите место встречи"
          value={fromPlace}
          onChange={(event) => setFromPlace(event.target.value)}
          required
        />
      </div>
    </div>
    <div>
      <h2>Важно знать</h2>
      <div className={s.inputBlock}>
        <textarea
          placeholder="Введите важные моменты, например, возьмите паспорт"
          value={notePlace}
          onChange={(event) => setNotePlace(event.target.value)}
          required
        />
      </div>
    </div>
      </div>
      <h2 className="account-page__input-block-title">Характериситики</h2>

      <div className={s.inputsWrapper}>
        <h2>Цена:</h2>
      <div className={s.row30}>
          <div className={`${s.inputBlock} ${s.w317}`}>
            <p className={s.inputTitle}>Цена за взрослый билет с 13 лет</p>
            <input
              type="text"
              className={s.input}
              value={priceAdult}
              onChange={(event) => setPriceAdult(event.target.value)}
              placeholder="Введите цену ₽"
              required
            />
          </div>
          <div className={`${s.inputBlock} ${s.w317}`}>
            <p className={s.inputTitle}>Цена за детский билет до 12 лет</p>
            <input
              type="text"
              className={s.input}
              value={priceKids}
              onChange={(event) => setPriceKids(event.target.value)}
              placeholder="Введите цену ₽"
              required
            />
          </div>
          <div className={`${s.inputBlock} ${s.w317}`}>
            <p className={s.inputTitle}>Цена за детский билет до 7 лет</p>
            <input
              type="text"
              className={s.input}
              value={priceBaby}
              onChange={(event) => setPriceBaby(event.target.value)}
              placeholder="Введите цену ₽"
              required
            />
          </div>
        </div>
        </div>
      <div className={s.btnsRow}>
        <Link className={s.btn} to="../calendar/create-impression">Перейти к календарю</Link>
        <button className={s.btnOutlined}>Сохранить как черновик</button>
      </div>
    </div>
  );
};
