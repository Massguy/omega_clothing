import React,{Component} from 'react';
import './App.css';
import {Switch,Route,Redirect} from 'react-router-dom';
import HomePage from './Components/HomePage.jsx'
import ShopPage from './Components/ShopPage.jsx'
import Header from './Components/Header.jsx'
import LoginAndRegister from './Components/LoginAndRegister';
import {connect} from 'react-redux'
import {auth,createUserProfile} from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions';
class App extends Component {
  state = {
    currentUser:null
  }
  unlinkFromAuth=null
  componentDidMount(){

    const {setCurrentUser} = this.props
    this.unlinkFromAuth=auth.onAuthStateChanged( async user =>{ 
      if(user){
      const userRef= await createUserProfile(user);

      userRef.onSnapshot(snapShot => {
        setCurrentUser({
          id:snapShot.id,
          ...snapShot.data()
        })
      })
   
      }
      setCurrentUser(user)
    })
  }

  componentWillUnmount(){
    this.unlinkFromAuth()
  }

  render() {
    return (<div >
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/login" render={()=>this.props.currentUser?(<Redirect to='/' />):(<LoginAndRegister />)} />
        
      </Switch>
    </div>)
  };
}
const mapStateToProps=({user})=>({
  currentUser:user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser:user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
