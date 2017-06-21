import React from 'react';
import { render } from 'react-dom';
import './card.scss'

const Card = (props) => (

    <div className="card">
        <div className="card__title">card title</div>
        <div className="card__content">
            <div className="card__date">
                jun 25
            </div>
            <div className="card__members">
                Members
            </div>
        </div>
    </div>

)

export default Card;