import React from 'react';
import './ButtonStyle.scss'

const Button = ({children,googleLogin,...otherProps}) => {
    return (<button className={`${googleLogin ? 'google-login':''} custom-button`}{...otherProps}>
        {children}
    </button>  );
}
 
export default Button;