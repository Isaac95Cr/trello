import { DELBOARD, ADDBOARD, SETBOARDS, SETCURRENTBOARD, ERROR } from '../actions/boardActions';

const initialState = {
    boards: [],
    currentBoard: {},
    error: ''
}

const boardReducer = (state = initialState, action) => {

    switch (action.type) {
        case SETBOARDS:
            return { ...state, boards: action.payload, error: '' };

        case ADDBOARD:
            return { ...state, error: '', boards: [...state.boards, action.payload] };

        case DELBOARD:
            return { ...state, error: '', authenticated: true };

        case ERROR:
            return { ...state, error: action.payload, boards: [], currentBoard: [] }

        case SETCURRENTBOARD:
            return { ...state, currentBoard: action.payload }
        default:
            return state
    }
}


export default boardReducer;