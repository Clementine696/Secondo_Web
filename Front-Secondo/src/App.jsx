import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./container/Home";

import Signin from "./container/Signin";
import Signup from "./container/Signup";
import RegisPhone from "./container/Signup/RegisPhone";
import Otp from "./container/Signup/Otp";

import AllProduct from "./container/AllProducts";
import AllProductDonate from "./container/AllProducts/DonateProduct";
import AllProductRecieve from "./container/AllProducts/ReceiveProduct";
import AllProductInterest from "./container/AllProducts/InterestProduct";
import AllProductBuyer from "./container/AllProducts/BuyerProduct";

import Search from "./container/Search";

import Product from "./container/Product";
import Offersale from "./container/Product/Offersale";
// import Offerbuy from "./container/Product/Offerbuy";
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
import PostRequestProduct from "./container/SellProduct/PostRequestProduct";
import PostDonateProduct from "./container/SellProduct/PostDonateProduct";
import PostBuyProduct from "./container/SellProduct/PostBuyProduct";

import EditProduct from "./container/EditProduct";
import EditBuyProduct from "./container/EditProduct/EditBuyer";
import EditDonateProduct from "./container/EditProduct/EditDonater";
import EditRequestProduct from "./container/EditProduct/EditRequest";

import CheckOut from "./container/CheckOut";

import ShippingStatus from "./container/ShippingStatus";
//Buy
import ShippingStatusBuy from "./container/ShippingStatus/Buy/Buyinfo";
import ShippingStatusConfirm from "./container/ShippingStatus/Buy/ConfirmRecieve";
import ShippingSellerRevirw from "./container/ShippingStatus/Buy/SellerReview";
//Sell
import ShippingSellSucess from "./container/ShippingStatus/Sell/SuccessProcess";
import ShippingStatusSell from "./container/ShippingStatus/Sell/Sellinfo";
//Donate & Recieve
import ShippingStatusDonate from "./container/ShippingStatus/Donate-Recieve/DonateInfo";
import ShippingDonateSucess from "./container/ShippingStatus/Donate-Recieve/DonnateSuccess";
import ShippingStatusRecieve from "./container/ShippingStatus/Donate-Recieve/RecieveInfo";
import ShippingStatusRConfirm from "./container/ShippingStatus/Donate-Recieve/ConfirmRecieve";
import ShippingRecieveSucess from "./container/ShippingStatus/Donate-Recieve/RecieveSuccess";

import Offer from "./container/Offer";
import OfferDonate from "./container/Offer/Donate";
import OfferRecieve from "./container/Offer/Recieve";
import OfferSell from "./container/Offer/Sell";

import Test from "./container/Test";

import PrivateRoute from "./components/HOC/PrivateRoute.jsx";

import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAddress, getAllCategory, getInitialData, getUserproduct, isUserLoggedIn } from './actions';

