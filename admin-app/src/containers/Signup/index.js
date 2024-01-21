import React from 'react'
import Layout from '../../components/Layout'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Input from '../../components/UI/Input';

export default function Signup() {
  return (
    <Layout>
        <Container>
            <Row style={{ marginTop: '50px'}}>
                <Col md={{span: 6, offset: 3}}>
                    <Form>
                      <Row>
                        <Col md={6}>
                          <Input 
                            label='First Name'
                            placeholder='First Name'
                            value=''
                            type='text'
                            onChange={() => {}}
                          />
                        </Col>
                        <Col md={6}>
                        <Input 
                            label='Last Name'
                            placeholder='Last Name'
                            value=''
                            type='text'
                            onChange={() => {}}
                          />
                        </Col>
                      </Row>

                      <Input 
                        label='Email'
                        placeholder='Email'
                        value=''
                        type='email'
                        onChange={() => {}}
                      />
                      <Input 
                        label='Password'
                        placeholder='Password'
                        value=''
                        type='password'
                        onChange={() => {}}
                      />
                        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group> */}
                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </Layout>
  )
}
