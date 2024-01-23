import React from "react";
import Layout from "../../components/Layout";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input";

/*
 * @author
 * @function Signup
 */

function Signup() {
  return (
    <Layout>
      <div
        style={{ margin: "48px", padding: "48px" }}
        className="Title-admin text-center"
      >
        <h1>Sign Up</h1>
      </div>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <H1>Second</H1>
                <div>เข้าสู่ระบบ</div>
                <Col md={6}>
                  <Input
                    Label="First Name"
                    placeholder="First Name"
                    value=""
                    type="text"
                    errorMessage=""
                    onChange={() => {}}
                  />
                </Col>

                <Col md={6}>
                  <Input
                    Label="Last Name"
                    placeholder="Last Name"
                    value=""
                    type="text"
                    errorMessage=""
                    onChange={() => {}}
                  />
                </Col>
              </Row>
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
                errorMessage="Do not tell anyone your password."
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
                  <Button type="submit">Sign in</Button>
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Signup;
