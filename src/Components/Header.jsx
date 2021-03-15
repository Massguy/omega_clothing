import React from 'react'
import {Link} from 'react-router-dom'
import './HeaderStyle.scss'
import {auth} from '../firebase/firebase.utils'
import {connect} from 'react-redux'
import CartIcon from './cart_icon/cart_icon'
import CartDropdown from './cart-dropdown/CartDropdown'
const Header = ({currentUser,hidden}) => {
    return (<div className="header">
        <Link to="/">
            Omega
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                Shop
            </Link>
            <Link className="option" to="/contact">
                Contact
            </Link>
            <Link className="option" to="/about">
                About us
            </Link>
            {currentUser ? <div className="option" onClick={()=>auth.signOut()}>Sign Out</div> : <Link className="option" to="/login">Sign In</Link>}
            <CartIcon />
        </div>
        { hidden?null:
        <CartDropdown />
}
    </div>  );
}

const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => ({
    currentUser,
    hidden
})
 
export default connect(mapStateToProps)(Header);