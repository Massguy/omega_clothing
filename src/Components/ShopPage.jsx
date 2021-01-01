import React, { Component } from 'react'
import SHOP_DATA from '../ShopData.js'
import ShopPreview from './shopPreview/ShopPreview.jsx'
class Shop extends Component {
    state = { collections:SHOP_DATA }

    render() { 
        const {collections}=this.state
        return (<div className="shop_page">
            {collections.map(({id,...shopProps})=>(
                <ShopPreview key={id} {...shopProps}/>
            ))}
        </div> );
    }
}
 
export default Shop;