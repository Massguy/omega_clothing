import React from 'react'
import {Link} from 'react-router-dom'
import './HeaderStyle.scss'
import {auth} from '../firebase/firebase.utils'

const Header = ({currentUser}) => {
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
        </div>
    </div>  );
}
 
export default Header;