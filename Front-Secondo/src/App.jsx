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
import RequireDonate from "./container/Product/Requiredonate";

import Profile from "./container/UserPage/Profile";
import BuyState from "./container/UserPage/BuyStatus";
import SellState from "./container/UserPage/SellStatus";
import DonateState from "./container/UserPage/DonateStatus";
import ReceiveState from "./container/UserPage/ReceiveStatus";
import BidState from "./container/UserPage/BidStatus";
import Co2Point from "./container/UserPage/Co2Point";
import Fav from "./container/UserPage/FavPage";
import Setting from "./container/UserPage/Setting";

import SellProduct from "./container/SellProduct";

import CheckOut from "./container/CheckOut";

import Test from "./container/Test";

import PrivateRoute from "./components/HOC/PrivateRoute.jsx";

import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, getInitialData, isUserLoggedIn } from './actions';

export default function App() {

  // // Authenticate
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    dispatch(getInitialData());
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />

          {/* <Route path="/signin" Component={Signin} /> */}
          {/* <Route path="/category" element={<PrivateRoute> <Category/> </PrivateRoute>} /> */}
          {/* <Route index element={<PrivateRoute> <Home/> </PrivateRoute>} />
          <Route path="/" element={<PrivateRoute> <Home/> </PrivateRoute>} /> */}


          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signup/regisphone" element={<RegisPhone />} />
          <Route path="signup/regisphone/Otp" element={<Otp />} />

          <Route path="search" element={<Search />} />
          {/* <Route path="search" element={<PrivateRoute> <Search/> </PrivateRoute>} /> */}

          <Route path="product" element={<Product />} />
          <Route path="product/offersale" element={<Offersale />} />
          <Route path="product/offerbuy" element={<Offerbuy />} />
          <Route path="product/donate" element={<Donate />} />
          <Route path="product/requiredonate" element={<RequireDonate />} />

          <Route path="profile" element={<Profile />} />
          <Route path="buystate" element={<BuyState />} />
          <Route path="sellstate" element={<SellState />} />
          <Route path="donatestate" element={<DonateState />} />
          <Route path="receivestate" element={<ReceiveState />} />
          <Route path="bidstate" element={<BidState />} />
          <Route path="co2point" element={<Co2Point />} />
          <Route path="fav" element={<Fav />} />
          <Route path="setting" element={<Setting />} />


          <Route path="account/sell/additem" element={<SellProduct />} />
          {/* <Route path="account/sell/additem" element={<PrivateRoute> <SellProduct /> </PrivateRoute>} /> */}
          <Route path="account/checkout" element={<CheckOut />} />

          <Route path="test" element={<Test />} />
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}
