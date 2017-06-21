import React from 'react';
import { render } from 'react-dom';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup, setSignin, setError } from '../../actions/userActions.js';
import jwt from 'jsonwebtoken';
import setHeader from '../../utils/setHeaders.js';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
import logoSvg from './img/Trello-logo.svg';
import boardSvg from './img/board-Icon.svg';
import './signup.scss';


class SingUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      name: '',
      error: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
  }
  onChange(e) { this.setState({ [e.target.name]: e.target.value }) }
  onSignUp(e) {
    const { history, signup, setSignin, setError } = this.props;
    this.setState({ error: "" });
    e.preventDefault();
    console.log(this.state.name,this.state.username, this.state.password);
    signup(this.state.name,this.state.username, this.state.password)
      .then(response => {
        cookies.set('token', response.data.token, { path: '/' });
        setHeader(response.data.token);
        setSignin(response.data);
        history.push('/home');
      })
      .catch(err => {
        this.setState({ error: err.response.data.message });
        setError(err.response.data.message);
      });
  };
  render() {
    const { onChange, onSignUp } = this;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">

            <div className="login">
              <div className="login__wrapper">
                <div className="login__logo">
                  <img src={logoSvg} />
                </div>
                <form className="login__form">
                  <input type="text" name="name" onChange={onChange} className="login__input name" placeholder="Name" />
                  <input type="text" name="username" onChange={onChange} className="login__input username" placeholder="Email" />
                  <input type="password" name="password" onChange={onChange} className="login__input password" placeholder="Password" />
                  <button className="btn btn-default" onClick={onSignUp}>Log in</button>
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
  }
}

export default connect(null, { signup, setSignin, setError })(SingUp);