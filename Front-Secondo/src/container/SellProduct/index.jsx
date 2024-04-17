import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input";
import Layout from "../../components/Layout";

import { useState, useEffect } from "react";

import Cancel from "../../icon/cancel.png";
import RedCancel from "../../icon/close.png";

import "./index.css";
import { Link, useNavigate} from "react-router-dom";

function SellProduct() {
  const [selectedImages, setSelectedImages] = useState([]);
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return file;
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };

  const [value, setValue] = useState("");
  const optionsCategory = [
    { label: "เสื้อผ้าและแฟชั่น", value: 1 },
    { label: "รองเท้า", value: 2 },
    { label: "ความงามและของใช้ส่วนตัว", value: 3 },
  ];
  function HandleSelect(event) {
    setValue(event.target.value);
  }

  const navigate = useNavigate();

  const nevigateToSellstate=()=>{
    navigate("/sellstate");
  }

  return (
    <Layout>
      <div className="background-sell-product-page">
        <div className="product-page-path-way">
          <div className="product-page-group-path-way">
            <div className="product-page-group-path-way-before-path">
              <Link
                className="product-page-group-path-way-before-path-text kanit-paragraphtextMedium"
                style={{ textDecoration: "none" }}
                to={"/profile"}
              >
                บัญชี
              </Link>
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
              <Link
                className="product-page-group-path-way-before-path-text kanit-paragraphtextMedium"
                style={{ textDecoration: "none" }}
                to={"/sellstate"}
              >
                การขายของฉัน
              </Link>
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
            <Link
              className="product-page-group-path-way-before-path-text kanit-paragraphtextMedium"
              style={{ textDecoration: "none" }}
            >
              เพิ่มสินค้าขาย
            </Link>
          </div>
        </div>
        <div className="sell-product-topic">เพิ่มสินค้าสำหรับการขาย</div>
        <div className="sell-product-content">
          <div className="sell-product-content-upload-image">
            <label className="sell-product-content-upload-image-label kanit-Display-Large">
              Click to add images
              <input
                className="sell-product-content-upload-image-input"
                type="file"
                name="images"
                onChange={onSelectFile}
                multiple
                accept="image/*"
              />
            </label>

            <div className="sell-product-content-upload-image-preview">
              {selectedImages &&
                selectedImages.map((image, index) => {
                  return (
                    <div
                      className="sell-product-content-upload-image-preview-frame"
                      key="image"
                    >
                      <div className="frame-out-icon-cancel">
                        <button
                          className="btn-cancel-sell-product"
                          onClick={() =>
                            setSelectedImages(
                              selectedImages.filter((e) => e !== image)
                            )
                          }
                        >
                          <img
                            src={Cancel}
                            className="btn-cancel-icon-sell-product"
                          />
                          <img
                            src={RedCancel}
                            className="btn-cancel-icon-sell-product-hover"
                          />
                        </button>
                      </div>
                      <img
                        className="sell-product-content-upload-image-preview-frame-image"
                        src={URL.createObjectURL(image)}
                        alt="upload"
                      />
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="sell-product-content-info-item">
            <Form className="sell-product-content-info-item-input">
              <Input
                Label="ชื่อสินค้า"
                placeholder="ระบุชื่อของสินค้า"
                value=""
                type="text"
                errorMessage=""
                onChange={() => {}}
              />

              <div className="sell-product-content-info-item-input-options">
                <p className="sell-product-content-info-item-input-options-topic kanit-paragraphtextMedium">
                  เลือกหมวดหมู่
                </p>
                <select
                  className="sell-product-content-info-item-input-options-category kanit-paragraphtextMedium"
                  onChange={HandleSelect}
                >
                  {optionsCategory.map((optionsCategory) => (
                    <option value={optionsCategory.value}>
                      {optionsCategory.label}
                    </option>
                  ))}
                </select>
              </div>
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
              <div className="sell-product-content-info-item-input-button-group">
                <button
                  className="btn-small-secondary kanit-paragraphMedium"
                  // onClick={nevigateToSellstate}
                  onClick={() => navigate(-1)}
                >
                  ยกเลิก
                </button>
                {selectedImages.length > 10 ? (
                  <button
                    className="btn-small-primary-disabled kanit-paragraphMedium"
                    disabled={true}
                  >
                    รูปภาพเกินกำหนด
                  </button>
                ) : (
                  <button
                    className="btn-small-primary kanit-paragraphMedium"
                    onClick={() => {
                      console.log(selectedImages), "ddd";
                    }}
                  >
                    ลงขาย
                  </button>
                )}
              </div>
            </Form>
            {/* </Col> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SellProduct;
