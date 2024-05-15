import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./index.css";
import "../../../styles.css";
import "../../../components/UI/Button/index.css";
import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidemenu";
import ItemCard from "../../../components/UI/ItemCard";

import info from "../../../icon/info.png";
import starbucks from "../../../../public/images/starbucks.png";

import { isUserLoggedIn, updateProfilePicture } from "../../../actions";
import { useDispatch, useSelector } from "react-redux";
import { generatePublicUrl } from "../../../urlConfig";

function Co2Point() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)
  const userProfileInfo = auth.user;
  console.log(userProfileInfo)

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

  const [image, setImage] = useState("");
  const [updatingImage, setUpdatingImage] = useState(false);

  const updatePic = (event) => {

    const selectedImage = event.target.files[0];
    // console.log(selectedImage)

    setImage(selectedImage);

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
            แต้มคะแนน Carbon Credits
          </div>

          <div className="profile-display">
            <div className="profile-show-detail kanit-paragraphMedium">
              <div className="profile-detail-point">
                Carbon Credits 96 CO₂ Credit
              </div>
              {/* <div className="profile-detail-point">
                เงินที่มีอยู่ 4,000 บาท
              </div>
              <div className="profile-detail-point">
                เงินที่ไม่สามารถใช้ได้ 1,000 บาท
              </div> */}
            </div>
            <div className="user-profile-detail">
              <div className="profile-detail-title kanit-paragraphMedium">
                โปรไฟล์
              </div>
              <div className="profile-pic-name-button">
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
                    ></div>
                  )}
                </div>

                <div className="profile-name kanit-paragraphMedium">
                  <p>Username : {userProfileInfo.username}</p>
                  <p>Name : {userProfileInfo.firstName} {userProfileInfo.lastName}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="my-coupon-detail">
            <div className="my-coupon-detail-title-icon kanit-paragraphMedium">
              <div>คูปองของฉัน</div>
              <Link>
                <img src={info} className="size-icon"></img>
              </Link>
            </div>
            <div className="card-coupon">
              <ItemCard />
              <ItemCard />
            </div>
          </div>

          <div className="background-data">
            <div className="point-detail-title-icon kanit-paragraphMedium">
              <div>วิธีการแลกแต้ม</div>
              <Link>
                <img src={info} className="size-icon"></img>
              </Link>
            </div>

            <div className="store-coupon-exchange">
              <div className="title-pic">
                <img src={starbucks} className="picture-store"></img>

                <div className="title-of-coupon">
                  <p className="title-store-cc kanit-paragraphMedium">
                    แลกแต้มกับ Lotus’s
                  </p>
                  <p className="kanit-H3">1 CC = 1 บาท</p>
                </div>
              </div>

              <div className="card-coupon">
                <ItemCard />
                <ItemCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Co2Point;
