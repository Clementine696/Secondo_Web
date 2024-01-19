import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

import "./index.css";

function Index() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="Navbar"
      style={{
        padding: "8px 24px 8px 24px",
        alignItems: "center",
        backgroundColor: "#E7EEE8",
        flexFlow: "column",
      }}
    >
      <Row style={{ width: "100%" }}>
        <Col
          md={2}
          style={{ height: "40px", textAlign: "center" }}
          href="/"
          className="Nav-item"
        >
          Secondo
        </Col>
        <Col md={8}>
          <Form>
            <div className="Search-field">
              <div class="form-group">
                <Form.Control
                  className="Search"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
          </Form>
        </Col>
        <Col md={2} style={{ backgroundColor: "green" }}>
          hee
        </Col>
      </Row>
      <Row
        style={{
          backgroundColor: "",
          padding: "0",
          width: "100%",
        }}
      >
        <Nav className="me-auto justify-content-center" style={{padding: "0"}}>
          <Nav.Link href="#home">ประกาศขายบน Secondo</Nav.Link>
          <Nav.Link href="#features">ชื่นชอบ</Nav.Link>
          <Nav.Link href="#pricing">แชท</Nav.Link>
          <Nav.Link href="#pricing">สินค้าน่าสนใจ</Nav.Link>
          <Nav.Link href="#pricing">รับซื้อ</Nav.Link>
          <Nav.Link href="#pricing">บริจาค</Nav.Link>
          <Nav.Link href="#pricing">ขอรับบริจาค</Nav.Link>
          <Nav.Link href="#pricing">ประมูล</Nav.Link>
        </Nav>
      </Row>
    </Navbar>
  );
}

export default Index;
