import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./index.css";
import "../../../styles.css";
import "../../../components/UI/Button/index.css";

import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidemenu";
import Pills from "../../../components/UI/Pills";

import plant from "../../../../public/images/pant.jpg";

import searchy from "../../../icon/search-y.png";
import add from "../../../icon/add.png";
import chevronRight from "../../../icon/chevron-right.png";
import edit from "../../../icon/edit.png";
import useralert from "../../../icon/user-alert.png";
import { useDispatch, useSelector } from "react-redux";
import { generatePublicUrl } from "../../../urlConfig";
import { getUserproduct } from "../../../actions";

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

const items = [
  {
    date: "20/07/2021",
    img: plant,
    desc: {
      name: "กระเป๋ากางเกง",
      detail: "กระเป๋ากางเกงที่เก็บเอาไว้จนเก่า",
    },
    status: {
      name: "รอยืนยันสินค้า",
      time: "",
    },
    point: 100,
    price: 500,
    icons: [],
    Link: [],
  },
  {
    date: "21/07/2021",
    img: plant,
    desc: {
      name: "Title 2",
      detail: "Desc 2",
    },
    status: {
      name: "รับซื้อ",
      time: "",
    },
    point: 100,
    price: 500,
    icons: [],
    Link: [],
  },
  {
    date: "22/07/2021",
    img: plant,
    desc: {
      name: "Title 3",
      detail: "Desc 3",
    },
    status: {
      name: "มีการเสนอขาย",
      time: "ระยะเวลาที่เหลือ 02:10:02",
    },
    point: 100,
    price: 500,
    icons: [],
    Link: [],
  },
];

//ฝากใส่ Link หน้า Edit
// items.forEach((item) => {
//   switch (item.status.name) {
//     case "มีการเสนอขาย":
//       item.icons = [useralert, chevronRight];
//       item.Link = ["/offer/sell", "/account/shippingstatus/buyinfo"];
//       break;
//     case "รอยืนยันสินค้า":
//       item.icons = [chevronRight];
//       item.Link = ["/account/shippingstatus/confirmrecieve"];
//       break;
//     default:
//       item.icons = chevronRight;
//       item.Link = ["/account/shippingstatus/buyinfo"];
//       break;
//   }
// });
// fillter ใน backend

