import React from 'react';
import { render } from 'react-dom';
import './boardList.scss';
import BoardItem from './boardItem.jsx';
import addSvg from './img/add-Icon.svg';
import Dragula from 'react-dragula';

const renderItems = (items) => {
    return items.map((item, index) => {
        return <BoardItem key={index} id={item._id} title={item.name} />
    })
}
const dragulaDecorator = (componentBackingInstance)=> {
    if (componentBackingInstance) {
      let options = { };
      Dragula([componentBackingInstance], options);
    }
  };
const BoardList = (props) => {
    const { onAdd, onChange, name} = props;
    
    return (
        <div className="boards__list">
            <div className="row">
                <div className="col-md-12">
                    <div className="boards__list__header">
                        <div className="boards__list__title">
                            <h2>Personal Boards</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="boards__list__content">
                        <div className="row" ref={dragulaDecorator}>
                            {renderItems(props.boards)}
                            <div className="col-md-3 col-sm-6">
                                <div className="board__add__item">
                                    <div className="board__add__item__title">
                                        <h2></h2>
                                        <div className="board__add__item__content">
                                            <div className="input-group">
                                                <input type="text" name="name" className="form-control" placeholder="Add new Board" onChange={onChange} value={name}/>
                                                <span className="input-group-btn">
                                                    <button className="btn btn-default form-control icon-color" type="button" onClick={onAdd}>
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
            </div>
        </div>


    )
    
}

export default BoardList;