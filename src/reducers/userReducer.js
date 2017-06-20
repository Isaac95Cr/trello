import { LOGIN , LOGOUT, SIGNIN} from '../actions/userActions.js';

const initialState = {
    loggedIn: false,
    shouldRedirect: false,
    errorMessage: null
}

const userReducer = (state = initialState, action) => {

    switch(action.type){
        case LOGIN:
        return state;
        
        case LOGOUT:
        return state;
        
        case SIGNIN:
        
        return state;

        default:
        return state
    }
}


export default userReducer;