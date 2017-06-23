import { SETLIST, ADDLIST, DELLIST, ERROR ,SETLISTSIDS} from '../actions/listActions';

const initialState = {
    lists: [],
    listsIds:[],
    error: ''
}

const boardReducer = (state = initialState, action) => {

    switch (action.type) {
        case SETLIST:
            return { ...state, lists: action.payload, error: '' };
        
        case SETLISTSIDS:
            return { ...state, listsIds:  state.lists.map(x=>x._id), error: '' };

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