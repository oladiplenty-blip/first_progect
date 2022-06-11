import React from 'react'

function Footer() {
  return (
    <div>
    <div className="container-fluid row gutter-2 py-5 mt-3 bg-danger text-white">
        <div className="col">
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Terms and conditions</a></li>
                <li><a href="#">Cookie preferences</a></li>
            </ul>
        </div>
        <div className="col">
            <ul>
                <li><a href="#">Services</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Reviews</a></li>
                <li><a href="#">Help Center</a></li>
            </ul>
        </div>
        <div className="col">
            <ul>
                <li><a href="#">Jobs For Nerds</a></li>
                <li><a href="#">Partner Program</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Vouchers</a></li>
                <li><a href="#">Play</a></li>
            </ul>
        </div>
        <div className="col">
            <ul>
                <li><a href="#">Facebookt</a></li>
                <li><a href="#">Linkedin</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">YouTube</a></li>
                <li><a href="#">Twitter</a></li>
            </ul>
        </div>
        <div className="col-12 my-4 text-center">&copy; 2022, Nerdapp.com</div>
    </div>
 
   
    </div>
  )
}

export default Footer