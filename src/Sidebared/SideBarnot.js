import React from 'react';
import * as TfiIcons from "react-icons/tfi";
import * as HiIcons from "react-icons/hi"
import * as TbIcons from 'react-icons/tb'
import * as ImIcons from 'react-icons/im';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

export const SidebarDatanot = [
  {
    title: 'Company Profile',
    path: '/companyprofile',
    icon: <HiIcons.HiOfficeBuilding />,
    cName: 'nav-text'
  },
  {
    title: 'Change Password',
    path: '/changepassword',
    icon: <TbIcons.TbArrowsExchange />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/logout', 
    icon: <LogoutRoundedIcon />,
    cName: 'nav-text',
  },
];