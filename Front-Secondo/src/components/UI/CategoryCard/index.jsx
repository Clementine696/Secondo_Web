import * as React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function CateCard(props) {
  return (
    <div className="frame-cate-card">
      <Link
          style={{ textDecoration: "none" }}
          to={`/c/${props.title}`}
          className="text-category"
      >
        <img
          className="img-category"
          // src="https://www.pngmart.com/files/1/Sneaker-PNG-Transparent-Image.png"
          src={props.img}
        />
        <div className="text-category">    
          {props.title}
        </div>
      </Link>
    </div>
  );
}

export default CateCard;
