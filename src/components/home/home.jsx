import React from 'react';
import { render } from 'react-dom';
import './home.scss';
import { Link } from 'react-router-dom'

import add from './img/add-Icon.svg';

import Header from '../header/header.jsx';
import BoardList from './boardList.jsx';

import { connect } from 'react-redux';

let home = (props) => (

  <div className="container-fluid">
    <Header />
    <main>
      <div className="row">
        <div className="col-md-12">
          <BoardList/>
        </div>
      </div>
    </main>
  </div>
);

function mapStateToProps(state) {
  return { authenticated: state.user.user };
}

home = connect(mapStateToProps)(home);

export default home;
