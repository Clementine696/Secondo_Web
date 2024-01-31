import * as React from "react";
import "./index.css";
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';

function ItemCardSell() {
  return (
    <div className="FrameCard">
      <div className="Img">
        <img
          loading="lazy"
          srcSet="https://www.tescophoto.com/media/catalog/product/cache/a2112a15e5165072db3b22495c91a3ca/9/3/9320.png"
          className="img"
        />
      </div>
      <span className="span">
        <span className="span2">
          <div className="ItemName">ชื่อสินค้า ที่ยาวมากเลยครับยาวสุดๆ ยาวมากถึง 2 บรรทัด</div>
          <div className="Province">จังหวัด</div>
        </span>
        <div className="LineFrame">
          <div className="Line"/>
        </div>
        <div className="CreditGroup">
          <div className="Price pull-left">ราคา</div>
          <div className="CarbonCredit pull-right">CO₂ Credit</div>
        </div>
      </span>
    </div>
  );
}

function ItemCardDonate() {
  return (
    <div className="FrameItemCard">
      <div className="ImgCard">
        <img
          loading="lazy"
          srcSet="https://www.tescophoto.com/media/catalog/product/cache/a2112a15e5165072db3b22495c91a3ca/9/3/9320.png"
          className="imgItemCard"
        />
      </div>
      <span className="card-text-field">
        <span className="card-item-context">
          <div className="ItemName">ชื่อสินค้า ที่ยาวมากเลยครับยาวสุดๆ ยาวมากถึง 2 บรรทัด</div>
          <div className="Province">จังหวัด</div>
        </span>
        <div className="LineFrame">
          <div className="Line"/>
        </div>
        <div className="Price">ราคา</div>
      </span>
    </div>
  );
}

export default ItemCardDonate;