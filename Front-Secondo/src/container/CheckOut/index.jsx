import React from "react";
import { NavLink, Link, Navigate } from "react-router-dom";

import { useState, useEffect } from "react";

import ModalS from "../../components/Modal/success";
import Layout from "../../components/Layout";
import success from "../../icon/success-check.png";
import CheckoutCreditCard from "../../components/CheckoutCreditCard";

import chevronRight from "../../icon/chevron-right-red.png";
import chevronRightD from "../../icon/chevron-right.png";

import "./index.css";
import { useSelector } from "react-redux";
import { generatePublicUrl } from "../../urlConfig";


let productDetails = [
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
    createBy: {
      firstName: "ฟ"
    }
  },
];


let Address = [
  {
    id:"1",
    label: "111"
  }
]

function checkOut() {

  //state 
  const product = useSelector((state) => state.product);
  // if(product.productDetails.length == 0){
  //   <Navigate to="/signin" />
  // }
  productDetails = product.productDetails ? product.productDetails : <Navigate to="/signin" />;

  const renderAddress = (addresses) => {
    let myAddresses = [];
    if (addresses && Array.isArray(addresses)) {
      for (let address of addresses) {
        myAddresses.push({
          id: address._id,
          label: address.address_name + " " + address.houseaddress,
          // addressName: "",
          // phone: address.tel,
          // address:
            // address.houseaddress + address.sub_district + address.district,
          // address: address.houseaddress,
          // subDistrict: address.sub_district,
          // district: address.district,
          // province: address.province,
          // zip: address.zipcode,
        });
      }
      return myAddresses;
    }
  };
  const user = useSelector((state) => state.user);
  Address = user.addresses.address ? renderAddress(user.addresses.address) : [];
  // console.log(Address)

  //Modal
  const [openModel, setOpenModel] = useState(false);

  const [value, setValue] = useState("");
  const [addressOption, setAddressOption] = useState([Address]);

  const [deliveryOption, setDeliveryOption] = useState([
    {
      value: "4",
      label: "ส่งแบบมาตรฐาน",
    },
    {
      value: "5",
      label: "ส่งด่วน",
    },
  ]);

  const [paymentOption, setPaymentOption] = useState([
    {
      value: "6",
      label: "Master Card ending 1123",
    },
    {
      value: "7",
      label: "Master Card ending 3968",
    },
  ]);

  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedDelivery, setSelectedDelivery] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");
  const handleAddressChange = (event) => {
    setSelectedAddress(event.target.value);
    // console.log(selectedAddress)
  };

  const handleDeliveryChange = (event) => {
    setSelectedDelivery(event.target.value);
  };

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  const [visibleAddress, setVisibleAddress] = useState(false);
  const [visibleDev, setVisibleDev] = useState(false);
  const [visiblePayment, setVisiblePayment] = useState(false);

  // console.log(omiseCard);

  return (
    <Layout>
      <div className="background-checkout-page">
        <div className="checkout-page-topic">
          <div className="checkout-page-topic-text kanit-Display-Large">
            ยืนยันการชำระเงินสำหรับการซื้อ
          </div>
        </div>
        <div className="checkout-page-content">
          <div className="checkout-page-content-method">
            <div className="checkout-page-content-method-address">
              <div className="checkout-page-content-method-address-group">
                <div className="checkout-page-content-method-address-group-detail">
                  <div className="checkout-page-content-method-address-group-detail-number">
                    1
                  </div>
                  <div className="checkout-page-content-method-address-group-detail-group">
                    <div className="checkout-page-content-method-address-group-detail-group-topic kanit-paragraphMedium">
                      ข้อมูลการจัดส่ง
                    </div>
                    <div className="checkout-page-content-method-address-group-detail-group-desc kanit-paragraphSmall">
                      {selectedAddress
                        ? addressOption.find(
                            (address) => address.label === selectedAddress
                          )?.label
                        : "ที่อยู่จัดส่ง"}
                    </div>
                  </div>
                </div>
                <div className="checkout-page-content-method-address-group-edit">
                  {addressOption.length === 0 ? (
                    <Link
                      style={{ textDecoration: "none" }}
                      className="checkout-page-content-method-address-group-add kanit-paragraphtextMedium"
                      to="/setting"
                    >
                      กรุณาเพิ่มที่อยู่การจัดส่ง
                      <img className="check-out-icon" src={chevronRight} />
                    </Link>
                  ) : (
                    <Link
                      style={{ textDecoration: "none" }}
                      to=""
                      className="checkout-page-content-method-address-group-edit-text kanit-paragraphtextMedium"
                      onClick={() => setVisibleAddress(true)}
                    >
                      แก้ไข
                      <img className="check-out-icon" src={chevronRightD} />
                    </Link>
                  )}
                </div>
              </div>
              {visibleAddress && (
                <div className="checkout-page-content-method-hide">
                  <div className="checkout-page-content-method-hide-option-header kanit-paragraphSmall">
                    การจัดส่ง
                  </div>
                  {addressOption.map((address) => (
                    <div
                      className="checkout-page-content-method-hide-option-choices kanit-paragraphtextMedium"
                      key={address.value}
                    >
                      <input
                        name="addressMethod"
                        type="radio"
                        value={address.label}
                        id={address.value}
                        checked={selectedAddress === address.label}
                        // onChange={(e) => setValue(e.target.value)}
                        onChange={handleAddressChange}
                        onClick={() => setVisibleAddress(false)}
                      />
                      <label htmlFor={address.label}>{address.label}</label>
                    </div>
                  ))}
                </div>
              )}
              <div className="checkout-page-content-method-address-line-frame">
                <div className="checkout-page-content-method-address-line"></div>
              </div>
            </div>

            <div className="checkout-page-content-method-address">
              <div className="checkout-page-content-method-address-group">
                <div className="checkout-page-content-method-address-group-detail">
                  <div className="checkout-page-content-method-address-group-detail-number">
                    2
                  </div>
                  <div className="checkout-page-content-method-address-group-detail-group">
                    <div className="checkout-page-content-method-address-group-detail-group-topic kanit-paragraphMedium">
                      วิธีการจัดส่ง
                    </div>
                    <div className="checkout-page-content-method-address-group-detail-group-desc kanit-paragraphSmall">
                      {selectedDelivery
                        ? deliveryOption.find(
                            (deliver) => deliver.label === selectedDelivery
                          )?.label
                        : "วิธีการจัดส่ง"}
                    </div>
                  </div>
                </div>
                <div className="checkout-page-content-method-address-group-edit">
                  <Link
                    style={{ textDecoration: "none" }}
                    className="checkout-page-content-method-address-group-edit-text kanit-paragraphtextMedium"
                    onClick={() => setVisibleDev(true)}
                  >
                    แก้ไข
                    <img className="check-out-icon" src={chevronRightD} />
                  </Link>
                </div>
              </div>
              {visibleDev && (
                <div className="checkout-page-content-method-hide">
                  <div className="checkout-page-content-method-hide-option-header kanit-paragraphSmall">
                    การจัดส่ง
                  </div>
                  {deliveryOption.map((delivery) => (
                    <div
                      className="checkout-page-content-method-hide-option-choices kanit-paragraphtextMedium"
                      key={delivery.value}
                    >
                      <input
                        name="deliveryMethod"
                        type="radio"
                        value={delivery.label}
                        id={delivery.value}
                        checked={selectedDelivery === delivery.label}
                        // onChange={(e) => setValue(e.target.value)}
                        onChange={handleDeliveryChange}
                        onClick={() => setVisibleDev(false)}
                      />
                      <label htmlFor={delivery.label}>{delivery.label}</label>
                    </div>
                  ))}
                </div>
              )}
              <div className="checkout-page-content-method-address-line-frame">
                <div className="checkout-page-content-method-address-line"></div>
              </div>
            </div>

            <div className="checkout-page-content-method-address">
              <div className="checkout-page-content-method-address-group">
                <div className="checkout-page-content-method-address-group-detail">
                  <div className="checkout-page-content-method-address-group-detail-number">
                    3
                  </div>
                  <div className="checkout-page-content-method-address-group-detail-group">
                    <div className="checkout-page-content-method-address-group-detail-group-topic kanit-paragraphMedium">
                      วิธีการชำระเงิน
                    </div>
                    <div className="checkout-page-content-method-address-group-detail-group-desc kanit-paragraphSmall">
                      {selectedPayment
                        ? paymentOption.find(
                            (payment) => payment.label === selectedPayment
                          )?.label
                        : "วิธีการชำระเงิน"}
                    </div>
                  </div>
                </div>
                <div className="checkout-page-content-method-address-group-edit">
                  {paymentOption.length === 0 ? (
                    <Link
                      style={{ textDecoration: "none" }}
                      className="checkout-page-content-method-address-group-add kanit-paragraphtextMedium"
                      to="/setting"
                    >
                      กรุณาเพิ่มวิธีชำระเงิน
                      <img className="check-out-icon" src={chevronRight} />
                    </Link>
                  ) : (
                    <Link
                      style={{ textDecoration: "none" }}
                      className="checkout-page-content-method-address-group-edit-text kanit-paragraphtextMedium"
                      onClick={() => setVisiblePayment(true)}
                    >
                      แก้ไข
                      <img className="check-out-icon" src={chevronRightD} />
                    </Link>
                  )}
                </div>
              </div>
              {visiblePayment && (
                <div className="checkout-page-content-method-hide">
                  <div className="checkout-page-content-method-hide-option-header kanit-paragraphSmall">
                    การจัดส่ง
                  </div>
                  {paymentOption.map((payment) => (
                    <div
                      className="checkout-page-content-method-hide-option-choices kanit-paragraphtextMedium"
                      key={payment.value}
                    >
                      <input
                        name="paymentMethod"
                        type="radio"
                        value={payment.label}
                        id={payment.value}
                        checked={selectedPayment === payment.label}
                        // onChange={(e) => setValue(e.target.value)}
                        onChange={handlePaymentChange}
                        onClick={() => setVisiblePayment(false)}
                      />
                      <label htmlFor={payment.label}>{payment.label}</label>
                    </div>
                  ))}
                </div>
              )}
              <div className="checkout-page-content-method-address-line-frame">
                <div className="checkout-page-content-method-address-line"></div>
              </div>
            </div>
          </div>

          <div className="checkout-page-content-order">
            <div className="checkout-page-content-order-topic kanit-Display-Medium-R">
              Order Summary
            </div>
            <div className="checkout-page-content-order-item">
              <div className="checkout-page-content-order-item-group-image-details">
                <div className="checkout-page-content-order-item-image">
                  <img
                    className="checkout-page-content-order-item-image-small"
                    // src="https://www.tescophoto.com/media/catalog/product/cache/a2112a15e5165072db3b22495c91a3ca/9/3/9320.png"
                    src={productDetails.productPictures && productDetails.productPictures.length > 0 ? generatePublicUrl(productDetails.productPictures[0].img ) : "https://www.tescophoto.com/media/catalog/product/cache/a2112a15e5165072db3b22495c91a3ca/9/3/9320.png"} alt=""
                  />
                </div>
                <div className="checkout-page-content-order-item-details">
                  <div className="checkout-page-content-order-item-details-name-item kanit-paragraphSmall">
                    {/* เสื้อ COTTON แบรนด์ญี่ปุ่น */}
                    {productDetails.name}
                  </div>
                  <div className="checkout-page-content-order-item-details-name-seller kanit-paragraphVerySmall">
                    {/* Mungkud */}
                    {productDetails.createBy.firstName}
                  </div>
                </div>
              </div>

              <div className="checkout-page-content-order-item-price kanit-paragraphSmall">
                {/* 129 บาท */}
                {productDetails.price} บาท
              </div>
            </div>
            <div className="checkout-page-content-order-item-line-out">
              <div className="checkout-page-content-order-item-line-in"></div>
            </div>
            <div className="checkout-page-content-order-price">
              <div className="checkout-page-content-order-price-item">
                <div className="checkout-page-content-order-price-item-topic kanit-paragraphSmall">
                  ค่าสินค้า
                </div>
                <div className="checkout-page-content-order-price-item-price kanit-paragraphSmall">
                  {/* 129 บาท */}
                  {productDetails.price} บาท
                </div>
              </div>
              <div className="checkout-page-content-order-price-deliver">
                <div className="checkout-page-content-order-price-deliver-topic kanit-paragraphSmall">
                  ค่าขนส่ง
                </div>
                <div className="checkout-page-content-order-price-deliver-price kanit-paragraphSmall">
                  {/* 50 บาท */}
                  {productDetails.shippingCost} บาท
                </div>
              </div>
              <div className="checkout-page-content-order-price-total">
                <div className="checkout-page-content-order-price-total-topic kanit-Display-Small">
                  รวม
                </div>
                <div className="checkout-page-content-order-price-total-price kanit-Display-Small">
                  {productDetails.price + productDetails.shippingCost} บาท
                </div>
              </div>
            </div>
            {/* <button
              className="btn-small-primary kanit-paragraphMedium"
              onClick={() => setOpenModel(true)}
            >
              ชำระเงิน
            </button> */}

            <CheckoutCreditCard 
              label="ชำระเงิน"
              address = {selectedAddress}
            />
          </div>
        </div>
        <ModalS
          label="ชำระเงินสำเร็จ"
          desc="ชำระเงินเข้าสู่ระบบแล้ว"
          img={success}
          open={openModel}
        />
      </div>
    </Layout>
  );
}

export default checkOut;
