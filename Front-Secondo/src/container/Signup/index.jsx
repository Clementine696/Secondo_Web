import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input";
import { Link } from "react-router-dom";

import "./index.css";
import "../../styles.css";
import "../../components/UI/Button/index.css";

function Signin() {
  return (
    <Container className="main-content">
      <Row className="Row-content">
        <Col className="Col-left">
          <div className="Content-left">
            <div
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "green",
              }}
            ></div>
            <div className="kanit-Display-Large">
              ซื้อขายและบริจาคสินค้ามือสอง
            </div>
            <div className="kanit-paragraphVerySmall">
              ส่งต่อสิ่งของที่คุณไม่ใช้งาน <br />
              เพื่อเป็นประโยชน์ให้คนที่ต้องการ
            </div>
            <br />
            <div className="kanit-paragraphVerySmall">
              : <br />:
            </div>
          </div>
        </Col>
        <Col className="Col-right">
          <Row className="m-0">
            <div className="Title-sign">
              <div className="kanit-Display-Large space-padding-bot font-color">
                Secondo
              </div>
              <div className="kanit-Display-Medium-R space-padding-bot font-color">
                สร้างบัญชีของคุณ
              </div>
            </div>

            <Col className="p-0">
              <Form>
                <Input
                  Label="อีเมล"
                  placeholder="อีเมล"
                  value=""
                  type="email"
                  errorMessage=""
                  onChange={() => {}}
                />

                <Input
                  Label="ยืนยันอีเมล"
                  placeholder="ยืนยันอีเมล"
                  value=""
                  type="confirm-email"
                  errorMessage=""
                  onChange={() => {}}
                />

                <Input
                  Label="รหัสผ่าน"
                  placeholder="รหัสผ่าน"
                  value=""
                  type="password"
                  errorMessage=""
                  onChange={() => {}}
                />

                <Input
                  Label="ยืนยันรหัสผ่าน"
                  placeholder="ยืนยันรหัสผ่าน"
                  value=""
                  type="confirm-password"
                  errorMessage=""
                  onChange={() => {}}
                />

                {/* <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalCheck"
                  >
                    <Col>
                      <Form.Check label="Remember me" />
                    </Col>
                  </Form.Group> */}

                <Row className="mb-3">
                  <Col>
                    <button
                      className="btn-small-primary kanit-paragraphMedium"
                      type="submit"
                    >
                      สร้างบัญชี
                    </button>
                  </Col>
                </Row>

                {/* <Row className="mb-3">
                  <div className="kanit-paragraphSmall horizontal-divider">
                    or
                  </div>
                </Row> */}

                {/* <Row className="mb-3">
                  <Col>
                    <button className="btn-small-secondary kanit-paragraphMedium">
                      เข้าสู่ระบบด้วย Google
                    </button>
                  </Col>
                </Row> */}

                {/* <Row className="content-3">
                  <div className="agreement-law-text kanit-paragraphSmall">
                    <div>การดำเนินการต่อแสดงว่าคุณได้อ่านและยอมรับ</div>
                    <Link className="" to="#pricing">
                      ข้อกำหนดการใช้งาน
                    </Link>{" "}
                    และ{" "}
                    <Link className="" to="#pricing">
                      นโยบายความเป็นส่วนตัว
                    </Link>
                  </div>

                  <div className="agreement-law-text kanit-paragraphSmall">
                    ยังไม่มีบัญชี Secondo ใช่ไหม{" "}
                    <Link className="" to="/signup">
                      สร้างบัญชีใหม่
                    </Link>
                  </div>
                </Row> */}
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Signin;