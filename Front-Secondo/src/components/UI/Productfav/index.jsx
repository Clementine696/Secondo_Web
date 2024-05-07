import React from "react";

import fav from "../../../icon/like-bold.png";

import "./index.css";

function ProductFav(props) {
  //status
  const statusColorClass = props.status ? "green" : "red";

  const buttonStyle = props.status
    ? "btn-small-primary"
    : "btn-small-link-ghost-disabled";

//   console.log(!props.status);
  return (
    <div className="item-fav">
      <img src={props.img} className="img-fav"></img>
      <div className="item-fav-detail">
        <div className="fav-title-seller-price">
          <div className="title-product-fav kanit-paragraphMedium">
            <p>{props.title}</p>
            <p>{props.price}</p>
          </div>

          <p className="seller-product-fav kanit-paragraphtextMedium">
            {props.seller}
          </p>

          <div className="status-product">
            <div className={`status-color ${statusColorClass}`}></div>
            <div className="kanit-paragraphSmall">
              {props.status ? "มีของ" : "ไม่มีของ"}
            </div>
          </div>
        </div>

        <div className="button-section kanit-paragraphMedium">
          <button className={buttonStyle} disabled={!props.status}>
            ซื้อ
          </button>
          <button className="btn-small-secondary">ไปที่หน้าร้านค้า</button>
          <button className="btn-fav">
            <img src={fav} className="btn-fav-icon"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductFav;
