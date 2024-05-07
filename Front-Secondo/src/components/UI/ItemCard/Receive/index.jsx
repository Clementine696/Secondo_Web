import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../index.css";

import favBold from "../../../../icon/like-bold.png";
import fav from "../../../../icon/like.png";
import { generatePublicUrl } from "../../../../urlConfig";

function ItemCardReceive(props) {
  const [isFav, setIsFav] = useState(false);

  const handleFav = () => {
    setIsFav(!isFav);
  };

  return (
    <div className="frame-card-item tp-transform">
      {/* <Link
          style={{ textDecoration: "none" }}
          // to="/product"
          to={`/${props.slug}/${props._id}/p`}
          // className="link-img-card-item"
        > */}
      <div className="frame-out-icon-favorite">
        <button className="btn-fav-card-product" onClick={handleFav}>
          <img
            src={isFav ? favBold : fav}
            className="btn-fav-icon-card-product"
          ></img>
        </button>
      </div>

      <div className="frame-img-card-item">
      <Link
          style={{ textDecoration: "none" }}
          // to="/product"
          to={`/product/receiver/${props._id}/p`}
          className="link-img-card-item"
        >
          <img
            className="img-card-item"
            // src="https://www.tescophoto.com/media/catalog/product/cache/a2112a15e5165072db3b22495c91a3ca/9/3/9320.png" //TODO:
            src={props.img && props.img.length > 0 ? generatePublicUrl(props.img[0].img) : "https://www.tescophoto.com/media/catalog/product/cache/a2112a15e5165072db3b22495c91a3ca/9/3/9320.png"} alt=""
          />
      </Link>
      </div>
      <Link
          style={{ textDecoration: "none" }}
          // to="/product"
          to={`/product/receiver/${props._id}/p`}
          // className="link-img-card-item"
        >
      <span className="card-text-field">
        <span className="card-item-context">
          <div className="card-item-name">
            {/* <Link
              style={{ textDecoration: "none" }}
              to={`/${props.slug}/${props._id}/p`}
              className="card-item-name"
            > */}
              {props.title}
            {/* </Link> */}
          </div>
          <div className="card-item-province">{props.province}</div>
        </span>
        <div className="card-item-line-frame">
          <div className="card-item-line" />
        </div>
        <div className="card-item-credit-context">
            <div className="card-item-price">ขอรับบริจาค</div>
        </div>
      </span>
      </Link>
      {/* </Link> */}
    </div>
  );
}

export default ItemCardReceive;