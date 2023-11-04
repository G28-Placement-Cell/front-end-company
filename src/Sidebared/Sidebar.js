import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';
import * as TfiIcons from "react-icons/tfi";
import * as HiIcons from "react-icons/hi"
import * as RxIcons from "react-icons/rx"
import * as TbIcons from 'react-icons/tb'
import * as ImIcons from 'react-icons/im';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
  {
    title: 'Job Profile',
    path: '/jobprofile',
    icon: <ImIcons.ImProfile />,
    cName: 'nav-text'
  },
  {
    title: 'Company Profile',
    path: '/companyprofile',
    icon: <HiIcons.HiOfficeBuilding />,
    cName: 'nav-text'
  },

  {
    title: 'Announcements',
    path: '/announcement',
    icon: <TfiIcons.TfiAnnouncement />,
    cName: 'nav-text'
  },
  {
    title: 'Change Password',
    path: '/changepassword',
    icon: <TbIcons.TbArrowsExchange />,
    cName: 'nav-text'
  },
  {
    title: 'Log out',
    path: '/',
    icon: <BiIcons.BiLogOut />,
    cName: 'nav-text'
  },
  {
    title: 'Register',
    path: '/register',
    icon: <AiIcons.AiOutlineUserAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/',
    icon: <IoIcons.IoMdLogIn />,

    cName: 'nav-text'
  }
];