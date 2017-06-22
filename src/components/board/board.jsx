import React from 'react';
import { render } from 'react-dom';
import './board.scss'
import List from './list.jsx';
import addSvg from './img/add-Icon.svg';


const renderItems = (items) => {
    return items.map((item, index) => {
        return <List key={index} id={item._id} title={item.name} />
    })
}

const Board = (props) => (

    <div className="board">
        <div className="row">
            <div className="col-md-12">
                <div className="board__header">
                    <div className="board__title">
                        <h2>{props.board.name}</h2>
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
                    {renderItems(props.list)}
                    <div className="list__add">
                        <div className="list__add__title">
                            <h2></h2>
                            <div className="list__add__content">
                                <div className="input-group">
                                    <input type="text" name="listName" className="form-control" placeholder="Add new List" value={props.listName} onChange={props.onChange}/>
                                    <span className="input-group-btn">
                                        <button className="btn btn-default form-control icon-color" type="button" onClick={props.onAdd} >
                                            <img src={addSvg} alt="" className="" />
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

)

export default Board;