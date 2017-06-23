import React from 'react';
import { render } from 'react-dom';
import './header.scss'

import logoSvg from './img/Trello-logo.svg'
import boardSvg from './img/board-Icon.svg';
import addSvg from './img/add-Icon.svg';
import importantSvg from './img/important-Icon.svg';
import bellSvg from './img/bell-Icon.svg';
import searchSvg from './img/searchIcon.svg';
import { logout } from '../../actions/userActions.js';
import { connect } from 'react-redux';

const Header = (props) => {
    const { user, onAdd, title, dispatch} = props;
    return (
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
                            <img src={logoSvg} alt="" className="" />
                        </div>
                    </div>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-left">
                            <li>
                                <a>
                                    <img src={boardSvg} alt="" className="" /><b>{title}</b>
                                </a>
                            </li>
                        </ul>
                        <form className="navbar-form navbar-left">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search for..." />
                                <span className="input-group-btn">
                                    <button className="btn btn-default form-control icon-color" type="button">
                                        <img src={searchSvg} alt="" className="" />
                                    </button>
                                </span>
                            </div>
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a>
                                    <img src={addSvg} alt="" className="" />
                                </a>
                                <a>
                                    <img src={importantSvg} alt="" className="" />
                                </a>
                                <a>
                                    <img src={bellSvg} alt="" className="" />
                                </a>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    {user.name} <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="" onClick={e =>
                                        dispatch(logout())
                                    }>
                                        Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>

    )
}

export default connect()(Header);