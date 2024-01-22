import React from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import ItemCard from "../../components/UI/ItemCard";
import "./index.css";

function Home() {
  return (
    <Layout>
      <div className="BG">
        <div
          style={{ margin: "48px", padding: "48px" }}
          className="Title-admin text-center"
        >
          <h1>Welcome to Admin Dashboard</h1>
          <div className="GroupCard">
            <span className="span">
              <div className="div-2">สินค้าน่าสนใจ</div>
              <span className="span-2">
                <div className="div-3">เพิ่มเติม</div>
              </span>
            </span>
            <div className="div-4">
              <div className="div-5" />
            </div>
            <div className="div-6">
              <div className="div-7">
                <div className="column">
                  <ItemCard />
                  <ItemCard />
                  <ItemCard />
                  <ItemCard />
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
