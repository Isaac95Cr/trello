import axios from 'axios';
import Cookies from 'universal-cookie';  
const cookies = new Cookies();

export const LOGOUT = 'LOGOUT'
export const SIGNIN = 'SIGNIN'
export const ERROR = 'ERROR'
export const REAUTH = 'REAUTH'

const apiurl = "http://localhost:3000/"
const appurl = "http://localhost:8080/"

export function signin(email, password) {

    return function (dispatch) {
        return axios.post(`${apiurl}api/signin`, { email, password })
    }
}

export function setSignin(data){
    return { type: SIGNIN, payload: data };
}

export function setError(data){
    return { type: ERROR, payload: data };
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
        /*.then(response => {
            dispatch({ type: SIGNIN, payload: response.data });
            cookies.set('token', response.data.token, { path: '/' });
            window.location.href = `${appurl}home`;
        }).catch(err => {
            dispatch({ type: "Error", payload: err });
        });*/
    }
}
