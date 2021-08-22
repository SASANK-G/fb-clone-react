import React from 'react'
import './Header.css';
import fb from '../fb.webp'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';



function Header() {
  return (
    <div className="header">
      {/* left */}
      <div className="header__left">
        <img src={fb} alt="fb icon"></img>
        <div className="header__input" >
          <SearchIcon/>
          <input tupe="text" placeholder="search" className="header__input__text"></input>

        </div>

      </div>
      {/* middle */}
      <div className="header__middle">
        <div className="header__options">
          <HomeIcon fontSize="large"/>
        </div>
        <div className="header__options">
          <FlagIcon fontSize="large"/>
        </div>
        <div className="header__options">
          <SubscriptionsOutlinedIcon fontSize="large"/>
        </div>
        <div className="header__options">
          <StorefrontOutlinedIcon fontSize="large"/>
        </div>
        <div className="header__options">
          <SupervisedUserCircleIcon fontSize="large"/>
        </div>
      </div>
      {/* right */}
      <div className="header__right">
        <div className="header__info">
          <Avatar/>
        <h4>sasank</h4>
        <IconButton>
          <AddIcon/>
        </IconButton>
        <IconButton>
          <ForumIcon/>
        </IconButton>
        <IconButton>
          < NotificationsActiveIcon/>
        </IconButton>
        <IconButton>
          <ArrowDropDownOutlinedIcon/>
        </IconButton>
        
        </div>
        
        
      </div>
    </div>
  )
}

export default Header
