import React, { useState, useEffect } from "react";
import { useRef } from 'react';
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./index.css";
import "../../../styles.css";
import "../../../components/UI/Button/index.css";

import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidemenu";
import Tabs from "../../../components/UI/Tab";
import Input from "../../../components/UI/Input";

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

  //add address
  const [addAddress, setAddAddress] = useState(false);

  const [addressname, setAddressname] = useState("");
  const [username, setUsername] = useState("");
  const [tel, setTel] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [addressProvince, setAddressProvince] = useState("");
  const [zipcode, setZipcode] = useState("");

  const saveAddress = () => {
    console.log(addressname);
    console.log(username);
    console.log(tel);
    console.log(addressNumber);
    console.log(addressProvince);
    console.log(zipcode);
  };

  //edit address
  const [editAddress, setEditAddress] = useState(false);

  const [editAddressname, setEditressname] = useState("");
  const [editUsername, setEditUsername] = useState("");
  const [editTel, setEditTel] = useState("");
  const [editAddressNumber, setEditAddressNumber] = useState("");
  const [editAddressProvince, setEditAddressProvince] = useState("");
  const [editZipcode, setEditZipcode] = useState("");

  const saveEditAddress = () => {
    console.log(editAddressname);
    console.log(editUsername);
    console.log(editTel);
    console.log(editAddressNumber);
    console.log(editAddressProvince);
    console.log(editZipcode);
  };

  //add payment
  const [addPayment, setAddPayment] = useState(false);

  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [CVV, setCVV] = useState("");
  const [ownCardName, setOwnCardName] = useState("");

  const savePayment = () => {
    console.log(cardNumber);
    console.log(expDate);
    console.log(CVV);
    console.log(ownCardName);
  };

  //add withdraw
  const [addWithdraw, setAddWithdraw] = useState(false);

  const [addBank, setAddBank] = useState("");
  const [addBankName, setAddBankName] = useState("");
  const [addAccountNumber, setAddAccountNumber] = useState("");

  const saveWithdraw = () => {
    console.log(addBank);
    console.log(addBankName);
    console.log(addAccountNumber);
  };

  //scroll
  // const scrollToRef = useRef<HTMLDivElement>(null);

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
            <div className="setting-tab-group">
              <div className="background-data-table">
                <div className="setting-title-add">
                  <p className="kanit-paragraphBig">ที่อยู่จัดส่ง</p>

                  <Link
                    className="add-product-user-page btn-small-link-ghost kanit-paragraphMedium"
                    onClick={() => {
                      setAddAddress(true)
                    }}
                  >
                    <img src={add} className="add-icon"></img>
                    เพิ่มที่อยู่
                  </Link>
                  {/* <Link
                    className="add-product-user-page btn-small-link-ghost kanit-paragraphMedium"
                    onClick={() => {
                      setAddAddress(true),
                      scrollToRef.current?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <img src={add} className="add-icon"></img>
                    เพิ่มที่อยู่
                  </Link> */}
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
              {addAddress && (
                <div className="setting-add-address">
                {/* <div ref={scrollToRef} className="setting-add-address"> */}
                  <div className="setting-add-address-title kanit-paragraphBig">
                    ที่อยู่ใหม่
                  </div>
                  <div className="setting-add-address-form">
                    <Form>
                      <Row className="setting-add-address-form-row">
                        <Col>
                          <Input
                            className=""
                            placeholder="ชื่อที่อยู่"
                            value={addressname}
                            type="text"
                            errorMessage=""
                            onChange={(e) => {
                              setAddressname(e.target.value);
                            }}
                          />
                        </Col>
                        <Col>
                          <Input
                            className=""
                            placeholder="ชื่อ นามสกุล"
                            value={username}
                            type="text"
                            errorMessage=""
                            onChange={(e) => {
                              setUsername(e.target.value);
                            }}
                          />
                        </Col>
                        <Col>
                          <Input
                            className=""
                            placeholder="เบอร์โทร"
                            value={tel}
                            type="number"
                            errorMessage=""
                            onChange={(e) => {
                              setTel(e.target.value);
                            }}
                          />
                        </Col>
                      </Row>
                      <Input
                        className=""
                        placeholder="บ้านเลขที่ ซอย หมู่"
                        value={addressNumber}
                        type="number"
                        errorMessage=""
                        onChange={(e) => {
                          setAddressNumber(e.target.value);
                        }}
                      />
                      <Row className="setting-add-address-form-row">
                        <Col>
                          <Input
                            className=""
                            placeholder="ตำบล อำเภอ จังหวัด"
                            value={addressProvince}
                            type="text"
                            errorMessage=""
                            onChange={(e) => {
                              setAddressProvince(e.target.value);
                            }}
                          />
                        </Col>
                        <Col>
                          <Input
                            className=""
                            placeholder="รหัสไปรษณีย์"
                            value={zipcode}
                            type="number"
                            errorMessage=""
                            onChange={(e) => {
                              setZipcode(e.target.value);
                            }}
                          />
                        </Col>
                      </Row>
                    </Form>
                  </div>
                  <div className="setting-add-address-button">
                    <button
                      className="btn-small-secondary kanit-paragraphMedium"
                      type="submit"
                      onClick={() => setAddAddress(false)}
                    >
                      ยกเลิก
                    </button>
                    <button
                      className="btn-small-primary kanit-paragraphMedium"
                      type="submit"
                      onClick={saveAddress}
                    >
                      บันทึก
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={tab === 2 ? "active-content" : "content"}>
            <div className="setting-tab-group">
              <div className="background-data-table">
                <div className="setting-title-add">
                  <p className="kanit-paragraphBig">บัตรเครดิต/บัตรเดบิต/บัญชีธนาคาร</p>
                  <Link
                    className="add-product-user-page btn-small-link-ghost kanit-paragraphMedium"
                    onClick={() => setAddPayment(true)}
                  >
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
                        <button className="f-btn btn-small-primary kanit-paragraphMedium">
                          แก้ไข
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
              {addPayment && (
                <div className="setting-add-address">
                  <div className="setting-add-address-title kanit-paragraphBig">
                    เพิ่มบัตร
                  </div>
                  <div className="setting-add-address-form">
                    <Form>
                      <Input
                        className=""
                        placeholder="หมายเลขบัตร"
                        value={cardNumber}
                        type="number"
                        errorMessage=""
                        onChange={(e) => {
                          setCardNumber(e.target.value);
                        }}
                      />
                      <Row className="setting-add-address-form-row">
                        <Col>
                          <Input
                            className=""
                            placeholder="วันหมดอายุ (ดด/ปป)"
                            value={expDate}
                            type="text"
                            errorMessage=""
                            onChange={(e) => {
                              setExpDate(e.target.value);
                            }}
                          />
                        </Col>
                        <Col>
                          <Input
                            className=""
                            placeholder="CVV"
                            value={CVV}
                            type="number"
                            errorMessage=""
                            onChange={(e) => {
                              setCVV(e.target.value);
                            }}
                          />
                        </Col>
                      </Row>
                      <Input
                        className=""
                        placeholder="ชื่อเจ้าของบัตร"
                        value={ownCardName}
                        type="text"
                        errorMessage=""
                        onChange={(e) => {
                          setOwnCardName(e.target.value);
                        }}
                      />
                    </Form>
                  </div>
                  <div className="setting-add-address-button">
                    <button
                      className="btn-small-secondary kanit-paragraphMedium"
                      type="submit"
                      onClick={() => setAddPayment(false)}
                    >
                      ยกเลิก
                    </button>
                    <button
                      className="btn-small-primary kanit-paragraphMedium"
                      type="submit"
                      onClick={savePayment}
                    >
                      บันทึก
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={tab === 3 ? "active-content" : "content"}>
            <div className="setting-tab-group">
              <div className="background-data-table">
                <div className="setting-title-add">
                  <p className="kanit-paragraphBig">บัญชีธนาคาร</p>

                  <Link
                    className="add-product-user-page btn-small-link-ghost kanit-paragraphMedium"
                    onClick={() => setAddWithdraw(true)}
                  >
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
                          <button className="f-btn btn-small-primary kanit-paragraphMedium">
                            แก้ไข
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
              {/* here */}
              {addWithdraw && (
                <div className="setting-add-address">
                  <div className="setting-add-address-title kanit-paragraphBig">
                    เพิ่มบัญชีธนาคาร
                  </div>
                  <div className="setting-add-address-form">
                    <Form>
                      <Row className="setting-add-address-form-row">
                        <Input
                          className=""
                          placeholder="ธนาคาร"
                          value={addBank}
                          type="text"
                          errorMessage=""
                          onChange={(e) => {
                            setAddBank(e.target.value);
                          }}
                        />
                      </Row>
                      <Input
                        className=""
                        placeholder="ชื่อ"
                        value={addBankName}
                        type="text"
                        errorMessage=""
                        onChange={(e) => {
                          setAddBankName(e.target.value);
                        }}
                      />
                      <Row className="setting-add-address-form-row">
                        <Input
                          className=""
                          placeholder="หมายเลขบัญชีธนาคาร"
                          value={addAccountNumber}
                          type="text"
                          errorMessage=""
                          onChange={(e) => {
                            setAddAccountNumber(e.target.value);
                          }}
                        />
                      </Row>
                    </Form>
                  </div>
                  <div className="setting-add-address-button">
                    <button
                      className="btn-small-secondary kanit-paragraphMedium"
                      type="submit"
                      onClick={() => setAddWithdraw(false)}
                    >
                      ยกเลิก
                    </button>
                    <button
                      className="btn-small-primary kanit-paragraphMedium"
                      type="submit"
                      onClick={saveWithdraw}
                    >
                      บันทึก
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default setting;
