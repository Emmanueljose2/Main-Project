import React from 'react'
import { Link } from 'react-router-dom'
import profileImg from '../../assets/images/profile-02.png'
import "./topnav.css"
export default function TopNav() {
  return (
    <div className="top_nav">
      <div className="top_nav-wrapper">
        {/* <div className="search_box">
          <input type="text" placeholder="search or type"/>
          
          <span>
            <i class="ri-search-line"></i>
          </span>
          </div> */}
          <div className='top-nav-right'>
            <span className="notification">
              <i class="ri-notification-4-line"></i> 
              <span className="badge">1</span></span>
              <div className="profile">
              <Link to='/settings'><img src={profileImg} alt=""/></Link>
              </div>
              </div>
        </div>
     
      
      </div>
  )
}
