import React from 'react'
import './ShopItemStyle.scss';
const ShopItem = ({id,price,name,imageUrl}) => {
    return (<div className="shop_item">
        <div className="image" style={{backgroundImage:`url(${imageUrl})`}} />

        <div className="shop_footer">
            <span className="name">{name}</span>
            <span className="name">{price}</span>
        </div>
    </div>  );
}
 
export default ShopItem;