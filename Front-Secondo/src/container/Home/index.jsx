import React, { useState, useEffect, useRef } from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";

import HDivider from "../../components/UI/DividerHorizontal";
import ItemCard from "../../components/UI/ItemCard";
import ItemCardBuy from "../../components/UI/ItemCard/Buy";
import ItemCardReceive from "../../components/UI/ItemCard/Receive";
import ItemCardDonate from "../../components/UI/ItemCard/Donate";
import CateCard from "../../components/UI/CategoryCard";
import BannerSlide from "../../components/UI/Banner";

import "./index.css";
import chevronDown from "../../icon/chevron-down.png";
import chevronRightT from "../../icon/chevron-right-T.png";

import { useDispatch, useSelector } from "react-redux";

import productFav from "../../../public/images/pant.jpg";

// const categoryItem1 = [
//   { img: productFav, label: "เสื้อผ้าและแฟชั่น", value: "0" },
//   { img: productFav, label: "รองเท้า", value: "1" },
//   { img: productFav, label: "ความงามและของใช้ส่วนตัว", value: "2" },
//   { img: productFav, label: "เครื่องประดับ", value: "3" },
//   { img: productFav, label: "เครื่องใช้ไฟฟ้า", value: "4" },
//   { img: productFav, label: "อุปกรณ์ IT", value: "5" },
//   { img: productFav, label: "กล้องและอุปกรณ์", value: "6" },
//   { img: productFav, label: "รถยนต์", value: "7" },
// ];

// const categoryItem2 = [
//   { img: productFav, label: "มอเตอร์ไซต์", value: "8" },
//   { img: productFav, label: "กระเป๋า", value: "9" },
//   { img: productFav, label: "เฟอร์นิเจอร์", value: "10" },
//   { img: productFav, label: "หนังสือ", value: "11" },
//   { img: productFav, label: "กีฬา", value: "12" },
//   { img: productFav, label: "เครื่องดนตรี", value: "13" },
//   { img: productFav, label: "แม่และเด็ก", value: "14" },
//   { img: productFav, label: "อื่นๆ", value: "15" },
// ];

