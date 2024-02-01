import * as React from "react";
import "./index.css";
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
import { NavLink, Link } from "react-router-dom";

function ItemCard() {
  return (
    <div className="frame-card-item">
      <div className="frame-img-card-item">
        <Link style={{ textDecoration: 'none' }} to="/product" className="link-img-card-item">
          <img
            className="img-card-item"
            src="https://www.tescophoto.com/media/catalog/product/cache/a2112a15e5165072db3b22495c91a3ca/9/3/9320.png"
          />
        </Link>
        {/* <img
          className="img-card-item"
          src="https://www.tescophoto.com/media/catalog/product/cache/a2112a15e5165072db3b22495c91a3ca/9/3/9320.png"  
        /> */}
        {/* <div className="frame-out-icon-favorite">
          <div className="frame-in-icon-favorite">
            <div className="icon-favorite">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                <path d="M10 18.001C9.76667 18.001 9.52933 17.9585 9.288 17.8737C9.04667 17.7888 8.834 17.653 8.65 17.4663L6.925 15.8624C5.15833 14.216 3.56233 12.5825 2.137 10.9619C0.711667 9.34129 -0.000666199 7.5547 4.67508e-07 5.60211C4.67508e-07 4.00663 0.525001 2.67424 1.575 1.60494C2.625 0.53563 3.93333 0.000976562 5.5 0.000976562C6.38333 0.000976562 7.21667 0.191754 8 0.57331C8.78333 0.954866 9.45 1.47696 10 2.13959C10.55 1.47764 11.2167 0.955884 12 0.574329C12.7833 0.192773 13.6167 0.00165549 14.5 0.000976562C16.0667 0.000976562 17.375 0.53563 18.425 1.60494C19.475 2.67424 20 4.00663 20 5.60211C20 7.55402 19.2917 9.34468 17.875 10.9741C16.4583 12.6035 14.85 14.2414 13.05 15.8878L11.35 17.4663C11.1667 17.653 10.9543 17.7888 10.713 17.8737C10.4717 17.9585 10.234 18.001 10 18.001ZM9.05 4.17636C8.56667 3.48047 8.05 2.94989 7.5 2.58463C6.95 2.21936 6.28333 2.03707 5.5 2.03775C4.5 2.03775 3.66667 2.37721 3 3.05614C2.33333 3.73506 2 4.58372 2 5.60211C2 6.48471 2.30833 7.42265 2.925 8.41591C3.54167 9.40918 4.27933 10.3722 5.138 11.3051C5.996 12.2386 6.87933 13.1127 7.788 13.9274C8.69667 14.7421 9.434 15.4126 10 15.9387C10.5667 15.4126 11.3043 14.7421 12.213 13.9274C13.1217 13.1127 14.005 12.2386 14.863 11.3051C15.721 10.3716 16.4583 9.4085 17.075 8.41591C17.6917 7.42332 18 6.48539 18 5.60211C18 4.58372 17.6667 3.73506 17 3.05614C16.3333 2.37721 15.5 2.03775 14.5 2.03775C13.7167 2.03775 13.05 2.22038 12.5 2.58564C11.95 2.95091 11.4333 3.48115 10.95 4.17636C10.8333 4.3461 10.6917 4.47339 10.525 4.55826C10.3583 4.64313 10.1833 4.68556 10 4.68556C9.81667 4.68556 9.64167 4.64313 9.475 4.55826C9.30833 4.47339 9.16667 4.3461 9.05 4.17636Z" fill="#00243D" />
              </svg>
            </div>
          </div>
        </div> */}
      </div>
      <span className="card-text-field">
        <span className="card-item-context">
          <div className="card-item-name">
            <Link style={{ textDecoration: 'none' }} to="/product" className="card-item-name">ชื่อสินค้า ที่ยาวมากเลยครับยาวสุดๆ ยาวมากถึง 2 บรรทัด</Link>
          </div>
          <div className="card-item-province">จังหวัด</div>
        </span>
        <div className="card-item-line-frame">
          <div className="card-item-line" />
        </div>
        <div className="card-item-credit-context">
          <div className="card-item-credit-price pull-left">ราคา</div>
          <div className="card-item-credit-carbon pull-right">CO₂ Credit</div>
        </div>
      </span>
    </div>
  );
}

function ItemCardDonate() {
  return (
    <div className="frame-card-item">
      <img
        srcSet="https://www.tescophoto.com/media/catalog/product/cache/a2112a15e5165072db3b22495c91a3ca/9/3/9320.png"
        className="img-card-item"
      />
      <span className="card-text-field">
        <span className="card-item-context">
          <div className="card-item-name">
            ชื่อสินค้า ที่ยาวมากเลยครับยาวสุดๆ ยาวมากถึง 2 บรรทัด
          </div>
          <div className="card-item-province">จังหวัด</div>
        </span>
        <div className="card-item-line-frame">
          <div className="card-item-line" />
        </div>
        <div className="card-item-price">บริจาค</div>
      </span>
    </div>
  );
}

export default ItemCard;
