import React from 'react';
import { render } from 'react-dom';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin, setSignin, setError } from '../../actions/userActions.js';
import logoSvg from './img/Trello-logo.svg'
import './login.scss';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onLogIn = this.onLogIn.bind(this);
  }
  onChange(e) { this.setState({ [e.target.name]: e.target.value }) }
  onLogIn(e) {
    const { history, signin, setSignin, setError } = this.props;
    this.setState({ error: "" });
    e.preventDefault();

    signin(this.state.username, this.state.password)
      .then(response => {
        cookies.set('token', response.data.token, { path: '/' });
        setSignin(response.data);
        history.push('/home');
      })
      .catch(err => {
        this.setState({ error: err.response.data.message });
        setError(err.response.data.message);
      });
  };

  render() {
    const { onChange, onLogIn } = this;
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
                  <input type="text" name="username" onChange={onChange} className="login__input username" />
                  <input type="password" name="password" onChange={onChange} className="login__input password" />
                  <button className="btn btn-default" onClick={onLogIn}>Log in</button>
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
    )
  }
}

export default connect(null, { signin, setSignin, setError })(Login);
