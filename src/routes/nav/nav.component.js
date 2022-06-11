import React, { Fragment } from 'react'
import {Outlet, Link} from 'react-router-dom'
// import Display from '../../Component/carousel/carousel.component'
import Hero from '../../Component/Hero/Hero.component';
import Link1 from '../Links/Link1.components'

function Navbar() {
  return (
    <Fragment>
       <div>
         <nav className="navbar navbar-expand-sm navbar-dark bg-light justify-content-between">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand">
          <h2 className='text-secondary'> <span className="text-danger">E-</span>Commerce</h2>
        </Link>
        <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className="collapse navbar-collapse" id="collapsibleNavbar"> */}
          <ul className='nav nav-pills'>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link text-dark dropdown-toggle" id='navbardrop' data-bs-toggle="dropdown">Services</a>
              <div className="dropdown-menu">
                <Link to='/shop'  className="dropdown-item">Drop Link</Link>
                {/* <Link to='/link1' className="dropdown-item">Drop Link1</Link> */}
                <a href="#" className="dropdown-item">Drop Link</a>
                <a href="#" className="dropdown-item">Drop Link</a>
                <a href="#" className="dropdown-item">Drop Link</a>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/shop" >Shop</Link>
             </li> 
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/contact">Contact</Link>
             </li> 
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/about">About</Link>
             </li> 
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/cart">Cart</Link>
             </li> 
            <li className="nav-item">
              <Link className="btn btn-light shadow-lg mx-2 pa-2 btn-lg" to="/login">Login</Link>
             </li> 
            <li className="nav-item">
              <Link className="btn btn-light shadow-lg mr-2 pa-2 btn-outline-dark btn-lg" to="/sign-up">Sign-up</Link>
             </li> 
          </ul>
        </div>

        {/* </div> */}
      </nav>
    </div>
    <Outlet/>
    </Fragment>
   
  )
}

export default Navbar