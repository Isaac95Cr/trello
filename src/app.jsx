import React from 'react';
import { render } from 'react-dom';
import './main.scss';
import { Provider } from 'react-redux';
import store from './store';
import logo from './img/Trello-logo.svg'
import user from './img/username.svg'

const App = () => (
  <Provider store={store}>
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
                <input type="text" className="login__input password" />
                <button className="btn btn-default">Log in</button>
              </form>
              <div className="login__or">
                  <hr className="hr-text" data-content="OR" />
              </div>
              <div className="login__create">
                <a href="" className="">Create a Trello acount</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 hidden-xs">
          <div className="home__background"></div>
        </div>
      </div>
    </div>

  </Provider>
);

render(<App />, document.getElementById('root'));
