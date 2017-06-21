import React from 'react';
import { render } from 'react-dom';
import './boardItem.scss'

const BoardItem = (props) => (

    <div className="col-md-3 col-sm-6">
        <div className="board__item">
            <div className="board__item__title">
                <h2>Board Title</h2>
                <div className="board__item__content">

                </div>
            </div>
        </div>
    </div>

)

export default BoardItem;