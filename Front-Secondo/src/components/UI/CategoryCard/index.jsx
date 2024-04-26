import * as React from "react";
import "./index.css";

function CateCard(props) {
  return (
    <div className="frame-cate-card">
      <div className="img-category-frame">
        <img
          className="img-category"
          // src="https://www.pngmart.com/files/1/Sneaker-PNG-Transparent-Image.png"
          src={props.img}
        />
      </div>
      <div className="text-category-frame">
        <div className="text-category">{props.title}</div>
      </div>
    </div>
  );
}

export default CateCard;
