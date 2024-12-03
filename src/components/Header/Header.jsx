import React from 'react'
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
function Header() {
  return (
    <div className='header'>
      <div className='header-left'>
        <IconButton>
        <MenuIcon />
        </IconButton>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail2020.logo.png" alt="" />
      </div>
      <div className="header-middle">
          <SearchIcon />
          <input type="text" placeholder='Search Mail' />
          <ArrowDropDownIcon className='header-input-caret'/>
      </div>
      <div className="header-right">
            <IconButton>
              <AppsIcon />
            </IconButton>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
            <Avatar /> 
      </div>
    </div>
  )
}

export default Header