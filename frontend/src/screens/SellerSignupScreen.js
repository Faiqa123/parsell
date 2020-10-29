import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';

function SellerSignupScreen(props) {

  const [shopBasedIn, setShopBasedIn] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const userRegister = useSelector(state => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();

  const redirect = props.location.search ? props.location.search.split("=")[1] : '/seller-signin';
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  }
  return <div className="form">
    <form onSubmit={submitHandler} >
      <ul className="form-container1">
        <li>
          <h2 className="signup-center">SIGN UP</h2>
        </li>
        <li>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </li>
        <li>
          <label htmlFor="shopBasedIn">
            Shop Based in
          </label>
          <input type="shopBasedIn" name="shopBasedIn" id="shopBasedIn" onChange={(e) => setShopBasedIn(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="contactNumber">
          Contact Number
          </label>
          <input type="contactNumber" name="contactNumber" id="contactNumber" onChange={(e) => setContactNumber(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="rePassword">Confirm Password</label>
          <input type="password" id="rePassword" name="rePassword" onChange={(e) => setRePassword(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="name">
            Shop Name
          </label>
          <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="terms">
            I've read & understand Parsell Terms & Conditions
          </label>
          
        </li>
        <li>
          <button type="submit" className="button primary">SIGN UP</button>
        </li>
        <li>
          Already have an account? 
          <Link to="/seller-signin">Sign-In Here</Link>

        </li>

      </ul>
    </form>
  </div>
}
export default SellerSignupScreen;