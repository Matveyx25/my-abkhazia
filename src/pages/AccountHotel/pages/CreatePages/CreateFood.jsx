import React, { useState } from "react";
import s from "./Create.module.css";
import Radio from "../../../../components/Radio/Radio";
import ReactImageUploading from "react-images-uploading";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import { Modal } from '../../../../components/Modal/Modal';
import { Link } from "react-router-dom";

export const CreateFood = () => {
  const [excursionName, setExcursionName] = useState("Ресторан Абаата");
  const [excursionType, setExcursionType] = useState("");
  const [excursionLocation, setExcursionLocation] = useState(
    "Гагра, Пр-т Нартаа 115"
  );

  const [modalText, setModalText] = useState("");
  const [desc, setDesc] = useState("");
  const [midleCheck, setMidleCheck] = useState();
  const [options, setOptions] = useState([]);
  const [kitchen, setKitchen] = useState([]);

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
        <p>Добавление экскурсии</p>
      </div>
      <div className="account-page__jcsb">
        <h1 className="account-page__title">
          Заполнение информации о экскурсии
        </h1>
        <button className="account-page__btn160 intitle">
          <img src="../../images/eye-filled_white.svg" />
          <img src="../../images/eye-filled-blue.svg" className="blue-eye"/>
          <p>Просмотр</p> 
        </button>
      </div>
      <form action="" className="account-page__settings-form">
        <div className="account-page__inputs-row">
          <div className="account-page__input-block">
            <p>Категория кухни*</p>
            <input
              placeholder="Категория кухни"
              type="text"
              value={excursionType}
              onChange={() => setExcursionType(excursionType)}
              className="account-page__input-with-radio"
              required
            />
            <div className="account-page__radios">
              <Radio
                labelText="Ресторан"
                inputId="rest"
                inputName="excurtionType"
                inputValue="Ресторан"
                changeFunction={(event) => setExcursionType(event.target.value)}
              />
            </div>
          </div>
          <div className="account-page__input-block">
            <p>Навзание объекта*</p>
            <input
              placeholder="Навзание объекта"
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
        <div className="account-page__input-block">
          <p>Средний чек*</p>
          <input
            placeholder="Введите сумму за средний чек ₽"
            type="number"
            value={midleCheck}
            onChange={(event) => setMidleCheck(event.target.value)}
            required
          />
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
      <h2 className="account-page__input-block-title">Характериситики</h2>
      <div className={s.row50p}>
        <div>
          <div className={s.jcsb}>
            <div className={s.col50}>
              <h2>Особенности:</h2>
              <div className={s.jcsb}>
                <div className={s.col50}>
                  <Checkbox
                    labelText="Веранда"
                    inputId="veranda"
                    inputName="options"
                    inputValue="Веранда"
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
                    labelText="Wi-Fi"
                    inputId="wifi"
                    inputName="options"
                    inputValue="wifi"
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
                    labelText="Еда на вынос"
                    inputId="foodForOut"
                    inputName="options"
                    inputValue="foodForOut"
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
                <div className={s.col50}>
                  <Checkbox
                    labelText="Кондиционер"
                    inputId="conditioner"
                    inputName="options"
                    inputValue="conditioner"
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
                    labelText="Есть детские кресла"
                    inputId="childChair"
                    inputName="options"
                    inputValue="childChair"
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
                    labelText="Бар"
                    inputId="bar"
                    inputName="options"
                    inputValue="bar"
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
            </div>
            <div className={s.col50}>
              <h2>Кухня:</h2>
              <div className={s.jcsb}>
                <div className={s.col50}>
                  <Checkbox
                    labelText="Национальная"
                    inputId="national"
                    inputName="kitchen"
                    inputValue="national"
                    changeFunction={(event) =>
                      setKitchen(
                        event.target.checked
                          ? [...kitchen, event.target.value]
                          : kitchen.filter(
                              (item) => item !== event.target.value
                            )
                      )
                    }
                  />
                  <Checkbox
                    labelText="Европейская"
                    inputId="erope"
                    inputName="kitchen"
                    inputValue="erope"
                    changeFunction={(event) =>
                      setKitchen(
                        event.target.checked
                          ? [...kitchen, event.target.value]
                          : kitchen.filter(
                              (item) => item !== event.target.value
                            )
                      )
                    }
                  />
                  <Checkbox
                    labelText="Фастфуд"
                    inputId="fastfood"
                    inputName="kitchen"
                    inputValue="fastfood"
                    changeFunction={(event) =>
                      setKitchen(
                        event.target.checked
                          ? [...kitchen, event.target.value]
                          : kitchen.filter(
                              (item) => item !== event.target.value
                            )
                      )
                    }
                  />
                </div>
                <div className={s.col50}>
                  <Checkbox
                    labelText="Вегетарианская"
                    inputId="vegetarians"
                    inputName="kitchen"
                    inputValue="vegetarians"
                    changeFunction={(event) =>
                      setKitchen(
                        event.target.checked
                          ? [...kitchen, event.target.value]
                          : kitchen.filter(
                              (item) => item !== event.target.value
                            )
                      )
                    }
                  />
                  <Checkbox
                    labelText="Веганская"
                    inputId="vegans"
                    inputName="kitchen"
                    inputValue="vegans"
                    changeFunction={(event) =>
                      setKitchen(
                        event.target.checked
                          ? [...kitchen, event.target.value]
                          : kitchen.filter(
                              (item) => item !== event.target.value
                            )
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      <h2 className="account-page__input-block-title">QR-код и акция</h2>
      <h2>Добавление QR-кода и акции</h2>
      <div className={s.row30}>
        <div className={s.qrCard}>
          <p className={s.qrNumber}>1</p>
          <p className={s.qrCardText}>QR-код и акция</p>
          <button className={s.btn160}>Изменить</button>
          <img src="/images/dashicons_trash-blue.svg" alt="" className={s.removeQr}/>
        </div>
        <div className={s.addQR} onClick={() => {
            setModalText("")
            setQRModal(true)
          }}>
          <img src="/images/plus-add-hotel.svg" alt=""/>
          <p>Добавить QR-код и акцию</p>
        </div>
      </div>
      

      <div className={s.btnsRow}>
        <Link className={s.btn} to="../calendar/create-food">Перейти к календарю</Link>
        <button className={s.btnOutlined}>Сохранить как черновик</button>
      </div>
    </div>
  );
};
