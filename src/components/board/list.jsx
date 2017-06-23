import React from 'react';
import { render } from 'react-dom';
import './list.scss'
import Card from './card.jsx';
import addSvg from './img/add-Icon.svg';

import { addCard } from '../../actions/cardActions.js';
import { connect } from 'react-redux';

const renderItems = (items, userI) => {
    return items.map((item, index) => {
        return <Card key={index} userI={userI} id={item._id} fecha={item.fecha} title={item.name} />
    })
}

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
        this.onAddCard = this.onAddCard.bind(this);
        this.onChange = this.onChange.bind(this);

    }
    onChange(e) { this.setState({ [e.target.name]: e.target.value }) }

    onAddCard() {
        const { addCard, id } = this.props;
        if (this.state.name) {
            addCard(this.state.name, id)
            this.setState({ name: '' });
        }
    }
    render() {
        const { cards, title } = this.props;
        const { onAddCard, onChange } = this;
        const { name } = this.state;
        const userI = this.props.user.name.substring(0,1);
        return (
            <div className="list">
                <div className="list__title">
                    <h2>{title}</h2>
                    <div className="list__content">
                        {renderItems(cards, userI)}
                    </div>
                    <div className="card__add">
                        <form className="">
                            <div className="input-group">
                                <input type="text" value={name} name="name" className="form-control" placeholder="Add new Card" onChange={onChange} />
                                <span className="input-group-btn">
                                    <button className="btn btn-default form-control icon-color" type="button" onClick={onAddCard} >
                                        <img src={addSvg} alt="" className="" />
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.user.user,
    };
}

export default connect(mapStateToProps, { addCard })(List);