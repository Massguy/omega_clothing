import React,{Component} from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import HomePage from './Components/HomePage.jsx'
import ShopPage from './Components/ShopPage.jsx'
import Header from './Components/Header.jsx'
import LoginAndRegister from './Components/LoginAndRegister';
import {auth} from './firebase/firebase.utils'
class App extends Component {
  state = {
    currentUser:null
  }
  unlinkFromAuth=null
  componentDidMount(){
    this.unlinkFromAuth=auth.onAuthStateChanged(user =>{ this.setState({
      currentUser:user})
    }
    )
  }

  componentWillUnmount(){
    this.unlinkFromAuth()
  }

  render() {
    return (<div >
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/login" component={LoginAndRegister} />
        
      </Switch>
    </div>)
  };
}

export default App;
