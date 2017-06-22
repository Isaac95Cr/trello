import React from 'react';
import { render } from 'react-dom';
import './home.scss';
import { Link } from 'react-router-dom'

import add from './img/add-Icon.svg';

import Header from '../header/header.jsx';
import BoardList from './boardList.jsx';

import { updateUserBoards } from '../../actions/userActions.js';
import { addBoard, getBoards, setError } from '../../actions/boardActions.js';
import { connect } from 'react-redux';
import axios from 'axios'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onAddBoard = this.onAddBoard.bind(this);
  }

  onChange(e) { this.setState({ [e.target.name]: e.target.value }) }
  onAddBoard() {
    const { user, getBoards } = this.props;
    const { addBoard, updateUserBoards } = this.props;

    addBoard(this.state.name)
      .then(response => {
        updateUserBoards(user._id,response._id)
          .then(response => console.log(response));
        this.setState({ name: '' });
      })
  }
  componentDidMount() {
    const { user, getBoards } = this.props;
    getBoards(user._id);
  }
  render() {
    const { name } = this.state;
    const { onChange, onAddBoard } = this;
    const { user, boards } = this.props;
    return (
      <div className="container-fluid">
        <Header user={user} />
        <main>
          <div className="row">
            <div className="col-md-12">
              <BoardList name={name} boards={boards} onAdd={onAddBoard} onChange={onChange} />
            </div>
          </div>
        </main>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    user: state.user.user,
    boards: state.board.boards
  };
}

export default connect(mapStateToProps, { addBoard, getBoards, setError, updateUserBoards })(Home);


