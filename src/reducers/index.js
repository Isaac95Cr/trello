import { combineReducers } from 'redux';
import userReducer from './userReducer';
import boardReducer from './boardReducer';
import listReducer from './listReducer';
import cardReducer from './cardReducer';



export default combineReducers({ user: userReducer, board: boardReducer, lists: listReducer, cards: cardReducer });