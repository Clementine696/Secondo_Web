import * as React from "react";
import "./index.css";
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';

function ItemCard() {
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
        <div className="Price">ราคา</div>
      </span>
    </div>
  );
}

// function ItemCard() {
//     return (
//       <Card style={{ width: '300px', height: '367px' }}>
//         <Card.Img variant="top" src="holder.js/234px200?text=Image cap" />
//         <Card.Body>
//           <Card.Title>ชื่อสินค้า ที่ยาวมากเลยครับยาวสุดๆ ยาวมากถึง 2 บรรทัด</Card.Title>
//         </Card.Body>
//         <div>
//           จังหวัด
//         </div>
//         <ListGroup horizontal>
//           <ListGroup.Item>ราคา</ListGroup.Item>
//           <ListGroup.Item>CO₂ Credit</ListGroup.Item>
//         </ListGroup>
//       </Card>
//     );
//   }

export default ItemCard;