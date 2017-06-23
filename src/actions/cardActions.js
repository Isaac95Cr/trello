import axios from 'axios';
import moment from 'moment';
import jwt from 'jsonwebtoken';

export const SETCARDS = 'SETCARDS'
export const ADDCARD = 'ADDCARD'
export const DELCARD = 'DELCARD'
export const ERROR = 'ERROR'

const apiurl = "http://localhost:3000/"
const appurl = "http://localhost:8080/"

export function getCards(listIds) {
    return function (dispatch) {
        return axios.post(`${apiurl}api/cards/lists`, { ids: listIds })
            .then(response => {
                dispatch(setCards(response.data));
                return response;
            })
            .catch(err => {
                return err.response.data;
            });
    }
}
export function addCard(name, listId) {
    return function (dispatch) {
        const fecha = moment().format('MMMM Do');
        return axios.post(`${apiurl}api/cards/`, { name, listId, fecha })
            .then(response => {
                dispatch(setnewCard(response.data));
                return response.data;
            })
            .catch(err => {
                console.log(err);
                return err;
            });
    }
}

export function setCards(data) {
    return { type: SETCARDS, payload: data };
}

export function setnewCard(data) {
    return { type: ADDCARD, payload: data };
}

export function delCard(data) {
    return { type: DELCARD, payload: data };
}
export function setError(data) {
    return { type: ERROR, payload: data };
}