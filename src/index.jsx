import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter,Route } from 'react-router-dom';
import RequireAuth from './components/authentication/authentication.jsx';  
import Login from './components/login/login.jsx';
import Signup from './components/signup/signup.jsx';
import Home from './components/home/home.jsx';
import Board from './components/board/board.jsx';

import './main.scss';

import { signin as x } from './actions/userActions.js';

const Index = () => (
    <Provider store={store}>
        <BrowserRouter >
            <div className="">
                <Route exact path="/" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/board" component={Board} />
                <Route path="/home" component={RequireAuth(Home)} />
            </div>
        </BrowserRouter>
    </Provider>
);

render(<Index />, document.getElementById('root'));
