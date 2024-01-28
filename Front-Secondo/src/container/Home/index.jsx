import React from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import ItemCard from "../../components/UI/ItemCard";
import CateCard from "../../components/UI/CategoryCard";
import "./index.css";

function Home() {
  return (
    <Layout>
      <div className="BG">
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
