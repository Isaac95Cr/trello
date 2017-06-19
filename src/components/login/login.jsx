import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom'
import './login.scss';
import logo from './img/Trello-logo.svg'
import user from './img/username.svg'

const login = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-4">
        <div className="login">
          <div className="login__wrapper">
            <div className="login__logo">
              <img src={logo} />
            </div>
            <form className="login__form">
              <input type="text" className="login__input username" />
              <input type="password" className="login__input password" />
              <Link to="/home">
                <button className="btn btn-default" >Log in</button>
              </Link>
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

export default login;
