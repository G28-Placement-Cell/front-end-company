import {React, useState, useEffect, Fragment} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { SidebarData } from '../Sidebared/Sidebar';
import { SidebarDatanot } from '../Sidebared/SideBarnot';

import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';

export default function TemporaryDrawer({ logoutHandler }) {
  
  const [company, setCompany] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // console.log(localStorage.getItem('token'));
        fetch('https://back-end-production-3140.up.railway.app/api/company/profile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => res.json()).then((data) => {
            // console.log(data);
            setCompany(data.comp);
            setLoading(false);
        }).catch((err) => {
            // console.log(err);
            setLoading(false);
        });
    }, [])

    const isCompanyVerified = company?.isVerified;
    // console.log(student);
    // console.log(isStudentVerified);
    const selectedSidebarData = isCompanyVerified ? SidebarData : SidebarDatanot;

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300, height: 1000 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ backgroundColor: '#2B2442' }}
    >
      {selectedSidebarData.map((item, index) => (
        <li key={index} className={item.cName}>
          <Link to={item.path} onClick={item.title === 'Logout' ? logoutHandler : undefined}>
            {item.icon}
            <span>{item.title}</span>
          </Link>
        </li>
      ))}
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {<FaIcons.FaBars style={{ color: 'white', alignSelf: 'center', fontSize: 25, justifySelf: 'center', marginBottom: 4 }} />}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor, logoutHandler)}
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
}