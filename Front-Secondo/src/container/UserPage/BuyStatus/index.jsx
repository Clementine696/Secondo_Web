import React, { useState, useEffect } from "react";
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
import chevronRight from "../../../icon/chevron-right.png";
import edit from "../../../icon/edit.png";
import discount from "../../../icon/discount.png";

const filterItems = [
  { label: "ทั้งหมด", value: "0" },
  { label: "รอตรวจสอบ", value: "1" },
  { label: "รับซื้อ", value: "2" },
  { label: "มีการเสนอขาย", value: "3" },
  // { label: "เสนอราคา", value: "4" },
  { label: "ที่ต้องจัดส่ง", value: "4" },
  { label: "ที่ต้องได้รับ", value: "5" },
  { label: "รอยืนยันสินค้า", value: "6" },
  { label: "สำเร็จ", value: "7" },
  { label: "ยกเลิก", value: "8" },
  { label: "คืนเงิน/คืนสินค้า", value: "9" },
];

// fillter ใน backend

function BuyState() {
  const [font, setFont] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => {
      setFont(window.innerWidth < 1500);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const resizeFontClass = font
    ? "kanit-paragraphtextMedium"
    : "kanit-paragraphMedium";

  const [filter, setFilter] = useState(filterItems[0]);

  console.log("Current Filter:", filter);

  return (
    <Layout>
      <div className="user-page">
        <Sidebar />
        <div className="user-content">
          <div className="buy-page-title kanit-Display-Large">
            การซื้อของฉัน
          </div>

          <Pills
            pillOption={filterItems}
            active={filter}
            onClick={(selectedFilter) => setFilter(selectedFilter)}
          ></Pills>

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

          <div className="background-data-table">
            <div className="header-table-data kanit-paragraphMedium">
              <p className="header-item date-col">วันที่ซื้อ</p>
              <p className="header-item desc-col">รายละเอียดสินค้า</p>
              <p className="header-item status-col">สถานะ</p>
              <p className="header-item point-col">แต้ม CC</p>
              <p className="header-item price-col">ราคา (บาท)</p>
              <p className="header-item func-col"></p>
            </div>

            <div className={`data-table ${resizeFontClass}`}>
              <p className="data-item date-col">20/07/2021</p>

              <div className="data-item desc-col">
                <img
                  src="../../../../public/images/pant.jpg"
                  className="pic-product-table"
                ></img>
                <div className="product-name-desc-status">
                  <p className="kanit-paragraphMedium">กระเป๋ากางเกง</p>
                  <p className="kanit-paragraphSmall">
                    กระเป๋ากางเกงที่เก็บเอาไว้จนเก่า
                  </p>
                </div>
              </div>

              <div className="data-item status-col">
                <div className="product-status-time">
                  <p className="kanit-paragraphMedium">รอตรวจสอบ</p>
                  <p className="status-time kanit-paragraphSmall">
                    ระยะเวลาที่เหลือ 02:10:02
                  </p>
                </div>
              </div>

              <p className="data-item point-col">100</p>

              <p className="data-item price-col">500</p>

              <div className="data-item func-col">
                <Link className="touch-point" to="#">
                  <img className="func-icon" src={discount}></img>
                </Link>
                <Link className="touch-point" to="#">
                  <img className="func-icon" src={edit}></img>
                </Link>
                <Link className="touch-point" to="#">
                  <img className="func-icon" src={chevronRight}></img>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BuyState;
