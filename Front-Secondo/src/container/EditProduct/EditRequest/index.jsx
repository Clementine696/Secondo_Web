import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Input from "../../../components/UI/Input";
import Layout from "../../../components/Layout";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReceiverProductDetailsById } from "../../../actions";
import { generatePublicUrl } from "../../../urlConfig";

import Cancel from "../../../icon/cancel.png";
import RedCancel from "../../../icon/close.png";

import "../index";
import { Link, useLocation } from "react-router-dom";
import Textarea from "../../../components/UI/Input/Textarea";

let productInfo = [
  {
    img: [
      // "/images/iPhone_15_Pro_Blue_Titanium_1.png",
      // "https://images.macrumors.com/t/TkNh1oQ0-9TnnBjDnLyuz6yLkjE=/1600x0/article-new/2023/09/iPhone-15-General-Feature-Black.jpg",
      // "https://helios-i.mashable.com/imagery/reviews/02acfjrNcFF60tTa2SpGTsu/hero-image.fill.size_1248x702.v1695728230.jpg",
      // "https://i.guim.co.uk/img/media/3ccc410f49f75f456340f21c37ecf0ef31ae2bc1/368_82_2608_1565/master/2608.jpg?width=1200&quality=85&auto=format&fit=max&s=ec1eda86ea625851c6b39f01fbdeb699",
      // "https://ishop.com.uy/wp-content/uploads/2022/05/senales-de-que-necesitas-llevar-tu-iphone-a-reparacion-1080x675.jpg",
    ],
    productName: "",
    productSeller: "",
    province: "",
    productPrice: "",
    productCredit: 20,
  },
];

