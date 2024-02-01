import React from "react";
import Layout from "../../components/Layout";
import ItemCard from "../../components/UI/ItemCard";
import CateCard from "../../components/UI/CategoryCard";
import BannerSlide from "../../components/UI/Banner";
import "./index.css";

function Product() {
  return (
    <Layout>
      <div className="background-product-page">
        <div className="product-page-path-way">
          <div className="product-page-group-path-way">
            <div className="product-page-group-path-way-before-path">
              <div className="product-page-group-path-way-before-path-text">
                หน้าหลัก
              </div>
              <div className="product-page-group-path-way-before-path-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 18.001L13.5858 13.4152C14.3668 12.6341 14.3668 11.3678 13.5858 10.5868L9 6.00098"
                    stroke="#00243D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="product-page-group-path-way-before-path">
              <div className="product-page-group-path-way-before-path-text">
                เสื้อผ้า
              </div>
              <div className="product-page-group-path-way-before-path-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 18.001L13.5858 13.4152C14.3668 12.6341 14.3668 11.3678 13.5858 10.5868L9 6.00098"
                    stroke="#00243D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="product-page-group-path-way-last-path">
              เสื้อ COTTON แบรนด์ญี่ปุ่น
            </div>
          </div>
        </div>

        <div className="product-page-item-details">
          <div className="product-page-item-details-group-picture-seller">
            <div className="product-page-item-details-group-picture-seller-big-picture">
                <img 
                    src=""
                />
            </div>
            <div className="product-page-item-details-group-picture-seller-small-picture">

            </div>
            <div className="product-page-item-details-group-picture-seller-desc-seller">

            </div>
          </div>
          <div className="product-page-item-details-group-item-description"></div>
        </div>

        <div className="product-page-item-description"></div>

        <div className="product-page-item-group-card"></div>
      </div>
    </Layout>
  );
}

export default Product;
