import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./index.css";
import "../../../styles.css";
import "../../../components/UI/Button/index.css";

import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidemenu";
import Tabs from "../../../components/UI/Tab";

import add from "../../../icon/add.png";
import masterCard from "../../../../public/images/mastercard.jpg";
import visa from "../../../../public/images/visa.jpg";
import kbank from "../../../../public/images/kbank.png";
import ttb from "../../../../public/images/ttb.jpg";

const tabItems = [
  { label: "ที่อยู่จัดส่ง", value: 1 },
  { label: "วิธีการจ่ายเงิน", value: 2 },
  { label: "ถอนเงิน", value: 3 },
];

const addresses = [
  {
    name: "นายคเณศ บุญศิริ",
    phone: "0981597450",
    address: "คอนโดสวนธน ซอยพุทธบูชา 47 กรุงเทพมหานคร 10140",
  },
  {
    name: "นายพุฒิพงศ์ แซ่ลู่",
    phone: "0831464895",
    address: "Mixue ซอยพุทธบูชา 45 กรุงเทพมหานคร 10140",
  },
];

const paymentMethods = [
  {
    img: masterCard,
    cardName: "Master card",
    cardId: "1234 5678 9101 1121",
  },
  {
    img: visa,
    cardName: "Visa",
    cardId: "1234 5678 9101 1121",
  },
  {
    img: kbank,
    cardName: "ธนาคารกสิกรไทย",
    cardId: "1234 5678 9101 1121",
  },
];

const bankAccounts = [
  {
    img: kbank,
    bankName: "ธนาคารกสิกรไทย",
    accountName: "1234 5678 9101 1121",
  },
  {
    img: ttb,
    bankName: "ธนาคารทหารไทย",
    accountName: "1234 5678 9101 1121",
  },
];

