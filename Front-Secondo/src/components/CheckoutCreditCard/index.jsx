import React, { useState } from "react";
import Script from "react-load-script";
import axios from "../../helpers/axios";

import "./index.css";

let OmiseCard;

function CreditCard(props) {
  const handleLoadScript = () => {
    OmiseCard = window.OmiseCard;
    OmiseCard.configure({
      publicKey: process.env.VITE_OMISE_PUBLIC_KEY,
      currency: "THB",
      frameLabel: "Borntodev Shop",
      submitLabel: "Pay NOW",
      buttonLabel: "Pay with Omise",
    });
  };

  const creditCardConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMethod: "promptpay",
      otherPaymentMethods: ["credit_card", "internet_banking"],
    });
    OmiseCard.configureButton("#credit-card");
    OmiseCard.attach();
  };

  const omiseCardHandler = () => {
    OmiseCard.open({
      amount: "60000",
      onCreateTokenSuccess: (token) => {
        axios.post(`/payment`, {
          email: "borntodev@gmail.com",
          name: "Borntodev",
          amount: "60000",
          token: token,
          headers: {
            "Content-Type": "application/json",
          },
        });
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
        <button className="btn-small-primary btn-payment kanit-paragraphMedium" id="credit-card" type="button" onClick={handleClick}>
          {props.label}
        </button>
      </form>
    </div>
  );
}

export default CreditCard;
