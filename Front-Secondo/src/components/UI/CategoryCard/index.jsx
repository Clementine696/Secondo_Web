import * as React from "react";
import "./index.css";

function CateCard() {
  return (
    <div className="FrameCateCard">
      <div className="Img">
        <img
          loading="lazy"
          srcSet="https://www.tescophoto.com/media/catalog/product/cache/a2112a15e5165072db3b22495c91a3ca/9/3/9320.png"
          className="img"
        />
      </div>
    </div>
  );
}

export default CateCard;