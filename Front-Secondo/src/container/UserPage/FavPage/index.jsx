import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./index.css";
import "../../../styles.css";
import "../../../components/UI/Button/index.css";
import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidemenu";
import ItemCard from "../../../components/UI/ItemCard";

import info from "../../../icon/info.png";
import starbucks from "../../../../public/images/starbucks.png";

function Fav() {
  return (
    <Layout>
      <div className="user-page">
        <Sidebar />
        <div className="User-page-title kanit-Display-Large">รายการโปรด</div>

        <div className="profile-display"></div>
      </div>
    </Layout>
  );
}

export default Fav;
