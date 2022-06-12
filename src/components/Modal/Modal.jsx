import React from "react";
import s from "./Modal.module.css"

export const Modal = ({ children, onClose, visible }) => {
  if (!visible) {
    return null;
  }

  return(
    <div className={s.wrapper}>
      <div className={s.modalBody}>
        <div className={s.modalDialog}>
            <span className={s.close} onClick={() => onClose()}>
                <img src="/images/ep_circle-close-filled.svg"/>
            </span>
            {children}
        </div>
      </div>
    </div>
  )
};
