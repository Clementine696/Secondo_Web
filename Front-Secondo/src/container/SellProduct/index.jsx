import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addSellerProduct } from "../../actions";
import { Container, Form } from "react-bootstrap";

import Input from "../../components/UI/Input";
import Layout from "../../components/Layout";
import ModalS from "../../components/Modal/success";
import success from "../../icon/success-check.png";
import Cancel from "../../icon/cancel.png";
import RedCancel from "../../icon/close.png";
import Textarea from "../../components/UI/Input/Textarea";
import ModalCancle from "../../components/Modal/Cancle";

import "./index.css";

function SellProduct() {
  const [openModel, setOpenModel] = useState(false);
  const [openModalCancel, setModalCancel] = useState(false);
  const [navigateToSellstate, setNavigateToSellstate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (navigateToSellstate) {
      const timer = setTimeout(() => {
        navigate("/sellstate");
      }, 4000); // 4 seconds delay

      return () => clearTimeout(timer);
    }
  }, [navigateToSellstate, navigate]);

  const category = useSelector((state) => state.category);
  // console.log(category)
  const dispatch = useDispatch();

  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      if (category.parentId == null) {
        myCategories.push({
          // img: category.image,
          label: category.name,
          value: category._id,
          // children: category.children.length > 0 && renderCategories(category.children)
        });
      }
    }

    return myCategories;
  };

  const optionsCategory = renderCategories(category.categories);

  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return file;
    });
    // setProductPictures([...productPictures, e.target.files[0]]);
    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDetail, setProductDetail] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [shippingCost, setShippingCost] = useState("");

  const [errors, setErrors] = useState({
    productName: "",
    productPrice: "",
    productDetail: "",
    categoryId: "",
    shippingCost: "",
  });

  useEffect(() => {
    if (optionsCategory.length > 0) {
      const defaultCategory = optionsCategory.find(
        (option) => option.label === "เสื้อผ้าและแฟชั่น"
      );
      if (defaultCategory) {
        setCategoryId(defaultCategory.value);
      }
    }
  }, [optionsCategory]);

  // connect api to save data
  const addProductForm = () => {
    // Validation check
    let validationErrors = {};

    if (!productName) {
      validationErrors.productName = "กรุณากรอกชื่อสินค้า";
    }
    if (!productPrice) {
      validationErrors.productPrice = "กรุณากรอกราคาสินค้า";
    }
    if (!productDetail) {
      validationErrors.productDetail = "กรุณากรอกรายละเอียดสินค้า";
    }
    if (!categoryId) {
      validationErrors.categoryId = "กรุณาเลือกหมวดหมู่สินค้า";
    }
    if (!shippingCost) {
      validationErrors.shippingCost = "กรุณากรอกค่าจัดส่ง";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setOpenModel(true);
    console.log(categoryId);

    const form = new FormData();
    form.append("name", productName);
    form.append("price", productPrice);
    form.append("description", productDetail);
    form.append("shippingCost", shippingCost);
    form.append("category", categoryId);
    for (let pic of selectedImages) {
      form.append("productPicture", pic);
    }

    dispatch(addSellerProduct(form));

    setNavigateToSellstate(true);
  };

  return (
    <Layout>
      <div className="background-sell-product-page">
        <div className="product-page-path-way">
          <div className="product-page-group-path-way">
            <div className="product-page-group-path-way-before-path">
              <Link
                className="product-page-group-path-way-before-path-text kanit-paragraphBig"
                style={{ textDecoration: "none" }}
                to={"/profile"}
                // onClick={"/profile"}
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
                className="product-page-group-path-way-before-path-text kanit-paragraphBig"
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
              className="product-page-group-path-way-before-path-text kanit-paragraphBig"
              style={{ textDecoration: "none" }}
            >
              เพิ่มสินค้าขาย
            </Link>
          </div>
        </div>
        <div className="sell-product-topic">เพิ่มสินค้าสำหรับการขาย</div>
        <div className="sell-product-content">
          <div className="sell-product-content-upload-image">
            <div className="sell-product-content-upload-image-label kanit-Display-Large">
              Click to add images
              <input
                className="sell-product-content-upload-image-input"
                type="file"
                name="images"
                onChange={onSelectFile}
                multiple
                accept="image/*"
              />
            </div>

            <div className="sell-product-content-upload-image-preview">
              {selectedImages &&
                selectedImages.map((image, index) => {
                  return (
                    <div
                      className="sell-product-content-upload-image-preview-frame"
                      key={index}
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
            {/* <Col className="sell-product-content-info-item-group"> */}
            <Form className="sell-product-content-info-item-input">
              <Input
                Label="ชื่อสินค้า"
                placeholder="ระบุชื่อของสินค้า"
                value={productName}
                type="text"
                errorMessage={errors.productName}
                isInvalid={errors.productName !== ""}
                onChange={(e) => {
                  setProductName(e.target.value);
                  setErrors((prev) => ({ ...prev, productName: "" }));
                }}
              />

              <div className="sell-product-content-info-item-input-options">
                <p className="sell-product-content-info-item-input-options-topic kanit-paragraphtextMedium">
                  เลือกหมวดหมู่
                </p>
                <select
                  className={`sell-product-content-info-item-input-options-category kanit-paragraphtextMedium ${
                    errors.categoryId ? "input-invalid" : ""
                  }`}
                  value={categoryId}
                  onChange={(e) => {
                    setCategoryId(e.target.value);
                    setErrors((prev) => ({ ...prev, categoryId: "" }));
                  }}
                >
                  {optionsCategory.map((optionsCategory) => (
                    <option
                      key={optionsCategory.value}
                      value={optionsCategory.value}
                    >
                      {optionsCategory.label}
                    </option>
                  ))}
                </select>
                {errors.categoryId && (
                  <div className="error-msg">{errors.categoryId}</div>
                )}
              </div>
              <Input
                Label="ราคาสินค้า"
                placeholder="ระบุราคาของสินค้า"
                value={productPrice}
                type="text"
                errorMessage={errors.productPrice}
                isInvalid={errors.productPrice !== ""}
                onChange={(e) => {
                  setProductPrice(e.target.value);
                  setErrors((prev) => ({ ...prev, productPrice: "" }));
                }}
              />
              <Textarea
                Label="รายละเอียดสินค้า"
                placeholder="ระบุรายละเอียดของสินค้า"
                value={productDetail}
                type="text"
                errorMessage={errors.productDetail}
                isInvalid={errors.productDetail !== ""}
                onChange={(e) => {
                  setProductDetail(e.target.value);
                  setErrors((prev) => ({ ...prev, productDetail: "" }));
                }}
              />
              <Input
                Label="ค่าจัดส่ง"
                placeholder="ระบุค่าจัดส่ง"
                value={shippingCost}
                type="text"
                errorMessage={errors.shippingCost}
                isInvalid={errors.shippingCost !== ""}
                onChange={(e) => {
                  setShippingCost(e.target.value);
                  setErrors((prev) => ({ ...prev, shippingCost: "" }));
                }}
              />
            </Form>
            <div className="sell-product-content-info-item-input-button-group">
              <Link
                className="btn-small-secondary kanit-paragraphMedium"
                style={{ textDecoration: "none" }}
                // to="/sellstate"
                onClick={() => setModalCancel(true)}
              >
                ยกเลิก
              </Link>
              {selectedImages.length > 15 ? (
                <Link
                  className="btn-small-primary-disabled kanit-paragraphMedium w-100"
                  // disabled={true}
                  style={{ textDecoration: "none" }}
                >
                  รูปภาพเกินกำหนด
                </Link>
              ) : (
                <button
                  className="btn-small-primary kanit-paragraphMedium"
                  // onClick={() => {
                  //   console.log(selectedImages), "ddd";
                  // }}
                  onClick={addProductForm}
                  style={{ textDecoration: "none" }}
                >
                  ลงขาย
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <ModalS
        label="การประกาศขายสำเร็จ"
        desc="รอการตรวจสอบจากทาง Secondo"
        img={success}
        open={openModel}
        onClose={() => setOpenModel(false)}
      />

      <ModalCancle
        label="ต้องการยกเลิกการลงขายสินค้าหรือไม่"
        desc="กดยืนยันเพื่อยกเลิกการลงขายสินค้า"
        open={openModalCancel}
        onClose={() => setModalCancel(false)}
        onConfirm={() => {
          navigate("/sellstate");
        }}
      />
    </Layout>
  );
}

export default SellProduct;
