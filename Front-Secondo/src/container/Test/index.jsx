import React, { useState } from "react";

import "./index.css";
import "../../styles.css";
import "../../components/UI/Button/index.css";

import Layout from "../../components/Layout";
import ModalS from "../../components/Modal/success";
import ModalSale from "../../components/Modal/OfferSale/sale-score";
import ModalSelectItem from "../../components/Modal/OfferSale/selectProduct";
import ModalDonate from "../../components/Modal/Donate";
import ModalSellerRate from "../../components/Modal/SellerRate";
import ModalSellerTag from "../../components/Modal/SellerTag";

import success from "../../icon/success-check.png";
import tag from "../../icon/tag.png";
import shipping from "../../icon/shipping.png";
import productpic from "../../../public/images/product.jpg";

function Test() {
  const [openModel, setOpenModel] = useState(false);

  const [openModelSale, setOpenModelSale] = useState(false);

  const [openModelSelectItem, setOpenModelSelectItem] = useState(false);

  const [openModalDonate, setOpenModalDonate] = useState(false);

  const [sellerRate, setSellerRate] = useState(false);

  const [sellerTag, setSellerTag] = useState(false);

  return (
    <Layout>
      <div>
        <button onClick={() => setOpenModel(true)}>Modal 1</button>
        <button onClick={() => setOpenModelSale(true)}>Modal 2</button>
        <button onClick={() => setOpenModelSelectItem(true)}>Modal 3</button>
        <button onClick={() => setOpenModalDonate(true)}>Modal 4</button>
        <button onClick={() => setSellerRate(true)}>Modal 5</button>
        <button onClick={() => setSellerTag(true)}>Modal 6</button>

        <ModalSellerTag
          img={shipping}
          open={sellerTag}
          onClose={() => setSellerTag(false)}
        />

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
        />

        <ModalSelectItem
          label="คุณต้องการที่จะเสนอขายสินค้าชิ้นนี้"
          desc="ซื้อโทรศัพท์ iphone14"
          img={productpic}
          title="GATERON Milky Yellow PRO Switch (10ชิ้น/ซอง) 5 pin สวิตช์ Linearสำหรับ คีย์บอร์ด Mechanical keyboard Linear Switch"
          open={openModelSelectItem}
          onClose={() => setOpenModelSelectItem(false)}
        />

        <ModalSellerRate 
          desc="กิตติพึก เพชรตะพด"
          open={sellerRate}
          onClose={() => setSellerRate(false)}
          />
      </div>
    </Layout>
  );
}

export default Test;