function BuyState() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserproduct());
  }, []);
  const user = useSelector((state) => state.user);
  const userBuyerProducts = user.userBuyerProducts;
  const orderBuyer = user.orderBuyer;
  // console.log(userSellerProducts)
  const renderUserBuyer = (buyerProducts) => {
    let userBuy = [];
    if (buyerProducts && Array.isArray(buyerProducts)) {
      for (let buyerProduct of buyerProducts) {
        userBuy.push({
          _id: buyerProduct._id,
          slug: buyerProduct.slug,
          img: buyerProduct.productPictures[0].img,
          name: buyerProduct.name,
          price: buyerProduct.price,
          carbonCredits: buyerProduct.carbonCredits,
          description: buyerProduct.description,
          status: buyerProduct.status,
          createdAt: buyerProduct.createdAt.split("T")[0],
          icons: [],
          // credit: 0.1,
          // children: category.children.length > 0 && renderCategories(category.children)
        });
        // console.log(product)
      }
      return userBuy;
    }
  };

  const renderUserOrderBuyer = (orderBuyers) => {
    let orderUserBuy = [];
    if (orderBuyers && Array.isArray(orderBuyers)) {
      for (let orderBuyer of orderBuyers) {
        orderUserBuy.push({
          _id: orderBuyer.product._id,
          slug: orderBuyer.product.slug,
          img: orderBuyer.product.productPictures[0].img,
          name: orderBuyer.product.name,
          price: orderBuyer.product.price,
          carbonCredits: orderBuyer.product.carbonCredits,
          description: orderBuyer.product.description,
          status: orderBuyer.product.status,
          createdAt: orderBuyer.createdAt.split("T")[0],
          icons: [],
          // credit: 0.1,
          // children: category.children.length > 0 && renderCategories(category.children)
        });
        // console.log(product)
      }
      return orderUserBuy;
    }
  };

  const itemBuyProduct = userBuyerProducts
    ? renderUserBuyer(userBuyerProducts)
    : [];

  const orderBuyProduct = orderBuyer
  ? renderUserOrderBuyer(orderBuyer)
  : [];

  console.log(orderBuyProduct)

  itemBuyProduct.forEach((item) => {
    switch (item.status) {
      case "มีการเสนอขาย":
        item.icons = [useralert, chevronRight];
        item.Link = [
          "/offer/sell/" + item._id,
          "/product/buyer/" + item._id + "/p",
        ];
        break;
      case "รอยืนยันสินค้า":
        item.icons = [chevronRight];
        item.Link = ["/product/buyer/" + item._id + "/p"];
        break;
      case "รอการตรวจสอบ":
        item.icons = [edit, chevronRight];
        item.Link = [
          "/buystate/edititem/" + item._id,
          "/product/buyer/" + item._id + "/p",
        ];
        break;
      case "Waiting":
        item.icons = [edit, chevronRight];
        item.Link = [
          "/buystate/edititem/" + item._id,
          "/product/buyer/" + item._id + "/p",
        ];
        break;
      default:
        item.icons = chevronRight;
        item.Link = "/account/shippingstatus/buyinfo";
        break;
    }
  });

  orderBuyProduct.forEach((item) => {
    switch (item.status) {
      case "รอการจัดส่ง":
        console.log(item)
        item.icons = [chevronRight];
        item.Link = [
          // "/offer/sell/" + item._id,
          "/account/shippingstatus/buyinfo/" + item._id,
        ];
        break;
      default:
        item.icons = chevronRight;
        item.Link = "/product/buyer/" + item._id + "/p";
        break;
    }
  });

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

  // console.log("Current Filter:", filter);
  // console.log("Current Filter:", items);

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
            <Link
              className="add-product-user-page btn-small-secondary kanit-paragraphMedium"
              to="additem"
            >
              <img src={add} className="add-icon"></img>
              เพิ่มสินค้ารับซื้อ
            </Link>
          </div>

          <div className="background-data-table">
            <div className="header-table-data kanit-paragraphMedium">
              <p className="header-item date-col">วันที่ซื้อ</p>
              <p className="header-item desc-col">รายละเอียดสินค้า</p>
              <p className="header-item status-col">สถานะ</p>
              <p className="header-item point-col">CO₂ Credit</p>
              <p className="header-item price-col">ราคา (บาท)</p>
              <p className="header-item func-col"></p>
            </div>

            {itemBuyProduct.map((item, index) => (
              <div className={`data-table ${resizeFontClass}`} key={index}>
                <p className="data-item date-col">{item.createdAt}</p>

                <div className="data-item desc-col">
                  <img
                    src={item.img ? generatePublicUrl(item.img) : ""}
                    className="pic-product-table"
                  ></img>
                  <div className="product-name-desc-status">
                    <p className="kanit-paragraphMedium product-name">
                      {item.name}
                    </p>
                    <p className="kanit-paragraphSmall product-desc">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="data-item status-col">
                  <div className="product-status-time">
                    <p className="kanit-paragraphMedium">{item.status}</p>
                    <p className="status-time kanit-paragraphSmall">
                      {/* {item.status.time} */}
                    </p>
                  </div>
                </div>

                <p className="data-item point-col">{item.carbonCredits}</p>

                <p className="data-item price-col">{item.price}</p>

                <div className="data-item func-col">
                  {Array.isArray(item.icons) &&
                    item.icons.map((icon, iconIndex) => (
                      <Link
                        key={iconIndex}
                        className="touch-point"
                        to={item.Link[iconIndex]}
                      >
                        <img
                          className="func-icon"
                          src={icon}
                          alt={`icon-${iconIndex}`}
                        />
                      </Link>
                    ))}
                  {!Array.isArray(item.icons) && (
                    <Link
                      key="chevronRight"
                      className="touch-point"
                      to="/account/shippingstatus/buyinfo"
                    >
                      <img
                        className="func-icon"
                        src={chevronRight}
                        alt={`icon`}
                      />
                    </Link>
                  )}
                </div>
              </div>
            ))}

            {orderBuyProduct.map((item, index) => (
              <div className={`data-table ${resizeFontClass}`} key={index}>
                <p className="data-item date-col">{item.createdAt}</p>

                <div className="data-item desc-col">
                  <img
                    src={item.img ? generatePublicUrl(item.img) : ""}
                    className="pic-product-table"
                  ></img>
                  <div className="product-name-desc-status">
                    <p className="kanit-paragraphMedium product-name">
                      {item.name}
                    </p>
                    <p className="kanit-paragraphSmall product-desc">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="data-item status-col">
                  <div className="product-status-time">
                    <p className="kanit-paragraphMedium">{item.status}</p>
                    <p className="status-time kanit-paragraphSmall">
                      {/* {item.status.time} */}
                    </p>
                  </div>
                </div>

                <p className="data-item point-col">{item.carbonCredits}</p>

                <p className="data-item price-col">{item.price}</p>

                <div className="data-item func-col">
                  {Array.isArray(item.icons) &&
                    item.icons.map((icon, iconIndex) => (
                      <Link
                        key={iconIndex}
                        className="touch-point"
                        to={item.Link[iconIndex]}
                      >
                        <img
                          className="func-icon"
                          src={icon}
                          alt={`icon-${iconIndex}`}
                        />
                      </Link>
                    ))}
                  {!Array.isArray(item.icons) && (
                    <button
                      key="chevronRight"
                      className="touch-point"
                      to="/account/shippingstatus/buyinfo"
                    >
                      <img
                        className="func-icon"
                        src={chevronRight}
                        alt={`icon`}
                      />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BuyState;
