import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';
import { SidebarData } from '../../Sidebared/Sidebar';
import '../../Sidebared/Navbar.css';
import { IconContext } from 'react-icons';
import { useDispatch } from 'react-redux';
import { useLogoutMutation } from '../../slices/company/companyApislice';
import { logout } from '../../slices/company/authslice';

function Header() {
  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch();
  const [logoutapicall] = useLogoutMutation();
  const history = useHistory();

  const logoutHandler = async () => {
    try {
      await logoutapicall().unwrap();
      dispatch(logout());
      history.push('/companylogin');
    } catch (error) {
      console.log(error);
    }
  }

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <AppBar position="sticky" style={{ backgroundColor: "#2B2442" }}>
      <Toolbar>
        <Link to='#' className='menu-bars' style={{ marginLeft: 0 }}>
          <FaIcons.FaBars onClick={showSidebar} style={{ color: 'white', alignSelf: 'center', justifySelf: 'center', marginBottom: 6, marginTop: 16 }} />
        </Link>
        <>
          <IconContext.Provider value={{ color: '#fff' }}>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} style={{ zIndex: 500 }}>
              <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                  <Link to='#' className='menu-bars'>
                    <AiIcons.AiOutlineClose style={{}} />
                  </Link>
                </li>
                {SidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </IconContext.Provider>
        </>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 2 }}>
          Placement Cell
        </Typography>
        <Button color="inherit"><Link to='/contactus' id='btn1'>Contact us</Link></Button>
        <Button color="inherit"><Link to='/aboutus' id='btn2'>About Us</Link></Button>
        <Button color="inherit" onClick={logoutHandler}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;