const mongoose = require('mongoose');
const List = mongoose.model('List');
const md5 = require('crypto-js/md5');
const jwt = require('jsonwebtoken');
const { sendErrorResponse, sendJsonResponse, saveModel } = require('../apiUtils');


const getAll = (req, res) => {
    List.find().exec()
    .then(data => sendJsonResponse(res, data, '200'))
    .catch(err => sendErrorResponse(res, err, '500'));
};


const Lists = {
    getAll,
};

module.exports = Lists;