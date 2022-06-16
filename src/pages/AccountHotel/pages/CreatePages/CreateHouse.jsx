import React, { useState } from "react";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import s from "./Create.module.css";
import Radio from "../../../../components/Radio/Radio";
import ReactImageUploading from "react-images-uploading";
import { TimeInput } from "../../../../components/TimeInput/TimeInput";
import { DistancesBlock } from "../../../../components/DistancesBlock/DistancesBlock";
import { Link } from "react-router-dom";
import { CounterInput } from "../../../../components/CounterInput/CounterInput";

export const CreateHouse = () => {
  const [houseName, setHouseName] = useState(
    "1 комнатная квартира"
  );
  const [choiceHouseType, setChoiceHouseType] = useState("");
  const [houseType, setHouseType] = useState("");
  const [flatNumber, setFlatNumber] = useState();
  const [square, setSquare] = useState();
  const [houseLocation, setHouseLocation] = useState(
    "Абхазия, Пицунда, улица Речная 11а "
  );
  const [about, setAbout] = useState([]);
  const [comfort, setComfort] = useState([]);
  const [inRoom, setInRoom] = useState([]);

  const [countRooms, setCountRooms] = useState(0);
  const [countGuest, setCountGuest] = useState(0);
  const [countSU, setCountSU] = useState(0);
  const [countFlats, setCountFlats] = useState(0);

  const [textarea2, setTextarea2] = useState();
  const [priceDay, setPriceDay] = useState();
  const [priceMonth, setPriceMonth] = useState();
  const [desc, setDesc] = useState();
  const [minDay, setMinDay] = useState();
  const [rules, setRules] = useState([]);
  const [hotelOptions, setHotelOptions] = useState([]);
  const [onLocal, setOlLocal] = useState([]);
  const [activeRelux, setActiveRelux] = useState([]);
  const [sales, setSales] = useState([
    {value: '', id: 1},
  ]);

  const [sleep, setSleep] = useState([
    { title: 'Двуспальные кровати', value: 0},
    { title: 'Односпальные кровати', value: 0},
    { title: 'Диван кровать (1 место)', value: 0},
    { title: 'Диван кровать (2 места)', value: 0},
    { title: 'Раскладное кресло (1 место)', value: 0},
    { title: 'Раскладушка  (1 место)', value: 0},
    { title: 'Постельные принадлежности', value: 0},
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

  return (
    <div>
      <div className="account-page__breadcrumps">
        <p>Добавление дома</p>
      </div>
      <div className="account-page__jcsb">
        <h1 className="account-page__title">Заполнение информации о доме</h1>
        <button className="account-page__btn160 intitle">
          <img src="../../images/eye-filled_white.svg" />
          <img src="../../images/eye-filled-blue.svg" className="blue-eye"/>
          <p>Просмотр</p> 
        </button>
      </div>
      <form action="" className="account-page__settings-form">
        <div className="account-page__inputs-row">
          <div className="account-page__input-block">
            <p>Название жилья*</p>
            <input
              placeholder="Название жилья"
              type="text"
              value={houseName}
              onChange={(event) => setHouseName(event.target.value)}
              required
            />
          </div>
          <div className="account-page__input-block">
            <p>Вид жилья*</p>
            <input
              placeholder="Тип отеля"
              type="text"
              value={houseType}
              onChange={() => setHouseType(houseType)}
              className="account-page__input-with-radio"
              required
            />
            <div className="account-page__radios">
              <Radio
                labelText="Квартира"
                inputId="appartment"
                inputName="houseType"
                inputValue="Квартира"
                changeFunction={(event) =>
                  setHouseType(event.target.value)
                }
              />
              <Radio
                labelText="Дом"
                inputId="house"
                inputName="houseType"
                inputValue="Дом"
                changeFunction={(event) =>
                  setHouseType(event.target.value)
                }
              />
              <Radio
                labelText="Комната"
                inputId="room"
                inputName="houseType"
                inputValue="Комната"
                changeFunction={(event) =>
                  setHouseType(event.target.value)
                }
              />
            </div>
          </div>
          <div className="account-page__input-block">
            <p>Нахождение объекта*</p>
            <input
              placeholder="Нахождение объекта"
              type="text"
              value={houseLocation}
              onChange={(event) => setHouseLocation(event.target.value)}
              required
            />
          </div>
        </div>
        {houseType == 'Квартира' &&  (
          <div className={s.row30}>
            <div className={s.w317}>
              <div className="account-page__input-block">
                  <p>Укажите этаж*</p>
                  <input
                    placeholder="Введите этаж"
                    type="number"
                    value={flatNumber}
                    onChange={(event) => setFlatNumber(event.target.value)}
                    required
                  />
              </div>
              <div className={s.mt20}>
                    <CounterInput
                      label="Кол-во комнат*"
                      value={countRooms}
                      onUpdate={setCountRooms}
                    />
                  </div>
                   <div className={s.mt20}>
                    <CounterInput
                      label="Кол-во гостей*"
                      value={countGuest}
                      onUpdate={setCountGuest}
                    />
                  </div>
              </div>
              <div className="account-page__input-block">
                  <p>Площадь кваритиры*</p>
                  <input
                    placeholder="Введите площадь квартиры м2"
                    type="number"
                    value={square}
                    onChange={(event) => setSquare(event.target.value)}
                    required
                  />
              </div>
          </div>
        )}
        {houseType == 'Дом' &&  (
          <div className={s.row30}>
              <div className={`${s.mt20} ${s.w317}`}>
                   <div>
                    <CounterInput
                      label="Кол-во этажей в доме*"
                      value={countFlats}
                      onUpdate={setCountFlats}
                    />
                  </div>
                   <div className={s.mt20}>
                    <CounterInput
                      label="Кол-во комнат*"
                      value={countRooms}
                      onUpdate={setCountRooms}
                    />
                  </div>
                   <div className={s.mt20}>
                    <CounterInput
                      label="Кол-во гостей*"
                      value={countGuest}
                      onUpdate={setCountGuest}
                    />
                  </div>
              </div>
              <div className="account-page__input-block">
                  <p>Площадь дома*</p>
                  <input
                    placeholder="Введите площадь квартиры м2"
                    type="number"
                    value={square}
                    onChange={(event) => setSquare(event.target.value)}
                    required
                  />
              </div>
          </div>
        )}
        {houseType == 'Комната' &&  (
          <div className={s.row30}>
              <div className="account-page__input-block">
                  <p>Укажите этаж*</p>
                  <input
                    placeholder="Нахождение объекта"
                    type="number"
                    value={flatNumber}
                    onChange={(event) => setFlatNumber(event.target.value)}
                    required
                  />
              </div>
              <div className="account-page__input-block">
                  <p>Площадь комнаты*</p>
                  <input
                    placeholder="Введите площадь квартиры м2"
                    type="number"
                    value={square}
                    onChange={(event) => setSquare(event.target.value)}
                    required
                  />
              </div>
              <div className={`${s.mt20} ${s.w317}`}>
                <div className={s.mt20}>
                  <CounterInput
                      label="Кол-во гостей*"
                      value={countGuest}
                      onUpdate={setCountGuest}
                    />
                </div>
              </div>
          </div>
        )}
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
        placeholder="Напишите все самое важное о доме"
        value={desc}
        onChange={(event) => setDesc(event.target.value)}
      ></textarea>
      <h2 className="account-page__input-block-title">Правила и скидки</h2>
      <div className={s.row}>
        <div className={s.inputsWrapper}>
          <h2>Правила проживания:</h2>
          <Checkbox
            labelText="С домашними животными не принимаем"
            inputId="no-pets"
            inputName="rules"
            inputValue="no-pets"
            changeFunction={(event) =>
              setRules(
                event.target.checked
                  ? [...rules, event.target.value]
                  : rules.filter((item) => item !== event.target.value)
              )
            }
          />
          <Checkbox
            labelText="Курение запрещено"
            inputId="no-smoking"
            inputName="rules"
            inputValue="no-smoking"
            changeFunction={(event) =>
              setRules(
                event.target.checked
                  ? [...rules, event.target.value]
                  : rules.filter((item) => item !== event.target.value)
              )
            }
          />
          <Checkbox
            labelText="Принимаем с детьми"
            inputId="with-child"
            inputName="rules"
            inputValue="with-child"
            changeFunction={(event) =>
              setRules(
                event.target.checked
                  ? [...rules, event.target.value]
                  : rules.filter((item) => item !== event.target.value)
              )
            }
          />
          <Checkbox
            labelText="Запрещено для шумных компаний"
            inputId="no-noice"
            inputName="rules"
            inputValue="no-noice"
            changeFunction={(event) =>
              setRules(
                event.target.checked
                  ? [...rules, event.target.value]
                  : rules.filter((item) => item !== event.target.value)
              )
            }
          />
          <Checkbox
            labelText="Запрещено проведение мероприятий (банкетов, свадеб)"
            inputId="no-bankets"
            inputName="rules"
            inputValue="no-bankets"
            changeFunction={(event) =>
              setRules(
                event.target.checked
                  ? [...rules, event.target.value]
                  : rules.filter((item) => item !== event.target.value)
              )
            }
          />
        </div>
        <div className={s.timeInputsWrapper}>
          <h2>Условия проживания:</h2>
          <div className={s.row}>
            <div className={s.ml30}>
              <TimeInput label="Время заезда*" />
            </div>
            <div className={s.ml30}>
              <TimeInput label="Время выезда*" />
            </div>
            <div className={s.ml30}>
              <div>
                <p>Минимальный срок проживания*</p>
                <div className={s.inputBlock}>
                  <input
                    type="number"
                    name="transfer__time"
                    value={minDay}
                    onChange={(event) => setMinDay(event.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.textareaWrapper}>
          <h2>Скидки:</h2>
          <h4>Опишите скидку или акцию, если она у вас имеется</h4>
          <div className={s.textareaRow}>
            {sales.map((el, index) => {
              return (
                <div>
                  <p>{index + 1}. Скидка или акция</p>
                  <div className={s.inputBlock}>
                    <textarea
                      placeholder="Введите текст..."
                      value={el.value}
                      id={el.id}
                      onChange={(event) => updateSales(el.id, event)}
                      required
                    />
                  </div>
                  {sales.length > 1 && <button className={s.removeDesc} onClick={() => setSales([...sales].filter(sale => sale.id != el.id))}>Удалить скидку</button>}
                </div>
              );
            })}
            <div className={s.addTextarea} onClick={() => setSales([...sales, {value: '', id: sales[sales.length - 1].id + 1}])}>
              <img src="../../images/plus-add-hotel.svg" alt="" />
              <p>Добавить скидку</p>
            </div>
          </div>
        </div>
        <div className={s.textareaWrapper}>
          <h2>Особые указания или примечания:</h2>
          <div className={s.textareaRow}>
            <div className={s.mt15}>
              <p>Примечание</p>
              <div className={s.inputBlock}>
                <textarea
                  placeholder="Например: при заселении требуется QR код"
                  value={textarea2}
                  onChange={(event) => setTextarea2(event.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        </div>
        </div>
        <h2 className="account-page__input-block-title">Характериситики</h2>
        <div className={s.row}>
        <div className={`${s.inputsWrapper} ${s.w317}`}>
          <h2>О квартире:</h2>
          <Checkbox
            labelText="Вид из окна"
            inputId="view"
            inputName="about"
            inputValue="view"
            changeFunction={(event) =>
              setAbout(
                event.target.checked
                  ? [...about, event.target.value]
                  : about.filter((item) => item !== event.target.value)
              )
            }
          />
          <div className={s.row}>
            <div>
              <Checkbox
                labelText="Город"
                inputId="city"
                inputName="about"
                inputValue="city"
                changeFunction={(event) =>
                  setAbout(
                    event.target.checked
                      ? [...about, event.target.value]
                      : about.filter((item) => item !== event.target.value)
                  )
                }
              />
              <Checkbox
                labelText="Море"
                inputId="sea"
                inputName="about"
                inputValue="sea"
                changeFunction={(event) =>
                  setAbout(
                    event.target.checked
                      ? [...about, event.target.value]
                      : about.filter((item) => item !== event.target.value)
                  )
                }
              />
              <Checkbox
                labelText="Горы"
                inputId="mount"
                inputName="about"
                inputValue="mount"
                changeFunction={(event) =>
                  setAbout(
                    event.target.checked
                      ? [...about, event.target.value]
                      : about.filter((item) => item !== event.target.value)
                  )
                }
              />
              <Checkbox
                labelText="Сад"
                inputId="garden"
                inputName="about"
                inputValue="garden"
                changeFunction={(event) =>
                  setAbout(
                    event.target.checked
                      ? [...about, event.target.value]
                      : about.filter((item) => item !== event.target.value)
                  )
                }
              />
            </div>
            <div>
              <Checkbox
                labelText="Озеро"
                inputId="lake"
                inputName="about"
                inputValue="lake"
                changeFunction={(event) =>
                  setAbout(
                    event.target.checked
                      ? [...about, event.target.value]
                      : about.filter((item) => item !== event.target.value)
                  )
                }
              />
              <Checkbox
                labelText="Двор"
                inputId="yard"
                inputName="about"
                inputValue="yard"
                changeFunction={(event) =>
                  setAbout(
                    event.target.checked
                      ? [...about, event.target.value]
                      : about.filter((item) => item !== event.target.value)
                  )
                }
              />
              <Checkbox
                labelText="Река"
                inputId="river"
                inputName="about"
                inputValue="river"
                changeFunction={(event) =>
                  setAbout(
                    event.target.checked
                      ? [...about, event.target.value]
                      : about.filter((item) => item !== event.target.value)
                  )
                }
              />
              <Checkbox
                labelText="Проезжая часть"
                inputId="road"
                inputName="about"
                inputValue="road"
                changeFunction={(event) =>
                  setAbout(
                    event.target.checked
                      ? [...about, event.target.value]
                      : about.filter((item) => item !== event.target.value)
                  )
                }
              />
            </div>
          </div>
          <Checkbox
            labelText="Интернет Wi-Fi"
            inputId="wifi"
            inputName="about"
            inputValue="wifi"
            changeFunction={(event) =>
              setAbout(
                event.target.checked
                  ? [...about, event.target.value]
                  : about.filter((item) => item !== event.target.value)
              )
            }
          />
          <Checkbox
            labelText="Балкон"
            inputId="balcony"
            inputName="about"
            inputValue="balcony"
            changeFunction={(event) =>
              setAbout(
                event.target.checked
                  ? [...about, event.target.value]
                  : about.filter((item) => item !== event.target.value)
              )
            }
          />
          <div className={s.mt15}>
            <p className={s.inputLabel}>Тип дома</p>
              <div className={s.inputBlock}>
                <input
                  placeholder="Введите тип дома"
                  value={choiceHouseType}
                  type="text"
                  onChange={(event) => setChoiceHouseType(event.target.value)}
                  required
                />
              </div>
          </div>
        </div>
        <div className={`${s.inputsWrapper} ${s.w317} ${s.priceBlock}`}>
          <h2>Цена:</h2>
          <div className={s.mt20}>
              <p className={s.inputLabel}>Цена за сутки*</p>
              <div className={s.inputBlock}>
                <input
                  placeholder="Введите цену за сутки ₽"
                  value={priceDay}
                  type="number"
                  onChange={(event) => setPriceDay(event.target.value)}
                  required
                />
              </div>
            </div>
          <div className={s.mt20}>
              <p className={s.inputLabel}>Цена за месяц*</p>
              <div className={s.inputBlock}>
                <input
                  placeholder="Введите цену за месяц ₽"
                  value={priceMonth}
                  type="number"
                  onChange={(event) => setPriceMonth(event.target.value)}
                  required
                />
              </div>
            </div>
        </div>
        <div className={`${s.row30} ${s.mt25}`}>
          <div className={`${s.inputsWrapper} ${s.w317}`}>
            <h2>В комнате</h2>
            <Checkbox
              labelText="ЖК-телевизор"
              inputId="tv"
              inputName="inRoom"
              inputValue="tv"
              changeFunction={(event) =>
                setInRoom(
                  event.target.checked
                    ? [...inRoom, event.target.value]
                    : inRoom.filter((item) => item !== event.target.value)
                )
              }
            />
            <Checkbox
              labelText="Кабельное ТВ"
              inputId="cabelTv"
              inputName="inRoom"
              inputValue="cabelTv"
              changeFunction={(event) =>
                setInRoom(
                  event.target.checked
                    ? [...inRoom, event.target.value]
                    : inRoom.filter((item) => item !== event.target.value)
                )
              }
            />
            <Checkbox
              labelText="Кондиционер"
              inputId="conditioner"
              inputName="inRoom"
              inputValue="conditioner"
              changeFunction={(event) =>
                setInRoom(
                  event.target.checked
                    ? [...inRoom, event.target.value]
                    : inRoom.filter((item) => item !== event.target.value)
                )
              }
            />
            <Checkbox
              labelText="Вентилятор"
              inputId="fan"
              inputName="inRoom"
              inputValue="fan"
              changeFunction={(event) =>
                setInRoom(
                  event.target.checked
                    ? [...inRoom, event.target.value]
                    : inRoom.filter((item) => item !== event.target.value)
                )
              }
            />
            <Checkbox
              labelText="Шкаф"
              inputId="shelf"
              inputName="inRoom"
              inputValue="shelf"
              changeFunction={(event) =>
                setInRoom(
                  event.target.checked
                    ? [...inRoom, event.target.value]
                    : inRoom.filter((item) => item !== event.target.value)
                )
              }
            />
            <Checkbox
              labelText="Комод"
              inputId="dresser"
              inputName="inRoom"
              inputValue="dresser"
              changeFunction={(event) =>
                setInRoom(
                  event.target.checked
                    ? [...inRoom, event.target.value]
                    : inRoom.filter((item) => item !== event.target.value)
                )
              }
            />
            <Checkbox
              labelText="Утюг"
              inputId="iron"
              inputName="inRoom"
              inputValue="iron"
              changeFunction={(event) =>
                setInRoom(
                  event.target.checked
                    ? [...inRoom, event.target.value]
                    : inRoom.filter((item) => item !== event.target.value)
                )
              }
            />
            <Checkbox
              labelText="Гладильная доска"
              inputId="descForIron"
              inputName="inRoom"
              inputValue="descForIron"
              changeFunction={(event) =>
                setInRoom(
                  event.target.checked
                    ? [...inRoom, event.target.value]
                    : inRoom.filter((item) => item !== event.target.value)
                )
              }
            />
            <Checkbox
              labelText="Москитные сетки на окнах"
              inputId="maskito"
              inputName="inRoom"
              inputValue="maskito"
              changeFunction={(event) =>
                setInRoom(
                  event.target.checked
                    ? [...inRoom, event.target.value]
                    : inRoom.filter((item) => item !== event.target.value)
                )
              }
            />
          </div>
          <div>
            {[...sleep].slice(0,4).map((item, index) => {
              return (
                <div className={s.counterWrapper} key={index}>
                <CounterInput
                  label={item.title}
                  value={item.value}
                  onPlus={() => {
                    const arr = [...sleep];
                    arr.find((el) => el.title === item.title).value =
                      item.value + 1;
                    setSleep(arr);
                  }}
                  onMinus={() => {
                    const arr = [...sleep];
                    arr.find((el) => el.title === item.title).value =
                      item.value - 1;
                    setSleep(arr);
                  }}
                />
                </div>
              );
            })}
          </div>
          <div>
            {[...sleep].slice(4,8).map((item, index) => {
              return (
                <div className={s.counterWrapper} key={index}>
                <CounterInput
                  label={item.title}
                  value={item.value}
                  onPlus={() => {
                    const arr = [...sleep];
                    arr.find((el) => el.title === item.title).value =
                      item.value + 1;
                    setSleep(arr);
                  }}
                  onMinus={() => {
                    const arr = [...sleep];
                    arr.find((el) => el.title === item.title).value =
                      item.value - 1;
                    setSleep(arr);
                  }}
                />
                </div>
              );
            })}
          </div>
        </div>
        
        </div>
        <div className={s.inputsWrapper}>
        <h2 className={s.mt25}>Кухня</h2>
        <div className={s.kitchenRow}>
          <div>
            <Checkbox
              labelText="Электрочайник"
              inputId="eKettle"
              inputName="kitchen"
              inputValue="eKettle"
              changeFunction={(event) =>
                setAbout(
                  event.target.checked
                    ? [...about, event.target.value]
                    : about.filter((item) => item !== event.target.value)
                )
              }
            />
            <Checkbox
              labelText="Холодильник"
              inputId="fridge"
              inputName="kitchen"
              inputValue="fridge"
              changeFunction={(event) =>
                setAbout(
                  event.target.checked
                    ? [...about, event.target.value]
                    : about.filter((item) => item !== event.target.value)
                )
              }
            />
            <Checkbox
              labelText="Электроплита"
              inputId="stove"
              inputName="kitchen"
              inputValue="stove"
              changeFunction={(event) =>
                setAbout(
                  event.target.checked
                    ? [...about, event.target.value]
                    : about.filter((item) => item !== event.target.value)
                )
              }
            />
          </div>
          <div>
            <Checkbox
              labelText="Микроволновка"
              inputId="microwave"
              inputName="kitchen"
              inputValue="microwave"
              changeFunction={(event) =>
                setAbout(
                  event.target.checked
                    ? [...about, event.target.value]
                    : about.filter((item) => item !== event.target.value)
                )
              }
            />
            <Checkbox
              labelText="Набор посуды"
              inputId="dishes"
              inputName="kitchen"
              inputValue="dishes"
              changeFunction={(event) =>
                setAbout(
                  event.target.checked
                    ? [...about, event.target.value]
                    : about.filter((item) => item !== event.target.value)
                )
              }
            />
            <Checkbox
              labelText="Столовые приборы"
              inputId="cutlery"
              inputName="kitchen"
              inputValue="cutlery"
              changeFunction={(event) =>
                setAbout(
                  event.target.checked
                    ? [...about, event.target.value]
                    : about.filter((item) => item !== event.target.value)
                )
              }
            />
          </div>
          <div>
            <Checkbox
              labelText="Кофеварка"
              inputId="cofeeMaker"
              inputName="kitchen"
              inputValue="cofeeMaker"
              changeFunction={(event) =>
                setAbout(
                  event.target.checked
                    ? [...about, event.target.value]
                    : about.filter((item) => item !== event.target.value)
                )
              }
            />
            <Checkbox
              labelText="Фильтр для воды"
              inputId="filter"
              inputName="kitchen"
              inputValue="filter"
              changeFunction={(event) =>
                setAbout(
                  event.target.checked
                    ? [...about, event.target.value]
                    : about.filter((item) => item !== event.target.value)
                )
              }
            />
          </div>
        </div>
      </div>
      <div className={s.inputsWrapper}>
        <h2 className={s.mt25}>Удобства:</h2>
        <div className={`${s.w317} ${s.mt15}`}>
          <CounterInput label="Кол-во С/У" value={countSU} onUpdate={setCountSU}/>
        </div>
        <div className={s.comfortRow}>
          <div className={s.w317}>
          <Checkbox
            labelText="Ванная комната"
            inputId="bath"
            inputName="comfort"
            inputValue="bath"
            changeFunction={(event) =>
              setComfort(
                event.target.checked
                  ? [...comfort, event.target.value]
                  : comfort.filter((item) => item !== event.target.value)
              )
            }
          />
          <Checkbox
            labelText="Душевая кабина"
            inputId="shower"
            inputName="comfort"
            inputValue="shower"
            changeFunction={(event) =>
              setComfort(
                event.target.checked
                  ? [...comfort, event.target.value]
                  : comfort.filter((item) => item !== event.target.value)
              )
            }
          />
          <Checkbox
            labelText="Туалет"
            inputId="toilet"
            inputName="comfort"
            inputValue="toilet"
            changeFunction={(event) =>
              setComfort(
                event.target.checked
                  ? [...comfort, event.target.value]
                  : comfort.filter((item) => item !== event.target.value)
              )
            }
          />
          </div>
          <div className={s.w317}>
          <Checkbox
            labelText="Туалетные принадлежности"
            inputId="toiletries"
            inputName="comfort"
            inputValue="toiletries"
            changeFunction={(event) =>
              setComfort(
                event.target.checked
                  ? [...comfort, event.target.value]
                  : comfort.filter((item) => item !== event.target.value)
              )
            }
          />
          <Checkbox
            labelText="Фен"
            inputId="hairDryer"
            inputName="comfort"
            inputValue="hairDryer"
            changeFunction={(event) =>
              setComfort(
                event.target.checked
                  ? [...comfort, event.target.value]
                  : comfort.filter((item) => item !== event.target.value)
              )
            }
          />
          <Checkbox
            labelText="Сушилка для белья"
            inputId="clothesDryer"
            inputName="comfort"
            inputValue="clothesDryer"
            changeFunction={(event) =>
              setComfort(
                event.target.checked
                  ? [...comfort, event.target.value]
                  : comfort.filter((item) => item !== event.target.value)
              )
            }
          />
          </div>
          <div className={s.w317}>
        <Checkbox
          labelText="Стиральная машинка"
          inputId="clothesMachine"
          inputName="comfort"
          inputValue="clothesMachine"
          changeFunction={(event) =>
            setComfort(
              event.target.checked
                ? [...comfort, event.target.value]
                : comfort.filter((item) => item !== event.target.value)
            )
          }
        />
        <Checkbox
          labelText="Полотенца"
          inputId="towels"
          inputName="comfort"
          inputValue="towels"
          changeFunction={(event) =>
            setComfort(
              event.target.checked
                ? [...comfort, event.target.value]
                : comfort.filter((item) => item !== event.target.value)
            )
          }
        />
          </div>
        </div>
      </div>
        <div className={s.row}>
        <div>
          <h2 className="account-page__input-block-title">
            Ориентиры поблизости{" "}
          </h2>
          <DistancesBlock />
        </div>
        <div className={s.inputsWrapper}>
          <h2 className={s.mt25}>Активный отдых:</h2>
          <div className={s.row}>
            <div>
              <Checkbox
                labelText="Аквапарк"
                inputId="aquapark"
                inputName="activeRelax"
                inputValue="aquapark"
                changeFunction={(event) =>
                  setActiveRelux(
                    event.target.checked
                      ? [...activeRelux, event.target.value]
                      : activeRelux.filter(
                          (item) => item !== event.target.value
                        )
                  )
                }
              />
              <Checkbox
                labelText="Дайвинг"
                inputId="diving"
                inputName="activeRelax"
                inputValue="diving"
                changeFunction={(event) =>
                  setActiveRelux(
                    event.target.checked
                      ? [...activeRelux, event.target.value]
                      : activeRelux.filter(
                          (item) => item !== event.target.value
                        )
                  )
                }
              />
              <Checkbox
                labelText="Прогулки на лошадях"
                inputId="hourse"
                inputName="activeRelax"
                inputValue="hourse"
                changeFunction={(event) =>
                  setActiveRelux(
                    event.target.checked
                      ? [...activeRelux, event.target.value]
                      : activeRelux.filter(
                          (item) => item !== event.target.value
                        )
                  )
                }
              />
            </div>
            <div className={s.ml40}>
              <Checkbox
                labelText="Большой теннис"
                inputId="bigteniss"
                inputName="activeRelax"
                inputValue="bigteniss"
                changeFunction={(event) =>
                  setActiveRelux(
                    event.target.checked
                      ? [...activeRelux, event.target.value]
                      : activeRelux.filter(
                          (item) => item !== event.target.value
                        )
                  )
                }
              />
              <Checkbox
                labelText="Рыбалка"
                inputId="fishing"
                inputName="activeRelax"
                inputValue="fishing"
                changeFunction={(event) =>
                  setActiveRelux(
                    event.target.checked
                      ? [...activeRelux, event.target.value]
                      : activeRelux.filter(
                          (item) => item !== event.target.value
                        )
                  )
                }
              />
              <Checkbox
                labelText="Джиппинг"
                inputId="jipping"
                inputName="activeRelax"
                inputValue="jipping"
                changeFunction={(event) =>
                  setActiveRelux(
                    event.target.checked
                      ? [...activeRelux, event.target.value]
                      : activeRelux.filter(
                          (item) => item !== event.target.value
                        )
                  )
                }
              />
            </div>
            <div className={s.ml40}>
              <Checkbox
                labelText="Походы в горы"
                inputId="mounting"
                inputName="activeRelax"
                inputValue="mounting"
                changeFunction={(event) =>
                  setActiveRelux(
                    event.target.checked
                      ? [...activeRelux, event.target.value]
                      : activeRelux.filter(
                          (item) => item !== event.target.value
                        )
                  )
                }
              />
              <Checkbox
                labelText="Канатная дорога"
                inputId="kanat"
                inputName="activeRelax"
                inputValue="kanat"
                changeFunction={(event) =>
                  setActiveRelux(
                    event.target.checked
                      ? [...activeRelux, event.target.value]
                      : activeRelux.filter(
                          (item) => item !== event.target.value
                        )
                  )
                }
              />
              <Checkbox
                labelText="Езда на горном велосипеде"
                inputId="mountingbikes"
                inputName="activeRelax"
                inputValue="mountingbikes"
                changeFunction={(event) =>
                  setActiveRelux(
                    event.target.checked
                      ? [...activeRelux, event.target.value]
                      : activeRelux.filter(
                          (item) => item !== event.target.value
                        )
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className={s.btnsRow}>
        <Link className={s.btn} to='../calendar/create-house'>Перейти к календарю</Link>
        <button className={s.btnOutlined}>Сохранить как черновик</button>
      </div>
    </div>
  );
};
