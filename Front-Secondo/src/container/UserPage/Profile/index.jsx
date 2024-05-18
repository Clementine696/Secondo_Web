import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { isUserLoggedIn, updateProfilePicture } from "../../../actions";
import { useDispatch, useSelector } from "react-redux";
import { generatePublicUrl } from "../../../urlConfig";
import Input from "../../../components/UI/Input";
import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidemenu";
import ModalCancle from "../../../components/Modal/Cancle";

import "./index.css";
import "../../../styles.css";
import "../../../components/UI/Button/index.css";
import user from "../../../icon/user.png";

function Profile() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const userProfileInfo = auth.user;
  console.log(userProfileInfo);

  const [openModalCancle, setOpenModalCancle] = useState(false);

  // const renderUserProfile = (userProfiles) => {
  //   let myUserProfile = [];
  //   if (userProfiles && Array.isArray(userProfiles)) {
  //     for (let userProfile of userProfiles) {
  //       myUserProfile.push({
  //           _id: userProfile._id,
  //           slug: userProfile.slug,
  //           username: userProfile.username,
  //           firstname: userProfile.firstName,
  //           lastname: userProfile.lastName,
  //           // tel: userProfile.description,
  //           email: userProfile.email,
  //         });
  //     }
  //     return myUserProfile;
  //   }
  // };

  // const userProfile = userProfileInfo
  //   ? renderUserProfile(userProfileInfo)
  //   : [];

  // console.log(userProfile);

  // useEffect(() => {
  //   dispatch(isUserLoggedIn());
  // }, [auth.authenticate]);

  let userImage = auth.user.profilePicture;

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

  const popupSave = () => {
    saveUser();
    setOpenModalCancle(true);
  };

  const [image, setImage] = useState("");
  const [updatingImage, setUpdatingImage] = useState(false);

  const updatePic = (event) => {
    const selectedImage = event.target.files[0];
    // console.log(selectedImage)

    setImage(selectedImage);
    // console.log("userImage" + userImage)
    // console.log(generatePublicUrl(selectedImage.name))
    // userImage = selectedImage;
    // for (let pic of selectedImages) {
    //   console.log("Test")
    //   console.log(pic.name)
    // }
    setUpdatingImage(true);
    const form = new FormData();
    form.append("newProfilePicture", selectedImage);
    // console.log(selectedImage)
    // setImage(null)
    dispatch(updateProfilePicture(form));
    dispatch(isUserLoggedIn());
    // window.location.reload();
  };

  useEffect(() => {
    if (image != null) {
      dispatch(isUserLoggedIn());
      setUpdatingImage(false);
    }
  }, [updatingImage, dispatch]);

  return (
    <Layout>
      <div className="user-page">
        <Sidebar />
        <div className="user-content">
          <div className="User-page-title kanit-Display-Large">
            ข้อมูลส่วนตัว
          </div>

          <div className="profile-display">
            <div className="profile-show-detail kanit-paragraphMedium">
              {/* <div className="profile-detail-point">
                Cabon Credits 96 CO₂ Credit
              </div> */}
              <div className="profile-detail-point">
                เงินที่มีอยู่ 4,000 บาท
              </div>
              {/* <div className="profile-detail-point">
                เงินที่ไม่สามารถใช้ได้ 1,000 บาท
              </div> */}
            </div>
            <div className="user-profile-detail">
              <div className="profile-detail-title kanit-paragraphMedium">
                โปรไฟล์
              </div>
              <div className="profile-pic-name-button">
                {/* <div
                  style={{
                    backgroundColor: "black",
                    height: "96px",
                    width: "96px",
                    borderRadius: "50%",
                  }}
                ></div> */}
                <div className="profile-picture-img-frame">
                  {userImage ? (
                    <img
                      className="profile-picture-img"
                      // src={auth.user.profilePicture}
                      // src={URL.createObjectURL(image)}
                      src={userImage}
                      alt="Uploaded"
                      style={{
                        backgroundColor: "black",
                        height: "96px",
                        width: "96px",
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        backgroundColor: "black",
                        height: "96px",
                        width: "96px",
                        borderRadius: "50%",
                      }}
                    >
                      <img>src={user} </img>
                    </div>
                  )}
                </div>

                <div className="profile-name kanit-paragraphMedium">
                  <p>Username : {userProfileInfo.username}</p>
                  <p>
                    Name : {userProfileInfo.firstName}{" "}
                    {userProfileInfo.lastName}
                  </p>
                </div>
                <div className="button-upload-pic kanit-paragraphMedium">
                  <input
                    id="upload-input"
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                      updatePic(event);
                    }}
                    style={{ display: "none" }}
                  />
                  <label htmlFor="upload-input" className="btn-small-secondary">
                    อัพโหลดรูปภาพ
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="background-data">
            <Form className="input-profile">
              <Input
                Label="ชื่อผู้ใช้"
                // placeholder={userProfile.username}
                value={userProfileInfo.username}
                type="text"
                errorMessage=""
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <Input
                Label="ชื่อจริง"
                // placeholder={userProfile.firstname}
                value={userProfileInfo.firstName}
                type="text"
                errorMessage=""
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
              />
              <Input
                Label="นามสกุล"
                placeholder="นามสกุล"
                value={userProfileInfo.lastName}
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
                Label="ที่อยู่จังหวัด"
                placeholder="ที่อยู่จังหวัด"
                value={userProfileInfo.Hometown}
                type="text"
                errorMessage=""
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Input
                Label="อีเมลล์"
                placeholder="อีเมลล์"
                value={userProfileInfo.email}
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
                onClick={popupSave}
              >
                บันทึก
              </button>
            </div>
          </div>
        </div>
      </div>
      <ModalCancle
        label="ยืนยันการแก้ไขข้อมูล"
        // desc="คุณต้องการยกเลิกการขายสินค้าชิ้นนี้ใช่หรือไม่"
        open={openModalCancle}
        onClose={() => setOpenModalCancle(false)}
        onConfirm={() => setOpenModalCancle(false)}
      />
    </Layout>
  );
}

export default Profile;
