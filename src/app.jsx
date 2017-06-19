import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import login from './components/login/login.jsx';
import signup from './components/signup/signup.jsx';
import home from './components/home/home.jsx';
import board from './components/board/board.jsx';
import './main.scss';

import { signin as x } from './actions/userActions.js';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="">
        <Route exact path="/" component={login} />
        <Route path="/home" component={home} />
        <Route path="/signup" component={signup} />
        <Route path="/board" component={board} />
      </div>
    </Router>
  </Provider>
);

render(<App />, document.getElementById('root'));
