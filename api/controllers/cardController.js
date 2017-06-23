const mongoose = require('mongoose');
const Card = mongoose.model('Card');
const md5 = require('crypto-js/md5');
const jwt = require('jsonwebtoken');
const { sendErrorResponse, sendJsonResponse, saveModel } = require('../apiUtils');


const getAll = (req, res) => {
    Card.find().exec()
    .then(data => sendJsonResponse(res, data, '200'))
    .catch(err => sendErrorResponse(res, err, '500'));
};

const add = (req,res) => {
    const card = new Card(req.body);
    card.save()
    .then(data => sendJsonResponse(res, data, '200'))
    .catch(err => sendErrorResponse(res, err, '500'));
}

const update = (req,res) =>{
    const { params, body } = req;
    Card.findById(params.id).exec()
    .then(data => Object.assign(data, body)
        .save()
        .then(data => sendJsonResponse(res, data, '200'))
        .catch(err => sendErrorResponse(res, err, '500'))
    )
    .catch(err => sendErrorResponse(res, err, '500')); 
}

const del = (req,res)=>{
    const { params, body } = req;
    Card.findById(params.id).exec()
    .then(data => data.remove()
        .then(data => sendJsonResponse(res, data, '200'))
        .catch(err => sendErrorResponse(res, err, '500'))
    ).catch(err => sendErrorResponse(res, err, '500'));   
};

const getFromLists = (req, res) => {
    const { params, body } = req;
    const array = body.ids;
    Card.find({'listId': {$in:array}}).exec()
        .then(data => sendJsonResponse(res, data, '200'))
        .catch(err => sendErrorResponse(res, err, '500'))
};


const Cards = {
    getAll,
    add,
    update,
    del,
    getFromLists
};

module.exports = Cards;