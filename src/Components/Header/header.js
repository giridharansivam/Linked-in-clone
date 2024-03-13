import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import linkedin from '../../assets/linkedin.png'
import HeaderOptions from '../HeaderOptions/HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import profilepic from '../../assets/profile.jpg'
import store from '../../redux/store';
import { getAuth, signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { selectedUser } from '../../redux/reducer';
function Header() {
  const logOutOfApp = () =>{
    store.dispatch({type:"logOut"})
    const auth = getAuth()
    signOut(auth);
  }

  return (
    <div className='header'>
    <div className="header_left">
      <img src={linkedin} alt='4'/>
      <div className="header_search">
        <SearchIcon />
        <input type='text' placeholder='Search'/>
      </div>
    </div> 
  <div className="header_right">
  <HeaderOptions Icon={HomeIcon} title="Home" />
  <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
  <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
  <HeaderOptions Icon={ChatIcon} title="messaging" />
  <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
  <HeaderOptions avatar={true} title="Me" onClick={logOutOfApp} />
  </div>
    </div>
  )
}

export default Header
