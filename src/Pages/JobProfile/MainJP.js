import React from 'react';
import {Link} from 'react-router-dom';
import '../../CSS_files/MainJP.css';
import Footer from './Footer.js';
export default function MainJP() {
  return (
    <>
    <div>
      <div className="mainjp">
      <div className="background-image" />
        <div className="options">
          <Link to='/newpost'><button className="mainjpbtn">Add a New Job Profile</button></Link>
          <Link to='/seepost'><button className="mainjpbtn">See All the Existing Job Profiles</button></Link>
        </div>
      </div>
    </div>
    <Footer />
    </>
    
    
  )
}
