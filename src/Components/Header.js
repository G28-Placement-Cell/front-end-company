import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Sidebared/Navbar.css";
import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/company/companyApislice";
import { logout } from "../slices/company/authslice";
import TemporaryDrawer from "./Navbar.js";

function Header() {
  const companyInfoJSON = localStorage.getItem('companyInfo');
  const companyInfo = JSON.parse(companyInfoJSON);

  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch();
  const [logoutapicall] = useLogoutMutation();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logoutapicall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <AppBar position="sticky" style={{ backgroundColor: "#2B2442" }}>
      <Toolbar>
        {companyInfo && (
          <TemporaryDrawer logoutHandler={logoutHandler} />
        )}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, marginLeft: 2 }}
        >
          {
            companyInfo ?

              < span onClick={() => navigate('/profile')} style={{ cursor: 'pointer' }}>
                Placement Cell
              </span>
              :
              <span onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                Placement Cell
              </span>
          }
        </Typography>
        {/* <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button color='inherit' style={{ minWidth: '16vh' }} onClick={() => navigate('/ContactUs')}>Contact Us</Button>
          <Button color='inherit' style={{ minWidth: '16vh' }} onClick={() => navigate('/aboutus')}>About Us</Button>
        </div> */}
      </Toolbar>
    </AppBar>
  );
}

export default Header;