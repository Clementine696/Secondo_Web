import * as React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function CateCard() {
  return (
    <div className="frame-cate-card">
      <Link style={{ textDecoration: "none" }} className="link-img-category">
        <img
          className="img-category"
          src="https://www.pngmart.com/files/1/Sneaker-PNG-Transparent-Image.png"
        />
      </Link>
      <Link style={{ textDecoration: "none" }} className="text-category">ประเภทของสินค้า</Link>
    </div>
  );
}

export default CateCard;
