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
      <Row style={{ width: "100%", backgroundColor: "" }}>
        <Col
          md={2}
          xs={8}
          style={{ height: "40px", textAlign: "center" }}
          className="Nav-item"
        >
          <Container>
            <Navbar.Brand href="/">Secondo</Navbar.Brand>
          </Container>
        </Col>
        <Col md={8} xs={8}>
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
        <Col
          md={2}
          xs={2}
          style={{
            backgroundColor: "",
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 17C12.0001 17.5046 11.8096 17.9906 11.4665 18.3605C11.1234 18.7305 10.6531 18.9572 10.15 18.995L9.99997 19H7.99997C7.49539 19.0002 7.0094 18.8096 6.63942 18.4665C6.26944 18.1234 6.04281 17.6532 6.00497 17.15L5.99997 17H12ZM8.99997 9.54067e-10C10.8149 -2.9945e-05 12.559 0.704894 13.8642 1.96607C15.1694 3.22726 15.9337 4.94609 15.996 6.76L16 7V10.764L17.822 14.408C17.9015 14.567 17.9413 14.7429 17.9379 14.9206C17.9346 15.0984 17.8882 15.2727 17.8028 15.4286C17.7174 15.5845 17.5955 15.7174 17.4475 15.8158C17.2994 15.9143 17.1298 15.9754 16.953 15.994L16.838 16H1.16197C0.984135 16.0001 0.808937 15.957 0.651392 15.8745C0.493846 15.792 0.358649 15.6725 0.257388 15.5264C0.156126 15.3802 0.091818 15.2116 0.0699749 15.0351C0.0481318 14.8586 0.0694047 14.6795 0.131971 14.513L0.177971 14.408L1.99997 10.764V7C1.99997 5.14348 2.73747 3.36301 4.05022 2.05025C5.36298 0.737498 7.14346 9.54069e-10 8.99997 9.54067e-10ZM8.99997 2C7.71151 2.00007 6.47281 2.49754 5.54219 3.38866C4.61158 4.27978 4.06089 5.49575 4.00497 6.783L3.99997 7V10.764C3.99998 11.012 3.95386 11.2579 3.86397 11.489L3.78897 11.659L2.61897 14H15.382L14.212 11.658C14.101 11.4363 14.0321 11.1959 14.009 10.949L14 10.764V7C14 5.67392 13.4732 4.40215 12.5355 3.46447C11.5978 2.52678 10.3261 2 8.99997 2Z"
                fill="#00243D"
              />
            </svg>
          </div>

          <div
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M17.0001 9C17.0001 6.87827 16.1573 4.84344 14.657 3.34315C13.1567 1.84285 11.1219 1 9.00012 1C6.87839 1 4.84356 1.84285 3.34327 3.34315C1.84297 4.84344 1.00012 6.87827 1.00012 9V14.09C1.00012 14.938 1.00012 15.36 1.12612 15.699C1.22631 15.9676 1.38308 16.2116 1.58581 16.4143C1.78854 16.617 2.03249 16.7738 2.30112 16.874C2.64012 17 3.06312 17 3.91012 17H9.00012C11.1219 17 13.1567 16.1571 14.657 14.6569C16.1573 13.1566 17.0001 11.1217 17.0001 9Z"
                stroke="#00243D"
                stroke-width="2"
              />
              <path
                d="M12.0001 8H6.00012M9.00012 12H6.00012"
                stroke="#00243D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <Button href="/signin" onclick="activateLasers()">เข้าสู่ระบบ</Button>

          <div
            style={{
              backgroundColor: "black",
              height: "40px",
              width: "40px",
              borderRadius: "24px",
            }}
          ></div>
        </Col>
      </Row>
      <Row
        style={{
          backgroundColor: "",
          padding: "0",
          width: "100%",
        }}
      >
        <Nav
          className="me-auto justify-content-center"
          style={{ padding: "0" }}
        >
          <Nav.Link style={{paddingLeft: "16px", paddingRight: "16px"}} href="#home">ประกาศขายบน Secondo</Nav.Link>
          <Nav.Link style={{paddingLeft: "16px", paddingRight: "16px"}} href="#features">ชื่นชอบ</Nav.Link>
          <Nav.Link style={{paddingLeft: "16px", paddingRight: "16px"}} href="#pricing">แชท</Nav.Link>
          <Nav.Link style={{paddingLeft: "16px", paddingRight: "16px"}} href="#pricing">สินค้าน่าสนใจ</Nav.Link>
          <Nav.Link style={{paddingLeft: "16px", paddingRight: "16px"}} href="#pricing">รับซื้อ</Nav.Link>
          <Nav.Link style={{paddingLeft: "16px", paddingRight: "16px"}} href="#pricing">บริจาค</Nav.Link>
          <Nav.Link style={{paddingLeft: "16px", paddingRight: "16px"}} href="#pricing">ขอรับบริจาค</Nav.Link>
          <Nav.Link style={{paddingLeft: "16px", paddingRight: "16px"}} href="#pricing">ประมูล</Nav.Link>
        </Nav>
      </Row>
    </Navbar>
  );
}

export default Index;
