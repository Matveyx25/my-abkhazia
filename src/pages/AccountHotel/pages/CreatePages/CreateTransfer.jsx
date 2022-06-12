import React, { useState } from "react";
import s from "./Create.module.css";
import ReactImageUploading from "react-images-uploading";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import { CounterInput } from "../../../../components/CounterInput/CounterInput";
import Radio from "../../../../components/Radio/Radio";

export const CreateTransfer = () => {
  const [companyName, setCompanyName] = useState("Компания");
  const [transferType, setTransferType] = useState();
  const [transferClass, setTransferClass] = useState();
  const [companyLocation, setCompanyLocation] = useState("Пицунда");

  const [about, setAbout] = useState([]);
  const [groupCars, setGroupCars] = useState([
    {title:"Hyunda", value: 1, slug: 'Hyunda'},
    {title:"Mercedes-Benz Sprinter", value: 0, slug: 'Sprinter'},
    {title:"Scania", value: 0, slug: 'Scania'},
    {title:"VolgaBus", value: 0, slug: 'VolgaBus'},
    {title:"Volvo", value: 0, slug: 'Volvo'},
    {title:"ЛиАЗ", value: 0, slug: 'ЛиАЗ'},
    {title:"МАЗ", value: 0, slug: 'МАЗ'},
    {title:"НеФЗ", value: 0, slug: 'НеФЗ'},
    {title:"ПАЗ", value: 0, slug: 'ПАЗ'},
  ]);
  const [economCars, setEconomCars] = useState([
    {title:"Chevrolet Spark", value: 1, slug: 'Spark'},
    {title:"Chevrolet Cobalt", value: 0, slug: 'Cobalt'},
    {title:"Chevrolet Lacetti", value: 0, slug: 'Lacetti'},
    {title:"Chevrolet Aveo", value: 0, slug: 'Aveo'},
    {title:"Chevrolet Niva", value: 0, slug: 'Niva'},
    {title:"Daewoo Gentra", value: 0, slug: 'Gentra'},
    {title:"Daewoo Nexia", value: 0, slug: 'Nexia'},
    {title:"Daewoo Matiz", value: 0, slug: 'Matiz'},
    {title:"Datsun On-Do", value: 0, slug: 'On-Do'},
    {title:"Hyundai Solaris", value: 0, slug: 'Solaris'},
    {title:"Kia Picanto", value: 0, slug: 'Picanto'},
    {title:"Kia Rio", value: 0, slug: 'Rio'},
    {title:"Lifan Celliya", value: 0, slug: 'Celliya'},
    {title:"Lifan Solano", value: 0, slug: 'Solano'},
    {title:"Lada Granta", value: 0, slug: 'Granta'},
    {title:"Lada Largus", value: 0, slug: 'Largus'},
    {title:"Lada Kalina", value: 0, slug: 'Kalina'},
    {title:"Lada Priora", value: 0, slug: 'Priora'},
    {title:"Lada Xray", value: 0, slug: 'Xray'},
    {title:"Lada Vesta", value: 0, slug: 'Vesta'},
    {title:"LADA 4×4", value: 0, slug: '4×4'},
    {title:"УАЗ Патриот", value: 0, slug: 'Патриот'},
    {title:"Nissan Almera", value: 0, slug: 'Almera'},
    {title:"Skoda Rapid", value: 0, slug: 'Rapid'},
    {title:"Renault Logan", value: 0, slug: 'Logan'},
    {title:"Toyota Corolla", value: 0, slug: 'Corolla'},
    {title:"Volkswagen Polo", value: 0, slug: 'Polo'},
  ]);
  const [comfortCars, setComfortCars] = useState([
    {title:"Audi A4", value: 1, slug: 'A4'},
    {title:"Audi A6", value: 0, slug: 'A6'},
    {title:"BMW 3 Series", value: 0, slug: '3Series'},
    {title:"BMW 3er", value: 0, slug: '3er'},
    {title:"BMW 5er", value: 0, slug: '5er'},
    {title:"Citroen C4 Picasso", value: 0, slug: 'c4'},
    {title:"Ford Focus", value: 0, slug: 'Focus'},
    {title:"Ford Galaxy", value: 0, slug: 'Galaxy'},
    {title:"Ford Mondeo", value: 0, slug: 'Mondeo'},
    {title:"Infiniti QX55", value: 0, slug: 'QX55'},
    {title:"Hyundai Santa Fe", value: 0, slug: 'Santa'},
    {title:"Hyundai Sonata", value: 0, slug: 'Sonata'},
    {title:"Hyundai Elantra", value: 0, slug: 'Elantra'},
    {title:"Honda CR-V", value: 0, slug: 'CRV'},
    {title:"Kia Cee'd", value: 0, slug: 'Ceed'},
    {title:"Kia Cerato", value: 0, slug: 'Cerato'},
    {title:"Kia K5", value: 0, slug: 'K5'},
    {title:"Kia Optima", value: 0, slug: 'Optima'},
    {title:"Kia Sorento", value: 0, slug: 'Sorento'},
    {title:"Lexus UX", value: 0, slug: 'UX'},
    {title:"Mazda 6", value: 0, slug: 'Mazda6'},
    {title:"Mercedes-Benz C-Class", value: 0, slug: 'CClass'},
    {title:"Mercedes-Benz E-klasse", value: 0, slug: 'Eklasse'},
    {title:"Mercedes-Benz Vito", value: 0, slug: 'Vito'},
    {title:"Mitsubishi Outlander", value: 0, slug: 'Outlander'},
    {title:"Mitsubishi ASX", value: 0, slug: 'ASX'},
    {title:"Nissan Qashqai", value: 0, slug: 'Qashqai'},
    {title:"Nissan Teana ", value: 0, slug: 'Teana'},
    {title:"Opel Grandland X", value: 0, slug: 'Grandland'},
    {title:"Skoda Kodiaq ", value: 0, slug: 'Kodiaq'},
    {title:"Skoda Octavia", value: 0, slug: 'Octavia'},
    {title:"Skoda Superb", value: 0, slug: 'Superb'},
    {title:"Toyota Camry 8", value: 0, slug: 'Camry8'},
    {title:"Toyota Corolla", value: 0, slug: 'Corolla'},
    {title:"Volvo S60", value: 0, slug: 'S60'},
    {title:"Volkswagen Caravelle ", value: 0, slug: 'Caravelle'},
    {title:"Volkswagen Jetta", value: 0, slug: 'Jetta'},
    {title:"Volkswagen Passat", value: 0, slug: 'Passat'},
    {title:"Volkswagen Tiguan", value: 0, slug: 'Tiguan'},
  ]);

  const [priceKm, setPriceKm] = useState();
  const [bags, setBags] = useState(0);
  const [cars, setCars] = useState(0);
  const [people, setPeople] = useState(0);
  const [otherCars, setOtherCars] = useState();

  const [moveModal, setMoveModal] = useState(false);
  const [images, setImages] = useState([]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };
  

  return (
    <div>
      <div className="account-page__breadcrumps">
        <p>Добавление трансфера</p>
      </div>
      <div className="account-page__jcsb">
        <h1 className="account-page__title">
          Заполнение информации о трансфере
        </h1>
        <button className="account-page__btn160">
          <img src="../../images/eye-filled_white.svg" />
          Просмотр
        </button>
      </div>
      <form action="" className="account-page__settings-form">
        <div className="account-page__inputs-row">
          <div className="account-page__input-block">
            <p>Название компании*</p>
            <input
              placeholder="Название компании"
              type="text"
              value={companyName}
              onChange={(event) => setCompanyName(event.target.value)}
              required
            />
          </div>
          <div className="account-page__input-block">
            <p>Вид трансфера*</p>
            <input
              placeholder="Вид трансфера"
              type="text"
              value={transferType}
              onChange={() => setTransferType(transferType)}
              className="account-page__input-with-radio"
              required
            />
            <div className="account-page__radios">
              <Radio
                labelText="Индивидуальный"
                inputId="individual"
                inputName="transferType"
                inputValue="Индивидуальный"
                changeFunction={(event) => setTransferType(event.target.value)}
              />
              <Radio
                labelText="Групповый"
                inputId="group"
                inputName="transferType"
                inputValue="Групповый"
                changeFunction={(event) => setTransferType(event.target.value)}
              />
            </div>
          </div>
          <div className="account-page__input-block">
            <p>Город, в котором находится ваша компания*</p>
            <input
              placeholder="Город, в котором находится ваша компания"
              type="text"
              value={companyLocation}
              onChange={(event) => setCompanyLocation(event.target.value)}
              required
            />
          </div>
        </div>
        {transferType === 'Групповый' ?
        <div className="account-page__inputs-row">
          <div className="account-page__input-block">
            <p>Цена*</p>
            <input
              placeholder="Введите цену за билет"
              type="number"
              value={priceKm}
              onChange={(event) => setPriceKm(event.target.value)}
              required
            />
          </div>
        <div className={`${s.mt45} ${s.w317}`}>
          <CounterInput
            label="Вместительность(кол-во чел.)*"
            value={people}
            onUpdate={setPeople}
          />
        </div>
        <div className={`${s.mt45} ${s.w317}`}>
            <CounterInput
              label="Кол-во машин в компании*"
              value={cars}
              onUpdate={setCars}
            />
          </div>
      </div>
        : 
        <>
        <div className="account-page__inputs-row">
          <div className="account-page__input-block">
            <p>Класс трансфера*</p>
            <input
              placeholder="Выберите класс трансфера"
              type="text"
              value={transferClass}
              onChange={() => setTransferClass(transferClass)}
              className="account-page__input-with-radio"
              required
            />
            <div className="account-page__radios">
              <Radio
                labelText="Эконом"
                inputId="econom"
                inputName="transferClass"
                inputValue="Эконом"
                changeFunction={(event) => setTransferClass(event.target.value)}
              />
              <Radio
                labelText="Комфорт"
                inputId="comfort"
                inputName="transferClass"
                inputValue="Комфорт"
                changeFunction={(event) => setTransferClass(event.target.value)}
              />
            </div>
          </div>
          <div className={`${s.mt45} ${s.w317}`}>
            <CounterInput
              label="Багаж (кол-во чемоданов)*"
              value={bags}
              onUpdate={setBags}
            />
          </div>
          <div className={`${s.mt45} ${s.w317}`}>
            <CounterInput
              label="Вместительность(кол-во чел.)*"
              value={people}
              onUpdate={setPeople}
            />
          </div>
        </div>
        <div className={s.row30}>
          <div className="account-page__input-block">
            <p>Цена*</p>
            <input
              placeholder="Введите цену за 1 км"
              type="number"
              value={priceKm}
              onChange={(event) => setPriceKm(event.target.value)}
              required
            />
          </div>
          <div className={`${s.mt45} ${s.w317}`}>
            <CounterInput
              label="Кол-во машин в компании*"
              value={cars}
              onUpdate={setCars}
            />
          </div>
        </div>
        </>
}
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

      <h2 className={s.mt25}>О трансфере:</h2>
      <div className={`${s.row30} ${s.mt25}`}>
        <div className={s.w210}>
          <Checkbox
            labelText="Час ожидания включен"
            inputId="waiting"
            inputName="about"
            inputValue="Час ожидания включен"
            changeFunction={(event) =>
              setAbout(
                event.target.checked
                  ? [...about, event.target.value]
                  : about.filter((item) => item !== event.target.value)
              )
            }
          />
        </div>
        <div className={s.w210}>
          <Checkbox
            labelText="Возможна перевозка с животным"
            inputId="pets"
            inputName="about"
            inputValue="Возможна перевозка с животным"
            changeFunction={(event) =>
              setAbout(
                event.target.checked
                  ? [...about, event.target.value]
                  : about.filter((item) => item !== event.target.value)
              )
            }
          />
        </div>
        {transferType != 'Групповый' && <>
        <div className={s.w210}>
          <Checkbox
            labelText="Детское кресло"
            inputId="childchair"
            inputName="about"
            inputValue="Детское кресло"
            changeFunction={(event) =>
              setAbout(
                event.target.checked
                  ? [...about, event.target.value]
                  : about.filter((item) => item !== event.target.value)
              )
            }
          />
        </div>
        <div className={s.w210}>
          <Checkbox
            labelText="Бустер"
            inputId="booster"
            inputName="about"
            inputValue="Бустер"
            changeFunction={(event) =>
              setAbout(
                event.target.checked
                  ? [...about, event.target.value]
                  : about.filter((item) => item !== event.target.value)
              )
            }
          />
        </div>
        </>}
      </div>
      <h2>Машины в вашей компании:</h2>
      {transferType == 'Групповый'&& 
      <div className={`${s.row30} ${s.mt15}`}>
      <div className={s.w210}>
        {[...groupCars].slice(0,5).map(car => (
            <Checkbox
              labelText={car.title}
              inputId={car.slug}
              inputName="economcars"
              inputValue={car.title}
              checked={car.value == 1}
              changeFunction={(event) => {
                const arr = [...groupCars]
                if(event.target.checked){
                  arr.find(el => el.slug == car.slug).value = 1
                }else{
                  arr.find(el => el.slug == car.slug).value = 0
                }
                setGroupCars(arr)
              }
              }
            />
          ))}
          </div>
      <div className={s.w210}>
        {[...groupCars].slice(5,9).map(car => (
            <Checkbox
              labelText={car.title}
              inputId={car.slug}
              inputName="economcars"
              inputValue={car.title}
              checked={car.value == 1}
              changeFunction={(event) => {
                const arr = [...groupCars]
                if(event.target.checked){
                  arr.find(el => el.slug == car.slug).value = 1
                }else{
                  arr.find(el => el.slug == car.slug).value = 0
                }
                setGroupCars(arr)
              }
              }
            />
          ))}
          </div>
          </div>}
      {(transferClass == 'Эконом' && transferType != 'Групповый')&& <> <h2 className={s.mt25}>Эконом класса:</h2>
      <div className={`${s.row30} ${s.mt15}`}>
      <div className={s.w210}>
        {[...economCars].slice(0,8).map(car => (
            <Checkbox
              labelText={car.title}
              inputId={car.slug}
              inputName="economcars"
              inputValue={car.title}
              checked={car.value == 1}
              changeFunction={(event) => {
                const arr = [...economCars]
                if(event.target.checked){
                  arr.find(el => el.slug == car.slug).value = 1
                }else{
                  arr.find(el => el.slug == car.slug).value = 0
                }
                setEconomCars(arr)
              }
              }
            />
          ))}
        </div>
      <div className={s.w210}>
        {[...economCars].slice(8,14).map(car => (
            <Checkbox
              labelText={car.title}
              inputId={car.slug}
              inputName="economcars"
              inputValue={car.title}
              checked={car.value == 1}
              changeFunction={(event) => {
                const arr = [...economCars]
                if(event.target.checked){
                  arr.find(el => el.slug == car.slug).value = 1
                }else{
                  arr.find(el => el.slug == car.slug).value = 0
                }
                setEconomCars(arr)
              }
              }
            />
          ))}
        </div>
      <div className={s.w210}>
        {[...economCars].slice(14,22).map(car => (
            <Checkbox
              labelText={car.title}
              inputId={car.slug}
              inputName="economcars"
              inputValue={car.title}
              checked={car.value == 1}
              changeFunction={(event) => {
                const arr = [...economCars]
                if(event.target.checked){
                  arr.find(el => el.slug == car.slug).value = 1
                }else{
                  arr.find(el => el.slug == car.slug).value = 0
                }
                setEconomCars(arr)
              }
              }
            />
          ))}
        </div>
      <div className={s.w210}>
        {[...economCars].slice(22,27).map(car => (
            <Checkbox
              labelText={car.title}
              inputId={car.slug}
              inputName="economcars"
              inputValue={car.title}
              checked={car.value == 1}
              changeFunction={(event) => {
                const arr = [...economCars]
                if(event.target.checked){
                  arr.find(el => el.slug == car.slug).value = 1
                }else{
                  arr.find(el => el.slug == car.slug).value = 0
                }
                setEconomCars(arr)
              }
              }
            />
          ))}
        </div>
      </div></>}
      {(transferClass == 'Комфорт' && transferType != 'Групповый') && <> <h2 className={s.mt25}>Комфорт класса:</h2>
      <div className={`${s.row30} ${s.mt15}`}>
      <div className={s.w210}>
        {[...comfortCars].slice(0,9).map(car => (
            <Checkbox
              labelText={car.title}
              inputId={car.slug}
              inputName="economcars"
              inputValue={car.title}
              checked={car.value == 1}
              changeFunction={(event) => {
                const arr = [...comfortCars]
                if(event.target.checked){
                  arr.find(el => el.slug == car.slug).value = 1
                }else{
                  arr.find(el => el.slug == car.slug).value = 0
                }
                setComfortCars(arr)
              }
              }
            />
          ))}
        </div>
      <div className={s.w210}>
      {[...comfortCars].slice(9,19).map(car => (
            <Checkbox
              labelText={car.title}
              inputId={car.slug}
              inputName="economcars"
              inputValue={car.title}
              checked={car.value == 1}
              changeFunction={(event) => {
                const arr = [...comfortCars]
                if(event.target.checked){
                  arr.find(el => el.slug == car.slug).value = 1
                }else{
                  arr.find(el => el.slug == car.slug).value = 0
                }
                setComfortCars(arr)
              }
              }
            />
          ))}
        </div>
      <div className={s.w210}>
      {[...comfortCars].slice(19,28).map(car => (
            <Checkbox
              labelText={car.title}
              inputId={car.slug}
              inputName="economcars"
              inputValue={car.title}
              checked={car.value == 1}
              changeFunction={(event) => {
                const arr = [...comfortCars]
                if(event.target.checked){
                  arr.find(el => el.slug == car.slug).value = 1
                }else{
                  arr.find(el => el.slug == car.slug).value = 0
                }
                setComfortCars(arr)
              }
              }
            />
          ))}
        </div>
      <div className={s.w210}>
        {[...economCars].slice(28,39).map(car => (
            <Checkbox
              labelText={car.title}
              inputId={car.slug}
              inputName="economcars"
              inputValue={car.title}
              checked={car.value == 1}
              changeFunction={(event) => {
                const arr = [...economCars]
                if(event.target.checked){
                  arr.find(el => el.slug == car.slug).value = 1
                }else{
                  arr.find(el => el.slug == car.slug).value = 0
                }
                setEconomCars(arr)
              }
              }
            />
          ))}
        </div>
      </div></>}
      
      <div className={s.inputBlock}>
            <p className={`${s.w317} ${s.mt20}`}>
            Если в этом списке нет подходящих машин, ниже в форме напишите машины через запятую, которые есть в вашей компании:
            </p>
            <textarea
              placeholder="Введите машины"
              className={s.mt15}
              type="text"
              value={otherCars}
              onChange={(event) => setOtherCars(event.target.value)}
              required></textarea>
        </div>

      <div className={s.btnsRow}>
        <button className={s.btn}>Перейти к календарю</button>
        <button className={s.btnOutlined}>Сохранить как черновик</button>
      </div>
    </div>
  );
};
