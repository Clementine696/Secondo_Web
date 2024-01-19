import React from "react";
import Layout from "../../components/Layout";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input";

function Signin() {
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <div
              style={{ margin: "48px", padding: "48px" }}
              className="Title-admin text-center"
            >
              <h1>Sign In</h1>
            </div>
          </Col>
          <Col>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
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

                  <Form.Group as={Row} className="mb-3">
                    <Col>
                      <Button type="submit">เข้าสู่ระบบ</Button>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3">
                    <Col>
                      <Button type="submit">เข้าสู่ระบบด้วย Google</Button>
                    </Col>
                  </Form.Group>
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
