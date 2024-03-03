import React from "react";
import "./index.css";
import Layout from "../../components/Layout";

function checkOut() {
  return (
    <Layout>
      <div className="background-checkout-page">
        <div className="checkout-page-topic">
          <div className="checkout-page-topic-text">
            ยืนยันการชำระเงินสำหรับการซื้อ
          </div>
        </div>
        <div className="checkout-page-content">
          <div className="checkout-page-content-method">
            <div className="checkout-page-content-method-address">
              <div className="checkout-page-content-method-address-group">
                <div className="checkout-page-content-method-address-group-detail">
                  <div className="checkout-page-content-method-address-group-detail-number">1</div>
                  <div className="checkout-page-content-method-address-group-detail-group">
                    <div className="checkout-page-content-method-address-group-detail-group-topic">ข้อมูลการจัดส่ง</div>
                    <div className="checkout-page-content-method-address-group-detail-group-desc">ที่อยู่การจัดส่ง</div>
                  </div>
                </div>
                <div className="checkout-page-content-method-address-group-edit">
                    <div className="checkout-page-content-method-address-group-edit-text">
                        กรุณาเพิ่มที่อยู่การจัดส่ง
                    </div>
                    <div className="checkout-page-content-method-address-group-edit-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M6 11.999L8.58579 9.41324C9.36684 8.63219 9.36683 7.36586 8.58579 6.58481L6 3.99902" stroke="#B3261E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
              </div>
              <div className="checkout-page-content-method-address-line-frame">
                <div className="checkout-page-content-method-address-line"></div>
              </div>
            </div>
          </div>
          <div className="checkout-page-content-order"></div>
        </div>
      </div>
    </Layout>
  );
}

export default checkOut;
