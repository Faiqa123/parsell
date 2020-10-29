import React from 'react';
import { Link } from 'react-router-dom';

function SellerHomeScreen(props){
    const handleSellerSignup =() =>{
        props.history.push("/seller-signup/")
    }
    return <div className="details-info" >
        <div className="back-to-result">   (Welcome to seller home page)</div>
         
          <ul className="seller-home-details">
              <li><h3 >Start Selling...</h3></li>
              <li>
              <button onClick={handleSellerSignup} className="button">Signup as a Parsell Seller</button>
              </li> 
              <li>
                Already have an account? &nbsp;
                <Link to="/seller-signin">Sign-In Here</Link>
              </li>
          </ul>
      </div>
}

export default SellerHomeScreen;