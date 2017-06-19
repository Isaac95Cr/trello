import React from 'react';
import { render } from 'react-dom';
import './signup.scss';
import logo from './img/Trello-logo.svg'
import board from './img/board-Icon.svg';
import add from './img/add-Icon.svg';
import important from './img/important-Icon.svg';
import bell from './img/bell-Icon.svg';
import search from './img/searchIcon.svg';


const singup = () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">

          <div className="login">
            <div className="login__wrapper">
              <div className="login__logo">
                <img src={logo} />
              </div>
              <form className="login__form">
                <input type="text" className="login__input name" placeholder="Name"/>
                <input type="text" className="login__input username" placeholder="Email"/>
                <input type="password" className="login__input password" placeholder="Password"/>
                <button className="btn btn-default">Log in</button>
              </form>
              <div className="login__or">
                  <hr className="hr-text" data-content="OR" />
              </div>
              <div className="login__create">
                <p>if you already have a Trello acount</p>
                <a href="" className="">Login</a>
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
export default singup;