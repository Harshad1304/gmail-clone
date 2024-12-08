import React from 'react'
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';
import { auth } from '../../firebase/firebase';
function Header() {
  const user  = useSelector(selectUser)
  console.log(user.photoUrl)
  const dispatch = useDispatch()
  const signOut = ()=>{
    auth.signOut()
    .then(()=>{
      dispatch(logout())
    }).catch(error=>alert(error))
  }
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
            <Avatar src={user?.photoUrl} onClick={signOut}/> 
      </div>
    </div>
  )
}

export default Header