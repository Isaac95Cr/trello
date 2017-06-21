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
import setHeader from './utils/setHeaders.js';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
import { setSignin } from './actions/userActions.js';
import jwt from 'jsonwebtoken';
import './main.scss';

const token = cookies.get('token');
if(token){
    setHeader(token);
    store.dispatch(setSignin(jwt.decode(token)));
}

const Index = () => (
    <Provider store={store}>
        <BrowserRouter >
            <div className="">
                <Route exact path="/" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/board" component={RequireAuth(Board)} />
                <Route path="/home" component={RequireAuth(Home)} />
            </div>
        </BrowserRouter>
    </Provider>
);

render(<Index />, document.getElementById('root'));
