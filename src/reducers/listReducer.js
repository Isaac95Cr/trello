import { SETLIST, ADDLIST, DELLIST, ERROR } from '../actions/listActions';

const initialState = {
    lists: [],
    error: ''
}

const boardReducer = (state = initialState, action) => {

    switch (action.type) {
        case SETLIST:
            return { ...state, lists: action.payload, error: '' };

        case ADDLIST:
            return { ...state, error: '', lists: [...state.lists, action.payload] };

        case DELLIST:
            return { ...state, error: '', authenticated: true };

        case ERROR:
            return { ...state, error: action.payload, lists: [] }

        default:
            return state
    }
}


export default boardReducer;