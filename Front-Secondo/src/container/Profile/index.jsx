import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input";
import { Link } from "react-router-dom";

import "./index.css";
import "../../styles.css";
import "../../components/UI/Button/index.css";
import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidemenu";

function Profile() {
  return (
    <Layout>
      <div className="profile-page">
        <Sidebar />
        <div className="profile-page-title kanit-Display-Large">
          ข้อมูลส่วนตัว
        </div>

        <div className="profile-display">
          <div className="profile-show-detail kanit-paragraphMedium">
            <div className="profile-detail-point">Cabon Credits 96 CO2 Equ</div>
            <div className="profile-detail-point">เงินที่มีอยู่ 4,000 บาท</div>
            <div className="profile-detail-point">
              เงินที่ไม่สามารถใช้ได้ 1,000 บาท
            </div>
          </div>
          <div className="user-profile-detail">
            <div className="profile-detail-title kanit-paragraphMedium">
              โปรไฟล์
            </div>
            <div className="profile-pic-name-button">
              <div
                style={{
                  backgroundColor: "black",
                  height: "96px",
                  width: "96px",
                  borderRadius: "50%",
                }}
              ></div>
              <div className="profile-name kanit-paragraphMedium">
                <p>Username : GamBlackty</p>
                <p>Name : Phanuphong</p>
              </div>
              <div className="button-upload-pic kanit-paragraphMedium">
                <button className="btn-small-secondary">อัพโหลดรูปภาพ</button>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-privacy">
          <Form className="input-profile">
            <Input
              Label="ชื่อผู้ใช้"
              placeholder="ชื่อผู้ใช้"
              value=""
              type="text"
              errorMessage=""
              onChange={() => {}}
            />
            <Input
              Label="ชื่อจริง"
              placeholder="ชื่อจริง"
              value=""
              type="text"
              errorMessage=""
              onChange={() => {}}
            />
            <Input
              Label="นามสกุล"
              placeholder="นามสกุล"
              value=""
              type="text"
              errorMessage=""
              onChange={() => {}}
            />
            <Input
              Label="เบอร์โทร"
              placeholder="เบอร์โทร"
              value=""
              type="number"
              errorMessage=""
              onChange={() => {}}
            />
            <Input
              Label="อีเมลล์"
              placeholder="อีเมลล์"
              value=""
              type="email"
              errorMessage=""
              onChange={() => {}}
            />
          </Form>

          <button
            className="btn-small-primary kanit-paragraphMedium"
            type="submit"
          >
            เข้าสู่ระบบ
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
