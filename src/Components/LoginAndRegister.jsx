import React from 'react'
import Login from './Form/Login'
import SignUp from './Form/SignUp'
import './LoginAndRegisterStyle.scss'

const LoginAndRegister = () => {
    return (<div className="login-signup"> <Login /> 
    <SignUp />
    </div>  );
}
 
export default LoginAndRegister;