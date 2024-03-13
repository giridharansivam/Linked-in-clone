import React from 'react'
import './headeroptions.css'
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectedUser } from '../../redux/reducer';
function HeaderOptions({avatar , Icon , title, onClick  }) {
  const user = useSelector(selectedUser)
  
  return (
    <div onClick={onClick} className="header_options">
        {Icon && <Icon className="headeroptions_icon"/>}
        {avatar && <Avatar className='headeroptions_avatar' src={user?.photoUrl}>{title}</Avatar>}
        <p> {title}</p>
        
    </div>
  )
}

export default HeaderOptions
