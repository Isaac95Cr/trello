import { combineReducers } from 'redux';
import userReducer from './userReducer';
import boardReducer from './boardReducer';
import listReducer from './listReducer';



export default combineReducers({user:userReducer,board:boardReducer, lists:listReducer });