import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

import Input from "../../components/UI/Input";

import "./index"
// import Signin from '../../container/Signin'
// import Signup from '../../container/Signup'

function Index() {
  return (
    <Navbar collapseOnSelect expand="lg" className="Nav">
      <Container>
        <Navbar.Brand href="/" className="Nav-item">
          Secondo
        </Navbar.Brand>
        {/* <Link to="/" className="navbar-brand">Admin Dashboard</Link> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Form>
              <Row>
                <Col className="Search-field " >
                  <Input
                    label="Search"
                    placeholder="Search"
                    value=""
                    type="search"
                    errorMessage=""
                    onChange={() => {}}
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit">Submit</Button>
                </Col>
              </Row>
            </Form>
            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="/signup" className="Nav-item">
              Sign Up
            </Nav.Link>
            <Nav.Link href="/signin" className="Nav-item">
              Sign In
            </Nav.Link>

            {/* <li className="Nav-item">
                            <NavLink to="/signup" className="Nav-link">Sign Up</NavLink>
                        </li>
                        <li className="Nav-item">
                            <NavLink to="/signin" className="Nav-link">Sign In</NavLink>
                        </li> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Index;
