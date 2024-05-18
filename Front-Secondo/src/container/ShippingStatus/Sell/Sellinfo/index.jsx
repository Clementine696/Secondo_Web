import React, { useState, useEffect, useRef } from "react";
import Layout from "../../../../components/Layout";
import StatusCheck from "../../../../components/UI/ShippingCheck";
import NextStep from "../../../../components/UI/NextStep";
import { Link, useLocation } from "react-router-dom";
import ModalSellerTag from "../../../../components/Modal/SellerTag";

import "../../index.css";
import "../../../../components/UI/Button/index.css";
import {
  getBuyerProductDetailsById,
  getSellerProductDetailsById,
} from "../../../../actions";
import shippingIcon from "../../../../icon/shipping.png";

import { useDispatch, useSelector } from "react-redux";
import { generatePublicUrl } from "../../../../urlConfig";

let shipping = [
  {
    status: true,
    num: "1",
    title: "สินค้าได้รับการสั่งซื้อ",
    desc: "สินค้าของคุณถูกสั่งซื้อแล้ว",
    date: "11 พ.ย. 2566",
    time: "21:25",
  },
  {
    status: true,
    num: "2",
    title: "กำลังเตรียมพัสดุ",
    desc: "ผู้ส่งได้เตรียมพัสดุ",
    date: "11 พ.ย. 2566",
    time: "21:25",
  },
  {
    status: false,
    num: "3",
    title: "บริษัทขนส่งเข้ารับพัสดุเรียบร้อยแล้ว",
    desc: "บริษัทขนส่งได้รับพัสดุแล้ว",
    date: "",
    time: "",
  },
  {
    status: false,
    num: "4",
    title: "อยู่ระหว่างขนส่ง",
    desc: "บริษัทขนส่งได้ส่งของเรียบร้อย",
    date: "",
    time: "",
  },
  {
    status: false,
    num: "5",
    title: "การจัดส่งสำเร็จ",
    desc: "ส่งของสำเร็จ",
    date: "",
    time: "",
  },
];

function Buyinfo() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  const location = useLocation();
  const productId = location.pathname.split("/")[4];

  const [sellerTag, setSellerTag] = useState(false);
  // console.log(productId)

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

    dispatch(getSellerProductDetailsById(payload));
  }, []);

  // const productDetails = product.productDetails;
  // console.log(productDetails)

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

  const [frameSmallImgs, setFrameSmallImgs] = useState("");
  const [selectedImg, setSelectedImg] = useState("");
  const [sellerImage, setSellerImage] = useState("");

  useEffect(() => {
    if (product.productDetails.productPictures != null) {
      setSelectedImg(product.productDetails.productPictures[0].img);
      setSellerImage(product.productDetails.createBy.profilePicture);
    }
  }, [product.productDetails]);

  const handleImgClick = (img) => {
    setSelectedImg(img);
    setFrameSmallImgs(img);
  };

  return (
    <Layout>
      <div className="shipping-bg-page">
        <div className="kanit-Display-Medium-R">ข้อมูลการขายสินค้า</div>
        <div className="shipping-content">
          <div className="shipping-left-content">
            <div className="product-page-item-details-group-picture-seller">
              <div className="product-page-item-details-group-picture-seller-big-picture">
                <img
                  className="big-img" //TODO:
                  // src={product.productDetails.productPictures ? generatePublicUrl(product.productDetails.productPictures[0].img) : ""}
                  // src={product.productDetails.productPictures ? generatePublicUrl(selectedImg) : ""}
                  src={selectedImg ? generatePublicUrl(selectedImg) : ""}
                />
              </div>

              <div className="product-page-item-details-group-picture-seller-small-picture">
                <div className="small-img-container">
                  {image_list.map((img, index) => (
                    <div key={index} className="col-small-pic">
                      <img
                        className={`small-img-product ${
                          frameSmallImgs === img ? "selected" : ""
                        }`}
                        src={
                          product.productDetails.productPictures
                            ? generatePublicUrl(img)
                            : ""
                        }
                        onClick={() => handleImgClick(img)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="shipping-button-group">
              <div className="group-button-1">
                <button
                  className="btn-small-primary kanit-paragraphMedium"
                  onClick={() => setSellerTag(true)}
                >
                  ส่งสินค้า
                </button>
                <button className="btn-small-secondary kanit-paragraphMedium">
                  ติดต่อผู้ซื้อ
                </button>
              </div>

              <div className="group-button-2">
                <button className="btn-small-secondary kanit-paragraphMedium">
                  ขอขยายระยะเวลาการจัดส่ง
                </button>
              </div>
            </div>
          </div>
          <div className="shipping-right-content">
            <div className="shipping-order-seller-details">
              <div className="shipping-seller">
                <div className="shipping-seller-profile-name">
                  <div className="shipping-seller-profile">
                    <img
                      className="seller-profile-pic"
                      // src={test}
                    />
                  </div>
                  <p className="kanit-paragraphMedium">
                    {product.productDetails && product.productDetails.createBy
                      ? product.productDetails.createBy.firstName
                      : null}
                  </p>
                </div>

                <div className="shipping-status">
                  <p className="kanit-H3">ที่ต้องจัดส่ง</p>
                </div>
              </div>
              <div className="shipping-order kanit-paragraphSmall">
                <p>Order ID</p>
                {/* <p>{product.productDetails.description}</p> */}
              </div>
            </div>

            <div className="shipping-product-detail-bg">
              <p className="kanit-paragraphSmall">
                {product.productDetails.name}
              </p>
              <div className="outline">
                <div className="inline"></div>
              </div>

              <div className="shipping-very-detail kanit-paragraphSmall">
                {product.productDetails.description}
              </div>

              <div className="outline">
                <div className="inline"></div>
              </div>
              <div className="product-price">
                <p className="kanit-paragraphSmall">ราคาสินค้า</p>
                <p className="kanit-valueList">
                  {product.productDetails.price}
                </p>
              </div>
              <div className="ship-price">
                <p className="kanit-paragraphSmall">ค่าจัดส่ง</p>
                <p className="kanit-valueList">
                  {product.productDetails.shippingCost}
                </p>
              </div>
              <div className="totla-product-ship-price">
                <p className="kanit-paragraphSmall">ยอดรวมสุทธิ</p>
                <p className="kanit-valueList">
                  {product.productDetails.price +
                    product.productDetails.shippingCost}
                </p>
              </div>
            </div>

            <div className="sell-status-bg">
              <div className="sell-status-title">
                <p className="kanit-paragraphBig">สถานะการขายสินค้า</p>
              </div>

              <div className="outline">
                <div className="inline"></div>
              </div>
              <div className="shipping-status-sender">
                {shipping.map((item, index) => (
                  <React.Fragment key={index}>
                    <StatusCheck
                      status={item.status}
                      title={item.title}
                      num={item.num}
                      desc={item.desc}
                      date={item.date}
                      time={item.time}
                    />
                    {index !== shipping.length - 1 && <NextStep />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalSellerTag
        img={shippingIcon}
        open={sellerTag}
        onClose={() => setSellerTag(false)}
      />
    </Layout>
  );
}

export default Buyinfo;