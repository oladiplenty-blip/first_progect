import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import HomePage from './Component/HomePage/home_page'
import Home from './routes/home/home.comp';
import Shop from './routes/shop/shop.component';
import Navbar from './routes/nav/nav.component';
import Link1 from './routes/Links/Link1.components';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}></Route>
        <Route path="shop" element={<Shop/>}></Route>
        <Route path="link1" element={<Link1/>}></Route>
        {/* <Route path="shop" element={<Shop/>}></Route> */}
      </Route>
    </Routes>
  )
}

export default App;