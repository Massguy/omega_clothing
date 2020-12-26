import React from "react";
import './MenuItemStyle.scss'

const MenuItem = ({title,imageUrl}) => {
  return (
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }}className="menu_item">
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
