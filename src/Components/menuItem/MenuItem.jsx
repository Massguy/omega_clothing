import React from "react";
import './MenuItemStyle.scss'

const MenuItem = ({title,imageUrl,size}) => {
  return (
    <div className={`${size} menu_item`}>
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

export default MenuItem;
