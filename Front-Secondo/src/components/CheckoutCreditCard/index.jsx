import React, { useState } from "react";
import Script from "react-load-script";
import axios from "../../helpers/axios";

import ModalS from "../Modal/success";

import success from "../../icon/success-check.png";

import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { sellerCheckout } from "../../actions";
import { useNavigate } from "react-router-dom";

let OmiseCard;

function CreditCard(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state.product);
  const productDetails = product.productDetails;
  const summaryPrice = productDetails.price + productDetails.shippingCost;

  const [openModel, setOpenModel] = useState(false);

  const buyProductForm = () => {
    const data = {
      item_id: productDetails._id,
      price: summaryPrice,
      address_id: props.address,
      shipping: props.shipping,
    };
    dispatch(sellerCheckout(data));
    // console.log(productDetails._id);
    // console.log(productDetails.name);
    // console.log(props.address)
    // console.log(props.shippingWay)

    // const form = new FormData();
    // form.append("item_id", productDetails._id);
    // form.append("price", summaryPrice);
    // dispatch(addSellerProduct(form));
  };

  const handleLoadScript = () => {
    OmiseCard = window.OmiseCard;
    OmiseCard.configure({
      publicKey: process.env.VITE_OMISE_PUBLIC_KEY,
      currency: "THB",
      frameLabel: "Secondo Shop",
      submitLabel: "Pay NOW",
      buttonLabel: "Pay with Omise",
    });
  };

  const creditCardConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMethod: "credit_card",
      // otherPaymentMethods: ["credit_card", "internet_banking"],
    });
    OmiseCard.configureButton("#credit-card");
    OmiseCard.attach();
  };

  const omiseCardHandler = () => {
    OmiseCard.open({
      amount: summaryPrice * 100,
      onCreateTokenSuccess: async (token) => {
        console.log(token);
        const res = await axios.post(`/payment`, {
          email: "borntodev@gmail.com",
          name: "Borntodev",
          amount: summaryPrice * 100,
          token: token,
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(res);
        if (res.data.status == "successful") {
          console.log("success");
          buyProductForm();
          setOpenModel(true);
          const timer = setTimeout(() => {
            navigate("/buystate");
          }, 4000);
          return () => clearTimeout(timer);
        } else {
          console.log("not success");
        }
      },
      onFormClosed: () => {},
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    creditCardConfigure();
    omiseCardHandler();
  };

  return (
    <div className="own-form">
      <Script
        url="https://cdn.omise.co/omise.js"
        onLoad={handleLoadScript}
        defer
      />
      <form>
        <button
          className="btn-small-primary btn-payment kanit-paragraphMedium"
          id="credit-card"
          type="button"
          onClick={handleClick}
        >
          {props.label}
        </button>
      </form>

      <ModalS
        label="ชำระเงินสำเร็จ"
        desc="ชำระเงินเข้าสู่ระบบแล้ว"
        img={success}
        open={openModel}
      />
    </div>
  );
}

export default CreditCard;
