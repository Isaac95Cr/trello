import React from 'react';
import { render } from 'react-dom';
import './card.scss'

const Card = (props) => (

    <div className="card">
        <div className="card__title"><p>{props.title}</p></div>
        <div className="card__content">
            <div className="card__date">
                {props.fecha}
            </div>
            <div className="card__members">
                <p>{props.userI}</p>
            </div>
        </div>
    </div>

)

export default Card;