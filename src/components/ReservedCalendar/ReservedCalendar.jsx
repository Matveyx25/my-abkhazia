import React, { useEffect, useState } from "react";
import s from "./ReservedCalendar.module.css";
const { JsonCalendar } = require("json-calendar");
const calendar = new JsonCalendar({ today: new Date() });

export const ReservedCalendar = ({clickHandler, activeUser, user, removeUser}) => {
    const ruMonths = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
    ];

    const ruDays =  [
      { ru: "Вс", en: "Su" },
      { ru: "Пн", en: "Mo" },
      { ru: "Вт", en: "Tu" },
      { ru: "Ср", en: "We" },
      { ru: "Чт", en: "Th" },
      { ru: "Пт", en: "Fr" },
      { ru: "Сб", en: "Sa" }
    ];

  const [indexMonth, setIndexMonth] = useState(
    calendar.weeks[0].find((el) => el.className.includes("month-day")).monthIndex
  );
  const [month, setMonth] = useState(ruMonths[indexMonth]);
  const [weeks, setWeeks] = useState(calendar.weeks.map((w) => w.map((d) => ({
      day: d.day,
      className: d.className,
      dayName: ruDays.find(el => el.en == calendar.dayNames[d.date.getDay()].abbr)
    }))))

  useEffect(() => {
    const DATE = new Date();
    calendar.changeMonth(DATE.getYear() + 1900, indexMonth);
    setMonth(ruMonths[indexMonth]);
    let weeksArr = calendar.weeks.map((w) => w.map((d) => ({
        day: d.day,
        className: d.className,
        dayName: ruDays.find(el => el.en == calendar.dayNames[d.date.getDay()].abbr)
      })))
    setWeeks(weeksArr.length == weeks.length ? weeks : weeksArr.slice(weeksArr.length - weeks.length));
  }, [indexMonth]);

  const onNext = () => {
    if (indexMonth < 11) {
      setIndexMonth(indexMonth + 1);
    }
  };

  const onPrev = () => {
    if (indexMonth > 0) {
      setIndexMonth(indexMonth - 1);
    }
  };

  return (
    <div>
      <div className={s.wrapper}>
        <p className={s.gridTitle}>Месяц</p>
        <p className={s.gridTitle}>Дата</p>
        <p className={s.gridTitle}>Кол-во номеров</p>
        <p className={s.gridTitle}>Туристы</p>
        <div className={s.monthName}>
          <div>
            <img
              src="../images/arrow-right-circle-fill.svg"
              className={indexMonth <= 0 && s.disabled}
              onClick={onPrev}
              alt=""
            />
            {month}
          </div>
          <img
            src="../images/arrow-right-circle-fill.svg"
            className={`${s.next} ${indexMonth >= 11 ? s.disabled : null}`}
            onClick={onNext}
            alt=""
          />
        </div>
        <div className={s.weekWrapper}>
          <table className={s.days}>
            <tbody>
              <tr>
                {weeks?.map((week) =>
                  week?.map((day, index) => {
                    if (day.className.includes("month-day")) {
                      return (
                        <td
                          key={index}
                          className={day.dayName.ru == "Вс" && s.lastTd}
                        >
                          <div className={s.day}>
                            <span>{day.dayName.ru}</span>
                            <span>{day.day}</span>
                          </div>
                        </td>
                      );
                    }
                  })
                )}
              </tr>
              <tr>
                {weeks?.map((week) =>
                  week?.map((day, index) => {
                    if (day.className.includes("month-day")) {
                      return (
                        <td
                          key={index}
                          className={day.dayName.ru == "Вс" && s.lastTd}
                        >
                          <div className={s.rooms}>
                            <p key={day.day}>4</p>
                          </div>
                        </td>
                      );
                    }
                  })
                )}
              </tr>
              <tr>
                <td></td>
                <td
                  colSpan={10}
                  className={`${s.colspanTd} ${activeUser && s.active}`}
                >
                  <div onClick={clickHandler}>Андрей</div>
                </td>
              </tr>
              {user && user.monthIn == month ? 
              (
                <tr>
                  {weeks?.map((week) =>
                  week?.map((day) => {
                    if (day.className.includes("month-day")) {
                      console.log(day.day);
                      if(+day.day < +user.dayIn || +day.day >= +user.dayOut) {
                        return (
                          <td key={day.day}></td>
                        );
                      }else if(+day.day == +user.dayIn){
                        return (
                        <td
                          key={day.day}
                          colSpan={user.dayOut - user.dayIn + 1}
                          className={`${s.colspanTd} ${activeUser && s.active}`}
                        >
                          <div onClick={clickHandler}>{user.name}
                          {removeUser && <img src="../images/close-white.svg" onClick={removeUser}/>}
                          </div>
                        </td>
                        )
                      }
                    }
                  })
                )}
                </tr>)
                 : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
