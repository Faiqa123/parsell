import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ProductsScreen from './screens/ProductsScreen';
import RegisterScreen from './screens/RegisterScreen';
import SellerDashboardScreen from './screens/SellerDashboardScreen';
import SellerHomeScreen from './screens/SellerHomeScreen';
import SellerSigninScreen from './screens/SellerSigninScreen';
import SellerSignupScreen from './screens/SellerSignupScreen';
import SigninScreen from './screens/SigninScreen';


function App() {

  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;

  const openMenu=()=>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu=()=>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
              <header className="header">
                  <div className="brand">
                      <button onClick={openMenu}>
                          &#9776;
                      </button>
                      <Link to="/">&nbsp;fyp-parsell</Link>
                  </div>
                  <div className="header-links">
                    <Link to="/seller-home">Sell on Parsell&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                    <a href="cart.html">Cart&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                    {userInfo ? (
                      <Link to="/profile">{userInfo.name}</Link>
                    ) : (
                      <Link to="/signin">Sign In &nbsp;&nbsp;</Link>
                    )}
                  </div>
              </header>
              <aside className="sidebar">
                  <h3>Shopping Categories</h3>
                  <button className="sidebar-close-buttton" onClick={closeMenu}>x</button>
                  <ul>
                      <li>
                          <a href="index.html">pants</a>
                      </li>
                      <li>
                          <a href="index.html">pants</a>
                      </li>
                  </ul>
              </aside>
              <main className="main">
                  <div className="content">   
                    <Route path="/seller-dashboard" component={SellerDashboardScreen}/>
                    <Route path="/seller-signin" component={SellerSigninScreen}/>
                    <Route path="/seller-signup" component={SellerSignupScreen}/>
                    <Route path="/seller-home" component={SellerHomeScreen}/>
                    <Route path="/products" component={ProductsScreen} />
                    <Route path="/signin" component={SigninScreen}/>
                    <Route path="/register" component={RegisterScreen}/>
                    <Route path="/product/:id" component={ProductScreen}/>
                    <Route path="/cart/:id?" component={CartScreen}/>
                    <Route path="/" exact={true} component={HomeScreen}/>        
                  </div>
              </main>
              <footer className="footer">
                  All rights reserved.
              </footer>
          </div>
        </BrowserRouter>
  );
}

export default App;
