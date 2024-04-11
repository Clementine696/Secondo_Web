import React, { useState, useEffect, useRef } from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";

import HDivider from "../../components/UI/DividerHorizontal";
import ItemCard from "../../components/UI/ItemCard";
import CateCard from "../../components/UI/CategoryCard";
import BannerSlide from "../../components/UI/Banner";

import "./index.css";
import chevronDown from "../../icon/chevron-down.png";

import productFav from "../../../public/images/pant.jpg";

const categoryItem1 = [
  { img: productFav, label: "เสื้อผ้าและแฟชั่น", value: "0" },
  { img: productFav, label: "รองเท้า", value: "1" },
  { img: productFav, label: "ความงามและของใช้ส่วนตัว", value: "2" },
  { img: productFav, label: "เครื่องประดับ", value: "3" },
  { img: productFav, label: "เครื่องใช้ไฟฟ้า", value: "4" },
  { img: productFav, label: "อุปกรณ์ IT", value: "5" },
  { img: productFav, label: "กล้องและอุปกรณ์", value: "6" },
  { img: productFav, label: "รถยนต์", value: "7" },
];

const categoryItem2 = [
  { img: productFav, label: "มอเตอร์ไซต์", value: "8" },
  { img: productFav, label: "กระเป๋า", value: "9" },
  { img: productFav, label: "เฟอร์นิเจอร์", value: "10" },
  { img: productFav, label: "หนังสือ", value: "11" },
  { img: productFav, label: "กีฬา", value: "12" },
  { img: productFav, label: "เครื่องดนตรี", value: "13" },
  { img: productFav, label: "แม่และเด็ก", value: "14" },
  { img: productFav, label: "อื่นๆ", value: "15" },
];

const itemInterest = [
  {
    img: "",
    title: "สินค้าน่าสนใจ 1",
    province: "กรุงเทพ",
    price: "1000",
    credit: 0.1,
  },
  {
    img: "",
    title: "สินค้าน่าสนใจ 2",
    province: "กรุงเทพ",
    price: "2000",
    credit: 0.2,
  },
  {
    img: "",
    title: "สินค้าน่าสนใจ 3",
    province: "กรุงเทพ",
    price: "3000",
    credit: 0.3,
  },
  {
    img: "",
    title: "สินค้าน่าสนใจ 4",
    province: "กรุงเทพ",
    price: "4000",
    credit: 0.4,
  },
];

const itemDonate = [
  {
    img: "",
    title: "สินค้าบริจาค 1",
    province: "กรุงเทพ",
    price: "1000",
    credit: 0.1,
  },
  {
    img: "",
    title: "สินค้าบริจาค 2",
    province: "กรุงเทพ",
    price: "2000",
    credit: 0.2,
  },
  {
    img: "",
    title: "สินค้าบริจาค 3",
    province: "กรุงเทพ",
    price: "3000",
    credit: 0.3,
  },
  {
    img: "",
    title: "สินค้าบริจาค 4",
    province: "กรุงเทพ",
    price: "4000",
    credit: 0.4,
  },
];

const itemReceive = [
  {
    img: "",
    title: "สินค้ารับบริจาค 1",
    province: "กรุงเทพ",
    price: "1000",
    credit: 0.1,
  },
  {
    img: "",
    title: "สินค้ารับบริจาค 2",
    province: "กรุงเทพ",
    price: "2000",
    credit: 0.2,
  },
  {
    img: "",
    title: "สินค้ารับบริจาค 3",
    province: "กรุงเทพ",
    price: "3000",
    credit: 0.3,
  },
  {
    img: "",
    title: "สินค้ารับบริจาค 4",
    province: "กรุงเทพ",
    price: "4000",
    credit: 0.4,
  },
];

function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  // const moreCategory = useRef(null);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
    console.log("toggle:", isExpanded);
  };

  return (
    <Layout>
      <div className="background-home">
        <div className="background-home-banner-category">
          <div className="home-banner">
            <div className="home-slide-banner">
              <BannerSlide />
            </div>
            <div className="home-img-banner">
              <img
                className="img-banner"
                srcSet="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg"
              />
              <img
                className="img-banner"
                srcSet="https://static.vecteezy.com/system/resources/thumbnails/002/006/967/small/young-women-takes-a-shopping-cart-and-enjoy-online-shopping-through-smartphones-choose-to-buy-gifts-valentine-s-day-concepts-website-or-mobile-phone-application-flat-design-illustration-vector.jpg"
              />
            </div>
          </div>

          <div className="frame-category">
            <div className="header-category kanit-paragraphBig">หมวดหมู่</div>
            <div className="category-section">
              <div className="group-category-1">
                {categoryItem1.map((item, index) => (
                  <CateCard key={index} img={item.img} title={item.label} />
                ))}
              </div>
              <div
                className={`group-category-2 ${isExpanded ? "expanded" : ""}`}
              >
                {categoryItem2.map((item, index) => (
                  <CateCard key={index} img={item.img} title={item.label} />
                ))}
              </div>
              <button className="btn-category" onClick={handleToggleExpand}>
                <img src={chevronDown} alt="Chevron" />
              </button>
            </div>
          </div>
        </div>

        <div className="group-card">
          <div className="group-card-header-item">
            <div className="group-card-header">
              <div className="group-card-header-topic kanit-paragraphBig">
                สินค้าน่าสนใจ
              </div>
              <Link className="group-card-icon-other">
                <div className="group-card-header-other">เพิ่มเติม</div>
                <svg
                  className="icon-arrow-right-24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 18L13.5858 13.4142C14.3668 12.6332 14.3668 11.3668 13.5858 10.5858L9 6"
                    stroke="#D0C58A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <HDivider />
            <div className="group-card-item">
              {itemInterest.map((item, index) => (
                <ItemCard
                  key={index}
                  img={item.img}
                  title={item.title}
                  province={item.province}
                  price={item.price}
                  credit={item.credit}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="group-card">
          <div className="group-card-header-item">
            <div className="group-card-header">
              <div className="group-card-header-topic kanit-paragraphBig">
                สินค้าบริจาคใหม่
              </div>
              <Link className="group-card-icon-other">
                <div className="group-card-header-other">เพิ่มเติม</div>
                <svg
                  className="icon-arrow-right-24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 18L13.5858 13.4142C14.3668 12.6332 14.3668 11.3668 13.5858 10.5858L9 6"
                    stroke="#D0C58A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <HDivider />
            <div className="group-card-item">
              {itemDonate.map((item, index) => (
                <ItemCard
                  key={index}
                  img={item.img}
                  title={item.title}
                  province={item.province}
                  price={item.price}
                  credit={item.credit}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="group-card">
          <div className="group-card-header-item">
            <div className="group-card-header">
              <div className="group-card-header-topic kanit-paragraphBig">
                สินค้ารับบริจาค
              </div>
              <Link className="group-card-icon-other">
                <div className="group-card-header-other">เพิ่มเติม</div>
                <svg
                  className="icon-arrow-right-24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 18L13.5858 13.4142C14.3668 12.6332 14.3668 11.3668 13.5858 10.5858L9 6"
                    stroke="#D0C58A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <HDivider />
            <div className="group-card-item">
              {itemReceive.map((item, index) => (
                <ItemCard
                  key={index}
                  img={item.img}
                  title={item.title}
                  province={item.province}
                  price={item.price}
                  credit={item.credit}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
