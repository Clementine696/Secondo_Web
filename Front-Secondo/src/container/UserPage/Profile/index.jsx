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

// console.log(user)

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
  //           userName: userProfile.userName,
  //           firstname: userProfile.firstName,
  //           lastName: userProfile.lastName,
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

  let userImage = auth.user.profilePicture;

  const [userName, setUserName] = useState(userProfileInfo.username || "");
  const [firstName, setFirstName] = useState(userProfileInfo.firstName || "");
  const [lastName, setLastName] = useState(userProfileInfo.lastName || "");
  const [tel, setTel] = useState(userProfileInfo.contactNumber || "");
  const [hometown, setHometown] = useState(userProfileInfo.hometown || "");
  const [email, setEmail] = useState(userProfileInfo.email || "");

  useEffect(() => {
    setUserName(userProfileInfo.username || "");
    setFirstName(userProfileInfo.firstName || "");
    setLastName(userProfileInfo.lastName || "");
    setTel(userProfileInfo.contactNumber || "");
    setHometown(userProfileInfo.hometown || "");
    setEmail(userProfileInfo.email || "");
  }, [auth.authenticate]);

  // connect api to save data
  const saveUser = () => {
    console.log(userName);
    console.log(firstName);
    console.log(lastName);
    console.log(tel);
    console.log(hometown);
    console.log(email);
    dispatch()
  };

  const popupSave = () => {
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
                เงินที่มีอยู่ในระบบ 4,000 บาท
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
                  {/* {userImage ? ( */}
                  <img
                    style={{
                      height: "96px",
                      width: "96px",
                      borderRadius: "50%",
                    }}
                    className="profile-picture-img"
                    // src={auth.user.profilePicture}
                    // src={URL.createObjectURL(image)}
                    src={userImage ? userImage : user}
                    alt="Uploaded"
                  />
                  {/* ) : ( */}
                  {/* <div
                      style={{
                        backgroundColor: "black",
                        height: "96px",
                        width: "96px",
                        borderRadius: "50%",
                      }}
                    > */}
                  {/* <img>src={user} </img> */}
                  {/* </div> */}
                  {/* )} */}
                </div>

                <div className="profile-name kanit-paragraphMedium">
                  <p>Email : {userProfileInfo.email}</p>
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
                // placeholder={userProfile.userName}
                value={userName}
                type="text"
                errorMessage=""
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <Input
                Label="ชื่อจริง"
                // placeholder={userProfile.firstname}
                value={firstName}
                type="text"
                errorMessage=""
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <Input
                Label="นามสกุล"
                placeholder="นามสกุล"
                value={lastName}
                type="text"
                errorMessage=""
                onChange={(e) => {
                  setLastName(e.target.value);
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
                placeholder="กรอกที่อยู่จังหวัด"
                value={hometown}
                type="text"
                errorMessage=""
                onChange={(e) => {
                  setHometown(e.target.value);
                }}
              />
              {/* <Input
                Label="อีเมลล์"
                placeholder="อีเมลล์"
                value={email}
                type="email"
                errorMessage=""
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              /> */}
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
        onConfirm={() => {
          setOpenModalCancle(false);
          saveUser();
        }}
      />
    </Layout>
  );
}

export default Profile;
