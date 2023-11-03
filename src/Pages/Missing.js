import React from 'react'
import {Link} from 'react-router-dom';
import Footer from '../Components/Footer';
export default function Missing() {
  return (
    <>
      <div className="Missing">
      <h2>Page Not Found</h2>
                <p>Well, that's disappointing.</p>
                <p>
                    <Link to='/'>Visit Our Homepage</Link>
                </p>
    </div>
    <Footer />
    
    </>
  )
}
