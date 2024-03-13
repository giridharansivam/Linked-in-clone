import { Avatar } from '@material-ui/core'
import React, {forwardRef, useState } from 'react'
import InputOptions from './../InputOptions/InputOptions';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import './Post.css'
const Post =forwardRef (({name,description,message,photoUrl},ref)=> {
  const [posts,setposts] = useState([])
    return (
    <div ref={ref} className='post'>
        <div className="post_header">
            <Avatar src={photoUrl} alt="">{name[0]}</Avatar>
            <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post_body">
                <p>{message}</p>
        </div>
        <div className='post-button'>
                <InputOptions Icon={ThumbUpAltIcon} title="Like" color="gray"/>
                <InputOptions Icon={ChatOutlinedIcon} title="Comment" color="gray" />
                <InputOptions Icon={ShareOutlinedIcon} title="Share" color="gray" />
                <InputOptions Icon={SendOutlinedIcon} title="Send" color="gray" />
        </div>
    </div>
  )
}
)

export default Post
