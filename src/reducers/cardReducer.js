import { ADDCARD, DELCARD, SETCARDS, ERROR } from '../actions/cardActions.js';

const initialState = {
    cards: [],
    cardsIds: [],
    error: ''
}

const boardReducer = (state = initialState, action) => {

    switch (action.type) {
        case SETCARDS:
            return { ...state, cards: action.payload, error: '' };

        case ADDCARD:
            return { ...state, error: '', cards: [...state.cards, action.payload] };

        case DELCARD:
            return { ...state, error: '' };

        case ERROR:
            return { ...state, error: action.payload, cards: [] }

        default:
            return state
    }
}


export default boardReducer;