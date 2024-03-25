import React, { useState } from "react";

import "./index.css";
import "../../styles.css";
import "../../components/UI/Button/index.css";

import Layout from "../../components/Layout";
import ModalS from "../../components/Modal/success";
import ModalSale from "../../components/Modal/OfferSale/sale-score";
import ModalSelectItem from "../../components/Modal/OfferSale/selectProduct";
import ModalDonate from "../../components/Modal/Donate";

import success from "../../icon/success-check.png";
import tag from "../../icon/tag.png";
import productpic from "../../../public/images/product.jpg";

function Test() {
  const [openModel, setOpenModel] = useState(false);

  const [openModelSale, setOpenModelSale] = useState(false);

  const [openModelSelectItem, setOpenModelSelectItem] = useState(false);

  const [openModalDonate, setOpenModalDonate] = useState(false);

  const [sellerRate, setSellerRate] = useState(false);

  return (
    <Layout>
      <div>
        <button onClick={() => setOpenModel(true)}>Modal 1</button>
        <button onClick={() => setOpenModelSale(true)}>Modal 2</button>
        <button onClick={() => setOpenModelSelectItem(true)}>Modal 3</button>
        <button onClick={() => setOpenModalDonate(true)}>Modal 4</button>
        <button onClick={() => setSellerRate(false)}>Modal 5</button>

        <ModalDonate
          label="บริจาคตู้เย็น"
          open={openModalDonate}
          onClose={() => setOpenModalDonate(false)}
        />

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

          //2 actions
          onClick={() => {
            setOpenModelSelectItem(true),
            setOpenModelSale(false)
          }} 
        />

        <ModalSelectItem
          label="คุณต้องการที่จะเสนอขายสินค้าชิ้นนี้"
          desc="ซื้อโทรศัพท์ iphone14"
          img={productpic}
          title="GATERON Milky Yellow PRO Switch (10ชิ้น/ซอง) 5 pin สวิตช์ Linearสำหรับ คีย์บอร์ด Mechanical keyboard Linear Switch"
          open={openModelSelectItem}
          onClose={() => setOpenModelSelectItem(false)}
        />
      </div>
    </Layout>
  );
}

export default Test;
