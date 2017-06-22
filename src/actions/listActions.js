import axios from 'axios';
import jwt from 'jsonwebtoken';
import { setBoards as userSetBoards ,updateUserBoards } from './userActions.js';

export const SETLIST = 'SETLIST'
export const ADDLIST = 'ADDLIST'
export const DELLIST = 'DELLIST'
export const ERROR = 'ERROR'

const apiurl = "http://localhost:3000/"
const appurl = "http://localhost:8080/"

export function getLists(id) {

    return function (dispatch) {
        return axios.get(`${apiurl}api/lists/${id}`)
            .then(response => {
                dispatch(setList(response.data));
                return response;
            })
            .catch(err => {
                return err.response.data;
            });

    }
}
export function addList(name,boardId) {
    return function (dispatch) {
        return axios.post(`${apiurl}api/lists/`, { name ,boardId})
            .then(response => { 
                dispatch(setnewList(response.data));
                return response.data;
            })
            .catch(err => {
                return err;
            });
    }
}

export function setList(data) {
    return { type: SETLIST, payload: data };
}

export function setnewList(data) {
    return { type: ADDLIST, payload: data };
}

export function delList(data) {
    return { type: DELLIST, payload: data };
}
export function setError(data) {
    return { type: ERROR, payload: data };
}