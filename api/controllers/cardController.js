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


const Cards = {
    getAll,
};

module.exports = Cards;