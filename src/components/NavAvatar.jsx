import React, { useState } from 'react';
import { Avatar, Menu, MenuItem, ListItemIcon, Divider, Typography, IconButton } from '@mui/material';
import { Person, Settings, HelpOutline, Logout, ExpandMore } from '@mui/icons-material';
import profileImg from '../assets/user1.png';
import HelpSubmenu from './HelpSubmenu'; // Import the new submenu component
import './nav.css';

function NavAvatar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [helpAnchorEl, setHelpAnchorEl] = useState(null); // State for Help submenu

  const open = Boolean(anchorEl);
  const helpOpen = Boolean(helpAnchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleHelpClick = (event) => {
    setHelpAnchorEl(event.currentTarget);
  };

  const handleHelpClose = () => {
    setHelpAnchorEl(null);
  };

  return (
    <li className='nav-item'>
      <div className='nav-link nav-profile d-flex align-items-center pe-0' onClick={handleClick}>
        <Avatar src={profileImg} alt='Profile' className='nav-avatar' />
        <span className='d-none d-md-block ps-2'>Users</span>
      </div>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock={true}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <div className='dropdown-header'>
            <Typography variant='subtitle1' noWrap>
              James
            </Typography>
            <Typography variant='body2' color="textSecondary" noWrap>
              Developer
            </Typography>
          </div>
        </MenuItem>
        <Divider />
        <MenuItem component="a" href='users-profile.html'>
          <ListItemIcon>
            <Person fontSize='small' />
          </ListItemIcon>
          My Profile
        </MenuItem>
        <Divider />
        <MenuItem component="a" href='account-settings.html'>
          <ListItemIcon>
            <Settings fontSize='small' />
          </ListItemIcon>
          Account Settings
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleHelpClick}>
          <ListItemIcon>
            <HelpOutline fontSize='small' />
          </ListItemIcon>
          Need Help
          <IconButton
            edge="end"
            aria-label="expand"
            style={{ marginLeft: 'auto', transition: 'transform 0.3s' }}
            className={helpOpen ? 'chevron-rotate' : ''}
          >
            <ExpandMore fontSize='small' />
          </IconButton>
        </MenuItem>
        <Divider />
        <MenuItem component='a' href='#'>
          <ListItemIcon>
            <Logout fontSize='small' />
          </ListItemIcon>
          Sign out
        </MenuItem>
      </Menu>
      <HelpSubmenu anchorEl={helpAnchorEl} open={helpOpen} onClose={handleHelpClose} />
    </li>
  );
}

export default NavAvatar;
