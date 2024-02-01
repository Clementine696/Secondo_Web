import React from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import Carousel from 'react-bootstrap/Carousel';
import ItemCard from "../../components/UI/ItemCard";
import CateCard from "../../components/UI/CategoryCard";
import BannerSlide from "../../components/UI/Banner";
import "./index.css";

function Home() {
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
            <div className="header-category">หมวดหมู่</div>
            <div className="group-category row">
              <CateCard />
              <CateCard />
              <CateCard />
              <CateCard />
              <CateCard />
              <CateCard />
              <CateCard />
              <CateCard />
            </div>
            <div></div>
          </div>
        </div>

        <div className="group-card">
          <div className="group-card-header-item">
            <div className="group-card-header">
              <div className="group-card-header-topic">สินค้าน่าสนใจ</div>
              <div className="group-card-header-other">เพิ่มเติม</div>
            </div>
            <div className="group-card-item-line-frame">
              <div className="group-card-item-line" />
            </div>
            <div className="group-card-item">
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </div>
          </div>
        </div>

        <div className="group-card">
          <div className="group-card-header-item">
            <div className="group-card-header">
              <div className="group-card-header-topic">สินค้าบริจาคใหม่</div>
              <div className="group-card-header-other">เพิ่มเติม</div>
            </div>
            <div className="group-card-item-line-frame">
              <div className="group-card-item-line" />
            </div>
            <div className="group-card-item">
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </div>
          </div>
        </div>

        <div className="group-card">
          <div className="group-card-header-item">
            <div className="group-card-header">
              <div className="group-card-header-topic">สินค้ารับบริจาค</div>
              <div className="group-card-header-other">เพิ่มเติม</div>
            </div>
            <div className="group-card-item-line-frame">
              <div className="group-card-item-line" />
            </div>
            <div className="group-card-item">
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}

export default Home;
