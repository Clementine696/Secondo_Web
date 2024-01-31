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

        <div className="home-slide-banner">
          {/* <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block"
                src="https://png.pngtree.com/background/20230619/original/pngtree-lebanese-e-commerce-visualized-in-3d-for-online-platforms-and-social-picture-image_3761208.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlmWblTTk07WNyWkNcgojpIiMKwMoMSqZ-aw&usqp=CAU"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src="https://imageio.forbes.com/specials-images/imageserve/5d95d03767dd830006a295b6/GETTY/960x0.jpg?format=jpg&width=960"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel> */}
          <BannerSlide />

        </div>

        <div className="FrameCate">
          <div className="TopicCate">หมวดหมู่</div>
          <div className="GroupCate row">
            <CateCard />
            <CateCard />
            <CateCard />
            <CateCard />
            <CateCard />
            <CateCard />
            <CateCard />
            <CateCard />
          </div>
        </div>

        <div className="GroupCard">
          <div className="TopicGroup">
            <div className="div-2 pull-left">สินค้าน่าสนใจ</div>
            <div className="div-3 pull-right">เพิ่มเติม</div>
          </div>
          <div className="div-4">
            <div className="div-5" />
          </div>
          <div className="div-6">
            <div className="div-7">
              <div className="RowCard row">
                <div className="col-sm-3">
                  {" "}
                  <ItemCard />{" "}
                </div>
                <div className="col-sm-3">
                  {" "}
                  <ItemCard />{" "}
                </div>
                <div className="col-sm-3">
                  {" "}
                  <ItemCard />{" "}
                </div>
                <div className="col-sm-3">
                  {" "}
                  <ItemCard />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="GroupCard">
          <div className="TopicGroup">
            <div className="div-2 pull-left">สินค้าบริจาคใหม่</div>
            <div className="div-3 pull-right">เพิ่มเติม</div>
          </div>
          <div className="div-4">
            <div className="div-5" />
          </div>
          <div className="div-6">
            <div className="div-7">
              <div className="RowCard row">
                <div className="col-sm-3">
                  {" "}
                  <ItemCard />{" "}
                </div>
                <div className="col-sm-3">
                  {" "}
                  <ItemCard />{" "}
                </div>
                <div className="col-sm-3">
                  {" "}
                  <ItemCard />{" "}
                </div>
                <div className="col-sm-3">
                  {" "}
                  <ItemCard />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="GroupCard">
          <div className="TopicGroup">
            <div className="div-2 pull-left">สินค้ารับบริจาค</div>
            <div className="div-3 pull-right">เพิ่มเติม</div>
          </div>
          <div className="div-4">
            <div className="div-5" />
          </div>
          <div className="div-6">
            <div className="div-7">
              <div className="RowCard row">
                <div className="col-sm-3">
                  {" "}
                  <ItemCard />{" "}
                </div>
                <div className="col-sm-3">
                  {" "}
                  <ItemCard />{" "}
                </div>
                <div className="col-sm-3">
                  {" "}
                  <ItemCard />{" "}
                </div>
                <div className="col-sm-3">
                  {" "}
                  <ItemCard />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
