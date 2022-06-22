import React, { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import { CounterInput } from "../CounterInput/CounterInput";
import s from "./WeakInputs.module.css"

export const WeakInputs = ({counter, key, id}) => {
    const [weak, setWeak] = useState([])
    const [timer1, setTimer1] = useState()
    const [timer2, setTimer2] = useState()
    const [tabels, setTabels] = useState(0)

  return (
    <div className={s.weakWrapper} key={key}>
      <div className={s.inputsModalWrapper}>
        <div className={s.weakInput}>
          <img
            src="/images/transfer/calendar.svg"
            width="13.5"
            height="15"
            alt=""
          />
          <input
            placeholder="Выберите день недели"
            type="text"
            value={weak}
            onChange={() => setWeak(weak)}
            className="account-page__input-with-radio"
            required
          />
          <div className={s.checkboxesBlock}>
            <Checkbox
              labelText="Понидельник"
              inputId={"pn" + id}
              inputName="weak"
              inputValue="Понидельник"
              changeFunction={(event) =>
                setWeak(
                  event.target.checked
                    ? [...weak, event.target.value]
                    : weak.filter((item) => item != event.target.value)
                )
              }
            />
            <Checkbox
              labelText="Вторник"
              inputId={"vt" + id}
              inputName="weak"
              inputValue="Понидельник"
              changeFunction={(event) =>
                setWeak(
                  event.target.checked
                    ? [...weak, event.target.value]
                    : weak.filter((item) => item != event.target.value)
                )
              }
            />
            <Checkbox
              labelText="Среда"
              inputId={"sr" + id}
              inputName="weak"
              inputValue="Среда"
              changeFunction={(event) =>
                setWeak(
                  event.target.checked
                    ? [...weak, event.target.value]
                    : weak.filter((item) => item != event.target.value)
                )
              }
            />
            <Checkbox
              labelText="Четверг"
              inputId={"cht" + id}
              inputName="weak"
              inputValue="Четверг"
              changeFunction={(event) =>
                setWeak(
                  event.target.checked
                    ? [...weak, event.target.value]
                    : weak.filter((item) => item != event.target.value)
                )
              }
            />
            <Checkbox
              labelText="Пятница"
              inputId={"pt" + id}
              inputName="weak"
              inputValue="Пятница"
              changeFunction={(event) =>
                setWeak(
                  event.target.checked
                    ? [...weak, event.target.value]
                    : weak.filter((item) => item != event.target.value)
                )
              }
            />
            <Checkbox
              labelText="Суббота"
              inputId={"sb" + id}
              inputName="weak"
              inputValue="Суббота"
              changeFunction={(event) =>
                setWeak(
                  event.target.checked
                    ? [...weak, event.target.value]
                    : weak.filter((item) => item != event.target.value)
                )
              }
            />
            <Checkbox
              labelText="Воскресенье"
              inputId={"vs" + id}
              inputName="weak"
              inputValue="Воскресенье"
              changeFunction={(event) =>
                setWeak(
                  event.target.checked
                    ? [...weak, event.target.value]
                    : weak.filter((item) => item != event.target.value)
                )
              }
            />
          </div>
        </div>
        <div className={s.weakInput}>
          <img src="/images/transfer/timer.svg" width="18" height="18" alt="" />
          <input
            placeholder="Выберите время Со скольки"
            type="text"
            value={timer1}
            onChange={(event) => setTimer1(event.target.value)}
            className="account-page__input-with-radio"
            required
          />
          <div className={s.popup}>
            <p>
              <img
                src="/images/transfer/timer.svg"
                width="18"
                height="18"
                alt=""
              />
              00:00
            </p>
          </div>
        </div>
        <div className={s.weakInput}>
          <img src="/images/transfer/timer.svg" width="18" height="18" alt="" />
          <input
            placeholder="Выберите время До скольки"
            type="text"
            value={timer2}
            onChange={(event) => setTimer2(event.target.value)}
            className="account-page__input-with-radio"
            required
          />
          <div className={s.popup}>
            <p>
              <img
                src="/images/transfer/timer.svg"
                width="18"
                height="18"
                alt=""
              />
              00:00
            </p>
          </div>
        </div>
      </div>
      {counter && 
      <div className={s.weekcounter}>
      <CounterInput label="Кол-во столиков" value={tabels} onUpdate={setTabels}/>
    </div>}
    
    <div className={s.btnsRow}>
        <button className={`${s.btn160}`} disabled={!timer1 || !timer2 || weak.length == 0}>
          Применить
        </button>
        {(timer1 && timer2 && weak.length > 0) && <>
          <button className={`${s.btnOutlined}`} onClick={() => {
            setTimer1("")
            setTimer2("")
            setWeak([])
          }}>
          Очистить
          </button>
         </>}
    </div>
         
    </div>
  );
};
