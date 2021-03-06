import React from 'react'
import {connect} from 'react-redux'
import Button from '../Button/Button'
import CartItem from '../cart_item/cart_item'

import './CartDropdown.style.scss';

const CartDropdown = ({cartItems}) => {
 return( <div className="cart-dropdown">
 
      <div className="cart-items">
          {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)}
      </div>
      <Button>Go To Checkout</Button>

  </div>)
}
const mapStateToProps = ({cart:{cartItems}}) => ({
    cartItems
})
 
export default connect(mapStateToProps)(CartDropdown);