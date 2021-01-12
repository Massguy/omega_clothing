import React, { Component } from 'react';
import './LoginStyle.scss'
import FormInput from './FormInput'
import Button from '../Button/Button';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils.js'

class Login extends Component {
    state = { email:'',password:'' }
    handleSubmit = async (e)=>{
        e.preventDefault();
        const {email,password} = this.state
        try{
        await auth.signInWithEmailAndPassword(email,password)
        this.setState({email:'',password:''})
        }catch(error){
            console.log(error)
        }
    }
    handleChange = (e) =>{
        const {value,name}=e.target

        this.setState({[name]:value})
    }
    render() { 
        return (<div className="login_page">
            <h2 className="title">I already have an account</h2>
            <span>Sign in with username and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput name ="email" label="email" type="email" value={this.state.email} handleChange={this.handleChange}  required />
             
                <FormInput name ="password" label="password" type="password" value={this.state.password} handleChange={this.handleChange} required />
              
                <div className="buttons">  
                <Button type="submit" value="Submit">Sign in</Button>
                <Button onClick={signInWithGoogle} googleLogin={true}>Sign in google</Button>
                </div>
            </form>
        </div>  );
    }
}
 

export default Login;