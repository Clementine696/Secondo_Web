import React, { useCallback } from "react";
import Layout from "../../components/Layout";
import { Container, Form, Button, Row, Col, FormCheck } from "react-bootstrap";
import Dropdown from "../../components/UI/Dropdown";
import ItemCard from "../../components/UI/ItemCard";

import "./index.css";
import "../../styles.css";

const options = [
  { value: "option1", label: "ความนิยม" },
  { value: "option2", label: "ล่าสุด" },
  { value: "option3", label: "ราคา: มากไปน้อย" },
  { value: "option4", label: "ราคา: น้อยไปมาก" },
];

function Search() {
  return (
    <Layout>
      {/* <div className="search-content">
        <Row className="Frame-top">
          <div className="Search-title-amount">ค้นหา คำค้นหา (100)</div>
          <div className="suggest-search">
            <div className="suggest-item">
              <img
                className="img-search"
                src="/images/iPhone_15_Pro_Blue_Titanium_1.png"
                alt="suggestion"
              />
            </div>

            <div className="suggest-item">
              <img
                className="img-search"
                src="/images/iPhone_15_Pro_Blue_Titanium_1.png"
                alt="suggestion"
              />
            </div>

            <div className="suggest-item">
              <img
                className="img-search"
                src="/images/iPhone_15_Pro_Blue_Titanium_1.png"
                alt="suggestion"
              />
            </div>
          </div>
        </Row>

        <Row className="search-result-content">
          <Row className="row-sort-button">
            <Dropdown options={options} />
          </Row>
          <Row className="frame-result">
            <Col className="filter">
              <div className="kanit-paragraphBig">
                หมวดหมู่
                <div className="kanit-paragraphMedium">
                  Test1
                </div>
              </div>
              <div className="kanit-paragraphMedium">
                ราคา
              </div>
              <div className="kanit-paragraphMedium">
                ส่งจาก
              </div>
              <div className="kanit-paragraphMedium">
                สภาพสินค้า
              </div>
            </Col>
            <Col className="search-result">
              <Row className="row-card-search-result">
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
              </Row>
            </Col>
          </Row>
        </Row>
      </div> */}

      <div className="search-page">
        <div className="search-page-frame-suggest">
          <div className="search-page-frame-suggest-topic">
            <div className="search-page-frame-suggest-topic-main-header">
              ค้นหา โทรศัพท์
            </div>
            <div className="search-page-frame-suggest-topic-main-sub">
              (1,000)
            </div>
          </div>
          <div className="search-page-frame-suggest-content">
            <div className="search-page-frame-suggest-content-group-item">
              <div className="search-page-frame-suggest-content-group-item-card">
                <div className="search-page-frame-suggest-content-group-item-card-img-frame">
                  <img
                    className="search-page-frame-suggest-content-group-item-card-img"
                    src="/images/iPhone_15_Pro_Blue_Titanium_1.png"
                    alt="suggestion"
                  />
                </div>
                <div className="search-page-frame-suggest-content-group-item-card-text">
                  โทรศัพท์
                </div>
              </div>
              <div className="search-page-frame-suggest-content-group-item-card">
                <div className="search-page-frame-suggest-content-group-item-card-img-frame">
                  <img
                    className="search-page-frame-suggest-content-group-item-card-img"
                    src="/images/iPhone_15_Pro_Blue_Titanium_1.png"
                    alt="suggestion"
                  />
                </div>
                <div className="search-page-frame-suggest-content-group-item-card-text">
                  โทรศัพท์
                </div>
              </div>
              <div className="search-page-frame-suggest-content-group-item-card">
                <div className="search-page-frame-suggest-content-group-item-card-img-frame">
                  <img
                    className="search-page-frame-suggest-content-group-item-card-img"
                    src="/images/iPhone_15_Pro_Blue_Titanium_1.png"
                    alt="suggestion"
                  />
                </div>
                <div className="search-page-frame-suggest-content-group-item-card-text">
                  โทรศัพท์
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="search-page-frame-content">
          <Dropdown options={options} />
          <div className="search-page-frame-content-all">
            <div className="search-page-frame-content-all-filter">
              <div className="search-page-frame-content-all-filter-category">
                <div className="search-page-frame-content-all-filter-category-header">
                  หมวดหมู่
                </div>
                <div className="search-page-frame-content-all-filter-category-name">
                  เสื้อผ้าและแฟชัน
                </div>
                <div className="search-page-frame-content-all-filter-category-name">
                  รองเท้า
                </div>
                <div className="search-page-frame-content-all-filter-category-name">
                  สุขภาพและความงาม
                </div>
                <div className="search-page-frame-content-all-filter-category-name">
                  เครื่องประดับ
                </div>
                <div className="search-page-frame-content-all-filter-category-name">
                  เครื่องใช้ไฟฟ้า
                </div>
                <div className="search-page-frame-content-all-filter-category-name">
                  อุปกรณ์ IT
                </div>
                <div className="search-page-frame-content-all-filter-category-name">
                  กล้องและอุปกรณ์
                </div>
                <div className="search-page-frame-content-all-filter-category-name">
                  รถยนต์
                </div>
                <div className="search-page-frame-content-all-filter-category-name">
                  รถมอเตอร์ไซต์
                </div>
                <div className="search-page-frame-content-all-filter-category-name">
                  เครื่องใช้ไฟฟ้า
                </div>
                <div className="search-page-frame-content-all-filter-category-name">
                  กระเป๋า
                </div>
                <div className="search-page-frame-content-all-filter-category-name">
                  เฟอร์นิเจอร์
                </div>
                <div className="search-page-frame-content-all-filter-category-name">
                  ของสะสม
                </div>
                <div className="search-page-frame-content-all-filter-category-name">
                  หนังสือ
                </div>
                <div className="search-page-frame-content-all-filter-category-name">
                  กีฬา
                </div>
                <div className="search-page-frame-content-all-filter-category-name">
                  เครื่องดนตรี
                </div>
                <div className="search-page-frame-content-all-filter-category-name">
                  แม่และเด็ก
                </div>
              </div>
              <div className="search-page-frame-content-all-filter-price">
                <div className="search-page-frame-content-all-filter-price-header">
                  ราคา
                </div>
                <div className="search-page-frame-content-all-filter-price-filter">
                  <div className="search-page-frame-content-all-filter-price-filter-lower">
                    <div className="search-page-frame-content-all-filter-price-filter-lower-text">
                      ราคาเริ่มต้น
                    </div>
                  </div>
                  <div className="search-page-frame-content-all-filter-price-filter-line"></div>
                  <div className="search-page-frame-content-all-filter-price-filter-upper">
                    <div className="search-page-frame-content-all-filter-price-filter-upper-text">
                      ราคาสูงสุด
                    </div>
                  </div>
                </div>
                <button
                  className="btn-small-primary kanit-paragraphMedium"
                  onclick="activateLasers()"
                >
                  ตกลง
                </button>
              </div>
              <div className="search-page-frame-content-all-filter-delivery">
                <div className="search-page-frame-content-all-filter-delivery-header">
                  ส่งจาก
                </div>
                <div className="search-page-frame-content-all-filter-delivery-group-check row">
                  {/* <Form>
                    {["ภูมิภาค"].map((type) => (
                      <div key={`${type}`} className="search-page-frame-content-all-filter-delivery-group-check-box">
                        <Form.Check // prettier-ignore
                          type={type}
                          id={`${type}`}
                          label={`${type}`}
                        />
                      </div>
                    ))}
                  </Form> */}
                  <FormCheck
                    className="search-page-frame-content-all-filter-delivery-group-check-box-text"
                    label="กรุงเทพและปริมณฑล"
                  />
                  <FormCheck
                    className="search-page-frame-content-all-filter-delivery-group-check-box-text"
                    label="ภาคกลาง"
                  />
                  <FormCheck
                    className="search-page-frame-content-all-filter-delivery-group-check-box-text"
                    label="ภาคตะวันออกเฉียงเหนือ"
                  />
                  <FormCheck
                    className="search-page-frame-content-all-filter-delivery-group-check-box-text"
                    label="ภาคใต้"
                  />
                  <FormCheck
                    className="search-page-frame-content-all-filter-delivery-group-check-box-text"
                    label="ภาคเหนือ"
                  />
                  <FormCheck
                    className="search-page-frame-content-all-filter-delivery-group-check-box-text"
                    label="ภาคตะวันออก"
                  />
                  <FormCheck
                    className="search-page-frame-content-all-filter-delivery-group-check-box-text"
                    label="ภาคตะวันตก"
                  />
                </div>
              </div>
              <div className="search-page-frame-content-all-filter-condition">
              <div className="search-page-frame-content-all-filter-condition-header">
                  สภาพสินค้า
                </div>
                <div className="search-page-frame-content-all-filter-condition-group-check row">
                  <FormCheck
                    className="search-page-frame-content-all-filter-condition-group-check-box-text"
                    label="สินค้ามือสอง"
                  />
                  <FormCheck
                    className="search-page-frame-content-all-filter-condition-group-check-box-text"
                    label="สินค้าใหม่"
                  />
                </div>
              </div>
            </div>
            <div className="search-page-frame-content-all-group-card">
              <div className="search-page-frame-content-all-group-card-frame">
                <ItemCard />
                <ItemCard />
                <ItemCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Search;
