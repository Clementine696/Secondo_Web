import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, NavDropdown, Dropdown } from "react-bootstrap";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import DropdownItem from "../../components/UI/DropdownProfile";

import user from "../../icon/user.png";
import bag from "../../icon/bag.png";
import tag from "../../icon/tag.png";
import donate from "../../icon/donate.png";
import receive from "../../icon/receive.png";
import bid from "../../icon/bid.png";
import co2 from "../../icon/co2.png";
import like from "../../icon/like.png";
import setting from "../../icon/setting.png";
import logouticon from "../../icon/logout.png";
import searchb from "../../icon/search-b.png";
import chevronDown from "../../icon/chevron-down.png";

import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../actions";

import userPic from "../../../public/images/userprofile.jpg";

import "./index.css";
import "../../styles.css";

const userprofile = {
  png: userPic,
  name: "Ttb",
  credit: 12,
} 

function Index() {
  const { png, name, credit } = userprofile;

  //login logout
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signout());
  };

  const renderLoggedInLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <span className="nav-link" onClick={logout}>
            Sign out
          </span>
        </li>
      </Nav>
    );
  };

  const renderNonLoggedInLinks = () => {
    return (
      <Link className="btn-signin" to="/signin">
        <button
          className="btn-small-primary kanit-paragraphMedium"
          onclick="activateLasers()"
        >
          เข้าสู่ระบบ
        </button>
      </Link>
    );
  };

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        // console.log(menuRef.current)
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <Navbar collapseOnSelect expand="lg" className="Navbar">
      <Row className="w-100">
        <Col md={3} xs={3} className="Nav-item">
          <Container>
            <Navbar.Brand className="kanit-Display-Large-R nav-brand" href="/">
              Secondo
            </Navbar.Brand>
          </Container>
        </Col>
        <Col md={6} xs={6}>
          <Form className="search-container">
            <Form.Control
              className="search-bar kanit-paragraphSmall"
              type="text"
              placeholder="ค้นหา สินค้าที่คุณสนใจ"
            />
            <img src={searchb} className="search-icon"></img>
          </Form>
        </Col>

        <Col md={3} xs={3} className="right-menu">
          <div className="right-width-menu">
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

            {/* <div className="icon-menu">
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
            </div> */}
            {/* <Link className="btn-signin" to="/signin">
              <button
                className="btn-small-primary kanit-paragraphMedium"
                onclick="activateLasers()"
              >
                เข้าสู่ระบบ
              </button>
            </Link> */}
            {auth.authenticate
              ? renderLoggedInLinks()
              : renderNonLoggedInLinks()}

            <div className="menu-container" ref={menuRef}>
              <div
                className="menu-trigger menu-dropdown-profile"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <img
                  className="profile-img"
                  src={png}
                ></img>
                <div>
                  <p className="kanit-paragraphtextMedium">{name}</p>
                  <p className="kanit-paragraphSmall">{credit} Credit</p>
                </div>
                <div className="icon-profile">
                  <img src={chevronDown}></img>
                </div>
              </div>

              <div
                className={`dropdown-menu-profile ${
                  open ? "active" : "inactive"
                }`}
              >
                <ul className="kanit-paragraphtextMedium">
                  <DropdownItem
                    img={user}
                    text={"ข้อมูลส่วนตัว"}
                    link={"/profile"}
                  />
                  <DropdownItem
                    img={bag}
                    text={"การซื้อของฉัน"}
                    link={"/buystate"}
                  />
                  <DropdownItem
                    img={tag}
                    text={"การขายของฉัน"}
                    link={"/sellstate"}
                  />
                  <DropdownItem
                    img={donate}
                    text={"การบริจาคของฉัน"}
                    link={"/donatestate"}
                  />
                  <DropdownItem
                    img={receive}
                    text={"ขอรับบริจาคของฉัน"}
                    link={"/receivestate"}
                  />
                  {/* <DropdownItem
                    img={bid}
                    text={"การประมูลของฉัน"}
                    link={"/bidstate"}
                  /> */}
                  <DropdownItem
                    img={co2}
                    text={"แต้มคะแนน Carbon credits"}
                    link={"/co2point"}
                  />
                  <DropdownItem img={like} text={"รายการโปรด"} link={"/fav"} />
                  <DropdownItem
                    img={setting}
                    text={"ตั้งค่า"}
                    link={"/setting"}
                  />
                  <DropdownItem
                    img={logouticon}
                    text={"ออกจากระบบ"}
                    link={"/"}
                  />
                </ul>
              </div>
            </div>

            {/* <div className="icon-hamburger">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_2385_16209)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 5.625C0 5.32663 0.118526 5.04048 0.329505 4.8295C0.540483 4.61853 0.826631 4.5 1.125 4.5H22.875C23.1734 4.5 23.4595 4.61853 23.6705 4.8295C23.8815 5.04048 24 5.32663 24 5.625C24 5.92337 23.8815 6.20952 23.6705 6.4205C23.4595 6.63147 23.1734 6.75 22.875 6.75H1.125C0.826631 6.75 0.540483 6.63147 0.329505 6.4205C0.118526 6.20952 0 5.92337 0 5.625ZM0 12C0 11.7016 0.118526 11.4155 0.329505 11.2045C0.540483 10.9935 0.826631 10.875 1.125 10.875H22.875C23.1734 10.875 23.4595 10.9935 23.6705 11.2045C23.8815 11.4155 24 11.7016 24 12C24 12.2984 23.8815 12.5845 23.6705 12.7955C23.4595 13.0065 23.1734 13.125 22.875 13.125H1.125C0.826631 13.125 0.540483 13.0065 0.329505 12.7955C0.118526 12.5845 0 12.2984 0 12ZM1.125 17.25C0.826631 17.25 0.540483 17.3685 0.329505 17.5795C0.118526 17.7905 0 18.0766 0 18.375C0 18.6734 0.118526 18.9595 0.329505 19.1705C0.540483 19.3815 0.826631 19.5 1.125 19.5H22.875C23.1734 19.5 23.4595 19.3815 23.6705 19.1705C23.8815 18.9595 24 18.6734 24 18.375C24 18.0766 23.8815 17.7905 23.6705 17.5795C23.4595 17.3685 23.1734 17.25 22.875 17.25H1.125Z"
                    fill="#00243D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2385_16209">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div> */}
          </div>
        </Col>
      </Row>
      <Row className="second-nav kanit-paragraphtextMedium">
        <Nav className="me-auto justify-content-center p-0">
          <Link to="/sellstate/additem" className="text-menu" href="#home">
            ประกาศขายบน Secondo
          </Link>
          <Link to="/fav" className="text-menu" href="#features">
            รายการโปรด
          </Link>
          {/* <Link to="" className="text-menu" href="#pricing">
            แชท
          </Link> */}
          <Link to="" className="text-menu" href="#pricing">
            สินค้าน่าสนใจ
          </Link>
          <Link to="" className="text-menu" href="#pricing">
            รับซื้อ
          </Link>
          <Link to="" className="text-menu" href="#pricing">
            บริจาค
          </Link>
          <Link to="" className="text-menu" href="#pricing">
            ขอรับบริจาค
          </Link>
        </Nav>
      </Row>
    </Navbar>
  );
}

export default Index;
