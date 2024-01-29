import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

import "./index.css";
import "../../styles.css";

function Index() {
  return (
    <Navbar collapseOnSelect expand="lg" className="Navbar">
      <Row className="w-100">
        <Col md={2} xs={8} className="Nav-item">
          <Container>
            <Navbar.Brand className="kanit-Display-Large-R" href="/">
              Secondo
            </Navbar.Brand>
          </Container>
        </Col>
        <Col md={8} xs={8} style={{display: ""}}>
          <Form className="search-container">
            <Form.Control
              className="search-bar kanit-paragraphSmall"
              type="text"
              placeholder="ค้นหา สินค้าที่คุณสนใจ"
            />
            <svg
              className="search-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.89605 2.00635e-08C7.47737 0.000120883 6.07928 0.339506 4.81844 0.989841C3.5576 1.64018 2.47056 2.5826 1.64802 3.73849C0.825473 4.89438 0.291278 6.23022 0.0899992 7.63455C-0.111279 9.03888 0.0261946 10.471 0.490952 11.8114C0.955709 13.1518 1.73427 14.3616 2.76169 15.3399C3.7891 16.3182 5.03557 17.0366 6.39711 17.4352C7.75864 17.8338 9.19576 17.901 10.5886 17.6313C11.9813 17.3615 13.2894 16.7626 14.4037 15.8845L18.2262 19.7069C18.4236 19.8976 18.688 20.0031 18.9624 20.0007C19.2369 19.9983 19.4994 19.8883 19.6934 19.6942C19.8875 19.5001 19.9976 19.2376 20 18.9632C20.0023 18.6887 19.8968 18.4243 19.7062 18.2269L15.8837 14.4044C16.9178 13.0926 17.5617 11.516 17.7417 9.85528C17.9216 8.19453 17.6304 6.51667 16.9013 5.01371C16.1722 3.51075 15.0347 2.24341 13.619 1.35674C12.2033 0.470072 10.5665 -0.000112145 8.89605 2.00635e-08ZM2.09261 8.8968C2.09261 7.09242 2.8094 5.36194 4.08529 4.08605C5.36118 2.81015 7.09166 2.09337 8.89605 2.09337C10.7004 2.09337 12.4309 2.81015 13.7068 4.08605C14.9827 5.36194 15.6995 7.09242 15.6995 8.8968C15.6995 10.7012 14.9827 12.4317 13.7068 13.7076C12.4309 14.9835 10.7004 15.7002 8.89605 15.7002C7.09166 15.7002 5.36118 14.9835 4.08529 13.7076C2.8094 12.4317 2.09261 10.7012 2.09261 8.8968Z"
                fill="#00243D"
              />
            </svg>
          </Form>
        </Col>
        <Col md={2} xs={2} className="right-menu">
          <div className="icon-menu">
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

          <div className="icon-menu">
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
          <Link to="/signin">
            <button
              className="btn-small-primary kanit-paragraphMedium"
              onclick="activateLasers()"
            >
              เข้าสู่ระบบ
            </button>
          </Link>

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
      <Row className="Second-Nav kanit-paragraphSmall">
        <Nav className="me-auto justify-content-center p-0">
          <Nav.Link className="Text-menu" href="#home">
            ประกาศขายบน Secondo
          </Nav.Link>
          <Nav.Link className="Text-menu" href="#features">
            ชื่นชอบ
          </Nav.Link>
          <Nav.Link className="Text-menu" href="#pricing">
            แชท
          </Nav.Link>
          <Nav.Link className="Text-menu" href="#pricing">
            สินค้าน่าสนใจ
          </Nav.Link>
          <Nav.Link className="Text-menu" href="#pricing">
            รับซื้อ
          </Nav.Link>
          <Nav.Link className="Text-menu" href="#pricing">
            บริจาค
          </Nav.Link>
          <Nav.Link className="Text-menu" href="#pricing">
            ขอรับบริจาค
          </Nav.Link>
          <Nav.Link className="Text-menu" href="#pricing">
            ประมูล
          </Nav.Link>
        </Nav>
      </Row>
    </Navbar>
  );
}

export default Index;
