import React, { useState } from "react";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import s from "./Create.module.css";
import Radio from "../../../../components/Radio/Radio";
import ReactImageUploading from "react-images-uploading";
import { CounterInput } from '../../../../components/CounterInput/CounterInput';
import { Link } from "react-router-dom";

export const CreateHotelNumber = () => {
  const [numberType, setNumberType] = useState("");
  const [numberClass, setNumberClass] = useState("");
  const [numberSquare, setNumberSquare] = useState();
  const [priceDay, setPriceDay] = useState();

  const [nameCategory, setNameCategory] = useState("");
  const [countNumbers, setCountNumbers] = useState(0);
  const [countRooms, setCountRooms] = useState(0);
  const [countBaths, setCountBaths] = useState(0);
  const [countGuest, setCountGuest] = useState(0);
  const [about, setAbout] = useState([]);
  const [inRoom, setInRoom] = useState([]);
  const [comfort, setComfort] = useState([]);
  const [kitchen, setKitchen] = useState([]);

  const [numberDesc, setNumberDesc] = useState("");

  const [moveModal, setMoveModal] = React.useState(false);
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  const [sleep, setSleep] = useState([
    { title: 'Двуспальные кровати', value: 0},
    { title: 'Односпальные кровати', value: 0},
    { title: 'Диван кровать (1 место)', value: 0},
    { title: 'Диван кровать (2 места)', value: 0},
    { title: 'Раскладное кресло (1 место)', value: 0},
    { title: 'Раскладушка  (1 место)', value: 0},
    { title: 'Постельные принадлежности', value: 0},
  ]);

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  return (
    <div>
      <div className="account-page__breadcrumps">
        <p>Добавление отеля</p>
        <p>Добавление карточки номера</p>
      </div>
      <Link className="account-page__back-btn" to="../declarations/create-hotel">
          <img src="/images/arrow-right-circle-fill.svg" alt=""/>
      </Link>
      <div className="account-page__jcsb">
        <h1 className="account-page__title">Заполните информацию о номере</h1>
      </div>
      <form action="" className={s.addwrapper}>
        <div className="account-page__inputs-row">
          <div>
            <div className="account-page__input-block">
              <p>Тип номеров*</p>
              <input
                placeholder="Выберите тип номера"
                type="text"
                value={numberType}
                onChange={() => setNumberType(numberType)}
                className="account-page__input-with-radio"
                required
              />
              <div className="account-page__radios">
                <Radio
                  labelText="Отдельный номер"
                  inputId="number"
                  inputName="numberType"
                  inputValue="Отдельный номер"
                  changeFunction={(event) => setNumberType(event.target.value)}
                />
                <Radio
                  labelText="Отдельный домик"
                  inputId="house"
                  inputName="numberType"
                  inputValue="Отдельный домик"
                  changeFunction={(event) => setNumberType(event.target.value)}
                />
              </div>
            </div>
            <div className={s.mt20}>
              <p className={s.inputLabel}>Название категории номеров*</p>
              <div className={s.inputBlock}>
                <textarea
                  placeholder="Введите название номера"
                  value={nameCategory}
                  onChange={(event) => setNameCategory(event.target.value)}
                  required
                />
              </div>
            </div>
            <div className={s.mt20}>
              <CounterInput
                label="Кол-во номеров*"
                value={countNumbers}
                onUpdate={setCountNumbers}
              />
            </div>
          </div>
          <div>
            <div className="account-page__input-block">
              <p>Класс номеров*</p>
              <input
                placeholder="Выберите класс номера"
                type="text"
                value={numberClass}
                onChange={() => setNumberClass(numberClass)}
                className="account-page__input-with-radio"
                required
              />
              <div className="account-page__radios">
                <Radio
                  labelText="Эконом"
                  inputId="econom"
                  inputName="numberClass"
                  inputValue="Эконом"
                  changeFunction={(event) => setNumberClass(event.target.value)}
                />
                <Radio
                  labelText="Люкс"
                  inputId="lux"
                  inputName="numberClass"
                  inputValue="Люкс"
                  changeFunction={(event) => setNumberClass(event.target.value)}
                />
              </div>
            </div>
            <div className={s.mt20}>
              <p className={s.inputLabel}>Цена за сутки*</p>
              <div className={s.inputBlock}>
                <input
                  placeholder="Введите цену"
                  value={priceDay}
                  type="number"
                  onChange={(event) => setPriceDay(event.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <div className={s.mt20}>
              <p className={s.inputLabel}>Площадь номера*</p>
              <div className={s.inputBlock}>
                <input
                  type="number"
                  placeholder="Введите площадь номера м2"
                  value={numberSquare}
                  onChange={(event) => setNumberSquare(event.target.value)}
                  required
                />
              </div>
            </div>
            <div className={s.mt20}>
              <CounterInput
                label="Кол-во комнат в номере*"
                value={countRooms}
                onUpdate={setCountRooms}
              />
            </div>
            <div className={s.mt20}>
              <CounterInput
                label="Кол-во ванн* "
                value={countBaths}
                onUpdate={setCountBaths}
              />
            </div>
            <div className={s.mt20}>
              <CounterInput
                label="Кол-во гостей* "
                value={countGuest}
                onUpdate={setCountGuest}
              />
            </div>
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
                  <img src="/images/add-photo.svg" alt="" />
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

      <h2 className="account-page__input-block-title">
        Дополнительная информация о номере
      </h2>
      <div className={s.jcsb}>
        <div className={s.inputsWrapper}>
          <h2>О номере</h2>
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
            <p className={s.inputLabel}>Описание номера</p>
            <div className={s.inputBlock}>
              <textarea
                placeholder="Напишите краткое описание о номере"
                value={numberDesc}
                onChange={(event) => setNumberDesc(event.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div className={s.inputsWrapper}>
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
        </div>
        <div className={s.inputsWrapper}>
          <h2>Удобства</h2>
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
          <div className={s.row}>
            <Radio
              labelText="В номере"
              inputId="BathInNumber"
              inputName="comfortBath"
              inputValue="BathInNumber"
              changeFunction={(event) =>
                setComfort(
                  event.target.checked
                    ? [...comfort, event.target.value]
                    : comfort.filter((item) => item !== event.target.value)
                )
              }
            />
            <Radio
              labelText="Общая"
              inputId="BathForAll"
              inputName="comfortBath"
              inputValue="BathForAll"
              changeFunction={(event) =>
                setComfort(
                  event.target.checked
                    ? [...comfort, event.target.value]
                    : comfort.filter((item) => item !== event.target.value)
                )
              }
            />
          </div>
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
          <div className={s.row}>
            <Radio
              labelText="В номере"
              inputId="ToiletInNumber"
              inputName="comfortToilet"
              inputValue="ToiletInNumber"
              changeFunction={(event) =>
                setComfort(
                  event.target.checked
                    ? [...comfort, event.target.value]
                    : comfort.filter((item) => item !== event.target.value)
                )
              }
            />
            <Radio
              labelText="Общая"
              inputId="ToiletForAll"
              inputName="comfortToilet"
              inputValue="ToiletForAll"
              changeFunction={(event) =>
                setComfort(
                  event.target.checked
                    ? [...comfort, event.target.value]
                    : comfort.filter((item) => item !== event.target.value)
                )
              }
            />
          </div>
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
          <div className={s.row}>
            <Radio
              labelText="В номере"
              inputId="ShowerInNumber"
              inputName="comfortShower"
              inputValue="ShowerInNumber"
              changeFunction={(event) =>
                setComfort(
                  event.target.checked
                    ? [...comfort, event.target.value]
                    : comfort.filter((item) => item !== event.target.value)
                )
              }
            />
            <Radio
              labelText="Общая"
              inputId="ShowerForAll"
              inputName="comfortShower"
              inputValue="ShowerForAll"
              changeFunction={(event) =>
                setComfort(
                  event.target.checked
                    ? [...comfort, event.target.value]
                    : comfort.filter((item) => item !== event.target.value)
                )
              }
            />
          </div>
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
      </div>
      <div className={s.inputsWrapper}>
        <h2 className={s.mt25}>Кухня</h2>
        <div className={s.radioRow}>
          <Radio
            labelText="В номере"
            inputId="KitchenInNumber"
            inputName="comfortKitchen"
            inputValue="KitchenInNumber"
            changeFunction={(event) =>
              setKitchen(
                event.target.checked
                  ? [...kitchen, event.target.value]
                  : kitchen.filter((item) => item !== event.target.value)
              )
            }
          />
          <Radio
            labelText="Общая"
            inputId="KitchenForAll"
            inputName="comfortKitchen"
            inputValue="KitchenForAll"
            changeFunction={(event) =>
              setKitchen(
                event.target.checked
                  ? [...kitchen, event.target.value]
                  : kitchen.filter((item) => item !== event.target.value)
              )
            }
          />
        </div>
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
        <h2 className={s.mt25}>Сон</h2>
        <div className={s.countersRow}>
          <div>
            {[...sleep].slice(0, 3).map((item, index) => {
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
            {[...sleep].slice(3, 6).map((item, index) => {
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
            {[...sleep].slice(6).map((item, index) => {
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
      <div className={s.btnsRow}>
        <button className={s.btn}>Сохранить</button>
      </div>
    </div>
  );
};
