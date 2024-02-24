import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./index.css";
import "../../../styles.css";
import "../../../components/UI/Button/index.css";

import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidemenu";
import Pills from "../../../components/UI/Pills";
import searchy from "../../../icon/search-y.png";
import add from "../../../icon/add.png";

const filterItems = [
  { label: "ทั้งหมด", value: "0" },
  { label: "รอตรวจสอบ", value: "1" },
  { label: "รับซื้อ", value: "2" },
  { label: "มีการเสนอขาย", value: "3" },
  { label: "เสนอราคาอยู่", value: "4" },
  { label: "ที่ต้องจัดส่ง", value: "5" },
  { label: "ที่ต้องได้รับ", value: "6" },
  { label: "รอยืนยันสินค้า", value: "7" },
  { label: "สำเร็จ", value: "8" },
  { label: "ยกเลิก", value: "9" },
  { label: "คืนเงิน/คืนสินค้า", value: "10" },
];

// fillter ใน backend

function BuyState() {
  const [filter, setFilter] = useState(filterItems[0]);

  console.log("Current Filter:", filter);

  return (
    <Layout>
      <div className="user-page">
        <Sidebar />
        <div className="buy-page-title kanit-Display-Large">การซื้อของฉัน</div>
        <div>
          <Pills
            pillOption={filterItems}
            active={filter}
            onClick={(selectedFilter) => setFilter(selectedFilter)}
          ></Pills>
        </div>

        <div className="search-add-button">
            <Form className="search-container-filter">
              <Form.Control
                className="search-bar-filter kanit-paragraphSmall"
                type="text"
                placeholder="ค้นหาสินค้า ชื่อผู้ขาย หมายเลขคำสั่งซื้อ"
              />
              <img src={searchy} className="search-icon-filter"></img>
            </Form>
            <Link className="add-product-user-page btn-small-secondary kanit-paragraphMedium">
              <img src={add} className="add-icon"></img>
              เพิ่มสินค้ารับซื้อ
            </Link>
          </div>

        <div className="background-data"></div>
      </div>
    </Layout>
  );
}

export default BuyState;
