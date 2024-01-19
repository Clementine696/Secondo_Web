import React from 'react'
import Layout from '../../components/Layout'
import { Container, Row, Col } from "react-bootstrap";

function Home() {
    return (
        <Layout>
            <div style={{margin: '48px', padding: '48px'}} className='Title-admin text-center'>
                <h1>Welcome to Admin Dashboard</h1>
            </div>
        </Layout>
    )
}

export default Home
