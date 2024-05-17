import React from "react";
import Input from "../../../components/UI/Input";

import "../Cancle/index.css";

const ModalConfirm = (props) => {
  return (
    <>
      {props.open && (
        <div className="overlay">
          <div className="modal-container-cancle">
            <div className="text-title-desc-modal">
              <p className="kanit-paragraphBig">{props.label}</p>
              <p className="kanit-paragraphSmall">{props.desc}</p>
            </div>
            <div className="button-cancle">
              <button className="btn-small-secondary cancle-btn" onClick={props.onClose}>ยกเลิก</button>
              <button className="btn-small-primary cancle-btn" onClick={props.onConfirm}>ยืนยัน</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalConfirm;