// fillter ใน backend
function setting() {
  //set Tab
  const [tab, setTab] = useState(1);

  const toggleTab = (index) => {
    setTab(index);
  };

  //set Address
  const [selectedAddress, setSelectedAddress] = useState(null);

  const toggleSelectAddress = (index) => {
    setSelectedAddress((prevSelectedAddress) => {
      if (addresses.length === 1) {
        return prevSelectedAddress !== null ? prevSelectedAddress : 0;
      }
      return prevSelectedAddress === index ? null : index;
    });
  };

  //set Payment
  const [selectedPayment, setSelectedPayment] = useState(null);

  const toggleSelectPayment = (index) => {
    setSelectedPayment((prevSelectedPayment) => {
      if (paymentMethods.length === 1) {
        return prevSelectedPayment !== null ? prevSelectedPayment : 0;
      }
      return prevSelectedPayment === index ? null : index;
    });
  };

  //set Bank
  const [selectedBank, setSelectedBank] = useState(null);

  const toggleSelectBank = (index) => {
    setSelectedBank((prevSelectedBank) => {
      if (bankAccounts.length === 1) {
        return prevSelectedBank !== null ? prevSelectedBank : 0;
      }
      return prevSelectedBank === index ? null : index;
    });
  };

  useEffect(() => {
    // console.log("Current Tab:", tab);
    // console.log("Toggle Tab Clicked!");
    // console.log("Selected Address:", selectedAddress);
    if (addresses.length > 0 && selectedAddress === null) {
      setSelectedAddress(0);
    }

    if (paymentMethods.length > 0 && selectedPayment === null) {
      setSelectedPayment(0);
    }

    if (bankAccounts.length > 0 && selectedBank === null) {
      setSelectedBank(0);
    }
  }, [tab, selectedAddress, selectedPayment, selectedBank]);

  return (
    <Layout>
      <div className="user-page">
        <Sidebar />
        <div className="user-content">
          <div className="buy-page-title kanit-Display-Large">
            การขอรับบริจาคของฉัน
          </div>

          <Tabs
            tabMenu={tabItems}
            active={tab}
            onClick={(selectrdTab) => toggleTab(selectrdTab)}
          ></Tabs>

          <div className={tab === 1 ? "active-content" : "content"}>
            <div className="background-data-table">
              <div className="setting-title-add">
                <p className="kanit-paragraphBig">ที่อยู่จัดส่ง</p>

                <Link className="add-product-user-page btn-small-link-ghost kanit-paragraphMedium">
                  <img src={add} className="add-icon"></img>
                  เพิ่มที่อยู่
                </Link>
              </div>

              <div className="my-address">
                {addresses.map((address, index) => (
                  <div
                    className={`address-item ${
                      selectedAddress === index ? "select" : ""
                    }`}
                    key={index}
                  >
                    <div className="text-address kanit-paragraphtextMedium">
                      <p>
                        {address.name} {address.phone}
                      </p>
                      <p>{address.address}</p>
                    </div>

                    <div className="btn-setting-address-group">
                      <button className="f-btn btn-small-primary kanit-paragraphMedium">
                        แก้ไข
                      </button>
                      <button
                        className={`s-btn ${
                          selectedAddress === index
                            ? "btn-small-secondary-disabled"
                            : "btn-small-secondary"
                        } kanit-paragraphMedium`}
                        onClick={() => toggleSelectAddress(index)}
                      >
                        ตั้งเป็นค่าเริ่มต้น
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={tab === 2 ? "active-content" : "content"}>
            <div className="background-data-table">
              <div className="setting-title-add">
                <p className="kanit-paragraphBig">บัตรเครดิต/บัตรเดบิต</p>

                <Link className="add-product-user-page btn-small-link-ghost kanit-paragraphMedium">
                  <img src={add} className="add-icon"></img>
                  เพิ่มบัตร/บัญชี
                </Link>
              </div>

              <div className="my-address">
                {paymentMethods.map((payment, index) => (
                  <div
                    className={`address-item ${
                      selectedPayment === index ? "select" : ""
                    }`}
                    key={index}
                  >
                    <div className="text-address kanit-paragraphMedium">
                      <div className="img-card-cardid">
                        <img src={payment.img} className="card-pic"></img>
                        <div className="card-name">{payment.cardName}</div>
                        <div className="card-id">{payment.cardId}</div>
                      </div>
                    </div>

                    <div className="btn-setting-address-group">
                      <button className="d-btn kanit-paragraphMedium btn-small-link-ghost">
                        ลบ
                      </button>
                      <button
                        className={`s-btn ${
                          selectedPayment === index
                            ? "btn-small-secondary-disabled"
                            : "btn-small-secondary"
                        } kanit-paragraphMedium`}
                        onClick={() => toggleSelectPayment(index)}
                      >
                        ตั้งเป็นค่าเริ่มต้น
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={tab === 3 ? "active-content" : "content"}>
            <div className="background-data-table">
              <div className="setting-title-add">
                <p className="kanit-paragraphBig">บัญชีธนาคาร</p>

                <Link className="add-product-user-page btn-small-link-ghost kanit-paragraphMedium">
                  <img src={add} className="add-icon"></img>
                  เพิ่มบัญชีธนาคาร
                </Link>
              </div>

              <div className="my-address">
                <div className="my-address">
                  {bankAccounts.map((bank, index) => (
                    <div
                      className={`address-item ${
                        selectedBank === index ? "select" : ""
                      }`}
                      key={index}
                    >
                      <div className="text-address kanit-paragraphMedium">
                        <div className="img-card-cardid">
                          <img src={bank.img} className="card-pic"></img>
                          <div className="card-name">{bank.bankName}</div>
                          <div className="card-id">{bank.accountName}</div>
                        </div>
                      </div>

                      <div className="btn-setting-address-group">
                        <button className="d-btn kanit-paragraphMedium btn-small-link-ghost">
                          ลบ
                        </button>
                        <button
                          className={`s-btn ${
                            selectedBank === index
                              ? "btn-small-secondary-disabled"
                              : "btn-small-secondary"
                          } kanit-paragraphMedium`}
                          onClick={() => toggleSelectBank(index)}
                        >
                          ตั้งเป็นค่าเริ่มต้น
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default setting;
