import React, { useCallback, useState, useEffect } from "react";
import Layout from "../../components/Layout";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  FormCheck,
  FormControl,
} from "react-bootstrap";

import Dropdown from "../../components/UI/Dropdown";
import ItemCard from "../../components/UI/ItemCard";
import SideBarCategories from "../../components/UI/ProductCate-search";
import Pathway from "../../components/UI/Pathway";

import chevronRightT from "../../icon/chevron-right-T.png";

import "./index.css";
import "../../styles.css";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchProductsByKeyword } from "../../actions";

const pathway = [
  { label: "หน้าหลัก", value: 1, nevigate: "/" },
  { label: "ขายของ", value: 2, nevigate: "/search/sell" },
];

const options = [
  { value: "option1", label: "ความนิยม" },
  { value: "option2", label: "ล่าสุด" },
  { value: "option3", label: "ราคา: มากไปน้อย" },
  { value: "option4", label: "ราคา: น้อยไปมาก" },
];

const categories = [
  { value: "cate1", label: "เสื้อผ้าและแฟชัน", nevigate: "" },
  { value: "cate2", label: "รองเท้า", nevigate: "" },
  { value: "cate3", label: "สุขภาพและความงาม", nevigate: "" },
  { value: "cate4", label: "เครื่องประดับ", nevigate: "" },
  { value: "cate5", label: "เครื่องใช้ไฟฟ้า", nevigate: "" },
  { value: "cate6", label: "อุปกรณ์ IT", nevigate: "" },
  { value: "cate7", label: "กล้องและอุปกรณ์", nevigate: "" },
  { value: "cate8", label: "รถยนต์", nevigate: "" },
  { value: "cate9", label: "รถมอเตอร์ไซต์", nevigate: "" },
  { value: "cate10", label: "กระเป๋า", nevigate: "" },
  { value: "cate11", label: "เฟอร์นิเจอร์", nevigate: "" },
  { value: "cate12", label: "ของสะสม", nevigate: "" },
  { value: "cate13", label: "หนังสือ", nevigate: "" },
  { value: "cate14", label: "กีฬา", nevigate: "" },
  { value: "cate15", label: "เครื่องดนตรี", nevigate: "" },
  { value: "cate16", label: "แม่และเด็ก", nevigate: "" },
];

const productType = [
  { value: "type1", label: "ของขาย" },
  { value: "type2", label: "รับซื้อ" },
  { value: "type3", label: "บริจาค" },
  { value: "type4", label: "ขอรับบริจาค" },
];

const regionDelivery = [
  { value: "1", label: "กรุงเทพและปริมณฑล" },
  { value: "2", label: "ภาคกลาง" },
  { value: "3", label: "ภาคตะวันออกเฉียงเหนือ" },
  { value: "4", label: "ภาคใต้" },
  { value: "5", label: "ภาคเหนือ" },
  { value: "6", label: "ภาคตะวันออก" },
  { value: "7", label: "ภาคตะวันตก" },
];

