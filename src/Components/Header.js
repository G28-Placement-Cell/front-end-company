import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { SidebarData } from "../Sidebared/Sidebar";
import "../Sidebared/Navbar.css";
import { IconContext } from "react-icons";
import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/company/companyApislice";
import { logout } from "../slices/company/authslice";
import TemporaryDrawer from "./Navbar.js";

function Header() {
  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch();
  const [logoutapicall] = useLogoutMutation();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logoutapicall().unwrap();
      dispatch(logout());
      navigate("/companylogin");
    } catch (error) {
      console.log(error);
    }
  };

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <AppBar position="sticky" style={{ backgroundColor: "#2B2442" }}>
      <Toolbar>
        <TemporaryDrawer />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, marginLeft: 2 }}
        >
          Placement Cell
        </Typography>
        <div style={{ display: "flex", justifyContent: "inherit" }}>
          <Button
            color="inherit"
            sx={{ minWidth: "7vw" }}
          >
            Contact us
          </Button>
          <Button color="inherit" sx={{minWidth: "7vw"}}>About Us</Button>
          <Button color="inherit" onClick={logoutHandler}>
            Logout
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
