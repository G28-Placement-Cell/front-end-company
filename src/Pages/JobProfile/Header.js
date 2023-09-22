import React from 'react';
import { AppBar, Toolbar, Typography} from '@mui/material';
import '../../CSS_files/App.css';
import {Link} from 'react-router-dom';
function Header() {
  return (
    <div className="header">
        <AppBar position='"sticky'>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Placement Cell
                </Typography>
                <button type="button" className="btn btn-outline-success" id='bt1'><Link to="/contactus" id='button1'>Contact Us</Link></button>
                <button type="button" className="btn btn-outline-success"><Link to="/aboutus" id='button2'>About Us</Link></button>
            </Toolbar>
        </AppBar>
    </div>
  );
}

export default Header;