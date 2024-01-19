import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

import "./index.css";
// import Signin from '../../container/Signin'
// import Signup from '../../container/Signup'

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
        flexFlow: "column"
      }}
    >
      <Row style={{width: "100%"}}>
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
      <Row style={{ backgroundColor: "pink" }}>Row 2</Row>
    </Navbar>
  );
}

export default Index;
