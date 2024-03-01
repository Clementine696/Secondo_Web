import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./container/Home";

import Signin from "./container/Signin";
import Signup from "./container/Signup";
import RegisPhone from "./container/Signup/RegisPhone";
import Otp from "./container/Signup/Otp";

import Search from "./container/Search";

import Product from "./container/Product";
import Offersale from "./container/Product/Offersale";
import Offerbuy from "./container/Product/Offerbuy";
import Donate from "./container/Product/Donation";

import Profile from "./container/UserPage/Profile";
import BuyState from "./container/UserPage/BuyStatus";
import SellState from "./container/UserPage/SellStatus";
import DonateState from "./container/UserPage/DonateStatus";
import ReceiveState from "./container/UserPage/ReceiveStatus";
import BidState from "./container/UserPage/BidStatus";
import Co2Point from "./container/UserPage/Co2Point";
import Fav from "./container/UserPage/FavPage";

import SellProduct from "./container/SellProduct";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />

          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signup/regisphone" element={<RegisPhone />} />
          <Route path="signup/regisphone/Otp" element={<Otp />} />

          <Route path="search" element={<Search />} />

          <Route path="product" element={<Product />} />
          <Route path="product/offersale" element={<Offersale />} />
          <Route path="product/offerbuy" element={<Offerbuy />} />
          <Route path="product/donate" element={<Donate />} />

          <Route path="profile" element={<Profile />} />
          <Route path="buystate" element={<BuyState />} />
          <Route path="sellstate" element={<SellState />} />
          <Route path="donatestate" element={<DonateState />} />
          <Route path="receivestate" element={<ReceiveState />} />
          <Route path="bidstate" element={<BidState />} />
          <Route path="co2point" element={<Co2Point />} />
          <Route path="fav" element={<Fav />} />

          <Route path="account/sell/additem" element={<SellProduct />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
