import React from 'react'
import {Link} from 'react-router-dom';
import daiictlogo from '../images/daiictlogo.png';
import '../CSS_files/App.css';

export default function Navbar() {
  return (
    <div className="c1">
        <div class = "navbar" id="navlinks">
            <i class="fa fa-times" onClick={hidemenu} id="close"></i>
              <ul class="ul">
                <li><Link to='/companyprofile'>Company Profile</Link></li>
                <li><Link to="/jobprofile">Job Profile</Link></li>
                <li><Link to="/announcement">Announcement</Link></li>
                <li><Link to="/changepassword">Change Password</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/logout">Log Out</Link></li>
              </ul>
        </div>
        <i class="fa fa-bars" onClick={showmenu} id="bars"></i>
        <div class="sideimage">
            <img src={daiictlogo} alt="No image available" class="i1" />
        </div>
    </div>
  )
  function hidemenu(){
    const navbar = document.getElementById("navlinks");
      navbar.style.left = "-200px";
  }
  function showmenu(){
    const navbar = document.getElementById("navlinks");
      navbar.style.left = "0";
  }
}
