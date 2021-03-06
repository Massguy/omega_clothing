import React from "react";
import {withRouter} from 'react-router-dom'
import './MenuItemStyle.scss'

const MenuItem = ({title,imageUrl,size,history,link,match}) => {
  return (
    <div className={`${size} menu_item`} onClick={()=>history.push(`${match.url}${link}`)}>
      <div className = 'background-image' style={{
        backgroundImage: `url(${imageUrl})`
    }} />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
