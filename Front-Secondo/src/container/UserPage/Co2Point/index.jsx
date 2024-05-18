import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  isUserLoggedIn,
  payCarbonCredits,
  updateProfilePicture,
} from "../../../actions";
import { useDispatch, useSelector } from "react-redux";
import { generatePublicUrl } from "../../../urlConfig";

import "./index.css";
import "../../../styles.css";
import "../../../components/UI/Button/index.css";
import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidemenu";
import VoucherCard from "../../../components/UI/ItemCard/CarbonCredits";

import user from "../../../icon/user.png";
import info from "../../../icon/info.png";
import starbucks from "../../../../public/images/starbucks.png";

let myItemVoucher = [
  {
    img: "https://livecards.net/pl/starbucks-gift-card-40-usd-us-74176.jpg",
    title: "บัตรของขวัญสตาร์บัค 100 บาท",
    carbon: 1000000,
  },
];

let itemVoucher = [
  {
    img: "https://filebroker-cdn.lazada.co.th/kf/Scd6e0569b74b4fcbb972b44f2a77c0015.jpg",
    title: "บัตรของขวัญโลตัส 100 บาท",
    carbon: 1000000,
  },
  // {
  //   img: "https://cf.shopee.co.th/file/th-11134207-7r98o-ll0vvzwc01d8d5",
  //   title: "บัตรของขวัญสตาร์บัค 500 บาท",
  //   price: "10000",
  // },
];

function Co2Point() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const userProfileInfo = auth.user;
  const myCarbonCredits = auth.user.carbonCredits;
  console.log(userProfileInfo);

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

  // dispatch(payCarbonCredits(itemVoucher));

  useEffect(() => {
    dispatch(isUserLoggedIn());
  }, [dispatch]);

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
                Carbon Credits {myCarbonCredits} CO₂ Credit
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
                    >
                      {/* <img>src={user}</img> */}
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
              {myItemVoucher.map((item, index) => (
                <VoucherCard
                  key={index}
                  img={item.img}
                  title={item.title}
                  carbon={item.carbon}
                />
              ))}
              {/* <voucherCard />
              <voucherCard /> */}
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
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNHQ5NRocnX5zgYCGRG9AwSYaKDbjBlkvNJBUuSL-aHw&s"
                  className="picture-store"
                ></img>

                <div className="title-of-coupon">
                  <p className="title-store-cc kanit-paragraphMedium">
                    แลกแต้มกับ Lotus’s
                  </p>
                  {/* <p className="kanit-H3">1 CC = 1 บาท</p> */}
                </div>
              </div>

              <div className="card-coupon">
                {itemVoucher.map((item, index) => (
                  <VoucherCard
                    key={index}
                    img={item.img}
                    title={item.title}
                    carbon={item.carbon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Co2Point;
