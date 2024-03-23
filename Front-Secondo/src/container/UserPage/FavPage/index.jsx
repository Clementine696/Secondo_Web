import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./index.css";
import "../../../styles.css";
import "../../../components/UI/Button/index.css";
import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidemenu";

import productFav from "../../../../public/images/product.jpg";
import fav from "../../../icon/like-bold.png";

function Fav() {
  return (
    <Layout>
      <div className="user-page">
        <Sidebar />
        <div className="user-content">
          <div className="User-page-title kanit-Display-Large">รายการโปรด</div>

          <div className="profile-display">
            {/* item 1 */}
            <div className="item-fav">
              <img src={productFav} className="img-fav"></img>
              <div className="item-fav-detail">
                <div className="fav-title-seller-price">
                  <div className="title-product-fav kanit-paragraphMedium">
                    <p>
                      GATERON Milky Yellow PRO Switch (10ชิ้น/ซอง) 5 pin สวิตช์
                      Linear สำหรับ คีย์บอร์ด Mechanical keyboard Linear Switch
                    </p>
                    <p>99$</p>
                  </div>

                  <p className="seller-product-fav kanit-paragraphtextMedium">
                    ttb
                  </p>

                  <div className="status-product">
                    <div className="status-color green"></div>
                    <div className="kanit-paragraphSmall">ยังมีของ</div>
                  </div>
                </div>

                <div className="button-section kanit-paragraphMedium">
                  <button className="btn-small-primary">ซื้อ</button>
                  <button className="btn-small-secondary">
                    ไปที่หน้าร้านค้า
                  </button>
                  <button className="btn-fav">
                    <img src={fav} className="btn-fav-icon"></img>
                  </button>
                </div>
              </div>
            </div>

            {/* item 2 */}
            <div className="item-fav">
              <img src={productFav} className="img-fav"></img>
              <div className="item-fav-detail">
                <div className="fav-title-seller-price">
                  <div className="title-product-fav kanit-paragraphMedium">
                    <p>
                      GATERON Milky Yellow PRO Switch (10ชิ้น/ซอง) 5 pin สวิตช์
                      Linear สำหรับ คีย์บอร์ด Mechanical keyboard Linear Switch
                    </p>
                    <p>99$</p>
                  </div>

                  <p className="seller-product-fav kanit-paragraphtextMedium">
                    ttb
                  </p>

                  <div className="status-product">
                    <div className="status-color green"></div>
                    <div className="kanit-paragraphSmall">ยังมีของ</div>
                  </div>
                </div>

                <div className="button-section kanit-paragraphMedium">
                  <button className="btn-small-primary">ซื้อ</button>
                  <button className="btn-small-secondary">
                    ไปที่หน้าร้านค้า
                  </button>
                  <button className="btn-fav">
                    <img src={fav} className="btn-fav-icon"></img>
                  </button>
                </div>
              </div>
            </div>

            {/* item 3 */}
            <div className="item-fav">
              <img src={productFav} className="img-fav"></img>
              <div className="item-fav-detail">
                <div className="fav-title-seller-price">
                  <div className="title-product-fav kanit-paragraphMedium">
                    <p>
                      GATERON Milky Yellow PRO Switch (10ชิ้น/ซอง) 5 pin สวิตช์
                      Linear สำหรับ คีย์บอร์ด Mechanical keyboard Linear Switch
                    </p>
                    <p>99$</p>
                  </div>

                  <p className="seller-product-fav kanit-paragraphtextMedium">
                    ttb
                  </p>

                  <div className="status-product">
                    <div className="status-color green"></div>
                    <div className="kanit-paragraphSmall">ยังมีของ</div>
                  </div>
                </div>

                <div className="button-section kanit-paragraphMedium">
                  <button className="btn-small-primary">ซื้อ</button>
                  <button className="btn-small-secondary">
                    ไปที่หน้าร้านค้า
                  </button>
                  <button className="btn-fav">
                    <img src={fav} className="btn-fav-icon"></img>
                  </button>
                </div>
              </div>
            </div>

            {/* item 4 */}
            <div className="item-fav">
              <img src={productFav} className="img-fav"></img>
              <div className="item-fav-detail">
                <div className="fav-title-seller-price">
                  <div className="title-product-fav kanit-paragraphMedium">
                    <p>
                      GATERON Milky Yellow PRO Switch (10ชิ้น/ซอง) 5 pin สวิตช์
                      Linear สำหรับ คีย์บอร์ด Mechanical keyboard Linear Switch
                    </p>
                    <p>99$</p>
                  </div>

                  <p className="seller-product-fav kanit-paragraphtextMedium">
                    ttb
                  </p>

                  <div className="status-product">
                    <div className="status-color green"></div>
                    <div className="kanit-paragraphSmall">ยังมีของ</div>
                  </div>
                </div>

                <div className="button-section kanit-paragraphMedium">
                  <button className="btn-small-primary">ซื้อ</button>
                  <button className="btn-small-secondary">
                    ไปที่หน้าร้านค้า
                  </button>
                  <button className="btn-fav">
                    <img src={fav} className="btn-fav-icon"></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Fav;
