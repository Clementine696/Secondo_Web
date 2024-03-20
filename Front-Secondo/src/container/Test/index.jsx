import React, { useState } from "react";
import { Container } from "react-bootstrap";

import "./index.css";
import "../../styles.css";
import "../../components/UI/Button/index.css";

import Layout from "../../components/Layout";
import ModalS from "../../components/Modal/success";
import ModalSale from "../../components/Modal/sale-score";

import success from "../../icon/success-check.png";
import tag from "../../icon/tag.png";

function Test() {
  const [openModel, setOpenModel] = useState(false);
  const [openModelSale, setOpenModelSale] = useState(false);
  return (
    <Layout>
      <div>
        <h1>Test</h1>

        <button onClick={() => setOpenModel(true)}>Modal 1</button>
        <button onClick={() => setOpenModelSale(true)}>Modal 2</button>

        <ModalS
          label="ชำระเงินสำเร็จ"
          desc="ชำระเงินเข้าสู่ระบบแล้ว"
          img={success}
          open={openModel}
        />

        <ModalSale
          label="เสนอขายสินค้า"
          desc="ซื้อโทรศัพท์ iphone14"
          img={tag}
          open={openModelSale}
          onClose={() => setOpenModelSale(false)}
        />
      </div>
    </Layout>
  );
}

export default Test;
