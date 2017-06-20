import axios from 'axios';
import Cookies from 'universal-cookie';  
const cookies = new Cookies();

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const SIGNIN = 'SIGNIN'
const apiurl = "http://localhost:3000/"
const appurl = "http://localhost:8080/"

export function signin(email, password) {

    return function (dispatch) {
        axios.post(`${apiurl}api/signin`, { email, password }).then(response => {
            dispatch({ type: SIGNIN, payload: response.data });
            cookies.set('token', response.data.token, { path: '/' });
            window.location.href = `${appurl}home`;
        }).catch(err => {
            dispatch({ type: "Error", payload: err });
        });
    }
}
export function logout() {
    return function (dispatch) {
        dispatch({ type: LOGOUT });
        cookies.remove('token', { path: '/' });
        window.location.href =  `${appurl}login`;
    }
}

export function protectedTest() {
    return function (dispatch) {
        axios.get(`${apiurl}api/authenticate`, 
        {
            headers: { 'Authorization': cookies.get('token') }
        })
            .then(response => {
                dispatch({
                    type: PROTECTED_TEST,
                    payload: response.data.content
                });
            })
            .catch((error) => {
                errorHandler(dispatch, error.response, AUTH_ERROR)
            });
    }
}

export function signup(name, email, password) {
    return function (dispatch) {
        axios.post(`${apiurl}api/signup`, { name, email, password }).then(response => {
            dispatch({ type: SIGNIN, payload: response.data });
            cookies.set('token', response.data.token, { path: '/' });
            window.location.href = `${appurl}home`;
        }).catch(err => {
            dispatch({ type: "Error", payload: err });
        });
    }
}
