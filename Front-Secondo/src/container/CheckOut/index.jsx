import React from "react";
import "./index.css";
import Layout from "../../components/Layout";

function checkOut() {
  return (
    <Layout>
        <div className="background-checkout-page">
            <div className="checkout-page-topic">
                <div className="checkout-page-topic-text">ยืนยันการชำระเงินสำหรับการซื้อ</div>
            </div>
            <div className="checkout-page-content">
                <div className="checkout-page-content-method">
                    <div className="checkout-page-content-method-address">
                        <div className="checkout-page-content-method-address-group">
                            <div className="checkout-page-content-method-address-group-detail">
                                <div className="checkout-page-content-method-address-group-detail-number">

                                </div>
                                <div className="checkout-page-content-method-address-group-detail-group">
                                    <div className="checkout-page-content-method-address-group-detail-group-topic">

                                    </div>
                                    <div className="checkout-page-content-method-address-group-detail-group-desc">

                                    </div>
                                </div>
                            </div>
                            <div className="checkout-page-content-method-address-group-edit"></div>
                        </div>
                        <div className="checkout-page-content-method-address-line">

                        </div>
                    </div>
                </div>
                <div className="checkout-page-content-order">

                </div>
            </div>
        </div>
    </Layout>
  )
}

export default checkOut