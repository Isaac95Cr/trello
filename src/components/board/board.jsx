import React from 'react';
import { render } from 'react-dom';
import './board.scss';
import logo from './img/Trello-logo.svg'
import boardsvg from './img/board-Icon.svg';
import add from './img/add-Icon.svg';
import important from './img/important-Icon.svg';
import bell from './img/bell-Icon.svg';
import search from './img/searchIcon.svg';

import Header from '../header/header.jsx';
import Card from './card.jsx';


const board = () => (
  <div className="container-fluid">
    <Header />
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
                        <Card />
                        <Card />
                        <Card />
                        <Card />


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
);
export default board;