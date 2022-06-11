import React from 'react'
import { Outlet } from 'react-router-dom';
import HomePage from '../../Component/HomePage/home_page';
import Footer from '../../Component/footer';

function Home() {
  return (
    <div>
         <Outlet/>
         <HomePage/>
         <Footer/>
     </div>
  )
}

export default Home;