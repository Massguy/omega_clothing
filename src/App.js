import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import HomePage from './Components/HomePage.jsx'
import ShopPage from './Components/ShopPage.jsx'
import Header from './Components/Header.jsx'
import LoginAndRegister from './Components/LoginAndRegister';

function App() {
  return (
    <div >
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/login" component={LoginAndRegister} />
        
      </Switch>
    </div>
  );
}

export default App;
