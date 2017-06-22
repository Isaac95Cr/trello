import React from 'react';
import { render } from 'react-dom';
import './boardItem.scss'
import { Link } from 'react-router-dom';


const BoardItem = (props) => (
    <Link to={`/board?id=${props.id}`} className="">
        <div className="col-md-3 col-sm-6">
            <div className="board__item">
                <div className="board__item__title">
                    <h2>{props.title}</h2>
                    <div className="board__item__content">
                    </div>
                </div>
            </div>
        </div>
    </Link>
)

export default BoardItem;