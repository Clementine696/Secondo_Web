import React, { useState } from "react";
import { Container } from "react-bootstrap";

import "./index.css";
import "../../styles.css";
import "../../components/UI/Button/index.css";

import Layout from "../../components/Layout";
import Success from "../../components/Pop-up/success";

import success from "../../icon/success-check.png";

function Test() {
  return (
    <Layout>
      <div>
        <h1>Test</h1>
        <Success
          Label="ชำระเงินสำเร็จ"
          desc="ชำระเงินเข้าสู่ระบบแล้ว"
          img={success}
        />
      </div>
    </Layout>
  );
}

export default Test;
