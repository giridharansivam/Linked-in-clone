import { FiberManualRecord, FiberManualRecordOutlined, InfoOutlined } from '@mui/icons-material'
import React from 'react'
import './Widgets.css' 
function Widgets() {

    const newsArticle = (heading,subtitle) =>(
       <div className="widgets_article">
       <div className="widget_articleLeft">
            <FiberManualRecord />
        </div>
        <div className="widget_articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
        </div>
    )
  return (
    <div className='widgets'>
      <div className='widgets_header'>
        <h2>Linked In News</h2>
        <InfoOutlined />
      </div>
      {newsArticle("Linked in is cool","Top News - 999 readers")}
      {newsArticle("Linked in is cool","Top News - 999 readers")}
      {newsArticle("Linked in is cool","Top News - 999 readers")}
      {newsArticle("Linked in is cool","Top News - 999 readers")}

    </div>
  )
}

export default Widgets;
