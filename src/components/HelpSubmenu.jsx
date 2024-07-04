import React from 'react';
import { Menu, MenuItem, ListItemIcon } from '@mui/material';
import { DiamondOutlined, LaptopChromebookRounded } from '@mui/icons-material';

function HelpSubmenu({ anchorEl, open, onClose }) {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem component="a" href="contact-support.html">
        <ListItemIcon>
          <DiamondOutlined fontSize="small" />
        </ListItemIcon>
        Jewelry Tutorial
      </MenuItem>
      <MenuItem component="a" href="send-feedback.html">
        <ListItemIcon>
          <LaptopChromebookRounded fontSize="small" />
        </ListItemIcon>
        POS Tutorial
      </MenuItem>
    </Menu>
  );
}

export default HelpSubmenu;
