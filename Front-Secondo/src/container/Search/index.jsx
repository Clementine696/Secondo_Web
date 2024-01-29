import React, { useCallback } from "react";
import Layout from "../../components/Layout";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Dropdown from "../../components/UI/Dropdown";

import "./index.css";
import "../../styles.css";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

function Search() {
  // Define the handleSelect function
  const handleSelect = useCallback((selectedOption) => {
    console.log("Selected option:", selectedOption);
    // Do something with the selected option
  }, []);
  return (
    <Layout>
      <div className="search-content">
        <Row className="Frame-top">
          <div className="Search-title">ค้นหา คำค้นหา (100)</div>
          <div className="suggest-search">
            <div className="suggest-item">
              <img
                src="/images/iPhone_15_Pro_Blue_Titanium_1.png"
                alt="suggestion"
              />
            </div>

            <div className="suggest-item">
              <img
                src="/images/iPhone_15_Pro_Blue_Titanium_1.png"
                alt="suggestion"
              />
            </div>

            <div className="suggest-item">
              <img
                src="/images/iPhone_15_Pro_Blue_Titanium_1.png"
                alt="suggestion"
              />
            </div>
          </div>
        </Row>

        <Row className="frame-bottom">
          <Row>
            <Dropdown />
            {/* <Dropdown options={options} onSelect={handleSelect} /> */}
          </Row>
          <Row className="frame-result">
            <Col className="filter"></Col>
            <Col className="content"></Col>
          </Row>
        </Row>
      </div>
    </Layout>
  );
}

export default Search;