function Search() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  const location = useLocation();
  const keyword = location.pathname.split("/")[2];
  // console.log(keyword)

  //Sell
  const renderProductsSell = (products) => {
    let myProducts = [];
    if (products && Array.isArray(products)) {
      for (let product of products) {
        if (product.verify === true) {
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

  const itemSell = renderProductsSell(product.productsSeller);

  const threeItemSell = itemSell.reduce((acc, curr, index) => {
    const fourIndex = Math.floor(index / 3);
    if (!acc[fourIndex]) {
      acc[fourIndex] = [];
    }
    acc[fourIndex].push(curr);
    return acc;
  }, []);

  //Rubbuy
  const renderProductsRubbuy = (products) => {
    let myProducts = [];
    if (products && Array.isArray(products)) {
      for (let product of products) {
        if (product.verify === true) {
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

  const itemRubbuy = renderProductsRubbuy(product.productsSeller);

  const threeItemRubbuy = itemRubbuy.reduce((acc, curr, index) => {
    const fourIndex = Math.floor(index / 3);
    if (!acc[fourIndex]) {
      acc[fourIndex] = [];
    }
    acc[fourIndex].push(curr);
    return acc;
  }, []);

  //Donate
  const renderProductsDonate = (products) => {
    let myProducts = [];
    if (products && Array.isArray(products)) {
      for (let product of products) {
        if (product.verify === true) {
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

  const itemDonate = renderProductsDonate(product.productsSeller);

  const threeItemDonate = itemDonate.reduce((acc, curr, index) => {
    const fourIndex = Math.floor(index / 3);
    if (!acc[fourIndex]) {
      acc[fourIndex] = [];
    }
    acc[fourIndex].push(curr);
    return acc;
  }, []);

  //Recieve
  const renderProductRecieve = (products) => {
    let myProducts = [];
    if (products && Array.isArray(products)) {
      for (let product of products) {
        if (product.verify === true) {
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

  const itemRecieve = renderProductRecieve(product.productsSeller);

  const threeItemRecieve = itemRecieve.reduce((acc, curr, index) => {
    const fourIndex = Math.floor(index / 3);
    if (!acc[fourIndex]) {
      acc[fourIndex] = [];
    }
    acc[fourIndex].push(curr);
    return acc;
  }, []);

  useEffect(() => {
    // const { productId } = props.params.match;
    // const location = useLocation();
    // const _id = location.pathname.split("/")[2];
    // console.log(keyword);
    const payload = {
      params: {
        keyword,
      },
    };

    dispatch(searchProductsByKeyword(payload));
  }, []);

  const handleFormProductType = (label) => {
    console.log(label);
  };

  const handleRegion = (label) => {
    console.log(label);
  };

  const [lowerPrice, setLowerPrice] = useState("");
  const [upperPrice, setUpperPrice] = useState("");

  const handleFilterPrice = () => {
    console.log(lowerPrice, upperPrice);
  };

  return (
    <Layout>
      <div className="search-page">
        <div className="background-search-page">
          <Pathway pathwayList={pathway} />
        </div>
        <div className="search-page-frame-suggest">
          <div className="search-page-frame-suggest-topic">
            <div className="search-page-frame-suggest-topic-main-header">
              ค้นหา โทรศัพท์
            </div>
            <div className="search-page-frame-suggest-topic-main-sub">
              (1,000)
            </div>
          </div>
          <div className="search-page-frame-suggest-content">
            <div className="search-page-frame-suggest-content-group-item">
              <Link
                style={{ textDecoration: "none" }}
                className="search-page-frame-suggest-content-group-item-card"
              >
                <div className="search-page-frame-suggest-content-group-item-card-img-frame">
                  <img
                    className="search-page-frame-suggest-content-group-item-card-img"
                    src="/images/iPhone_15_Pro_Blue_Titanium_1.png"
                    alt="suggestion"
                  />
                </div>
                <div className="search-page-frame-suggest-content-group-item-card-text">
                  โทรศัพท์
                </div>
              </Link>
              <div className="search-page-frame-suggest-content-group-item-card">
                <div className="search-page-frame-suggest-content-group-item-card-img-frame">
                  <img
                    className="search-page-frame-suggest-content-group-item-card-img"
                    src="/images/iPhone_15_Pro_Blue_Titanium_1.png"
                    alt="suggestion"
                  />
                </div>
                <Link
                  style={{ textDecoration: "none" }}
                  className="search-page-frame-suggest-content-group-item-card-text"
                >
                  โทรศัพท์
                </Link>
              </div>
              <div className="search-page-frame-suggest-content-group-item-card">
                <div className="search-page-frame-suggest-content-group-item-card-img-frame">
                  <img
                    className="search-page-frame-suggest-content-group-item-card-img"
                    src="/images/iPhone_15_Pro_Blue_Titanium_1.png"
                    alt="suggestion"
                  />
                </div>
                <Link
                  style={{ textDecoration: "none" }}
                  className="search-page-frame-suggest-content-group-item-card-text"
                >
                  โทรศัพท์
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="search-page-frame-content">
          <Dropdown options={options} />
          <div className="search-page-frame-content-all">
            <div className="search-page-frame-content-all-filter">
              <div className="search-page-frame-content-all-filter-condition">
                <div className="search-page-frame-content-all-filter-condition-header">
                  ประเภทสินค้า
                </div>
                <div className="search-page-frame-content-all-filter-condition-group-check row">
                  {productType.map((item) => (
                    <FormCheck
                      key={item.value}
                      className="search-page-frame-content-all-filter-condition-group-check-box-text"
                      label={item.label}
                      onClick={() => handleFormProductType(item.label)}
                    />
                  ))}
                </div>
              </div>
              <div className="search-page-frame-content-all-filter-category">
                <div className="search-page-frame-content-all-filter-category-header">
                  หมวดหมู่
                </div>
                <SideBarCategories cateList={categories} />
              </div>
              <div className="search-page-frame-content-all-filter-price">
                <div className="search-page-frame-content-all-filter-price-header">
                  ราคา
                </div>
                <div className="search-page-frame-content-all-filter-price-filter">
                  <Form className="search-page-frame-content-all-filter-price-filter-lower">
                    <FormControl
                      className="search-page-frame-content-all-filter-price-filter-lower-text"
                      type="number"
                      placeholder="ราคาเริ่มต้น"
                      value={lowerPrice}
                      onChange={(e) => {
                        setLowerPrice(e.target.value);
                      }}
                    />
                  </Form>
                  {/* <div className="search-page-frame-content-all-filter-price-filter-line"></div> */}
                  <Form className="search-page-frame-content-all-filter-price-filter-upper">
                    <FormControl
                      className="search-page-frame-content-all-filter-price-filter-upper-text"
                      type="number"
                      placeholder="ราคาสูงสุด"
                      value={upperPrice}
                      onChange={(e) => {
                        setUpperPrice(e.target.value);
                      }}
                    />
                  </Form>
                </div>
                <button
                  className="btn-small-primary kanit-paragraphMedium"
                  onClick={handleFilterPrice}
                >
                  ตกลง
                </button>
              </div>
              <div className="search-page-frame-content-all-filter-delivery">
                <div className="search-page-frame-content-all-filter-delivery-header">
                  ส่งจาก
                </div>
                <div className="search-page-frame-content-all-filter-delivery-group-check row">
                  {regionDelivery.map((item) => (
                    <FormCheck
                      key={item.value}
                      className="search-page-frame-content-all-filter-condition-group-check-box-text"
                      label={item.label}
                      onClick={() => handleRegion(item.label)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="search-page-frame-content-all-group-card">

              <div className="search-result-itemcard">
                <div className="search-header-navigate">
                  <label className="search-page-group-card-header kanit-Display-Small-R">
                    ขายสินค้า
                  </label>
                  {/* <Link
                    className="group-card-icon-other"
                    to="/allproduct/interest"
                  >
                    <div className="group-card-header-other">เพิ่มเติม</div>
                    <img className="icon-arrow-right-24" src={chevronRightT} />
                  </Link> */}
                </div>

                <div className="search-page-frame-content-all-group-card-frame">
                  {threeItemSell.map((group, groupIndex) => (
                    <div className="all-group-card">
                      {group.map((item, index) => (
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
                  ))}
                </div>
              </div>

              <div className="search-result-itemcard">
                <div className="search-header-navigate">
                  <label className="search-page-group-card-header kanit-Display-Small-R">
                    รับซื้อสินค้า
                  </label>
                  {/* <Link
                    className="group-card-icon-other"
                    to="/allproduct"
                  >
                    <div className="group-card-header-other">เพิ่มเติม</div>
                    <img className="icon-arrow-right-24" src={chevronRightT} />
                  </Link> */}
                </div>

                <div className="search-page-frame-content-all-group-card-frame">
                  {threeItemRubbuy.map((group, groupIndex) => (
                    <div className="all-group-card">
                      {group.map((item, index) => (
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
                  ))}
                </div>
              </div>

              <div className="search-result-itemcard">
                <div className="search-header-navigate">
                  <label className="search-page-group-card-header kanit-Display-Small-R">
                    บริจาคสินค้า
                  </label>
                  {/* <Link
                    className="group-card-icon-other"
                    to="/allproduct/donate"
                  >
                    <div className="group-card-header-other">เพิ่มเติม</div>
                    <img className="icon-arrow-right-24" src={chevronRightT} />
                  </Link> */}
                </div>

                <div className="search-page-frame-content-all-group-card-frame">
                  {threeItemDonate.map((group, groupIndex) => (
                    <div className="all-group-card">
                      {group.map((item, index) => (
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
                  ))}
                </div>
              </div>

              <div className="search-result-itemcard">
                <div className="search-header-navigate">
                  <label className="search-page-group-card-header kanit-Display-Small-R">
                    การขอรับบริจาคสินค้า
                  </label>
                  {/* <Link
                    className="group-card-icon-other"
                    to="/allproduct/recieve"
                  >
                    <div className="group-card-header-other">เพิ่มเติม</div>
                    <img className="icon-arrow-right-24" src={chevronRightT} />
                  </Link> */}
                </div>

                <div className="search-page-frame-content-all-group-card-frame">
                  {threeItemRecieve.map((group, groupIndex) => (
                    <div className="all-group-card">
                      {group.map((item, index) => (
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

export default Search;
