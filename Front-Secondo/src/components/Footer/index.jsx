import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

import facebook from "../../icon/facebook.png";
import instagram from "../../icon/instagram.png";
import line from "../../icon/line.png";
import twitter from "../../icon/twitter.png";

import "./index.css";
import "../../styles.css";

function Index() {
  return (
    <div className="footer">
      <Col className="col-about-follow-us">
        <Row className="row-content-line-1">
          <div className="kanit-H3 font-color">เกี่ยวกับ SECONDO</div>
          <Link className="link-style kanit-paragraphSmall" to="#about-us">
            เกี่ยวกับเรา
          </Link>
        </Row>
        <Row className="row-follow-me">
          <div className="kanit-H3 font-color">ติดตามเรา</div>
          <Row className="row-social-media">
            <Link className="touch-point" to="#facebook">
              <img className="icon-social-media" src={facebook} />
            </Link>

            <Link className="touch-point" to="#X">
              <img className="icon-social-media" src={twitter} />
            </Link>

            <Link className="touch-point" to="#ig">
              <img className="icon-social-media" src={instagram} />
            </Link>

            <Link className="touch-point" to="#line">
              <img className="icon-social-media" src={line} />
            </Link>
          </Row>
        </Row>
      </Col>

      <Col className="col-help-center">
        <Row className="row-content-line-1">
          <div className="kanit-H3 font-color">ศูนย์ช่วยเหลือ</div>

          <div>
            <Link className="link-style kanit-paragraphSmall" to="#rule">
              ข้อกำหนดเงื่อนไขการใช้งาน
            </Link>{" "}
            <br />
            <Link className="link-style kanit-paragraphSmall" to="#policy">
              นโยบายความเป็นส่วนตัว
            </Link>
          </div>
        </Row>
      </Col>

      <Col className="col-contact-us">
        <Row className="row-content-line-1">
          <div className="kanit-H3 font-color">ติดต่อเรา</div>

          <div>
            <div className="kanit-paragraphSmall contact-space">
              ที่อยู่บริษัท
            </div>

            <div className="contact-email kanit-paragraphSmall contact-space">
              <svg
                className="icon-contact-us"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M12.9565 2.71094H3.04313C2.6011 2.71094 2.17718 2.88653 1.86462 3.19909C1.55206 3.51165 1.37646 3.93558 1.37646 4.3776V11.6243C1.37646 12.0663 1.55206 12.4902 1.86462 12.8028C2.17718 13.1153 2.6011 13.2909 3.04313 13.2909H12.9565C13.3985 13.2909 13.8224 13.1153 14.135 12.8028C14.4475 12.4902 14.6231 12.0663 14.6231 11.6243V4.3776C14.6231 3.93558 14.4475 3.51165 14.135 3.19909C13.8224 2.88653 13.3985 2.71094 12.9565 2.71094ZM3.04313 3.3776H12.9565C13.2088 3.37688 13.452 3.47228 13.6365 3.64441C13.821 3.81654 13.9264 4.05666 13.9431 4.30844C12.2965 5.18844 10.6431 6.06177 8.9898 6.94177C8.76612 7.08195 8.53614 7.1961 8.2898 7.29094C8.0964 7.3291 7.89709 7.32566 7.70513 7.28083C7.51317 7.236 7.33295 7.15081 7.17647 7.03094C6.2298 6.53094 5.28313 6.02427 4.34313 5.52427C3.58313 5.12427 2.8098 4.7176 2.0498 4.31094C2.06526 4.05808 2.17668 3.82067 2.3613 3.6472C2.54592 3.47373 2.7898 3.3773 3.04313 3.3776ZM13.9565 11.6243C13.9565 11.8895 13.8511 12.1438 13.6636 12.3314C13.476 12.5189 13.2217 12.6243 12.9565 12.6243H3.04313C2.77792 12.6243 2.52356 12.5189 2.33602 12.3314C2.14849 12.1438 2.04313 11.8895 2.04313 11.6243V5.0676C3.61646 5.89427 5.18313 6.73427 6.75646 7.5676C7.03756 7.73994 7.34018 7.87444 7.65647 7.9676C8.11939 8.04287 8.59383 7.94561 8.9898 7.69427C9.95646 7.1876 10.9165 6.67427 11.8831 6.1676C12.5765 5.79427 13.2631 5.43427 13.9565 5.0676V11.6243Z"
                  fill="#00243D"
                />
              </svg>{" "}
              Emil@Email.com
            </div>
            <div className="contact-tel kanit-paragraphSmall contact-space">
              <svg
                className="icon-contact-us"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13.8494 10.0183L10.8969 8.69517C10.7631 8.63785 10.6171 8.61481 10.4722 8.62812C10.3273 8.64144 10.188 8.69069 10.0669 8.77142C10.0546 8.77931 10.0429 8.78808 10.0319 8.79767L8.48876 10.1102C8.47275 10.1189 8.45492 10.1238 8.4367 10.1244C8.41848 10.1251 8.40035 10.1215 8.38376 10.1139C7.39188 9.63517 6.36438 8.61392 5.88376 7.6358C5.87575 7.61945 5.87159 7.6015 5.87159 7.5833C5.87159 7.5651 5.87575 7.54714 5.88376 7.5308L7.20063 5.9683C7.21008 5.95674 7.21885 5.94463 7.22688 5.93205C7.3065 5.81049 7.35459 5.67101 7.36681 5.52622C7.37903 5.38142 7.355 5.23586 7.29688 5.10267L5.98313 2.15517C5.90853 1.98118 5.7795 1.83607 5.61542 1.74164C5.45134 1.6472 5.26106 1.60853 5.07313 1.63142C4.2564 1.7388 3.5067 2.13988 2.96415 2.75974C2.42159 3.37959 2.1233 4.17579 2.12501 4.99955C2.12501 9.8933 6.10626 13.8745 11 13.8745C11.8237 13.8761 12.6199 13.5778 13.2397 13.0353C13.8595 12.4927 14.2606 11.7431 14.3681 10.9264C14.391 10.7394 14.3528 10.55 14.2594 10.3863C14.1659 10.2227 14.0221 10.0936 13.8494 10.0183ZM11 13.1245C6.52001 13.1245 2.87501 9.47955 2.87501 4.99955C2.87292 4.35825 3.10438 3.73814 3.52616 3.25505C3.94794 2.77197 4.53117 2.45898 5.16688 2.37455H5.18126C5.20644 2.37502 5.2309 2.38309 5.25142 2.3977C5.27194 2.41231 5.28757 2.43278 5.29626 2.45642L6.61501 5.4008C6.62253 5.41717 6.62642 5.43497 6.62642 5.45298C6.62642 5.471 6.62253 5.4888 6.61501 5.50517L5.29563 7.07142C5.28579 7.0826 5.27681 7.09451 5.26876 7.10705C5.1862 7.23308 5.13758 7.3783 5.12762 7.52864C5.11765 7.67898 5.14668 7.82934 5.21188 7.96517C5.76626 9.10017 6.91001 10.2352 8.05751 10.7895C8.19413 10.8544 8.34523 10.8827 8.49606 10.8718C8.64689 10.8608 8.79231 10.8109 8.91813 10.727C8.93001 10.7189 8.94188 10.7102 8.95313 10.7008L10.4956 9.3883C10.5109 9.38011 10.5277 9.37532 10.5449 9.37424C10.5622 9.37316 10.5795 9.37582 10.5956 9.38205L13.5488 10.7052C13.5729 10.7154 13.5932 10.733 13.6067 10.7555C13.6203 10.7779 13.6265 10.804 13.6244 10.8302C13.5404 11.4662 13.2277 12.0498 12.7447 12.4721C12.2617 12.8943 11.6415 13.1263 11 13.1245Z"
                  fill="#00243D"
                />
              </svg>{" "}
              088-8888888
            </div>
          </div>
        </Row>
      </Col>

      <Col className="col-download-app">
        <Row className="row-content-line-1">
          <div className="kanit-H3 font-color">ดาวโหลดแอปพลิเคชั่น</div>
        </Row>
      </Col>
    </div>
  );
}

export default Index;
