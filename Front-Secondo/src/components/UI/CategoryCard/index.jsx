import * as React from "react";
import "./index.css";

function CateCard(props) {
  return (
    <div className="frame-cate-card">
      <img
        className="img-category"
        src={props.img}
      />
      <div className="text-category">
        {props.title}
      </div>
    </div>
  );
}

export default CateCard;