import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input";
import Layout from "../../components/Layout";

import { useState, useEffect } from "react";

import "./index.css";

function SellProduct() {

  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageURLs = [];
    images.forEach(image => newImageURLs.push(URL.createObjectURL(image)));
    setImageURLs(newImageURLs);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }

  return (
    <Layout>
      <div className="background-sell-product-page">
        <div className="product-page-path-way">
          <div className="product-page-group-path-way">
            <div className="product-page-group-path-way-before-path">
              <div className="product-page-group-path-way-before-path-text kanit-paragraphtextMedium">
                บัญชี
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
                การขายของฉัน
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
              เพิ่มสินค้าขาย
            </div>
          </div>
        </div>
        <div className="sell-product-topic">เพิ่มสินค้าสำหรับการขาย</div>
        <div className="sell-product-content">
          <div className="sell-product-content-upload-image">
            <input type="file" multiple accept="image/*" onChange={onImageChange}/>
            {imageURLs.map((imageSrc) => (
              < img width="268" height="200" src={imageSrc} />
            ))};
          </div>
          <div className="sell-product-content-info-item">
            <Col className="sell-product-content-info-item-group">
              <Form className="sell-product-content-info-item-input">
                <Input
                  Label="ชื่อสินค้า"
                  placeholder="ระบุชื่อของสินค้า"
                  value=""
                  type="text"
                  errorMessage=""
                  onChange={() => {}}
                />

                <Input
                  Label="ราคาสินค้า"
                  placeholder="ระบุราคาของสินค้า"
                  value=""
                  type="text"
                  errorMessage=""
                  onChange={() => {}}
                />
                <Input
                  Label="รายละเอียดสินค้า"
                  placeholder="ระบุรายละเอียดของสินค้า"
                  value=""
                  type="text"
                  errorMessage=""
                  onChange={() => {}}
                />
                <Input
                  Label="ค่าจัดส่ง"
                  placeholder="ระบุค่าจัดส่ง"
                  value=""
                  type="text"
                  errorMessage=""
                  onChange={() => {}}
                />
                <div className="sell-product-content-info-item-input-button mb-3">
                  <button
                    className="btn-small-secondary kanit-paragraphMedium"
                    type="submit"
                  >
                    ยกเลิก
                  </button>
                  <button
                    className="btn-small-primary kanit-paragraphMedium"
                    type="submit"
                  >
                    ลงขาย
                  </button>
                </div>
              </Form>
            </Col>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SellProduct;
