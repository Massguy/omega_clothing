import React from 'react'
import {connect} from 'react-redux';
import './ShopItemStyle.scss';
import Button from '../Button/Button'
import {addItem} from '../../redux/cart/cart.actions'

const ShopItem = ({item,addItem}) => {
    const {name,price,imageUrl} = item
    return (<div className="shop_item">
        <div className="image" style={{backgroundImage:`url(${imageUrl})`}} />

        <div className="shop_footer">
            <span className="name">{name}</span>
            <span className="name">{price}</span>
        </div>
        <Button onClick={() => addItem(item)}inverted="true">Add to cart</Button>
    </div>  );
}
 

const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(ShopItem);