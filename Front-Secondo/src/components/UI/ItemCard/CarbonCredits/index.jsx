import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import "../index.css";

import { generatePublicUrl } from "../../../../urlConfig";
import ModalConfirm from "../../../Modal/Confirm";
import { payCarbonCredits } from "../../../../actions";
// import { payCarbonCredits } from "../../../../actions";

function VoucherCard(props) {
  const dispatch = useDispatch();
  const [openModel, setOpenModel] = useState(false);
  const [carbonCredits, setCarbonCredits] = useState(props.carbon);
  const [couponImg, setCouponImg] = useState(props.img);
  const [couponTitle, setCouponTitle] = useState(props.title);

  useEffect(() => {
    if (openModel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openModel]);

  const buyProductForm = () => {
    const data = {
      carboncredits: props.carbon
    };
    dispatch(payCarbonCredits(data));
    setOpenModel(false);
    // console.log(data);
    // console.log(carbonCredits);
    // console.log(props.img);
    // console.log(props.title);
    window.location.reload();
  };

  useEffect(() => {
    setCarbonCredits(carbonCredits);
    setCouponImg(couponImg);
    setCouponTitle(couponTitle);
    console.log(carbonCredits);
    console.log(couponImg);
    console.log(couponTitle);
  }, [carbonCredits], [couponImg], [couponTitle]);

  return (
    <div className="frame-card-item tp-transform">
      <Link
        style={{ textDecoration: "none" }}
        onClick={() => setOpenModel(true)}
        //   to={`/${props.slug}/${props._id}/p`}
        // className="link-img-card-item"
      >
        <div className="frame-img-card-item">
          <img
            className="img-card-item"
            src={props.img} //TODO:
            // src={props.img && props.img.length > 0 ? generatePublicUrl(props.img[0].img) : ""} alt=""
          />
        </div>
        <span className="card-text-field">
          <span className="card-item-context">
            <div className="card-item-name">
              {/* <Link
              style={{ textDecoration: "none" }}
              to={`/${props.slug}/${props._id}/p`}
              className="card-item-name"
            > */}
              {props.title}
              {/* </Link> */}
            </div>
            {/* <div className="card-item-province">{props.province}</div> */}
          </span>
          <div className="card-item-line-frame">
            <div className="card-item-line" />
          </div>
          <div className="card-item-credit-context">
            <div className="card-item-credit-price pull-left">
              {props.carbon} CO₂ Credit
            </div>
            {/* <div className="card-item-credit-carbon pull-right">
            {props.credit} CO₂ Credit
          </div> */}
          </div>
        </span>
      </Link>
      <ModalConfirm
        label="ยืนยันการแลกใช้ Carbon Credits"
        desc="กดยืนยันเพื่อแลกใช้ Carbon Credits เป็น Voucher"
        open={openModel}
        onClose={() => setOpenModel(false)}
        onConfirm={buyProductForm}
      />
    </div>
  );
}

export default VoucherCard;
