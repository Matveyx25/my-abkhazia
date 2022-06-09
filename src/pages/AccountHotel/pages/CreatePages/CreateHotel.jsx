import React, { useState } from "react";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import s from "./Create.module.css";
import Radio from "../../../../components/Radio/Radio";
import ReactImageUploading from "react-images-uploading";
import { TimeInput } from "../../../../components/TimeInput/TimeInput";
import { DistanceInput } from '../../../../components/DistanceInput/DistanceInput';
import { DistancesBlock } from "../../../../components/DistancesBlock/DistancesBlock";

export const CreateHotel = () => {
  const [organizationName, setOrganizationName] = useState(
    "Отель у моря “Бамбучо”"
  );
  const [organizationType, setOrganizationType] = useState("");
  const [organizationLocation, setOrganizationLocation] = useState(
    "Абхазия, Пицунда, улица Речная 11а "
  );
  const [textarea1, setTextarea1] = useState();
  const [textarea2, setTextarea2] = useState();
  const [desc, setDesc] = useState();
  const [minDay, setMinDay] = useState();
  const [rules, setRules] = useState([]);
  const [hotelOptions, setHotelOptions] = useState([]);
  const [onLocal, setOlLocal] = useState([]);
  const [activeRelux, setActiveRelux] = useState([]);

  const [options, setOptions] = useState([
    { title: "Трансфер от / до жд вокзала", slug: "zdvokzal", value: "0" },
    { title: "Трансфер из / в аэропорта", slug: "aero", value: "0" },
    { title: "Уборка", slug: "cleaning", value: "0" },
    { title: "Смена постельного белья", slug: "change", value: "0" },
    {
      title: "Постельное белье для всех гостей",
      slug: "underwear",
      value: "0",
    },
    {
      title: "Пользование стиральной машиной",
      slug: "cleanMachine",
      value: "0",
    },
    {
      title: "Предоставление документов для отчетности",
      slug: "documents",
      value: "0",
    },
    {
      title: "Помощь в организации осмотра достопримечательностей",
      slug: "attractions",
      value: "0",
    },
    { title: "Парковка", slug: "parking", value: "0" },
    { title: "Рыбалка", slug: "fishing", value: "0" },
    { title: "Прокат велосипедов", slug: "bike", value: "0" },
    { title: "Настольный теннис", slug: "tennis", value: "0" },
    { title: "Караоке", slug: "karaoke", value: "0" },
    { title: "Баня/Сауна", slug: "warm", value: "0" },
    { title: "Аниматор", slug: "animator", value: "0" },
    { title: "Питание в отеле", slug: "feed", value: "0" },
  ]);

  const [moveModal, setMoveModal] = React.useState(false);
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  const updateOptions = (option, event) => {
    let newOptions = [...options];
    newOptions.find((op) => op.slug === option.slug).value = event.target.value;
    setOptions(newOptions);
  };

  return (
    <div>
      <div className="account-page__breadcrumps">
        <p>Добавление отеля</p>
      </div>
      <div className="account-page__jcsb">
        <h1 className="account-page__title">Заполнение информации об отеле</h1>
        <button className="account-page__btn160">
          <img src="../../images/eye-filled_white.svg" />
          Просмотр
        </button>
      </div>
      <form action="" className="account-page__settings-form">
        <div className="account-page__inputs-row">
          <div className="account-page__input-block">
            <p>Название организации (или название отеля)*</p>
            <input
              placeholder="Название жилья"
              type="text"
              value={organizationName}
              onChange={(event) => setOrganizationName(event.target.value)}
              required
            />
          </div>
          <div className="account-page__input-block">
            <p>Тип отеля*</p>
            <input
              placeholder="Тип отеля"
              type="text"
              value={organizationType}
              onChange={() => setOrganizationType(organizationType)}
              className="account-page__input-with-radio"
              required
            />
            <div className="account-page__radios">
              <Radio
                labelText="Отель"
                inputId="hotel"
                inputName="organizationType"
                inputValue="Отель"
                changeFunction={(event) =>
                  setOrganizationType(event.target.value)
                }
              />
              <Radio
                labelText="Гостевой дом"
                inputId="guest"
                inputName="organizationType"
                inputValue="Гостевой дом"
                changeFunction={(event) =>
                  setOrganizationType(event.target.value)
                }
              />
              <Radio
                labelText="Мини-гостиница"
                inputId="miniHotel"
                inputName="organizationType"
                inputValue="Мини-гостиница"
                changeFunction={(event) =>
                  setOrganizationType(event.target.value)
                }
              />
            </div>
          </div>
          <div className="account-page__input-block">
            <p>Нахождение объекта</p>
            <input
              placeholder="Нахождение объекта"
              type="text"
              value={organizationLocation}
              onChange={(event) => setOrganizationLocation(event.target.value)}
              required
            />
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
                  <img src="../../images/add-photo.svg" />
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
                        src="../../images/three-circle-vertical-fill.svg"
                        className="btn-more-moves"
                        onClick={() => setMoveModal(!moveModal)}
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
        placeholder="Напишите все самое важное об отеле"
        value={desc}
        onChange={(event) => setDesc(event.target.value)}
      ></textarea>
      <h2 className="account-page__input-block-title">Услуги</h2>
      <table className="account-page__options-table">
        <thead>
          <tr>
            <th></th>
            <th>Не предоставляется</th>
            <th>Включены в стоимость</th>
            <th>За дополнительную плату</th>
          </tr>
        </thead>
        <tbody>
          {options.map((option, index) => (
            <tr key={index}>
              <td>
                <p>{option.title}</p>
              </td>
              <td>
                <div>
                  <Radio
                    inputName={option.slug}
                    inputId={option.slug + 0}
                    inputValue={0}
                    changeFunction={(event) => updateOptions(option, event)}
                  />
                </div>
              </td>
              <td>
                <div>
                  <Radio
                    inputName={option.slug}
                    inputId={option.slug + 1}
                    inputValue={1}
                    changeFunction={(event) => updateOptions(option, event)}
                  />
                </div>
              </td>
              <td>
                <div>
                  <Radio
                    inputName={option.slug}
                    inputId={option.slug + 2}
                    inputValue={2}
                    changeFunction={(event) => updateOptions(option, event)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
            <TimeInput label="Время заезда*" />
            <TimeInput label="Время выезда*" />
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
        <div className={s.textareaWrapper}>
          <h2>Скидки:</h2>
          <h4>Опишите скидку или акцию, если она у вас имеется</h4>
          <div className={s.textareaRow}>
            <div>
              <p>1. Скидка или акция</p>
              <div className={s.inputBlock}>
                <textarea
                  placeholder="Введите текст..."
                  value={textarea1}
                  onChange={(event) => setTextarea1(event.target.value)}
                  required
                />
              </div>
            </div>
            <div className={s.addTextarea}>
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
        <h2 className="account-page__input-block-title">Характериситики</h2>
        <div className={s.row}>
          <div className={s.inputsWrapper}>
            <h2>В отеле:</h2>
            <Checkbox
              labelText="Для гостей с ограниченными физическими возможностями"
              inputId="invalid"
              inputName="hotelOptions"
              inputValue="invalid"
              changeFunction={(event) =>
                setHotelOptions(
                  event.target.checked
                    ? [...hotelOptions, event.target.value]
                    : hotelOptions.filter((item) => item !== event.target.value)
                )
              }
            />
            <Checkbox
              labelText="Интернет Wi-Fi"
              inputId="wifi"
              inputName="hotelOptions"
              inputValue="wifi"
              changeFunction={(event) =>
                setHotelOptions(
                  event.target.checked
                    ? [...hotelOptions, event.target.value]
                    : hotelOptions.filter((item) => item !== event.target.value)
                )
              }
            />
            <Checkbox
              labelText="Ресторан"
              inputId="rest"
              inputName="hotelOptions"
              inputValue="rest"
              changeFunction={(event) =>
                setHotelOptions(
                  event.target.checked
                    ? [...hotelOptions, event.target.value]
                    : hotelOptions.filter((item) => item !== event.target.value)
                )
              }
            />
            <Checkbox
              labelText="Столовая"
              inputId="stolov"
              inputName="hotelOptions"
              inputValue="stolov"
              changeFunction={(event) =>
                setHotelOptions(
                  event.target.checked
                    ? [...hotelOptions, event.target.value]
                    : hotelOptions.filter((item) => item !== event.target.value)
                )
              }
            />
          </div>
          <div className={s.inputsWrapper}>
            <h2>В отеле:</h2>
            <div className={s.row}>
            <div>
              <Checkbox
                labelText="Детская площадка"
                inputId="childplace"
                inputName="onlocal"
                inputValue="childplace"
                changeFunction={(event) =>
                  setOlLocal(
                    event.target.checked
                      ? [...onLocal, event.target.value]
                      : onLocal.filter((item) => item !== event.target.value)
                  )
                }
              />
              <Checkbox
                labelText="Бассейн"
                inputId="pool"
                inputName="onlocal"
                inputValue="pool"
                changeFunction={(event) =>
                  setOlLocal(
                    event.target.checked
                      ? [...onLocal, event.target.value]
                      : onLocal.filter((item) => item !== event.target.value)
                  )
                }
              />
              <Checkbox
                labelText="Площадка для пикника"
                inputId="picknik"
                inputName="onlocal"
                inputValue="picknik"
                changeFunction={(event) =>
                  setOlLocal(
                    event.target.checked
                      ? [...onLocal, event.target.value]
                      : onLocal.filter((item) => item !== event.target.value)
                  )
                }
              />
            </div>
            <div className={s.ml40}>
              <Checkbox
                labelText="Веранда или терраса"
                inputId="terrasa"
                inputName="onlocal"
                inputValue="terrasa"
                changeFunction={(event) =>
                  setOlLocal(
                    event.target.checked
                      ? [...onLocal, event.target.value]
                      : onLocal.filter((item) => item !== event.target.value)
                  )
                }
              />
              <Checkbox
                labelText="Внутренний свой двор"
                inputId="selfplace"
                inputName="onlocal"
                inputValue="selfplace"
                changeFunction={(event) =>
                  setOlLocal(
                    event.target.checked
                      ? [...onLocal, event.target.value]
                      : onLocal.filter((item) => item !== event.target.value)
                  )
                }
              />
              <Checkbox
                labelText="Собственный берег"
                inputId="waterplace"
                inputName="onlocal"
                inputValue="waterplace"
                changeFunction={(event) =>
                  setOlLocal(
                    event.target.checked
                      ? [...onLocal, event.target.value]
                      : onLocal.filter((item) => item !== event.target.value)
                  )
                }
              />
            </div>
            </div>
          </div>
        </div>
        <div>
        <h2 className="account-page__input-block-title">Добавление карточки номера</h2>
            <button
              className="account-page__upload-photo-btn"
            >
            <div>
                <img src="../../images/plus-add-hotel.svg" alt=""/>
                <p>Добавить категорию номера</p>
            </div>
            </button>
        </div>
        <div>
        <h2 className="account-page__input-block-title">Ориентиры поблизости </h2>
       <DistancesBlock/>
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
                      : activeRelux.filter((item) => item !== event.target.value)
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
                      : activeRelux.filter((item) => item !== event.target.value)
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
                      : activeRelux.filter((item) => item !== event.target.value)
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
                      : activeRelux.filter((item) => item !== event.target.value)
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
                      : activeRelux.filter((item) => item !== event.target.value)
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
                      : activeRelux.filter((item) => item !== event.target.value)
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
                      : activeRelux.filter((item) => item !== event.target.value)
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
                      : activeRelux.filter((item) => item !== event.target.value)
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
                      : activeRelux.filter((item) => item !== event.target.value)
                  )
                }
              />
            </div>
            </div>
          </div>
      </div>
      <div className={s.btnsRow}>
                <button className={s.btn}>Перейти к календарю</button>
                <button className={s.btnOutlined}>Сохранить как черновик</button>
          </div>
    </div>
  );
};
