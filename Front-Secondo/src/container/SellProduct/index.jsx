import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input";
import Layout from "../../components/Layout";

import { useState, useEffect } from "react";

import Cancel from "../../icon/cancel.png";
import fav from "../../icon/like.png";

import "./index.css";

function SellProduct() {
  const [isCancel, setIsCancel] = useState(false);
  const handleCancel = () => {
    setIsCancel(!isCancel);
  };

  const [selectedImages, setSelectedImages] = useState([]);
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
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
            {/* <input type="file" multiple accept="image/*" onChange={onImageChange}/>
            {imageURLs.map((imageSrc) => (
              < img width="268" height="200" src={imageSrc} />
            ))}; */}

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
            {/* <br/>
            {selectedImages.lenght > 0 &&
              (selectedImages.length > 10 ? (
                <p>
                  You can't upload more than 10 images!
                  <span>
                    please delete <b> {selectedImages.length - 10} </b> of them{" "}
                  </span>
                </p>
              ) : (
                <button
                  onClick={() => {
                    console.log("UPLOAD IMAGESS");
                  }}
                >
                  UPLOAD {selectedImages.length}
                  {selectedImages.lenght === 1 ? "" : "S"}
                </button>
              ))
            } */}

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
                            src={fav}
                            className="btn-cancel-icon-sell-product-hover"
                          />
                        </button>
                      </div>
                      <img
                        className="sell-product-content-upload-image-preview-frame-image"
                        src={image}
                        alt="upload"
                      />
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="sell-product-content-info-item">
            {/* <Col className="sell-product-content-info-item-group"> */}
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
            {/* </Col> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SellProduct;
