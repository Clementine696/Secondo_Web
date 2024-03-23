import React from "react";
import "./index.css";

import cancel from "../../../../icon/cancel.png";

const ModalSelectItem = (props) => {
  if (!props.open) return null;

  return (
    <div className="overlay">
      <div className="modal-container-select-product">
        <div className="close-button" onClick={props.onClose}>
          <img src={cancel} className="cancel-icon" />
        </div>

        <div className="model-content">
          <div className="product-select">
            <div className="kanit-paragraphBig modal-title">{props.label}</div>
            <div className="product-img-title">
              <img src={props.img} className="img-product" />
              <p className="product-title kanit-paragraphSmall">{props.title}</p>
            </div>
          </div>

          <div className="button-pop kanit-paragraphMedium">
            <button className="btn-small-primary">เสนอขาย</button>
            <button className="btn-small-secondary">ลงขายสินค้าใหม่</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSelectItem;
