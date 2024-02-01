import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './container/Home';
import Signin from './container/Signin';
import Signup from './container/Signup';
import RegisPhone from './container/Signup/RegisPhone';
import Otp from './container/Signup/Otp';
import Search from './container/Search';
import Product from './container/Product';

export default function App(){
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
        <Route path='signup/regisphone' element={<RegisPhone/>} />
        <Route path='signup/regisphone/Otp' element={<Otp/>} />
        <Route path='search' element={<Search/>} />
        <Route path='product' element={<Product/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
