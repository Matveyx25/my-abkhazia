import React, { useState } from "react";
import s from "./Create.module.css";
import Radio from "../../../../components/Radio/Radio";
import ReactImageUploading from "react-images-uploading";
import { Link } from "react-router-dom";
import { CounterInput } from "../../../../components/CounterInput/CounterInput";

export const CreateExcursion = () => {
  const [excursionName, setExcursionName] = useState(
    "Экскурсия на озеро Рица"
  );
  const [excursionType, setExcursionType] = useState("");
  const [excursionClass, setExcursionClass] = useState("");
  const [fromPlace, setFromPlace] = useState();
  const [notePlace, setNotePlace] = useState();
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [people, setPeople] = useState(0);
  const [excursionLocation, setExcursionLocation] = useState(
    "Гагра"
  );

  const [desc, setDesc] = useState('');
  const [priceAdult, setPriceAdult] = useState();
  const [priceKids, setPriceKids] = useState();
  const [priceBaby, setPriceBaby] = useState();
  const [sales, setSales] = useState([
    {value: '', id: 1},
  ]);
  const [options, setOptions] = useState([
    {value: '', id: 1},
  ]);

  const [moveModal, setMoveModal] = React.useState(false);
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  const updateSales = (id, event) => {
    let newSales = [...sales];
    newSales.find(el => el.id === id).value = event.target.value;
    setSales(newSales);
  };

  const updateOptions = (id, event) => {
    let newOptions = [...options];
    newOptions.find(el => el.id === id).value = event.target.value;
    setOptions(newOptions);
  };

  const updatePrice= (elem, event, type) => {
    let newOptions = [...options];
    if(type == 'adult'){
      newOptions.find(el => el.id === elem.id).priceAdult = event.target.value;
    }else if(type == 'kids'){
      newOptions.find(el => el.id === elem.id).priceKids = event.target.value;
    }else if(type == 'baby'){
      newOptions.find(el => el.id === elem.id).priceBaby = event.target.value;
    }
    setOptions(newOptions);
  };

  return (
    <div>
      <div className="account-page__breadcrumps">
        <p>Добавление экскурсии</p>
      </div>
      <div className="account-page__jcsb">
        <h1 className="account-page__title">Заполнение информации об экскурсии</h1>
        <Link className="account-page__btn160 intitle" to="../../tour-card">
          <img src="../../images/eye-filled_white.svg" />
          <img src="../../images/eye-filled-blue.svg" className="blue-eye"/>
          <p>Просмотр</p> 
        </Link>
      </div>
      <form action="" className="account-page__settings-form">
        <div className="account-page__inputs-row">
          <div className="account-page__input-block">
            <p>Категория экскурсии*</p>
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
                labelText="Туры выходного дня"
                inputId="weekend"
                inputName="excursionType"
                inputValue="Туры выходного дня"
                changeFunction={(event) =>
                  setExcursionType(event.target.value)
                }
              />
              <Radio
                labelText="Религиозные"
                inputId="religion"
                inputName="excursionType"
                inputValue="Религиозные"
                changeFunction={(event) =>
                  setExcursionType(event.target.value)
                }
              />
              <Radio
                labelText="История и культура"
                inputId="history"
                inputName="excursionType"
                inputValue="История и культура"
                changeFunction={(event) =>
                  setExcursionType(event.target.value)
                }
              />
              <Radio
                labelText="Природа"
                inputId="nature"
                inputName="excursionType"
                inputValue="Природа"
                changeFunction={(event) =>
                  setExcursionType(event.target.value)
                }
              />
              <Radio
                labelText="Архитектура"
                inputId="architecture"
                inputName="excursionType"
                inputValue="Архитектура"
                changeFunction={(event) =>
                  setExcursionType(event.target.value)
                }
              />
              <Radio
                labelText="Экстремальные"
                inputId="extreme"
                inputName="excursionType"
                inputValue="Экстремальные"
                changeFunction={(event) =>
                  setExcursionType(event.target.value)
                }
              />
            </div>
          </div>
          <div className="account-page__input-block">
            <p>Навзание экскурсии*</p>
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
          <div className="account-page__input-block">
            <p>Вид экскурсии*</p>
            <input
              placeholder="Выберите вид экскурсии"
              type="text"
              value={excursionClass}
              onChange={() => setExcursionClass(excursionClass)}
              className="account-page__input-with-radio"
              required
            />
            <div className="account-page__radios">
              <Radio
                labelText="Групповая"
                inputId="group"
                inputName="excursionClass"
                inputValue="Групповая"
                changeFunction={(event) =>
                  setExcursionClass(event.target.value)
                }
              />
              <Radio
                labelText="Индивидуальная"
                inputId="individual"
                inputName="excursionClass"
                inputValue="Индивидуальная"
                changeFunction={(event) =>
                  setExcursionClass(event.target.value)
                }
              />
            </div>
          </div>
          <div className={`${s.mt45} ${s.w317}`}>
            <CounterInput label="Длительность (часов)*" value={hours} onUpdate={setHours}/>
          </div>
          <div className={`${s.mt45} ${s.w317}`}>
            <CounterInput label="Кол-во дней*" value={days} onUpdate={setDays}/>
          </div>
          <div className={`${s.w317}`}>
            <CounterInput label="Кол-во человек (максимум)*" value={people} onUpdate={setPeople}/>
          </div>
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
        placeholder="Напишите все самое важное об экскурсии"
        value={desc}
        onChange={(event) => setDesc(event.target.value)}
      ></textarea>

      <h2 className="account-page__input-block-title">Программа:</h2>
      <div className={s.row30}>
        {sales.map((el, index) => {
            return (
              <div>
                <p>{index + 1}.</p>
                <div className={s.inputBlock}>
                  <input
                    placeholder={"Напишите "+index+" пункт программы"}
                    value={el.value}
                    onChange={(event) => updateSales(el.id, event)}
                    required
                  />
                </div>
                {sales.length > 1 && <button className={s.removeDesc} onClick={() => setSales([...sales].filter(sale => sale.id != el.id))}>Удалить пункт</button>}
              </div>
            );
          })}
          <div className={s.addInput} onClick={() => setSales([...sales, {value: '', id: sales[sales.length - 1].id + 1}])}>
            <img src="../../images/plus-add-hotel.svg" alt="" />
            <p>Добавить пункт</p>
          </div>
      </div>
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
        <h2 className="account-page__input-block-title">Дополнительные сборы</h2>
        <p className={s.subtitleBlue}>Введите дополнительные опции, если они у вас имеются</p>
        <div className={s.textareaRow}>
          {options.map((el, index) => {
            return (
              <div>
                <p>{index + 1}. Доп. опция</p>
                <div className={s.inputBlock}>
                  <textarea
                    placeholder="Введите текст..."
                    value={el.value}
                    id={el.id}
                    onChange={(event) => updateOptions(el.id, event)}
                    required
                  />
                </div>
                {el.value && <div>
                  <div className={`${s.inputBlock} ${s.w317}`}>
                      <p className={s.inputTitle}>Цена за взрослый билет с 13 лет</p>
                      <input
                        type="text"
                        className={s.input}
                        value={el.priceAdult}
                        onChange={(event) => updatePrice(el, event, 'adult')}
                        placeholder="Введите цену ₽"
                        required
                      />
                    </div>
                    <div className={`${s.inputBlock} ${s.w317}`}>
                      <p className={s.inputTitle}>Цена за детский билет до 12 лет</p>
                      <input
                        type="text"
                        className={s.input}
                        value={el.priceKids}
                        onChange={(event) => updatePrice(el, event, 'kids')}
                        placeholder="Введите цену ₽"
                        required
                      />
                    </div>
                    <div className={`${s.inputBlock} ${s.w317}`}>
                      <p className={s.inputTitle}>Цена за детский билет до 7 лет</p>
                      <input
                        type="text"
                        className={s.input}
                        value={el.priceBaby}
                        onChange={(event) => updatePrice(el, event, 'baby')}
                        placeholder="Введите цену ₽"
                        required
                      />
                    </div>
                  </div>}
                  {options.length > 1 && <button className={s.removeDesc} onClick={() => setOptions([...options].filter(sale => sale.id != el.id))}>Удалить Доп. Опцию</button>}
              </div>
            );
          })}
          <div className={s.addTextarea} onClick={() => setOptions([...options, {value: '', id: options[options.length - 1].id + 1}])}>
            <img src="/images/plus-add-hotel.svg" alt="" />
            <p>Добавить скидку</p>
          </div>
        </div>
      <div className={s.btnsRow}>
        <Link className={s.btn} to="../calendar/create-excursion">Перейти к календарю</Link>
        <button className={s.btnOutlined}>Сохранить как черновик</button>
      </div>
    </div>
  );
};
