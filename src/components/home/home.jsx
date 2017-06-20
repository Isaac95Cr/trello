import React from 'react';
import { render } from 'react-dom';
import './home.scss';
import { Link } from 'react-router-dom'

import logo from './img/Trello-logo.svg'
import board from './img/board-Icon.svg';
import add from './img/add-Icon.svg';
import important from './img/important-Icon.svg';
import bell from './img/bell-Icon.svg';
import search from './img/searchIcon.svg';

import { connect } from 'react-redux';

let home = (props) => (

    <div className="container-fluid">
      <header>
        <div className="row">
          <nav className="navbar navbar-default" role="navigation">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className="navbar-brand" >
                <img src={logo} alt="" className="" />
              </div>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-left">
                <li>
                  <a>
                    <img src={board} alt="" className="" />Boards
                  </a>
                </li>
              </ul>
              <form className="navbar-form navbar-left">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search for..." />
                  <span className="input-group-btn">
                    <button className="btn btn-default form-control icon-color" type="button"><img src={search} alt="" className="" /></button>
                  </span>
                </div>
              </form>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a>
                    <img src={add} alt="" className="" />
                  </a>
                  <a>
                    <img src={important} alt="" className="" />
                  </a>
                  <a>
                    <img src={bell} alt="" className="" />
                  </a>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div className="row">
          <div className="col-md-12">
            <div className="boards__list">
              <div className="row">
                <div className="col-md-12">
                  <div className="boards__list__header">
                    <div className="boards__list__title">
                      <h2>{JSON.stringify(props.authenticated )+ ""}</h2>
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="boards__list__content">

                    <div className="row">
                      <div className="col-md-3">
                        <Link to="/board" href="" className="">
                        <div className="board__item">
                          <div className="board__item__title">
                            <h2>Board Title</h2>
                            <div className="board__item__content">

                            </div>
                          </div>
                        </div>
                        </Link>
                      </div>

                      <div className="col-md-3">
                        <Link to="/board" href="" className="">
                        <div className="board__item">
                          <div className="board__item__title">
                            <h2>Board Title</h2>
                            <div className="board__item__content">

                            </div>
                          </div>
                        </div>
                        </Link>
                      </div>

                      <div className="col-md-3">
                        <Link to="/board" href="" className="">
                        <div className="board__item">
                          <div className="board__item__title">
                            <h2>Board Title</h2>
                            <div className="board__item__content">

                            </div>
                          </div>
                        </div>
                        </Link>
                      </div>

                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
);

function mapStateToProps(state) {
    return { authenticated: state.user.user };
  }

  home =  connect(mapStateToProps)(home);

export default home;
