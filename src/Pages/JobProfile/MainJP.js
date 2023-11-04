import React from 'react';
import {Link} from 'react-router-dom';
import '../../CSS_files/MainJP.css';
export default function MainJP() {
  return (
    <>
    <div style={{minHeight:'85vh'}}>
      <div className="mainjp">
        <div className="options">
          <Link to='/newpost'><button className="mainjpbtn">Add a New Job Profile</button></Link>
          <Link to='/seepost'><button className="mainjpbtn">See All the Existing Job Profiles</button></Link>
        </div>
        </div>
    </div>
    {/* <Footer /> */}
    </>
    
    
  )
}
