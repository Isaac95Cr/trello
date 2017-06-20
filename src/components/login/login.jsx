import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signin as log } from '../../actions/userActions.js';
import logoSvg from './img/Trello-logo.svg'
import './login.scss';

let Login = ({ dispatch }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-4">
        <div className="login">
          <div className="login__wrapper">
            <div className="login__logo">
              <img src={logoSvg} />
            </div>
            <form className="login__form">
              <input type="text" className="login__input username" />
              <input type="password" className="login__input password" />
              <button className="btn btn-default" onClick={
                (e) => {
                  e.preventDefault()
                  dispatch(log("example0@gmail.com","lala"));
                }
              } >Log in</button>
            </form>
            <div className="login__or">
              <hr className="hr-text" data-content="OR" />
            </div>
            <div className="login__create">
              <Link to="/signup" href="" className="">Create a Trello acount</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8 hidden-xs">
        <div className="home__background"></div>
      </div>
    </div>
  </div>
);

Login = connect()(Login);

export default Login;
