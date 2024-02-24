import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Input from "../../../components/UI/Input";

import "./index.css";
import "../../../styles.css";
import "../../../components/UI/Button/index.css";
import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidemenu";

function Profile() {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");

  // connect api to save data
  const saveUser = () => {
    console.log(username);
    console.log(firstname);
    console.log(lastname);
    console.log(tel);
    console.log(email);
  };

  return (
    <Layout>
      <div className="user-page">
        <Sidebar />
        <div className="User-page-title kanit-Display-Large">
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

        <div className="background-data">
          <Form className="input-profile">
            <Input
              Label="ชื่อผู้ใช้"
              placeholder="ชื่อผู้ใช้"
              value={username}
              type="text"
              errorMessage=""
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Input
              Label="ชื่อจริง"
              placeholder="ชื่อจริง"
              value={firstname}
              type="text"
              errorMessage=""
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            />
            <Input
              Label="นามสกุล"
              placeholder="นามสกุล"
              value={lastname}
              type="text"
              errorMessage=""
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            />
            <Input
              Label="เบอร์โทร"
              placeholder="เบอร์โทร"
              value={tel}
              type="number"
              errorMessage=""
              onChange={(e) => {
                setTel(e.target.value);
              }}
            />
            <Input
              Label="อีเมลล์"
              placeholder="อีเมลล์"
              value={email}
              type="email"
              errorMessage=""
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form>
          <div>
            <button
              className="btn-small-primary kanit-paragraphMedium"
              type="submit"
              onClick={saveUser}
            >
              บันทึก
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
