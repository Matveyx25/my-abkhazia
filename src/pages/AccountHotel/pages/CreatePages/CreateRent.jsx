import React, { useState } from "react";
import s from "./Create.module.css";
import ReactImageUploading from "react-images-uploading";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import { Modal } from '../../../../components/Modal/Modal';
import { CounterInput } from "../../../../components/CounterInput/CounterInput";
import { Link } from "react-router-dom";

export const CreateRent = () => {
  const [carName, setCarName] = useState("Audi Q5");
  const [carLocation, setCarLocation] = useState("Новый Афон");

  const [modalText, setModalText] = useState("");
  const [desc, setDesc] = useState("");
  const [requirements, setRequirements] = useState([]);
  const [options, setOptions] = useState([]);

  const [priceDay, setPriceDay] = useState();
  const [yearFrom, setYearFrom] = useState();
  const [enginePower, setEnginePower] = useState();
  const [doors, setDoors] = useState(0);
  const [people, setPeople] = useState(0);

  const [QRmodal, setQRModal] = useState(false);
  const [moveModal, setMoveModal] = useState(false);
  const [images, setImages] = useState([]);
  const [imageQr, setImageQr] = useState([]);
  const maxNumber = 1;
  const maxNumberQr = 1;

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  const onChangeQr = (imageList, addUpdateIndex) => {
    setImageQr(imageList);
  };
  

  return (
    <div>
      <Modal visible={QRmodal} onClose={() => setQRModal(false)}>
        <h1 className={s.modalTitle}>Добавление QR-кода и акции</h1>
        <div className={s.qrModalContent}>
              <p>Текст для акции</p>
              <div className={s.inputBlock}>
                <textarea
                  placeholder="Введите текст акции"
                  value={modalText}
                  onChange={(event) => setModalText(event.target.value)}
                  required
                />
              </div>
        <h2 className={s.mt25}>Вид на странице:</h2>
        <div className={s.viewBlock}>
          <p className={!modalText && s.mute}>
            {modalText || 'Твой текст...'}
          </p>
          <ReactImageUploading
            multiple
            value={imageQr}
            onChange={onChangeQr}
            maxNumber={maxNumberQr}
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
                  style={isDragging ? { color: "red" } : undefined}
                  className={s.addQRsm} 
                  {...dragProps}
                  onClick={imageList.length > 1 ? onImageUpload : onImageUpdate}
                >
                  {imageList.length == 0 ? (
                    <div>
                      <img src="/images/plus-add-hotel.svg" alt="" />
                      <p>Добавить QR-код</p>
                    </div>
                  ) : (
                    <>
                      {imageList.map((image, index) => (
                        <div key={index} className={s.imageItem}>
                          <img
                            src={image["data_url"]}
                            alt=""
                            className={s.result}
                          />
                        </div>
                      ))}
                    </>
                  )}
                </button>
              </div>
            )}
          </ReactImageUploading>
        </div>
        <button className={`${s.btn} ${s.mt25}`}>
        Сохранить
        </button>
        </div>
      </Modal>
      <div className="account-page__breadcrumps">
        <p>Добавление машины</p>
      </div>
      <div className="account-page__jcsb">
        <h1 className="account-page__title">
          Заполнение информации об аренде машины
        </h1>
        <button className="account-page__btn160">
          <img src="../../images/eye-filled_white.svg" />
          Просмотр
        </button>
      </div>
      <form action="" className="account-page__settings-form">
        <div className="account-page__inputs-row">
          <div className="account-page__input-block">
            <p>Марка и модель машины*</p>
            <input
              placeholder="Марка и модель машины"
              type="text"
              value={carName}
              onChange={(event) => setCarName(event.target.value)}
              required
            />
          </div>
          <div className="account-page__input-block">
            <p>Нахождение объекта*</p>
            <input
              placeholder="Нахождение объекта"
              type="text"
              value={carLocation}
              onChange={(event) => setCarLocation(event.target.value)}
              required
            />
          </div>
        </div>
        <div className="account-page__inputs-row">
          <div className="account-page__input-block">
            <p>Стоимость аренды за 1 день*</p>
            <input
              placeholder="Введите сумму аренды за 1 день чек ₽"
              type="number"
              value={priceDay}
              onChange={(event) => setPriceDay(event.target.value)}
              required
            />
          </div>
          <div className="account-page__input-block">
            <p>Год выпуска*</p>
            <input
              placeholder="Выберите год выпуска машины"
              type="number"
              value={yearFrom}
              onChange={(event) => setYearFrom(event.target.value)}
              required
            />
          </div>
          <div className="account-page__input-block">
            <p>Мощность двигателя*</p>
            <input
              placeholder="Мощность двигателя"
              type="number"
              value={enginePower}
              onChange={(event) => setEnginePower(event.target.value)}
              required
            />
          </div>
        </div>
        <div className={s.row30}>
          <div className={`${s.mt20} ${s.w317}`}>
            <CounterInput label="Кол-во дверей*" value={doors} onUpdate={setDoors}/>
          </div>
        <div className={`${s.mt20} ${s.w317}`}>
            <CounterInput label="Вместительность(кол-во чел.)*" value={people} onUpdate={setPeople}/>
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

      <h2 className="account-page__input-block-title">Описание</h2>
      <textarea
        className="account-page__hotel-textarea"
        placeholder="Напишите все самое важное об отеле"
        value={desc}
        onChange={(event) => setDesc(event.target.value)}
      ></textarea>
      <h2 className="account-page__input-block-title">Условия аренды</h2>
      <div className={s.row30}>
            <div>
              <h2>Требования:</h2>
                <div className={`${s.w317} ${s.mt15}`}>
                  <Checkbox
                    labelText="Паспорт"
                    inputId="pasport"
                    inputName="requirements"
                    inputValue="Паспорт"
                    changeFunction={(event) =>
                      setRequirements(
                        event.target.checked
                          ? [...requirements, event.target.value]
                          : requirements.filter(
                              (item) => item !== event.target.value
                            )
                      )
                    }
                  />
                  <Checkbox
                    labelText="Водительское удостоверение"
                    inputId="driverID"
                    inputName="requirements"
                    inputValue="Водительское удостоверение"
                    changeFunction={(event) =>
                      setRequirements(
                        event.target.checked
                          ? [...requirements, event.target.value]
                          : requirements.filter(
                              (item) => item !== event.target.value
                            )
                      )
                    }
                  />
                  <Checkbox
                    labelText="Ваш возраст должен составлять как минимум 23 года"
                    inputId="min23years"
                    inputName="requirements"
                    inputValue="Ваш возраст должен составлять как минимум 23 года"
                    changeFunction={(event) =>
                      setRequirements(
                        event.target.checked
                          ? [...requirements, event.target.value]
                          : requirements.filter(
                              (item) => item !== event.target.value
                            )
                      )
                    }
                  />
              </div>
            </div>
            <div>
              <h2>Условия по топливу:</h2>
              <div className={`${s.w317} ${s.mt15}`}>
                  <Checkbox
                    labelText="Возврат с тем же количеством топлива"
                    inputId="gasback"
                    inputName="requirements"
                    inputValue="Возврат с тем же количеством топлива"
                    changeFunction={(event) =>
                      setRequirements(
                        event.target.checked
                          ? [...requirements, event.target.value]
                          : requirements.filter(
                              (item) => item !== event.target.value
                            )
                      )
                    }
                  />
              </div>
            </div>
            <div>
              <h2>В стоимость входит:</h2>
              <div className={`${s.w317} ${s.mt15}`}>
                  <Checkbox
                    labelText="Покрытие на случай угона"
                    inputId="crime"
                    inputName="requirements"
                    inputValue="Покрытие на случай угона"
                    changeFunction={(event) =>
                      setRequirements(
                        event.target.checked
                          ? [...requirements, event.target.value]
                          : requirements.filter(
                              (item) => item !== event.target.value
                            )
                      )
                    }
                  />
                  <Checkbox
                    labelText="Покрытие на случай ДТП и повреждений"
                    inputId="dtp"
                    inputName="requirements"
                    inputValue="Покрытие на случай ДТП и повреждений"
                    changeFunction={(event) =>
                      setRequirements(
                        event.target.checked
                          ? [...requirements, event.target.value]
                          : requirements.filter(
                              (item) => item !== event.target.value
                            )
                      )
                    }
                  />
              </div>
            </div>
      </div>

      <h2 className="account-page__input-block-title">Характериситики</h2>
              <h2>В машине:</h2>
              <div className={`${s.optionsRow} ${s.mt15}`}>
                  <div>
                  <Checkbox
                    labelText="Автомат"
                    inputId="automat"
                    inputName="options"
                    inputValue="Автомат"
                    changeFunction={(event) =>
                      setOptions(
                        event.target.checked
                          ? [...options, event.target.value]
                          : options.filter(
                              (item) => item !== event.target.value
                            )
                      )
                    }
                  />
                  <Checkbox
                    labelText="Механика"
                    inputId="mehanika"
                    inputName="options"
                    inputValue="Механика"
                    changeFunction={(event) =>
                      setOptions(
                        event.target.checked
                          ? [...options, event.target.value]
                          : options.filter(
                              (item) => item !== event.target.value
                            )
                      )
                    }
                  />
                  <Checkbox
                    labelText="Навигатор"
                    inputId="navigatoor"
                    inputName="options"
                    inputValue="Навигатор"
                    changeFunction={(event) =>
                      setOptions(
                        event.target.checked
                          ? [...options, event.target.value]
                          : options.filter(
                              (item) => item !== event.target.value
                            )
                      )
                    }
                  />
                  <Checkbox
                    labelText="Кондиционер"
                    inputId="konditioner"
                    inputName="options"
                    inputValue="Кондиционер"
                    changeFunction={(event) =>
                      setOptions(
                        event.target.checked
                          ? [...options, event.target.value]
                          : options.filter(
                              (item) => item !== event.target.value
                            )
                      )
                    }
                  />
                  </div>
                  <div>
                  <Checkbox
                    labelText="Детское кресло"
                    inputId="childcair"
                    inputName="options"
                    inputValue="Детское кресло"
                    changeFunction={(event) =>
                      setOptions(
                        event.target.checked
                          ? [...options, event.target.value]
                          : options.filter(
                              (item) => item !== event.target.value
                            )
                      )
                    }
                  />
                  <Checkbox
                    labelText="Бустер"
                    inputId="booster"
                    inputName="options"
                    inputValue="Бустер"
                    changeFunction={(event) =>
                      setOptions(
                        event.target.checked
                          ? [...options, event.target.value]
                          : options.filter(
                              (item) => item !== event.target.value
                            )
                      )
                    }
                  />
                  <Checkbox
                    labelText="Аптечка"
                    inputId="healthbox"
                    inputName="options"
                    inputValue="Аптечка"
                    changeFunction={(event) =>
                      setOptions(
                        event.target.checked
                          ? [...options, event.target.value]
                          : options.filter(
                              (item) => item !== event.target.value
                            )
                      )
                    }
                  />
                  </div>
              </div>


      <h2 className="account-page__input-block-title">QR-код и акция</h2>
      <h2>Добавление QR-кода и акции</h2>
      <div className={s.addQR} onClick={() => {
          setModalText("")
          setQRModal(true)
        }}>
        <img src="/images/plus-add-hotel.svg" alt=""/>
        <p>Добавить QR-код и акцию</p>
      </div>

      <div className={s.btnsRow}>
        <Link className={s.btn} to="../calendar/create-rent">Перейти к календарю</Link>
        <button className={s.btnOutlined}>Сохранить как черновик</button>
      </div>
    </div>
  );
};
