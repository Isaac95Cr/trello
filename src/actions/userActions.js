import axios from 'axios';
import jwt from 'jsonwebtoken';
import setHeader from '../utils/setHeaders.js';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const LOGOUT = 'LOGOUT'
export const SIGNIN = 'SIGNIN'
export const ERROR = 'ERROR'
export const REAUTH = 'REAUTH'
export const USERBOARDS = 'USERBOARDS'

const apiurl = "http://localhost:3000/"
const appurl = "http://localhost:8080/"

export function signin(email, password) {

    return function (dispatch) {
        return axios.post(`${apiurl}api/signin`, { email, password })
            .then(response => {
                cookies.set('token', response.data.token, { path: '/' });
                setHeader(response.data.token);
                dispatch(setSignin(response.data));
                return response;
            })
            .catch(err => {
                dispatch(setError(err.response.data));
                return err.response.data;
            });

    }
}

export function updateUserBoards(userId,boardId) {

    return function (dispatch) {
        return axios.post(`${apiurl}api/user/boards/${userId}`, { board: boardId })
            .then(response => {
                //reautenticate
               /* cookies.set('token', response.data.token, { path: '/' });
                setHeader(response.data.token);
                dispatch(setSignin(response.data));*/
                return response;
            })
            .catch(err => {
                dispatch(setError(err.response.data));
                return err.response.data;
            });

    }
}

export function setSignin(data) {
    return { type: SIGNIN, payload: data };
}

export function setError(data) {
    return { type: ERROR, payload: data };
}

export function setBoards(data) {
    return { type: USERBOARDS, payload: data };
}


export function logout() {
    return function (dispatch) {
        dispatch({ type: LOGOUT });
        cookies.remove('token', { path: '/' });
    }
}

export function reauth() {
    return function (dispatch) {
        axios.get(`${apiurl}api/authenticate`,
            {
                headers: { 'Authorization': cookies.get('token') }
            })
            .then(response => {
                dispatch({
                    type: REAUTH,
                    payload: response.data
                });
            })
            .catch((error) => {
                dispatch({ type: ERROR, payload: err.response.data.message });
            });
    }
}

export function signup(name, email, password) {
    return function (dispatch) {
        return axios.post(`${apiurl}api/signup`, { name, email, password })
    }
}
