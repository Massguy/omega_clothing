import React from 'react'
import ShopItem from '../shopItem/ShopItem';
import './ShopPreview.scss'
const ShopPreview = ({title,items}) => {
    return (<div className="shopPreview">
        <div className="title">
        <h1>{title.toUpperCase()}</h1>
        </div>
        <div className="preview">
            {items.filter((item,index)=> index < 4).map(({id,...otherStateValues})=>(
                <ShopItem key={id} {...otherStateValues}/>
            ))}
        </div>
    </div>  );
}
 
export default ShopPreview;