let itemInterest = [
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

let itemBuyer = [
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
  const category = useSelector((state) => state.category);
  // console.log(category)
  // const dispatch = useDispatch();

  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      if (category.parentId == null) {
        myCategories.push({
          img: category.image,
          label: category.name,
          value: category._id,
          // children: category.children.length > 0 && renderCategories(category.children)
        });
      }
    }

    return myCategories;
  };

  const categoryItem = renderCategories(category.categories);
  // console.log(categoryItem)

  const slicedArray1 = categoryItem.slice(0, 8);
  const slicedArray2 = categoryItem.slice(8, 16);
  // console.log(slicedArray)
  // const categoryList = createCategoryList(category.categories)
  // console.log("SHeeshshshshshshshhs")
  // console.log(categoryList)

  const [isExpanded, setIsExpanded] = useState(false);
  // const moreCategory = useRef(null);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
    console.log("toggle:", isExpanded);
  };

  // const scrollToRef = useRef(null);

  const product = useSelector((state) => state.product);

  const renderProducts = (products) => {
    let myProducts = [];
    if (products && Array.isArray(products)) {
        for (let product of products) {
          if(product.verify === true && (product.status === "ประกาศขาย" || product.status === "รับซื้อ" || product.status === "มีการเสนอขาย" )){
            myProducts.push({
              _id: product._id,
              slug: product.slug,
              img: product.productPictures,
              title: product.name,
              province: "กรุงเทพ",
              price: product.price,
              credit: product.carbonCredits,
              // credit: 0.1,
              // children: category.children.length > 0 && renderCategories(category.children)
            });
            // console.log(product)
          }
      }
      return myProducts;
    }
  };

  const renderProductsDonate = (products) => {
    let myProducts = [];
    if (products && Array.isArray(products)) {
      for (let product of products) {
        if(product.verify === true && (product.status === "ประกาศบริจาค" || product.status === "ขอรับบริจาค")){
          myProducts.push({
            _id: product._id,
            slug: product.slug,
            img: product.productPictures,
            title: product.name,
            province: "กรุงเทพ",
            // children: category.children.length > 0 && renderCategories(category.children)
            });
          }
        }
      return myProducts;
    }
  };

  // const itemInterest = renderProducts(product.productsSeller); //TODO:
  const itemInterest = product.productsSeller
    ? renderProducts(product.productsSeller).slice(-4)
    : [];

  const itemBuyer = product.productsBuyer
    ? renderProducts(product.productsBuyer).slice(-4)
    : [];

  const itemReceive = product.productsDonater
    ? renderProductsDonate(product.productsDonater).slice(-4)
    : [];

  const itemDonate = product.productsReciever
    ? renderProductsDonate(product.productsReciever).slice(-4)
    : [];
  // console.log(itemInterest)
  return (
    <Layout>
      <div className="background-home">
        <div className="background-home-banner-category">
          <div className="home-banner">
            <div className="home-slide-banner">
              <BannerSlide />
            </div>
            <div
              className="home-img-banner"
              // onClick={() =>
              //           scrollToRef.current?.scrollIntoView({ behavior: "smooth" })
              //         }
            >
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
                {slicedArray1.map((item, index) => (
                  <CateCard key={index} img={item.img} title={item.label} />
                ))}
              </div>
              <div
                className={`group-category-2 ${isExpanded ? "expanded" : ""}`}
              >
                {slicedArray2.map((item, index) => (
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
              <Link className="group-card-icon-other" to="/allproduct/interest">
                <div className="group-card-header-other">เพิ่มเติม</div>
                <img className="icon-arrow-right-24" src={chevronRightT} />
              </Link>
            </div>
            <HDivider />
            <div className="group-card-item">
              {itemInterest.map((item, index) => (
                <ItemCard
                  key={index}
                  img={item.img}
                  _id={item._id}
                  slug={item.slug}
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
                สินค้ารับซื้อใหม่
              </div>
              <Link className="group-card-icon-other" to="/allproduct/buyer" >
                <div className="group-card-header-other">เพิ่มเติม</div>
                <img className="icon-arrow-right-24" src={chevronRightT} />
              </Link>
            </div>
            <HDivider />
            <div className="group-card-item">
              {itemBuyer.map((item, index) => (
                <ItemCardBuy
                  key={index}
                  img={item.img}
                  _id={item._id}
                  slug={item.slug}
                  title={item.title}
                  province={item.province}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="group-card">
          <div className="group-card-header-item">
            <div className="group-card-header">
              <div className="group-card-header-topic kanit-paragraphBig">
                สินค้าบริจาค
              </div>
              <Link className="group-card-icon-other" to="/allproduct/donate">
                <div className="group-card-header-other">เพิ่มเติม</div>
                <img className="icon-arrow-right-24" src={chevronRightT} />
              </Link>
            </div>
            <HDivider />
            <div className="group-card-item">
              {itemReceive.map((item, index) => (
                <ItemCardDonate
                  key={index}
                  img={item.img}
                  _id={item._id}
                  title={item.title}
                  province={item.province}
                  // price={item.price}
                  // credit={item.credit}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="group-card">
          <div className="group-card-header-item">
            <div className="group-card-header">
              <div className="group-card-header-topic kanit-paragraphBig">
                สินค้าขอรับบริจาค
              </div>
              <Link className="group-card-icon-other" to="/allproduct/recieve">
                <div className="group-card-header-other">เพิ่มเติม</div>
                <img className="icon-arrow-right-24" src={chevronRightT} />
              </Link>
            </div>
            <HDivider />
            <div className="group-card-item">
            {itemDonate.map((item, index) => (
                <ItemCardReceive
                  key={index}
                  img={item.img}
                  _id={item._id}
                  title={item.title}
                  province={item.province}
                  // price={item.price}
                  // credit={item.credit}
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
