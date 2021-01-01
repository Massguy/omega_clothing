import React from 'react'
import {Link} from 'react-router-dom'
import './HeaderStyle.scss'

const Header = () => {
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
        </div>
    </div>  );
}
 
export default Header;