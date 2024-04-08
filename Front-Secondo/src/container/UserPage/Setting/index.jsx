import React, { useState, useEffect, useRef } from "react";
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

const Address = [
  {
    id: "0",
    name: "นายคเณศ บุญศิริ",
    addressName: "",
    phone: "0981597450",
    address: "คอนโดสวนธน ซอยพุทธบูชา 47",
    province: "กรุงเทพมหานคร",
    zip: "10140",
  },
  {
    id: "1",
    name: "นายพุฒิพงศ์ แซ่ลู่",
    addressName: "",
    phone: "0831464895",
    address: "Mixue ซอยพุทธบูชา 45",
    province: "กรุงเทพมหานคร",
    zip: "10140",
  },
];

// const addressesRef = useRef(addresses);

const paymentMethods = [
  {
    id: "0",
    img: masterCard,
    cardName: "Master card",
    cardId: "1234 5678 9101 1121",
    cardExp: "",
    cardCVV: "",
    ownCard: "",
  },
  {
    id: "1",
    img: visa,
    cardName: "Visa",
    cardId: "1234 5678 9101 1121",
    cardExp: "",
    cardCVV: "",
    ownCard: "",
  },
  {
    id: "2",
    img: kbank,
    cardName: "ธนาคารกสิกรไทย",
    cardId: "1234 5678 9101 1121",
    cardExp: "",
    cardCVV: "",
    ownCard: "",
  },
];

