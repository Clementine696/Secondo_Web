import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout";
import ItemCard from "../../components/UI/ItemCard";
import HDivider from "../../components/UI/DividerHorizontal";
import VDivider from "../../components/UI/DividerVentical";
import { Link, json, useLocation } from "react-router-dom";

import favBold from "../../icon/like-bold.png";
import fav from "../../icon/like.png";

import "./index.css";
import "../../components/UI/Button/index.css";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailsById } from "../../actions";
import { generatePublicUrl } from "../../urlConfig";

function Product() {

  const dispatch = useDispatch();
  const product = useSelector(state => state.product)

  const location = useLocation(); 
  const productId = location.pathname.split("/")[2];
  // console.log(_id)
  
  useEffect(() => {
    // const { productId } = props.params.match;
    // const location = useLocation(); 
    // const _id = location.pathname.split("/")[2];
    console.log(productId)
    const payload = {
      params:{
        productId
      }
    }

    dispatch(getProductDetailsById(payload));
  }, []);

  let spec = [];
  if(product.productDetails.specifications){
    spec = product.productDetails.specifications.split(",")
  }


  const [isFav, setIsFav] = useState(false);
  //transition
  const [fade, setFade] = useState(false);

  // console.log("isout:", isFav);

  const handleFavClick = () => {
    //change state
    setIsFav(!isFav);
    setFade(true);

    // console.log("isin:", isFav);

    setTimeout(() => {
      setFade(false);
    }, 300);

    if (isFav) {
      console.log("Unlike");
    } else {
      console.log("Like");
    }
  };
  return (
    <Layout>
      <div className="background-product-page">
        <div className="product-page-path-way">
          <div className="product-page-group-path-way">
            <div className="product-page-group-path-way-before-path">
              <div className="product-page-group-path-way-before-path-text kanit-paragraphtextMedium">
                หน้าหลัก
              </div>
              <div className="product-page-group-path-way-before-path-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 18.001L13.5858 13.4152C14.3668 12.6341 14.3668 11.3678 13.5858 10.5868L9 6.00098"
                    stroke="#00243D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="product-page-group-path-way-before-path">
              <div className="product-page-group-path-way-before-path-text kanit-paragraphtextMedium">
                เสื้อผ้า
              </div>
              <div className="product-page-group-path-way-before-path-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 18.001L13.5858 13.4152C14.3668 12.6341 14.3668 11.3678 13.5858 10.5868L9 6.00098"
                    stroke="#00243D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="product-page-group-path-way-last-path kanit-paragraphtextMedium">
              เสื้อ COTTON แบรนด์ญี่ปุ่น
            </div>
          </div>
        </div>

        <div className="product-page-item-details">
          <div className="product-page-item-details-group-picture-seller">
            <div className="product-page-item-details-group-picture-seller-big-picture">
              <img
                className="big-img"                       //TODO:
                src={product.productDetails.productPictures ? generatePublicUrl(product.productDetails.productPictures[0].img) : "/images/iPhone_15_Pro_Blue_Titanium_1.png"}
                // src="/images/iPhone_15_Pro_Blue_Titanium_1.png"
              />
            </div>
            <Row className="product-page-item-details-group-picture-seller-small-picture">
              <Col className="col-small-pic"></Col>
              <Col className="col-small-pic"></Col>
            </Row>
          </div>
          <div className="product-page-item-details-group-item-description">
            <div className="product-title-seller-name">
              <div className="kanit-paragraphMedium product-title">
                {product.productDetails.name}
              </div>
              <Link className="seller-product" to="#seller">
                <div className="kanit-paragraphSmall">ลงขายโดย {product.productDetails.createBy}</div>
              </Link>
            </div>

            <Row className="product-price-cc">
              <Col className="kanit-Display-Medium price">{product.productDetails.price} บาท</Col>
              <Col className="kanit-Display-Medium cc">20 CO₂ Credit</Col>
            </Row>

            <Row className="product-decription">
              { spec.length > 0 ? spec.map((item, x) => (
                <div className="kanit-paragraphtextMedium product-detail">
                  {item}
                </div>
              )) : null}
                {/* <div className="kanit-paragraphtextMedium product-detail">

                </div> */}
              {/* <div className="kanit-paragraphtextMedium product-detail">
                วันที่ซื้อ :{" "}
              </div>
              <div className="kanit-paragraphtextMedium product-detail">
                รุ่น :{" "}
              </div>
              <div className="kanit-paragraphtextMedium product-detail">
                การรับประกัน :{" "}
              </div>
              <div className="kanit-paragraphtextMedium product-detail">
                ความจุ :{" "}
              </div>
              <div className="kanit-paragraphtextMedium product-detail">
                ขนาดหน้าจอ :{" "}
              </div> */}
            </Row>

            <div className="divider-horz-2"></div>

            <div className="product-button-section">
              <div className="main-product-button">
                <button className="btn-small-primary kanit-paragraphMedium">
                  ซื้อ
                </button>
              </div>
              <div>
                <button className="btn-fav" onClick={handleFavClick}>
                  <img
                    src={isFav ? favBold : fav}
                    className={`btn-fav-icon ${fade ? "fade-out" : "fade-in"}`}
                    alt="Favorite"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="seller-detail-in-product">
          <Col className="seller-profile-name">
            <div
              style={{
                backgroundColor: "black",
                height: "72px",
                width: "72px",
                borderRadius: "48px",
              }}
            ></div>

            <Col className="seller-name-online-button">
              <div className="seller-name-etc">
                <div className="seller-name-online kanit-paragraphMedium">
                  ชื่อร้านค้า/ผู้ขาย
                </div>
                <div className="seller-name-online kanit-paragraphMedium">
                  Online activity
                </div>
              </div>

              <div>
                <button className="btn-small-secondary kanit-paragraphtextMedium">
                  ไปหน้าร้านค้า
                </button>
              </div>
            </Col>
          </Col>

          <div className="vent-divider">
            <VDivider />
          </div>

          <Row className="about-seller">
            <Col className="kanit-paragraphtextMedium seller-detail">
              <Row>
                <Col>คะแนนผู้ขาย</Col>
                <Col className="color-ratio">5.3 พัน</Col>
              </Row>
              <Row>
                <Col>รายการสินค้าที่ขาย</Col>
                <Col className="color-ratio">10</Col>
              </Row>
              <Row className="top-seller-detail">
                <Col>อัตราการตอบกลับ</Col>
                <Col className="color-ratio">80%</Col>
              </Row>
            </Col>

            <Col className="kanit-paragraphtextMedium seller-detail">
              <Row>
                <Col>เวลาในการตอบกลับ</Col>
                <Col className="color-ratio">ภายในไม่กี่นาที</Col>
              </Row>
              <Row>
                <Col>วันที่เข้าร่วม</Col>
                <Col className="color-ratio">5 ปี ที่ผ่านมา</Col>
              </Row>
              <Row>
                <Col>ผู้ติดตาม</Col>
                <Col className="color-ratio">5 พัน</Col>
              </Row>
            </Col>
          </Row>
        </div>

        <div className="product-page-item-description">
          <div className="product-description-title kanit-paragraphMedium">
            รายละเอียดสินค้า
          </div>
          <p className="kanit-paragraphtextMedium">
            {product.productDetails.description}
          </p>
        </div>

        <div className="group-card-header-item">
          <div className="group-card-header">
            <div className="group-card-header-topic kanit-paragraphBig">
              สินค้าน่าสนใจ
            </div>
            <Link className="group-card-icon-other">
              <div className="group-card-header-other">เพิ่มเติม</div>
              <svg
                className="icon-arrow-right-24"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 18L13.5858 13.4142C14.3668 12.6332 14.3668 11.3668 13.5858 10.5858L9 6"
                  stroke="#D0C58A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </div>
          <HDivider />
          <div className="group-card-item">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Product;
