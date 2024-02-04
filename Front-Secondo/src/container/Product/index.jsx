import React from "react";
import { Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout";
import ItemCard from "../../components/UI/ItemCard";
import HDivider from "../../components/UI/DividerHorizontal";
import VDivider from "../../components/UI/DividerVentical";

import "./index.css";
import "../../components/UI/Button/index.css";

function Product() {
  return (
    <Layout>
      <div className="background-product-page">
        <div className="product-page-path-way">
          <div className="product-page-group-path-way">
            <div className="product-page-group-path-way-before-path">
              <div className="product-page-group-path-way-before-path-text kanit-paragraphBig">
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
              <div className="product-page-group-path-way-before-path-text">
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
            <div className="product-page-group-path-way-last-path kanit-paragraphBig">
              เสื้อ COTTON แบรนด์ญี่ปุ่น
            </div>
          </div>
        </div>

        <Row className="product-page-item-details">
          <Col className="product-page-item-details-group-picture-seller">
            <div className="product-page-item-details-group-picture-seller-big-picture">
              <img
                className="big-img"
                src="/images/iPhone_15_Pro_Blue_Titanium_1.png"
              />
            </div>
            <Row className="product-page-item-details-group-picture-seller-small-picture">
              <Col className="col-small-pic"></Col>
              <Col className="col-small-pic"></Col>
            </Row>
            <Row className="product-page-item-details-group-picture-seller-desc-seller"></Row>
          </Col>
          <div className="product-page-item-details-group-item-description">
            <div className="product-title-seller-name">
              <div className="kanit-Display-Small-R product-title">
                ชื่อ Product ที่ยาวๆ แต่ไม่เกิน 2 บรรทัด 2 บรรทัดจริงๆ
                นะแต่ตอนนี้มันไม่ถึง 2 อ่ะ
              </div>
              <div className="kanit-paragraphMedium">ลงขายโดย ชื่อคนขาย</div>
            </div>

            <Row className="product-price-cc">
              <Col className="kanit-Display-Medium price">1000 บาท</Col>
              <Col className="kanit-Display-Medium cc">20 CCKg eq</Col>
            </Row>

            <Row className="product-decription">
              <div className="kanit-paragraphtextMedium product-detail">
                ยี่ห้อ :{" "}
              </div>
              <div className="kanit-paragraphtextMedium product-detail">
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
              </div>
            </Row>

            <HDivider />

            <Row className="product-button-section">
              <Col>
                <button className="btn-small-secondary kanit-paragraphMedium">
                  เสนอราคา
                </button>
              </Col>
              <Col>
                <button className="btn-small-primary kanit-paragraphMedium">
                  ซื้อ
                </button>
              </Col>
            </Row>
          </div>
        </Row>

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
                <Col>รายการสินค้าที่เคยขาย</Col>
                <Col className="color-ratio">10</Col>
              </Row>
            </Col>

            <Col className="kanit-paragraphtextMedium seller-detail">
              <Row>
                <Col>อัตราการตอบกลับ</Col>
                <Col className="color-ratio">80%</Col>
              </Row>
              <Row>
                <Col>เวลาในการตอบกลับ</Col>
                <Col className="color-ratio">ภายในไม่กี่นาที</Col>
              </Row>
            </Col>

            <Col className="kanit-paragraphtextMedium seller-detail">
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
            โทรศัพท์มือถือ Yesphone S32 pro max หน้าจอ 6.8 Ram 3GB/Rom 32GB
            รับประกัน 1 ปี.ระบบปฏิบัติการ : Android 11หน้าจอขนาด : 6.8Ram :
            3GBRom : 32GBซิมการ์ด : 2 ซิม Micro/Nano ซิมกล้องหน้า :
            8.0MPกล้องหลัง : 13.0MPแบตเตอรี่ : 4000
            mAh==========================================================💛
            การขนส่ง 💛⚡ การตัดรอบขนส่ง ทางร้านตัดรอบเวลา 16.00 น.
            จัดส่งวันถัดไป (เข้าระบบ Tracking 18.00 น.)⚡
            ระยะเวลาที่สินค้าจะถูกจัดส่งถึงปลายทาง ขึ้นอยู่กับบริษัทขนส่ง⚡
            ไม่รวมวันอาทิตย์ และ วันหยุดนักขัตฤกษ์🔥
            เงื่อนไขการรับประกันเครื่อง🔥⚠️ ห้ามตกแตก หล่น เปียกน้ำ แกะเครื่อง
            หรือเป็นรอย มิเช่นนั้น การประกันจะสิ้นสุดทันที ⚠️
            สินค้าทุกเครื่องมีประกัน ⚠️ นับจากวันแรกจนถึง 7 วัน ที่ได้รับสินค้า
            ถ้าสินค้ามีปัญหาเปลี่ยนเครื่องใหม่ภายใน 7 วัน⚠️ หลังจาก 7 วัน
            ทางร้านจะดูแลเป็นประกันการซ่อม เคลม ตลอดระยะเวลา 1 ปี
            *ซ่อมอาจจะมีค่าใช้จ่ายในเรื่องของอะไหล่
            ราคาขึ้นอยู่กับดุลพินิจของพนักงานเคลม⚠️ ระยะเวลาการเคลม
            ขึ้นอยู่กับรอบของการเคลม ลูกค้าสามารถโทรสอบถามได้ตลอด⚠️
            หากได้รับสินค้าแล้ว อย่าทิ้งกล่องสินค้า หากไม่มีกล่อง หรือ
            เอกสารของทางร้าน ทางร้านขอสงวนสิทธิ์
            ถือเป็นที่สิ้นสุดการรับประกันสินค้า⚠️ สินค้าทุกชิ้น
            เป็นสเปคมาทางโรงเงานซึ่งเราได้ทำการแจ้งไว้แล้วในรายละเอียดสินค้า
            ถ้าลูกค้าไม่พอใจในสินค้าไม่ว่ากรณีใดๆ เราจะไม่มีการคืนเงินให้ลูกค้า
            เพราะถ้าสินค้ามีปัญหา เรายินดีเปลี่ยนเครื่องใหม่
            หรือเคลมงานให้ลูกค้าเต็มที่
          </p>
        </div>

        <div className="group-card-suggest-item">
          <div className="group-card-header">
            <div className="group-card-header-topic">สินค้าน่าสนใจ</div>
            <div className="group-card-header-other">เพิ่มเติม</div>
          </div>
          <div className="group-card-item-line-frame">
            <HDivider />
          </div>
          <div className="group-card-item">
            <ItemCard />
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