function EditRequestProduct() {

  const category = useSelector((state) => state.category);
  // console.log(category)
  const dispatch = useDispatch();

  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      if(category.parentId == null){
        myCategories.push(
          {
            // img: category.image,
            label: category.name,
            value: category._id,
            // children: category.children.length > 0 && renderCategories(category.children)
          }
        );
      }
    }

    return myCategories;
  };

  // const categoryItem = renderCategories(category.categories)

  const [selectedImages, setSelectedImages] = useState([]);
  
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return file
    });
    // setProductPictures([...productPictures, e.target.files[0]]);
    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDetail, setProductDetail] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [shippingCost, setShippingCost] = useState("");

  // connect api to save data
  // const addProductForm = () => {
  //   console.log(productName);
  //   console.log(productPrice);
  //   console.log(productDetail);
  //   console.log(shippingCost);
  //   console.log(categoryId);
  //   // console.log(selectedImages);

  //   for (let pic of selectedImages) {
  //     console.log("Test")
  //     console.log(pic.name)
  //   }
  //   const form = new FormData();
  //   form.append("name", productName);
  //   form.append("price", productPrice);
  //   form.append("specifications", "Spec");
  //   form.append("description", productDetail);
  //   form.append("shippingCost", shippingCost);
  //   form.append("category", categoryId);
  //   for (let pic of selectedImages) {
  //     form.append("productPicture", pic);
  //   }
  //   dispatch(addReceiverProduct(form));
  // };

  // const [value, setValue] = useState('')
  // const optionsCategory = [
  //   {label: "เสื้อผ้าและแฟชั่น", value: 1},
  //   {label: "รองเท้า", value: 2},
  //   {label: "ความงามและของใช้ส่วนตัว", value: 3},
  // ];
  const optionsCategory = renderCategories(category.categories);

  // function HandleSelect(event) {
  //   setValue(event.target.value);
  // }

  // const navigate = useNavigate();

  // const nevigateToSellstate = () => {
  //   navigate("/sellstate");
  // };

  const product = useSelector((state) => state.product);

  const location = useLocation();
  const productId = location.pathname.split("/")[3];
  // console.log(_id)

  useEffect(() => {
    // const { productId } = props.params.match;
    // const location = useLocation();
    // const _id = location.pathname.split("/")[2];
    console.log(productId);
    const payload = {
      params: {
        productId,
      },
    };

    dispatch(getReceiverProductDetailsById(payload));
  }, []);

  // let productDetail = [];

  console.log("Item in web");
  console.log(product.productDetails);
  const productFromApi = product.productDetails;
  console.log(productFromApi);
  let image_list = [];
  const productImage = productFromApi.productPictures;
  // console.log(productImage)
  // console.log(productImage.length)
  if (
    product.productDetails.productPictures &&
    Array.isArray(product.productDetails.productPictures)
  ) {
    productImage.map((item, index) => {
      console.log(item.img);
      image_list.push(item.img);
      // console.log(image[index])
    });
  }

  // console.log('new image list :')
  //   console.log(image_list);
  // for(let i=0;i<product.productDetails.productPictures.length;i++){
  //   image.append(product.productDetails.productPictures[i].img);
  //   console.log(image[i])
  if (productImage != null) {
    productInfo = [
      {
        img: image_list,
        // img: [
        //   "/images/iPhone_15_Pro_Blue_Titanium_1.png",
        //   "https://images.macrumors.com/t/TkNh1oQ0-9TnnBjDnLyuz6yLkjE=/1600x0/article-new/2023/09/iPhone-15-General-Feature-Black.jpg",
        //   "https://helios-i.mashable.com/imagery/reviews/02acfjrNcFF60tTa2SpGTsu/hero-image.fill.size_1248x702.v1695728230.jpg",
        //   "https://i.guim.co.uk/img/media/3ccc410f49f75f456340f21c37ecf0ef31ae2bc1/368_82_2608_1565/master/2608.jpg?width=1200&quality=85&auto=format&fit=max&s=ec1eda86ea625851c6b39f01fbdeb699",
        //   "https://ishop.com.uy/wp-content/uploads/2022/05/senales-de-que-necesitas-llevar-tu-iphone-a-reparacion-1080x675.jpg",
        // ],
        productName: productFromApi.name,
        productSeller: productFromApi.createBy.firstName,
        province: "กรุงเทพ",
        productPrice: productFromApi.price,
        productCredit: 20,
        productDesc: productFromApi.description,
        shippingCost: productFromApi.shippingCost,
        // productCategory: productFromApi.category.name
      },
    ];
  }

  useEffect(() => {
    if (product.productDetails) {
      setProductName(product.productDetails.name);
      setProductPrice(product.productDetails.price);
      setProductDetail(product.productDetails.description);
      setShippingCost(product.productDetails.shippingCost);
      // setCategoryId(product.productDetails.category.name)
      // setSelectedImages(product.productDetails.productPictures);
    }
  }, [product.productDetails]);

  console.log(productInfo.img);
  console.log(product.productDetails.productPictures);

  // const [frameSmallImgs, setFrameSmallImgs] = useState("");

  useEffect(() => {
    if (
      product.productDetails &&
      Array.isArray(product.productDetails.productPictures)
    ) {
      const imagesArray = product.productDetails.productPictures.map((pic) =>
        generatePublicUrl(pic.img)
      );
      setSelectedImages(imagesArray);
    }
  }, [product.productDetails]);

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
                to={"/receivestate"}
              >
                ขอรับบริจาคของฉัน
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
              แก้ไขสินค้า
            </Link>
          </div>
        </div>
        <div className="sell-product-topic">แก้ไขสินค้าสำหรับการขอรับบริจาค</div>
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
                        src={
                          typeof image === "string"
                            ? image
                            : URL.createObjectURL(image)
                        }
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
                  errorMessage=""
                  onChange={(e) => {
                    setProductName(e.target.value);
                  }}
                />

                <div className="sell-product-content-info-item-input-options">
                  <p className="sell-product-content-info-item-input-options-topic kanit-paragraphtextMedium">เลือกหมวดหมู่</p>
                  <select className="sell-product-content-info-item-input-options-category kanit-paragraphtextMedium" 
                  // onChange={HandleSelect}
                  onChange={(e) => setCategoryId(e.target.value)} >
                    {optionsCategory.map(optionsCategory => (
                      <option key={optionsCategory.value} value={optionsCategory.value}>{optionsCategory.label}</option>
                    ))}
                  </select>
                </div>
                {/* <Input
                  Label="ราคาสินค้า"
                  placeholder="ระบุราคาของสินค้า"
                  value={productPrice}
                  type="text"
                  errorMessage=""
                  onChange={(e) => {
                    setProductPrice(e.target.value);
                  }}
                /> */}
                <Textarea
                  Label="รายละเอียดสินค้า"
                  placeholder="ระบุรายละเอียดของสินค้า"
                  value={productDetail}
                  type="text"
                  errorMessage=""
                  onChange={(e) => {
                    setProductDetail(e.target.value);
                  }}
                />
                {/* <Input
                  Label="ค่าจัดส่ง"
                  placeholder="ระบุค่าจัดส่ง"
                  value={shippingCost}
                  type="text"
                  errorMessage=""
                  onChange={(e) => {
                    setShippingCost(e.target.value);
                  }}
                /> */}
                </Form>
                <div className="sell-product-content-info-item-input-button-group">
                <Link
                  className="btn-small-secondary kanit-paragraphMedium"
                  style={{ textDecoration: "none" }}
                  to="/"
                >
                  ยกเลิก
                </Link>
                {selectedImages.length > 10 ? (
                  <Link
                    className="btn-small-primary-disabled kanit-paragraphMedium w-100"
                    // disabled={true}
                    style={{ textDecoration: "none" }}
                  >
                    รูปภาพเกินกำหนด
                  </Link>
                ) : (
                  <Link
                    className="btn-small-primary kanit-paragraphMedium"
                    // onClick={() => {
                    //   console.log(selectedImages), "ddd";
                    // }}
                    onClick={addProductForm}
                    style={{ textDecoration: "none" }}
                    to="/receivestate"
                  >
                    บันทึก
                  </Link>
                )}
              </div>
          </div>
        </div>
      </div>

      {/* <button
          className="btn-small-primary kanit-paragraphMedium"
          type="submit"
          onClick={addProductForm}
        >
          ลงขาย
        </button> */}
    </Layout>
  );
}

export default EditRequestProduct;
