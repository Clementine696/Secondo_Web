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
                  <div className="checkout-page-content-method-address-group-detail-number">
                    1
                  </div>
                  <div className="checkout-page-content-method-address-group-detail-group">
                    <div className="checkout-page-content-method-address-group-detail-group-topic">
                      ข้อมูลการจัดส่ง
                    </div>
                    <div className="checkout-page-content-method-address-group-detail-group-desc">
                      ที่อยู่การจัดส่ง
                    </div>
                  </div>
                </div>
                <div className="checkout-page-content-method-address-group-edit">
                  <div className="checkout-page-content-method-address-group-edit-text">
                    กรุณาเพิ่มที่อยู่การจัดส่ง
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M6 11.999L8.58579 9.41324C9.36684 8.63219 9.36683 7.36586 8.58579 6.58481L6 3.99902"
                        stroke="#B3261E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="checkout-page-content-method-address-line-frame">
                <div className="checkout-page-content-method-address-line"></div>
              </div>
            </div>

            <div className="checkout-page-content-method-address">
              <div className="checkout-page-content-method-address-group">
                <div className="checkout-page-content-method-address-group-detail">
                  <div className="checkout-page-content-method-address-group-detail-number">
                    2
                  </div>
                  <div className="checkout-page-content-method-address-group-detail-group">
                    <div className="checkout-page-content-method-address-group-detail-group-topic">
                      วิธีการจัดส่ง
                    </div>
                    <div className="checkout-page-content-method-address-group-detail-group-desc">
                      ส่งแบบมาตรฐาน
                    </div>
                  </div>
                </div>
                <div className="checkout-page-content-method-address-group-edit">
                  <div className="checkout-page-content-method-address-group-edit-text">
                    แก้ไข
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M6 11.999L8.58579 9.41324C9.36684 8.63219 9.36683 7.36586 8.58579 6.58481L6 3.99902"
                        stroke="#B3261E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="checkout-page-content-method-address-line-frame">
                <div className="checkout-page-content-method-address-line"></div>
              </div>
            </div>

            <div className="checkout-page-content-method-address">
              <div className="checkout-page-content-method-address-group">
                <div className="checkout-page-content-method-address-group-detail">
                  <div className="checkout-page-content-method-address-group-detail-number">
                    3
                  </div>
                  <div className="checkout-page-content-method-address-group-detail-group">
                    <div className="checkout-page-content-method-address-group-detail-group-topic">
                      วิธีการชำระเงิน
                    </div>
                    <div className="checkout-page-content-method-address-group-detail-group-desc">
                      วิธีการชำระเงิน
                    </div>
                  </div>
                </div>
                <div className="checkout-page-content-method-address-group-edit">
                  <div className="checkout-page-content-method-address-group-edit-text">
                    กรุณาเพิ่มวิธีการชำระเงิน
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M6 11.999L8.58579 9.41324C9.36684 8.63219 9.36683 7.36586 8.58579 6.58481L6 3.99902"
                        stroke="#B3261E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="checkout-page-content-method-address-line-frame">
                <div className="checkout-page-content-method-address-line"></div>
              </div>
            </div>
          </div>
          <div className="checkout-page-content-order">
            <div className="checkout-page-content-order-topic kanit-Display-Medium-R">
              Order Summary
            </div>
            <div className="checkout-page-content-order-item">
              <div className="checkout-page-content-order-item-group-image-details">
                <div className="checkout-page-content-order-item-image">
                  <img
                    className="checkout-page-content-order-item-image-small"
                    src="https://www.tescophoto.com/media/catalog/product/cache/a2112a15e5165072db3b22495c91a3ca/9/3/9320.png"
                  />
                </div>
                <div className="checkout-page-content-order-item-details">
                  <div className="checkout-page-content-order-item-details-name-item kanit-paragraphSmall">
                    เสื้อ COTTON แบรนด์ญี่ปุ่น
                  </div>
                  <div className="checkout-page-content-order-item-details-name-seller kanit-paragraphVerySmall">
                    Mungkud
                  </div>
                </div>
              </div>

              <div className="checkout-page-content-order-item-price kanit-paragraphVerySmall">
                129 บาท
              </div>
            </div>
            <div className="checkout-page-content-order-item-line-out">
              <div className="checkout-page-content-order-item-line-in"></div>
            </div>
            <div className="checkout-page-content-order-price">
              <div className="checkout-page-content-order-price-item">
                <div className="checkout-page-content-order-price-item-topic kanit-paragraphSmall">ค่าสินค้า</div>
                <div className="checkout-page-content-order-price-item-price kanit-paragraphSmall">129 บาท</div>
              </div>
              <div className="checkout-page-content-order-price-deliver">
                <div className="checkout-page-content-order-price-deliver-topic kanit-paragraphSmall">ค่าขนส่ง</div>
                <div className="checkout-page-content-order-price-deliver-price kanit-paragraphSmall">50 บาท</div>
              </div>
              <div className="checkout-page-content-order-price-total">
                <div className="checkout-page-content-order-price-total-topic kanit-Display-Small">รวม</div>
                <div className="checkout-page-content-order-price-total-price kanit-Display-Small">179 บาท</div>
              </div>
            </div>
            <button className="btn-small-primary kanit-paragraphMedium">
              ชำระเงิน
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default checkOut;
