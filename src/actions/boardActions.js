import axios from 'axios';
import jwt from 'jsonwebtoken';
import { setBoards as userSetBoards, updateUserBoards } from './userActions.js';


export const SETBOARDS = 'SETBOARDS'
export const ADDBOARD = 'ADDBOARD'
export const DELBOARD = 'DELBOARD'
export const ERROR = 'ERROR'
export const SETCURRENTBOARD = 'SETCURRENTBOARD'

const apiurl = "http://localhost:3000/"
const appurl = "http://localhost:8080/"

export function getBoards(id) {

    return function (dispatch) {
        return axios.get(`${apiurl}api/user/boards/${id}`)
            .then(response => {
                dispatch(setBoards(response.data));
                return response;
            })
            .catch(err => {
                return err.response.data;
            });

    }
}
export function getBoard(id) {

    return function (dispatch) {
        return axios.get(`${apiurl}api/boards/${id}`)
            .then(response => {
                dispatch(setCurrentBoard(response.data));
                return response;
            })
            .catch(err => {
                return err.response.data;
            });

    }
}

export function addBoard(name) {
    return function (dispatch) {
        return axios.post(`${apiurl}api/boards`, { name })
            .then(response => {
                dispatch(setnewBoard(response.data));
                dispatch(userSetBoards(response.data._id));
                return response.data;
            })
            .catch(err => {
                dispatch(setError(err.response.data));
                return err;
            });
    }
}

export function setBoards(data) {
    return { type: SETBOARDS, payload: data };
}

export function setCurrentBoard(data) {
    return { type: SETCURRENTBOARD, payload: data };
}

export function setnewBoard(data) {
    return { type: ADDBOARD, payload: data };
}

export function delBoard(data) {
    return { type: DELBOARD, payload: data };
}
export function setError(data) {
    return { type: ERROR, payload: data };
}