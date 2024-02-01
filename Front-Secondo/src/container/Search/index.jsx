import React, { useCallback } from "react";
import Layout from "../../components/Layout";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Dropdown from "../../components/UI/Dropdown";
import ItemCard from "../../components/UI/ItemCard";

import "./index.css";
import "../../styles.css";

const options = [
  { value: "option1", label: "ความนิยม" },
  { value: "option2", label: "ล่าสุด" },
  { value: "option3", label: "ราคา: มากไปน้อย" },
  { value: "option4", label: "ราคา: น้อยไปมาก" },
];

function Search() {
  return (
    <Layout>
      <div className="search-content">
        <Row className="Frame-top">
          <div className="Search-title-amount">ค้นหา คำค้นหา (100)</div>
          <div className="suggest-search">
            <div className="suggest-item">
              <img
                className="img-search"
                src="/images/iPhone_15_Pro_Blue_Titanium_1.png"
                alt="suggestion"
              />
            </div>

            <div className="suggest-item">
              <img
                className="img-search"
                src="/images/iPhone_15_Pro_Blue_Titanium_1.png"
                alt="suggestion"
              />
            </div>

            <div className="suggest-item">
              <img
                className="img-search"
                src="/images/iPhone_15_Pro_Blue_Titanium_1.png"
                alt="suggestion"
              />
            </div>
          </div>
        </Row>

        <Row className="search-result-content">
          <Row className="row-sort-button">
            <Dropdown options={options} />
          </Row>
          <Row className="frame-result">
            <Col className="filter"></Col>
            <Col className="content">
              <Row>
                <ItemCard />
                <ItemCard />
                <ItemCard />
              </Row>
            </Col>
          </Row>
        </Row>
      </div>
    </Layout>
  );
}

export default Search;
