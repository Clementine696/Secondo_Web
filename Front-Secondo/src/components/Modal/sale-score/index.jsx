import React from "react";
import "./index.css";

import cancel from "../../../icon/cancel.png";

const ModalSale = (props) => {
  if (!props.open) return null;

  return (
    <div className="overlay">
      <div className="modal-container-sale">
        <div className="close-button" onClick={props.onClose}>
          <img src={cancel} className="cancel-icon" />
        </div>
        <div className="model-content">
          <img src={props.img} className="tag-icon" />
          <div className="text-title-desc-modal">
            <div className="kanit-paragraphBig">{props.label}</div>
            <p className="kanit-paragraphSmall">{props.desc}</p>
          </div>
          <div className="button-pop">
            <button className="btn-small-primary">
              เสนอจากของที่คุณขายอยู่
            </button>
            <button className="btn-small-secondary">ลงขายสินค้าใหม่</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSale;
