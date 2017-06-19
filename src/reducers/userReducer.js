import { LOGIN , LOGOUT, SIGNIN} from '../actions/userActions.js';

const initialState = {
}

const userReducer = (state = initialState, action) => {

    switch(action.type){
        case LOGIN:
        console.log("login");
        
        case LOGOUT:
        console.log("logout");
        
        case SIGNIN:
        console.log("signin");

        default:
        return state
    }
}


export default userReducer;