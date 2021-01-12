import React,{Component} from 'react'

import FormInput from './FormInput'
import Button from '../Button/Button'

import {auth,createUserProfile} from '../../firebase/firebase.utils';

import './SignUpStyle.scss';

class SignUp extends Component {
    state = { displayName:'',email:'',password:'',confirmPassword:'' }

    handleSubmit = async (e)=>{
        e.preventDefault()

        const {displayName,email,password,confirmPassword} = this.state

        if(password !== confirmPassword){
            alert('passwords dont match');
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password)
            createUserProfile(user,{displayName})
            this.setState({
                displayName:'',email:'',password:'',confirmPassword:'' 
            })
        }catch (error){
            console.error(error)
        }
    }

    handleChange = (e) =>{
        const {name,value}= e.target;
        this.setState({[name]:value})
    }

    render() { 
        const {displayName,email,password,confirmPassword} = this.state
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an Account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" value={displayName} onChange={this.handleChange} label="Display Name" required/>
                    <FormInput type="email" name="email" value={email} onChange={this.handleChange} label="Email" required/>
                    <FormInput type="password" name="password" value={password} onChange={this.handleChange} label="Password" required/>
                    <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} label="Confirm Password" required/>
                    <Button type="submit">Sign Up</Button>
                </form>
            </div>
          );
    }
}
 
export default SignUp;