import React from 'react';
import { render } from 'react-dom';
import './main.scss';
import { Provider } from 'react-redux';
import store from './store';
import logo from './img/Trello-logo.svg'
import board from './img/board-Icon.svg';
import add from './img/add-Icon.svg';
import important from './img/important-Icon.svg';
import bell from './img/bell-Icon.svg';
import search from './img/searchIcon.svg';


const App = () => (
  <Provider store={store}>
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
                    <button className="btn btn-default form-control icon-color" type="button"><img src={search} alt="" className=""/></button>
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
            <div className="board">
              <div className="row">
                <div className="col-md-12">
                  <div className="board__header">
                    <div className="board__title">
                      <h2>Title</h2>
                    </div>
                    <div className="board__nav">
                      <a href="" className="">Calendar</a>
                      <span> | </span>
                      <a href="" className="">Menu</a>
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="board__content">


                    <div className="list">
                      <div className="list__title">
                        <h2>list Title</h2>
                        <div className="list__content">
                          <div className="card">
                            <div className="card__title">card title</div>
                            <div className="card__content">
                              <div className="card__date">
                                jun 25
                              </div>
                              <div className="card__members">
                                Members
                              </div>
                            </div>
                          </div>

                          <div className="card">
                            <div className="card__title">card title</div>
                            <div className="card__content">
                              <div className="card__date">
                                jun 25
                              </div>
                              <div className="card__members">
                                Members
                              </div>
                            </div>
                          </div>

                          <div className="card">
                            <div className="card__title">card title</div>
                            <div className="card__content">
                              <div className="card__date">
                                jun 25
                              </div>
                              <div className="card__members">
                                Members
                              </div>
                            </div>
                          </div>

                          <div className="card">
                            <div className="card__title">card title</div>
                            <div className="card__content">
                              <div className="card__date">
                                jun 25
                              </div>
                              <div className="card__members">
                                Members
                              </div>
                            </div>
                          </div>

                          <div className="card">
                            <div className="card__title">card title</div>
                            <div className="card__content">
                              <div className="card__date">
                                jun 25
                              </div>
                              <div className="card__members">
                                Members
                              </div>
                            </div>
                          </div>


                        </div>
                        <div className="list__add">
                          <form className="">
                            <div className="input-group">
                              <input type="text" className="form-control" placeholder="" />
                              <span className="input-group-btn">
                                <button className="btn btn-default form-control" type="button">Add</button>
                              </span>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

                    <div className="list">
                      <div className="list__title">
                        <h2>list Title</h2>
                        <div className="list__content">
                          <div className="card">
                            <div className="card__title">card title</div>
                            <div className="card__content">
                              <div className="card__date">
                                jun 25
                              </div>
                              <div className="card__members">
                                Members
                              </div>
                            </div>
                          </div>

                          <div className="card">
                            <div className="card__title">card title</div>
                            <div className="card__content">
                              <div className="card__date">
                                jun 25
                              </div>
                              <div className="card__members">
                                Members
                              </div>
                            </div>
                          </div>

                          <div className="card">
                            <div className="card__title">card title</div>
                            <div className="card__content">
                              <div className="card__date">
                                jun 25
                              </div>
                              <div className="card__members">
                                Members
                              </div>
                            </div>
                          </div>


                        </div>
                        <div className="list__add">
                          <form className="">
                            <div className="input-group">
                              <input type="text" className="form-control" placeholder="" />
                              <span className="input-group-btn">
                                <button className="btn btn-default form-control" type="button">Add</button>
                              </span>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

                    <div className="list">
                      <div className="list__title">
                        <h2>list Title</h2>
                        <div className="list__content">
                          <div className="card">
                            <div className="card__title">card title</div>
                            <div className="card__content">
                              <div className="card__date">
                                jun 25
                              </div>
                              <div className="card__members">
                                Members
                              </div>
                            </div>
                          </div>

                          <div className="card">
                            <div className="card__title">card title</div>
                            <div className="card__content">
                              <div className="card__date">
                                jun 25
                              </div>
                              <div className="card__members">
                                Members
                              </div>
                            </div>
                          </div>

                          <div className="card">
                            <div className="card__title">card title</div>
                            <div className="card__content">
                              <div className="card__date">
                                jun 25
                              </div>
                              <div className="card__members">
                                Members
                              </div>
                            </div>
                          </div>


                        </div>
                        <div className="list__add">
                          <form className="">
                            <div className="input-group">
                              <input type="text" className="form-control" placeholder="" />
                              <span className="input-group-btn">
                                <button className="btn btn-default form-control" type="button">Add</button>
                              </span>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

                    <div className="list">
                      <div className="list__title">
                        <h2>list Title</h2>
                        <div className="list__content">
                          <div className="card">
                            <div className="card__title">card title</div>
                            <div className="card__content">
                              <div className="card__date">
                                jun 25
                              </div>
                              <div className="card__members">
                                Members
                              </div>
                            </div>
                          </div>

                          <div className="card">
                            <div className="card__title">card title</div>
                            <div className="card__content">
                              <div className="card__date">
                                jun 25
                              </div>
                              <div className="card__members">
                                Members
                              </div>
                            </div>
                          </div>

                          <div className="card">
                            <div className="card__title">card title</div>
                            <div className="card__content">
                              <div className="card__date">
                                jun 25
                              </div>
                              <div className="card__members">
                                Members
                              </div>
                            </div>
                          </div>


                        </div>
                        <div className="list__add">
                          <form className="">
                            <div className="input-group">
                              <input type="text" className="form-control" placeholder="" />
                              <span className="input-group-btn">
                                <button className="btn btn-default form-control" type="button">Add</button>
                              </span>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

                    <div className="list">
                      <div className="list__title">
                        <h2>list Title</h2>
                        <div className="list__content">
                          <div className="card">
                            <div className="card__title">card title</div>
                            <div className="card__content">
                              <div className="card__date">
                                jun 25
                              </div>
                              <div className="card__members">
                                Members
                              </div>
                            </div>
                          </div>

                          <div className="card">
                            <div className="card__title">card title</div>
                            <div className="card__content">
                              <div className="card__date">
                                jun 25
                              </div>
                              <div className="card__members">
                                Members
                              </div>
                            </div>
                          </div>

                          <div className="card">
                            <div className="card__title">card title</div>
                            <div className="card__content">
                              <div className="card__date">
                                jun 25
                              </div>
                              <div className="card__members">
                                Members
                              </div>
                            </div>
                          </div>


                        </div>
                        <div className="list__add">
                          <form className="">
                            <div className="input-group">
                              <input type="text" className="form-control" placeholder="" />
                              <span className="input-group-btn">
                                <button className="btn btn-default form-control" type="button">Add</button>
                              </span>
                            </div>
                          </form>
                        </div>
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
  </Provider>
);

render(<App />, document.getElementById('root'));
