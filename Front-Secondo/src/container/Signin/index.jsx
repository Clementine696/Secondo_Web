import React from "react";
import Layout from "../../components/Layout";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input";
import "./index.css";
import "../../styles.css";

function Signin() {
  return (
    <Layout>
      <Container>
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Col>
            <div
              style={{ margin: "48px", padding: "48px" }}
              className="Title-admin text-center"
            >
              <h1>Sign In</h1>
            </div>
          </Col>
          <Col
            style={{
              borderBlockColor: "#C4C4D0",
              border: "1px solid",
              padding: "24px",
              borderRadius: "16px",
            }}
          >
            <Row>
              <Col>
                <Form>
                  <Input
                    Label="Email"
                    placeholder="Enter email"
                    value=""
                    type="email"
                    errorMessage=""
                    onChange={() => {}}
                  />

                  <Input
                    Label="Password"
                    placeholder="Password"
                    value=""
                    type="password"
                    errorMessage=""
                    onChange={() => {}}
                  />

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalCheck"
                  >
                    <Col>
                      <Form.Check label="Remember me" />
                    </Col>
                  </Form.Group>

                  <Row className="mb-3">
                    <Col>
                      <button
                        className="btn-small kanit-paragraphMedium"
                        type="submit"
                      >
                        เข้าสู่ระบบ
                      </button>
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <div class="or or--x" aria-role="presentation">
                      Any text
                    </div>
                  </Row>

                  <Row className="mb-3">
                    <Col>
                      <button className="btn-small kanit-paragraphMedium">
                        เข้าสู่ระบบด้วย Google
                      </button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Signin;
