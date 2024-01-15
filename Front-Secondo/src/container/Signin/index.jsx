import React from 'react'
import Layout from '../../components/Layout'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import Input from '../../components/UI/Input'

function Signin() {
    return (
        <Layout>
            <div style={{ margin: '48px', padding: '48px' }} className='Title-admin text-center'>
                <h1>Sign In</h1>
            </div>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <Input
                                label="Email"
                                placeholder="Enter email"
                                value=""
                                type="email"
                                errorMessage=""
                                onChange={() => { }}
                            />

                            <Input
                                label="Password"
                                placeholder="Password"
                                value=""
                                type="password"
                                errorMessage=""
                                onChange={() => { }}
                            />

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
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
    )
}

export default Signin
