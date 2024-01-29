import * as React from "react";
import "./index.css";

function CateCard() {
  return (
    <div className="FrameCateCard">
      <img
        loading="lazy"
        srcSet="https://www.pngmart.com/files/1/Sneaker-PNG-Transparent-Image.png"
        className="imgCate"
      />
      <div className="TextCate">
        ประเภทของสินค้า
      </div>
    </div>
  );
}

export default CateCard;