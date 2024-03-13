import { Avatar, styled } from '@material-ui/core'
import React from 'react'
import './SideBar.css'
import profile from '../../assets/profile.jpg'
import { useSelector } from 'react-redux'
import { selectedUser } from '../../redux/reducer'
function SideBar() {
  const user=useSelector(selectedUser)
  const hashtags = (topic) =>(
    
    <div className="sidebar_recentItem">
      <span className='sidebar_hash'>#</span><p>{topic}</p>
    </div>
  )

  return (
    
    <div className='sidebar'>
        <div className='sidebar_top'>
          <img src="https://images.unsplash.com/photo-1682687220161-e3e7388e4fad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <Avatar className='sidebar_avatar' src={user.photoUrl}>{user.email[0]}</Avatar>
          <h2 style={{"font-weight":"Bold"}}>{user.displayName}</h2>
          <h4 style={{"color":"gray"}}>Software engineering student at centennial college</h4>
          </div>
          <div className="sidebarstats">
                        <div className="sidebar_stat">
                        <p>Profile viewers</p> <p className='sidebar_statNumber'>142</p>
                        </div>
                        <div className="sidebar_stat">
                        <p>connections</p>
                        <p className='sidebar_statNumber'>200</p>
                        </div>
            </div>
            <div className='sidebar_bottom'>
                  <p>Recent</p>
                  {hashtags("software engineering")}
                  {hashtags("web development")}
                  {hashtags("React js development")}
                  {hashtags("programming")}
            </div>

    </div>
  )
}

export default SideBar
