import React from 'react';
import { render } from 'react-dom';
import './list.scss'
import Card from './card.jsx';


const List = (props) => {
    return (
        <div className="list">
            <div className="list__title">
                <h2>{props.title}</h2>
                <div className="list__content">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="card__add">
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
    )
}

export default List;