export default function App() {

  // // Authenticate
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
      console.log('!auth')
    }
    if(auth.authenticate) {
      dispatch(getAddress());
      dispatch(getUserproduct());
      console.log('auth')
    }
    dispatch(getInitialData());
  }, [auth.authenticate]);

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

          <Route path="allproduct" element={<AllProduct />} />
          <Route path="allproduct/donate" element={<AllProductDonate />} />
          <Route path="allproduct/recieve" element={<AllProductRecieve />} />
          <Route path="allproduct/interest" element={<AllProductInterest />} />
          <Route path="allproduct/buyer" element={<AllProductBuyer />} />

          <Route path="profile" element={<PrivateRoute> <Profile /> </PrivateRoute>} />
          <Route path="buystate" element={<PrivateRoute> <BuyState /> </PrivateRoute>} />
          <Route path="sellstate" element={<PrivateRoute> <SellState /> </PrivateRoute>} />
          <Route path="donatestate" element={<PrivateRoute> <DonateState /> </PrivateRoute>} />
          <Route path="receivestate" element={<PrivateRoute> <ReceiveState /> </PrivateRoute>} />
          <Route path="bidstate" element={<PrivateRoute> <BidState /> </PrivateRoute>} />
          <Route path="co2point" element={<PrivateRoute> <Co2Point /> </PrivateRoute>} />
          <Route path="fav" element={<PrivateRoute> <Fav /> </PrivateRoute>} />
          <Route path="setting" element={<PrivateRoute> <Setting /> </PrivateRoute>} />

          <Route path="account/checkout" element={<PrivateRoute> <CheckOut /> </PrivateRoute>} />

          <Route path="account/shippingstatus" element={<PrivateRoute> <ShippingStatus /> </PrivateRoute>} />

          {/* Donate & Recieve */}
          <Route path="account/shippingstatus/donateinfo" element={<PrivateRoute> <ShippingStatusDonate /> </PrivateRoute>} />
          <Route path="account/shippingstatus/donatesuccess" element={<PrivateRoute> <ShippingDonateSucess /> </PrivateRoute>} />
          <Route path="account/shippingstatus/recieveinfo" element={<PrivateRoute> <ShippingStatusRecieve /> </PrivateRoute>} />
          <Route path="account/shippingstatus/confirmrecievedonate" element={<PrivateRoute> <ShippingStatusRConfirm /> </PrivateRoute>} />
          <Route path="account/shippingstatus/recievesuccess" element={<PrivateRoute> <ShippingRecieveSucess /> </PrivateRoute>}/>

          <Route path="offer" element={<PrivateRoute> <Offer /> </PrivateRoute>} />
          <Route path="offer/donate" element={<PrivateRoute> <OfferDonate /> </PrivateRoute>} />
          <Route path="offer/recieve" element={<PrivateRoute> <OfferRecieve /> </PrivateRoute>} />
          <Route path="offer/sell" element={<PrivateRoute> <OfferSell /> </PrivateRoute>} />
          
          <Route path="sellstate/additem" element={<PrivateRoute> <SellProduct /> </PrivateRoute>} />
          <Route path="buystate/additem" element={<PrivateRoute> <PostBuyProduct /> </PrivateRoute>} />
          <Route path="receivestate/additem" element={<PrivateRoute> <PostRequestProduct /> </PrivateRoute>} />
          <Route path="donatestate/additem" element={<PrivateRoute> <PostDonateProduct /> </PrivateRoute>} />

          <Route path="sellstate/edititem/:productId" element={<PrivateRoute> <EditProduct /> </PrivateRoute>} />
          <Route path="buystate/edititem/:productId" element={<PrivateRoute> <EditBuyProduct /> </PrivateRoute>} />
          <Route path="receivestate/edititem/:productId" element={<PrivateRoute> <EditRequestProduct /> </PrivateRoute>} />
          <Route path="donatestate/edititem/:productId" element={<PrivateRoute> <EditDonateProduct /> </PrivateRoute>} />

          {/* Dynamic Route */}
          <Route path="/product/seller/:productId/p" element={<Product />} />
          <Route path="/product/buyer/:productId/p" element={<Offersale />} />
          <Route path="/product/receiver/:productId/p" element={<Donate />} />
          <Route path="/product/donater/:productId/p" element={<RequireDonate />} />

          {/* Buy */}
          <Route path="account/shippingstatus/buyinfo/:productId" element={<PrivateRoute> <ShippingStatusBuy /> </PrivateRoute>} />
          <Route path="account/shippingstatus/confirmrecieve" element={<PrivateRoute> <ShippingStatusConfirm /> </PrivateRoute>} />
          <Route path="account/shippingstatus/sellerreview" element={<PrivateRoute> <ShippingSellerRevirw /> </PrivateRoute> } />

          {/* Sell */}
          <Route path="account/shippingstatus/sellinfo/:productId" element={<PrivateRoute> <ShippingStatusSell /> </PrivateRoute>} />
          <Route path="account/shippingstatus/successprocess" element={<PrivateRoute> <ShippingSellSucess /> </PrivateRoute>} />

          <Route path="search/:keyword" element={<Search />} />
          <Route path="c/:keyword" element={<Search />} />

          <Route path="test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