const bankAccounts = [
  {
    id: "0",
    img: kbank,
    ownAccount: "",
    bankName: "ธนาคารกสิกรไทย",
    accountName: "1234 5678 9101 1121",
  },
  {
    id: "1",
    img: ttb,
    ownAccount: "",
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

  const [addresses, setAddresses] = useState(Address);

  const [newAddress, setNewAddress] = useState({
    id: (parseInt(addresses[addresses.length - 1].id) + 1).toString(),
    name: "",
    addressName: "",
    phone: "",
    address: "",
    province: "",
    zip: "",
  });

  const saveAddress = () => {
    if (
      newAddress.name &&
      newAddress.addressName &&
      newAddress.phone &&
      newAddress.address &&
      newAddress.province &&
      newAddress.zip
    ) {
      const updatedAddresses = [...addresses, newAddress];
      setAddresses(updatedAddresses);
      setNewAddress({
        id: (parseInt(addresses[addresses.length - 1].id) + 1).toString(),
        name: "",
        addressName: "",
        phone: "",
        address: "",
        province: "",
        zip: "",
      });
      setAddAddress(false);
    } else {
      alert("กรอกข้อมูล");
    }
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
  const scrollToAddAddress = useRef(null);

  //ใช้เปิด-ปิดฟอร์ม
  const [editAddressForm, setEditAddressForm] = useState("");

  //edit address

  const [editedAddress, setEditedAddress] = useState({});
  const handleEditAddress = (id) => {
    setEditAddressForm(id);
    const editedAddress = addresses.find((address) => address.id === id);
    setEditedAddress({
      ...editedAddress,
      [id]: { ...editedAddress, id: id },
    });
  };
  const handleSaveAddress = () => {
    const updatedAddresses = addresses.map((address) =>
      address.id === editedAddress.id ? editedAddress : address
    );
    setAddresses(updatedAddresses);
  };

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
                      setAddAddress(true),
                        scrollToAddAddress.current?.scrollIntoView({
                          behavior: "smooth",
                        });
                    }}
                  >
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
                        <p>
                          {address.address} {address.province} {address.zip}
                        </p>
                      </div>

                      <div className="btn-setting-address-group">
                        <button
                          className="f-btn btn-small-primary kanit-paragraphMedium"
                          onClick={() => handleEditAddress(address.id)}
                        >
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
              {editAddressForm &&
                addresses.map((address) => (
                  <div className="w-100" key={address.id}>
                    {editAddressForm === address.id ? (
                      <div
                        ref={scrollToAddAddress}
                        className="setting-add-address"
                      >
                        <div className="setting-title-add">
                          <p className="kanit-paragraphBig">ที่อยู่จัดส่ง</p>
                          <button className="add-product-user-page btn-small-link-ghost kanit-paragraphMedium">
                            ลบ
                          </button>
                        </div>
                        <div className="setting-add-address-form">
                          <Form>
                            <Row className="setting-add-address-form-row">
                              <Col>
                                <Input
                                  className=""
                                  placeholder="ชื่อที่อยู่"
                                  value={
                                    editedAddress.addressName ||
                                    address.addressName
                                  }
                                  type="text"
                                  errorMessage=""
                                  onChange={(e) =>
                                    setEditedAddress({
                                      ...editedAddress,
                                      addressName: e.target.value,
                                    })
                                  }
                                />
                              </Col>
                              <Col>
                                <Input
                                  className=""
                                  placeholder="ชื่อ นามสกุล"
                                  value={editedAddress.name || address.name}
                                  type="text"
                                  errorMessage=""
                                  onChange={(e) =>
                                    setEditedAddress({
                                      ...editedAddress,
                                      name: e.target.value,
                                    })
                                  }
                                />
                              </Col>
                              <Col>
                                <Input
                                  className=""
                                  placeholder="เบอร์โทร"
                                  value={editedAddress.phone || address.phone}
                                  type="number"
                                  errorMessage=""
                                  onChange={(e) =>
                                    setEditedAddress({
                                      ...editedAddress,
                                      phone: e.target.value,
                                    })
                                  }
                                />
                              </Col>
                            </Row>
                            <Input
                              className=""
                              placeholder="บ้านเลขที่ ซอย หมู่"
                              value={editedAddress.address || address.address}
                              type="text"
                              errorMessage=""
                              onChange={(e) =>
                                setEditedAddress({
                                  ...editedAddress,
                                  address: e.target.value,
                                })
                              }
                            />
                            <Row className="setting-add-address-form-row">
                              <Col>
                                <Input
                                  className=""
                                  placeholder="ตำบล อำเภอ จังหวัด"
                                  value={
                                    editedAddress.province || address.province
                                  }
                                  type="text"
                                  errorMessage=""
                                  onChange={(e) =>
                                    setEditedAddress({
                                      ...editedAddress,
                                      province: e.target.value,
                                    })
                                  }
                                />
                              </Col>
                              <Col>
                                <Input
                                  className=""
                                  placeholder="รหัสไปรษณีย์"
                                  value={editedAddress.zip || address.zip}
                                  type="number"
                                  errorMessage=""
                                  onChange={(e) =>
                                    setEditedAddress({
                                      ...editedAddress,
                                      zip: e.target.value,
                                    })
                                  }
                                />
                              </Col>
                            </Row>
                          </Form>
                        </div>
                        <div className="setting-add-address-button">
                          <button
                            className="btn-small-secondary kanit-paragraphMedium"
                            type="submit"
                            onClick={() => setEditAddressForm(null)}
                          >
                            ยกเลิก
                          </button>
                          <button
                            className="btn-small-primary kanit-paragraphMedium"
                            type="submit"
                            onClick={() => {
                              handleSaveAddress(address.id),
                                setEditAddressForm(null),
                                console.log(address.id, editedAddress.id),
                                console.log(address.zip, editedAddress.zip);
                            }}
                          >
                            บันทึก
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ))}
              {addAddress && (
                // <div className="setting-add-address">
                <div ref={scrollToAddAddress} className="setting-add-address">
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
                            value={newAddress.addressName}
                            type="text"
                            errorMessage=""
                            onChange={(e) => {
                              // setAddressname(e.target.value);
                              setNewAddress({
                                ...newAddress,
                                addressName: e.target.value,
                              });
                            }}
                          />
                        </Col>
                        <Col>
                          <Input
                            className=""
                            placeholder="ชื่อ นามสกุล"
                            value={newAddress.name}
                            type="text"
                            errorMessage=""
                            onChange={(e) => {
                              // setUsername(e.target.value);
                              setNewAddress({
                                ...newAddress,
                                name: e.target.value,
                              });
                            }}
                          />
                        </Col>
                        <Col>
                          <Input
                            className=""
                            placeholder="เบอร์โทร"
                            value={newAddress.phone}
                            type="number"
                            errorMessage=""
                            onChange={(e) => {
                              setNewAddress({
                                ...newAddress,
                                phone: e.target.value,
                              });
                            }}
                          />
                        </Col>
                      </Row>
                      <Input
                        className=""
                        placeholder="บ้านเลขที่ ซอย หมู่"
                        value={newAddress.address}
                        type="text"
                        errorMessage=""
                        onChange={(e) => {
                          setNewAddress({
                            ...newAddress,
                            address: e.target.value,
                          });
                        }}
                      />
                      <Row className="setting-add-address-form-row">
                        <Col>
                          <Input
                            className=""
                            placeholder="ตำบล อำเภอ จังหวัด"
                            value={newAddress.province}
                            type="text"
                            errorMessage=""
                            onChange={(e) => {
                              setNewAddress({
                                ...newAddress,
                                province: e.target.value,
                              });
                            }}
                          />
                        </Col>
                        <Col>
                          <Input
                            className=""
                            placeholder="รหัสไปรษณีย์"
                            value={newAddress.zip}
                            type="number"
                            errorMessage=""
                            onChange={(e) => {
                              setNewAddress({
                                ...newAddress,
                                zip: e.target.value,
                              });
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
                  <p className="kanit-paragraphBig">
                    บัตรเครดิต/บัตรเดบิต/บัญชีธนาคาร
                  </p>
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
