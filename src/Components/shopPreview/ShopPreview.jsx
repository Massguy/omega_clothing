import React from 'react'
import ShopItem from '../shopItem/ShopItem';
import './ShopPreview.scss'
const ShopPreview = ({title,items}) => {
    return (<div className="shopPreview">
        <div className="title">
        <h1>{title.toUpperCase()}</h1>
        </div>
        <div className="preview">
            {items.filter((item,index)=> index < 4).map((item)=>(
                <ShopItem key={item.id} item={item}/>
            ))}
        </div>
    </div>  );
}
 
export default ShopPreview;