import React from 'react';
import { render } from 'react-dom';
import './boardList.scss';
import BoardItem from './boardItem.jsx';

const BoardList = (props) => (

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

                    <div className="row">
                        <BoardItem />
                        <BoardItem />
                        <BoardItem />
                        <BoardItem />
                    </div>
                </div>
            </div>
        </div>
    </div>

)

export default BoardList;