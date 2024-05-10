import React from "react";
import { NavLink, Link } from "react-router-dom";

import { useState, useEffect } from "react";

import ModalS from "../../components/Modal/success";
import Layout from "../../components/Layout";
import success from "../../icon/success-check.png";
import CheckoutCreditCard from "../../components/CheckoutCreditCard";

import chevronRight from "../../icon/chevron-right-red.png";
import chevronRightD from "../../icon/chevron-right.png";

import "./index.css";

function checkOut() {
  //Modal
  const [openModel, setOpenModel] = useState(false);

  const [value, setValue] = useState("");
  const [addressOption, setAddressOption] = useState([
    {
      value: "1",
      label: "บ้านคเณศ",
    },
    {
      value: "2",
      label: "บ้านพุฒิพงศ์",
    },
    {
      value: "3",
      label: "บ้านฐิติพงศ์",
    },
  ]);

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
                            (address) => address.value === selectedAddress
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
                        value={address.value}
                        id={address.value}
                        checked={selectedAddress === address.value}
                        // onChange={(e) => setValue(e.target.value)}
                        onChange={handleAddressChange}
                        onClick={() => setVisibleAddress(false)}
                      />
                      <label htmlFor={address.value}>{address.label}</label>
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
                            (deliver) => deliver.value === selectedDelivery
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
                        value={delivery.value}
                        id={delivery.value}
                        checked={selectedDelivery === delivery.value}
                        // onChange={(e) => setValue(e.target.value)}
                        onChange={handleDeliveryChange}
                        onClick={() => setVisibleDev(false)}
                      />
                      <label htmlFor={delivery.value}>{delivery.label}</label>
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
                            (payment) => payment.value === selectedPayment
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
                        value={payment.value}
                        id={payment.value}
                        checked={selectedPayment === payment.value}
                        // onChange={(e) => setValue(e.target.value)}
                        onChange={handlePaymentChange}
                        onClick={() => setVisiblePayment(false)}
                      />
                      <label htmlFor={payment.value}>{payment.label}</label>
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
                    src="https://www.tescophoto.com/media/catalog/product/cache/a2112a15e5165072db3b22495c91a3ca/9/3/9320.png"
                  />
                </div>
                <div className="checkout-page-content-order-item-details">
                  <div className="checkout-page-content-order-item-details-name-item kanit-paragraphSmall">
                    เสื้อ COTTON แบรนด์ญี่ปุ่น
                  </div>
                  <div className="checkout-page-content-order-item-details-name-seller kanit-paragraphVerySmall">
                    Mungkud
                  </div>
                </div>
              </div>

              <div className="checkout-page-content-order-item-price kanit-paragraphSmall">
                129 บาท
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
                  129 บาท
                </div>
              </div>
              <div className="checkout-page-content-order-price-deliver">
                <div className="checkout-page-content-order-price-deliver-topic kanit-paragraphSmall">
                  ค่าขนส่ง
                </div>
                <div className="checkout-page-content-order-price-deliver-price kanit-paragraphSmall">
                  50 บาท
                </div>
              </div>
              <div className="checkout-page-content-order-price-total">
                <div className="checkout-page-content-order-price-total-topic kanit-Display-Small">
                  รวม
                </div>
                <div className="checkout-page-content-order-price-total-price kanit-Display-Small">
                  179 บาท
                </div>
              </div>
            </div>
            {/* <button
              className="btn-small-primary kanit-paragraphMedium"
              onClick={() => setOpenModel(true)}
            >
              ชำระเงิน
            </button> */}

            <CheckoutCreditCard label="ชำระเงิน" />
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
