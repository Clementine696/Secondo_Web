import React from "react";

import "./index.css";

import success from "../../../icon/success-check.png";

const Popup = (props) => {
  return (
    <div className="popup">
      <img src={props.img} alt="success"></img>
      <div className="text-title-desc-pop">
        <div className="kanit-paragraphBig">{props.Label}</div>
        <p className="kanit-paragraphSmall">{props.desc}</p>
      </div>
    </div>
  );
};

export default Popup;
